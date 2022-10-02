import { NavLink, Link } from 'react-router-dom';
import './BurgerMenu.css';
import BurgerIcon from '../BurgerIcon/BurgerIcon';

function BurgerMenu() {
  function changeUnderlayerClass() {

    const underlayer = document.querySelector('.burger__underlayer');
    underlayer.classList.toggle('burger__underlayer_opened');
  }
  return (
    <div className='burger'>
      <div onClick={changeUnderlayerClass}><BurgerIcon /></div>
      <nav className='burger__underlayer'>
        <div className='burger__links'>
          <NavLink className='burger__link' activeClassName='burger__link_active' exact to='/'><span>Главная</span></NavLink>
          <NavLink className='burger__link' activeClassName='burger__link_active' to='./movies'><span>Фильмы</span></NavLink>
          <NavLink className='burger__link' activeClassName='burger__link_active' to='./saved-movies'><span>Сохранённые фильмы</span></NavLink>
        </div>
        <Link className='burger__profile-link' to='/profile'>Аккаунт<div className='burger__link-icon'></div></Link>
      </nav>
    </div>
  )
}

export default BurgerMenu;