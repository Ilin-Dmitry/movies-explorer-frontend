import './Portfolio.css';

function Portfolio() {
    return (
      <section className='portfolio'>
        <div className='portfolio__container page__container'>
          <h3 className='portfolio__section-name'>Портфолио</h3>
          <div className='portfolio__links'>
            <a className='portfolio__link' href=" https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/" target="_blank">
              <p className='portfolio__link-text'>Статичный сайт</p>
              <p className='portfolio__link-text'>↗</p>
            </a>
            <a className='portfolio__link' href=" https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/" target="_blank">
              <p className='portfolio__link-text'>Адаптивный сайт</p>
              <p className='portfolio__link-text'>↗</p>
            </a>
            <a className='portfolio__link' href=" https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/" target="_blank">
              <p className='portfolio__link-text'>Одностраничное приложение</p>
              <p className='portfolio__link-text'>↗</p>
            </a>
          </div>
        </div>
      </section>
    )
}

export default Portfolio;
