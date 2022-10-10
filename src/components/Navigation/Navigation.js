import { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IsLoggedContext } from '../../contexts/IsLoggedContext';
import './Navigation.css';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import {
  BREAKPOINT_TABLET
} from '../../utils/config'

function Navigation() {
  const isLogged = useContext(IsLoggedContext);
  const [isMobile, setIsMobile] = useState(false);
  function checkIsMobile() {
    if (window.innerWidth < 900) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  useEffect(() => {
    if (window.innerWidth < BREAKPOINT_TABLET) {
      setIsMobile(true);
    }
    window.addEventListener('resize', checkIsMobile)
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, [isMobile])

  return (
    !isLogged
    ? <nav className='navigation'>
        <Link className='navigation__link navigation__link_signup' to="/signup">Регистрация</Link>
        <Link className='navigation__link navigation__link_signin' to="signin">Войти</Link>
      </nav>
    : isMobile
    ? <BurgerMenu />
    : <nav className='navigation'>
        <NavLink activeClassName='navigation__link_active' className='navigation__link' to="/movies">Фильмы</NavLink>
        <NavLink activeClassName='navigation__link_active' className='navigation__link' to="/saved-movies">Сохранённые фильмы</NavLink>
        <Link className='navigation__link navigation__link_profile' to='/profile'>Аккаунт<div className='navigation__link-icon'></div></Link>
      </nav>
  )
}
export default Navigation;
