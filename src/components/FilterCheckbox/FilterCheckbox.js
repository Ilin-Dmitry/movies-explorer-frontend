import './FilterCheckbox.css';

function FilterCheckbox({onClick, origin}) {
  // -------------------------------------------------- //
  // Раскомментировать для сохранения данных последнего поиска на странице «Сохранённые фильмы»
  // -------------------------------------------------- //
  const checkInStorage = origin === 'saved' ? localStorage.shortFilmCheckSaved : localStorage.shortFilmCheck;
  // const checkInStorage = localStorage.shortFilmCheck;
  function handleClick() {
    onClick()
  }

  return (
    <div className='filtercheckbox'>
      <input className='filtercheckbox__input' type="checkbox" id="shortfilms" name="shortfilms" onClick={handleClick}  value="marked" defaultChecked={checkInStorage ? JSON.parse(checkInStorage) : false}/>
      <label className='filtercheckbox__label' htmlFor="shortfilms">Короткометражки</label>
    </div>
  )
}

export default FilterCheckbox;
