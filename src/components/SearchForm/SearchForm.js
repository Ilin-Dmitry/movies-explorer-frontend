import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <form className='searchform'>
      <div className='searchform__container page__container'>
        <div className='searchform__wrapper'>
          <input className='searchform__input' placeholder="Фильм"></input>
          <button className='searchform__button'></button>
        </div>
        <FilterCheckbox />
      </div>
    </form>
  )
}

export default SearchForm;