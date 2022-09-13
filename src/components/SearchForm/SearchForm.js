import { useState } from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({onChange, movie, onSubmit}) {
  const [ btnClicked, setBtnClicked ] = useState(false);

  function handleSearchForm(e) {
    onChange(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit();
    setBtnClicked(false);
  }

  function handleBtnClicked() {
    setBtnClicked(true);
  }

  return (
    <form className='searchform' onSubmit={handleSubmit}>
      <div className='searchform__container page__container'>
        <div className='searchform__wrapper'>
          <input className='searchform__input' placeholder="Фильм" value={movie} onChange={handleSearchForm} required></input>
          <button className='searchform__button' type='submit' onClick={handleBtnClicked}></button>
        </div>
        {movie === '' && btnClicked && <p style={{'color': 'red'}}>Нужно ввести ключевое слово</p>}
        <FilterCheckbox />
      </div>
    </form>
  )
}

export default SearchForm;