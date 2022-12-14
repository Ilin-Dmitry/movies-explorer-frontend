import './Portfolio.css';

function Portfolio() {
    return (
      <section className='portfolio'>
        <div className='portfolio__container page__container'>
          <h3 className='portfolio__section-name'>Портфолио</h3>
          <ul className='portfolio__links'>
            <li>
              <a className='portfolio__link' href=" https://ilin-dmitry.github.io/how-to-learn/index.html" target="_blank">
                <p className='portfolio__link-text'>Статичный сайт</p>
                <p className='portfolio__link-text'>↗</p>
              </a>
            </li>
            <li>
              <a className='portfolio__link' href=" https://ilin-dmitry.github.io/russian-travel/index.html" target="_blank">
                <p className='portfolio__link-text'>Адаптивный сайт</p>
                <p className='portfolio__link-text'>↗</p>
              </a>
            </li>
            <li>
              <a className='portfolio__link' href=" https://mesto.dm-ilin.nomorepartiesxyz.ru" target="_blank">
                <p className='portfolio__link-text portfolio__link-text_last'>Одностраничное приложение</p>
                <p className='portfolio__link-text portfolio__link-text_last'>↗</p>
              </a>
            </li>
          </ul>
        </div>
      </section>
    )
}

export default Portfolio;
