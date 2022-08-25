import './Header.css';
import Navigation from '../Navigation/Navigation';

function Header() {
  return (
    <header className='header'>
      <div className='header__container page__container'>
        <div className='header__logo page__logo' />
        <Navigation />
      </div>
    </header>
  )
}

export default Header;