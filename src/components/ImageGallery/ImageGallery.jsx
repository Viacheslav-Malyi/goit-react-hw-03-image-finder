import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from '../styles.module.css';

export const ImageGallery = ({ images, modalImage, toggleModal }) => {
  return (
    <ul className={css.ImageGallery}>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          imageData={image}
          toggleModal={() => toggleModal()}
          modalImage={() =>
            modalImage(image.id, image.tags, image.largeImageURL)
          }
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array,
  modalImage: PropTypes.func,
  toggleModal: PropTypes.func,
};
