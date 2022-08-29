import { Link } from 'react-router-dom';
import './Header.css';
import Navigation from '../Navigation/Navigation';

function Header(props) {
  const { isMain } = props;

  return (
    <header className={`header ${isMain && 'header_module_main'}`}>
      <div className='header__container page__container'>
        <Link className='header__logo page__logo' to="/"/>
        <Navigation />
      </div>
    </header>
  )
}

export default Header;