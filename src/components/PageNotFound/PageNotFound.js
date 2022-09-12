import './PageNotFound.css';
import { useHistory } from 'react-router-dom';

function PageNotFound() {
  const history = useHistory();
  return (
    <main className='pagenotfound'>
      <div className='pagenotfound__wrapper'>
        <h3 className='pagenotfound__title'>404</h3>
        <p className='pagenotfound__subtitle'>Страница не найдена</p>
        <button className='pagenotfound__link' onClick={history.goBack} type='button'>Назад</button>
      </div>
    </main>
  )
}

export default PageNotFound;