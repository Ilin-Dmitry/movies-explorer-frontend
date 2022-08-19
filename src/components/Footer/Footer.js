import './Footer.css';

function Footer() {
  const yearNow = new Date().getFullYear();
  return (
    <footer className='footer'>
      <div className='footer__container page__container'>
        <p className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className='footer__info'>
          <p className='footer__copyright'>{yearNow}</p>
          <ul className='footer__links'>
            <li><a className='footer__link' href="https://practicum.yandex.ru
" target="_blank" rel="noreferrer">Яндекс.Практикум</a></li>
            <li><a className='footer__link' href="https://github.com
" target="_blank" rel="noreferrer">Github</a></li>
            <li><a className='footer__link' href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;