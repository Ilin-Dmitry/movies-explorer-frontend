import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IsLoggedContext } from '../../contexts/IsLoggedContext';
import './Navigation.css';

function Navigation() {
  const isLogged = useContext(IsLoggedContext);
  return (
    isLogged
    ? <nav className='navigation'>
        <NavLink activeClassName='navigation__link_active' className='navigation__link' to="/movies">Фильмы</NavLink>
        <NavLink activeClassName='navigation__link_active' className='navigation__link' to="/saved-movies">Сохранённые фильмы</NavLink>
        <Link className='navigation__link navigation__link_profile' to='/profile'>Аккаунт<div className='navigation__link-icon'></div></Link>
      </nav>
    : <nav className='navigation'>
        <Link className='navigation__link navigation__link_signup' to="/signup">Регистрация</Link>
        <Link className='navigation__link navigation__link_signin' to="signin">Войти</Link>
      </nav>
  )

}
export default Navigation;
