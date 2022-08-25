import './PageNotFound.css';

function PageNotFound() {
  return (
    <section className='pagenotfound'>
      <h3 className='pagenotfound__title'>404</h3>
      <p className='pagenotfound__subtitle'>Страница не найдена</p>
      <a className='pagenotfound__link' href='ya.ru'>Назад</a>
    </section>
  )
}

export default PageNotFound;