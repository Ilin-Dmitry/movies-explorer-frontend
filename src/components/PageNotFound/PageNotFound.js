import './PageNotFound.css';
import { useHistory } from 'react-router-dom';

function PageNotFound() {
  const history = useHistory();
  return (
    <section className='pagenotfound'>
      <h3 className='pagenotfound__title'>404</h3>
      <p className='pagenotfound__subtitle'>Страница не найдена</p>
      <button className='pagenotfound__link' onClick={history.goBack}>Назад</button>
    </section>
  )
}

export default PageNotFound;