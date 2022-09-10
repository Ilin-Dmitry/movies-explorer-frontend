import './MoviesCard.css';
import examplePhoto from '../../images/example-photo.jpg';

function MoviesCard ({poster, title, duration, type}) {
  console.log('type=>', type);
  console.log();
  return (
    <div className='moviescard'>
      <img  className='moviescard__cover' src={poster} alt="photod" />
      <div className='moviescard__info'>
        <p className='moviescard__caption'>{title}</p>
        {type === 'saved' ? <button className='moviescard__delete' type='button'></button> : <button className='moviescard__like' type='button'></button> }
        <p className='moviescard__length'>{duration}</p>
      </div>
    </div>
  )
}

export default MoviesCard;