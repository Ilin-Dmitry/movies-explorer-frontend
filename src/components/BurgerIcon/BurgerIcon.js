import './BurgerIcon.css';

function BurgerIcon () {

  function toggleBurgerClass() {
    const burger = document.querySelector('.burgericon');
    burger.classList.toggle('burgericon_open');
  }

  return (
    <div className='burgericon' onClick={toggleBurgerClass}>
      <div className='burgericon__line burgericon__line_1'></div>
      <div className='burgericon__line burgericon__line_2'></div>
      <div className='burgericon__line burgericon__line_3'></div>
    </div>
  )
}

export default BurgerIcon;