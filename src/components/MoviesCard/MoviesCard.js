import './MoviesCard.css';
import examplePhoto from '../../images/example-photo.jpg';

function MoviesCard ({poster, title, duration}) {
  return (
    <div className='moviescard'>
      <img  className='moviescard__cover' src={poster} alt="photod" />
      <div className='moviescard__info'>
        <p className='moviescard__caption'>{title}</p>
        <div className='moviescard__like'></div>
        <p className='moviescard__length'>{duration}</p>
      </div>
    </div>
  )
}

export default MoviesCard;