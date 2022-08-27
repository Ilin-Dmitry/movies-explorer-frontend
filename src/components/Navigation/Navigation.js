import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <nav className='navigation'>
      <Link className='navigation__signup' to="/signup">Регистрация</Link>
      <Link className='navigation__signin' to="signin">Войти</Link>
    </nav>
  )
}

export default Navigation;