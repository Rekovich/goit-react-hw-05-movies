import { useState } from 'react';
import { Notify } from 'notiflix';
import css from './search-bar.module.css';
import PropTypes from 'prop-types'

const Searchbar = ({onSubmit}) => {

const [search, setSearch] = useState('')


const handleChange = (e) => {
  setSearch( e.target.value.toLowerCase());
}

const handleSubmit = (e) => {
  e.preventDefault();


  if (search.trim() === '') {
    Notify.warning("Please write something before searching");
    return;
  }

  onSubmit(search);
  setSearch('' );
}

 
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={handleSubmit}>
          <button type="submit" className={css.SearchForm_button}>
            <span className={css.SearchForm_button_label}>Search</span>
          </button>

          <input
            className={css.SearchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={search}
            onChange={handleChange}
          />
        </form>
      </header>
    );
  }


Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default Searchbar;