import './NavTab.css';
import { Link } from 'react-scroll';

function NavTab() {
    return (
        <section className="navtab">
          <div className="page__container navtab__container">
            <ul className="navtab__navigation">
              <li className="navtab__link"><Link to="AboutProjectElement" smooth={true} duration={500}>О проекте</Link></li>
              <li className="navtab__link"><Link to="TechsElement" smooth={true} duration={500}>Технологии</Link></li>
              <li className="navtab__link"><Link to="AboutMeElement" smooth={true} duration={500}>Студент</Link></li>
            </ul>
          </div>

        </section>
    )
}

export default NavTab;
