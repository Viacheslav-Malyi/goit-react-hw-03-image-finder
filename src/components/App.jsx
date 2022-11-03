import { Component } from 'react';
import { fetchImage } from '../components/API/API';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';
import { Toast, Notification } from './Notification/Notofication';

export class App extends Component {
  state = {
    images: [],
    page: 1,
    searchQuery: '',
    status: 'idle',
    showModal: false,
    modalImage: null,
    loadMore: true,
  };

  async componentDidUpdate(_, prevState) {
    const prevQuery = prevState.searchQuery;
    const newQuery = this.state.searchQuery;
    const prevPage = prevState.page;
    const newPage = this.state.page;

    if (prevQuery !== newQuery || prevPage !== newPage) {
      this.setState({ status: 'pending', loadMore: true });

      try {
        const result = await fetchImage(newQuery, newPage);

        if (!result.length) {
          throw new Error();
        }

        if (result.length < 12) {
          this.setState({ loadMore: false });
        }

        this.setState(prevState => ({
          images: [...prevState.images, ...result],
          status: 'resolved',
        }));
      } catch (err) {
        this.setState({ status: 'rejected' });
        Notification();
        console.log('1');
      }
    }
  }

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  ToglModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  FindModalImage = (id, tags, img) => {
    this.setState({ modalImage: { id: id, img: img, tags: tags } });
  };

  hendleFormSubmit = data => {
    this.setState({
      searchQuery: data,
      page: 1,
      images: [],
      status: 'idle',
    });
  };

  render() {
    const { images, loadMore, showModal, modalImage, status } = this.state;

    if (status === 'idle') {
      return <Searchbar onSubmit={this.hendleFormSubmit} />;
    }

    if (status === 'pending') {
      return (
        <>
          <Searchbar onSubmit={this.hendleFormSubmit} />
          <ImageGallery images={images} />
          <Loader />
        </>
      );
    }

    if (status === 'resolved') {
      return (
        <>
          <Searchbar onSubmit={this.hendleFormSubmit} />
          <ImageGallery
            images={images}
            modalImage={this.FindModalImage}
            toggleModal={this.ToglModal}
          />
          {showModal && (
            <Modal modalImage={modalImage} closeModal={this.ToglModal} />
          )}
          {loadMore && <Button loadMore={this.loadMore} />}
        </>
      );
    }

    if (status === 'rejected') {
      return (
        <>
          <Searchbar onSubmit={this.hendleFormSubmit} />
          <Toast />
        </>
      );
    }
  }
}
