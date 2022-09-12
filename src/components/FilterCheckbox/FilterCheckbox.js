import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <div className='filtercheckbox'>
      <input className='filtercheckbox__input' type="checkbox" id="shortfilms" name="shortfilms" />
      <label className='filtercheckbox__label' htmlFor="shortfilms">Короткометражки</label>
    </div>
  )
}

export default FilterCheckbox;