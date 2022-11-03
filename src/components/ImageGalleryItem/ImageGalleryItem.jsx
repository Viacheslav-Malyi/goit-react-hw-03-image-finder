import PropTypes from 'prop-types';
import css from '../styles.module.css';
export const ImageGalleryItem = ({ imageData, modalImage, toggleModal }) => {
  return (
    <li className={css.ImageGalleryItem}>
      <img
        className={css.ImageGalleryItem_image}
        src={imageData.webformatURL}
        alt={imageData.tags}
        onClick={() => {
          modalImage();
          toggleModal();
        }}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  imageData: PropTypes.object,
  modalImage: PropTypes.func,
  toggleModal: PropTypes.func,
};
