import './FilterCheckbox.css';

function FilterCheckbox() {
  // console.log('bebebe =>', localStorage);
  // console.log('bebebe!! =>', JSON.parse(localStorage.shortFilmCheck));
  const checkInStorage = localStorage.shortFilmCheck;

  return (
    <div className='filtercheckbox'>
      <input className='filtercheckbox__input' type="checkbox" id="shortfilms" name="shortfilms"  value="marked" defaultChecked={checkInStorage ? JSON.parse(checkInStorage) : false}/>
      <label className='filtercheckbox__label' htmlFor="shortfilms">Короткометражки</label>
    </div>
  )

  // return (
  //   <div className='filtercheckbox'>
  //     <input className='filtercheckbox__input' type="checkbox" id="shortfilms" name="shortfilms"  value="marked" defaultChecked={false}/>
  //     <label className='filtercheckbox__label' htmlFor="shortfilms">Короткометражки</label>
  //   </div>
  // )
}

export default FilterCheckbox;

//defaultChecked={JSON.parse(localStorage.checked) ? true : false}