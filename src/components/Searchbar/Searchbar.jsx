import PropTypes from 'prop-types';
import { Component } from 'react';
import css from '../styles.module.css';
import { ImSearch } from 'react-icons/im';
export class Searchbar extends Component {
  state = {
    inputParam: '',
  };

  hendleChange = event => {
    this.setState({ inputParam: event.currentTarget.value.toLowerCase() });
  };

  hendleSubmit = event => {
    event.preventDefault();
    if (this.state.inputParam.trim() === '') {
      return;
    }
    this.props.onSubmit(this.state.inputParam);
    this.setState({ inputParam: '' });
  };

  render() {
    return (
      <>
        <header className={css.Searchbar}>
          <form onSubmit={this.hendleSubmit} className={css.SearchForm}>
            <button type="submit" className={css.SearchForm_button}>
              <ImSearch />
              <span className={css.SearchForm_button_label}>Search</span>
            </button>
            <input
              onChange={this.hendleChange}
              className={css.SearchForm_input}
              type="text"
              value={this.state.inputParam}
              name="inputParam"
              placeholder="Search images and photos"
            />
          </form>
        </header>
      </>
    );
  }
}

Searchbar.propType = {
  onSubmit: PropTypes.func,
};
