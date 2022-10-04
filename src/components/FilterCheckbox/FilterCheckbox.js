import './FilterCheckbox.css';

function FilterCheckbox({onClick, origin}) {
  const checkInStorage = origin === 'saved' ? localStorage.shortFilmCheckSaved : localStorage.shortFilmCheck;
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
