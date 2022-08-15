import './NavTab.css';

function NavTab() {
    return (
        <section className="navtab">
          <div className="page__container navtab__container">
            <ul className="navtab__navigation">
              <li className="navtab__link">О проекте</li>
              <li className="navtab__link">Технологии</li>
              <li className="navtab__link">Студент</li>
            </ul>
          </div>

        </section>
    )
}

export default NavTab;
