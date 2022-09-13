import './FilterCheckbox.css';

function FilterCheckbox() {
  console.log('bebebe =>', localStorage.shortFilmCheck);

  return (
    <div className='filtercheckbox'>
      <input className='filtercheckbox__input' type="checkbox" id="shortfilms" name="shortfilms"  value="marked" defaultChecked={JSON.parse(localStorage.shortFilmCheck) ? true : false}/>
      <label className='filtercheckbox__label' htmlFor="shortfilms">Короткометражки</label>
    </div>
  )
}

export default FilterCheckbox;

//defaultChecked={JSON.parse(localStorage.checked) ? true : false}