import './MoviesCard.css';
import examplePhoto from '../../images/example-photo.jpg';

function MoviesCard () {
  return (
    <div className='moviescard'>
      <img  className='moviescard__cover' src={examplePhoto} alt="photod" />
      <div className='moviescard__info'>
        <p className='moviescard__caption'>Какой-то текст Какой-то текстКакой-то текстКакой-то текстКакой-то текст</p>
        <div className='moviescard__like'></div>
        <p className='moviescard__length'>1ч 3м</p>
      </div>
    </div>
  )
}

export default MoviesCard;