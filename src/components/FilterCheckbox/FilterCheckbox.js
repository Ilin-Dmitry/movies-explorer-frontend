import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <>
      <input className='filtercheckbox__input' type="checkbox" id="shortfilms" name="shortfilms" />
      <label className='filtercheckbox__label' for="shortfilms">Короткометражки</label>
    </>
  )
}

export default FilterCheckbox;