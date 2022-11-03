import PropTypes from 'prop-types';
import css from '../styles.module.css';
export const Button = ({ loadMore }) => {
  return (
    <div className={css.Button_div}>
      <button className={css.Button} type="button" onClick={loadMore}>
        Load More
      </button>
    </div>
  );
};

Button.protoType = {
  loadMore: PropTypes.func,
};
