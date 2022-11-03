import PropTypes from 'prop-types';
import React, { Component } from 'react';
import css from '../styles.module.css';
export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.hendleEscapeClick);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.hendleEscapeClick);
  }
  hendleEscapeClick = event => {
    if (event.code === 'Escape') {
      this.props.closeModal();
    }
  };

  hendleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.closeModal();
    }
  };

  render() {
    return (
      <div className={css.Overlay} onClick={this.hendleBackdropClick}>
        <div className={css.Modal}>
          <img
            id={this.props.modalImage.id}
            src={this.props.modalImage.img}
            alt={this.props.modalImage.tags}
          />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  modalImage: PropTypes.object,
  closeModal: PropTypes.func,
};
