import './MoviesCard.css';
import { saveMovie, deleteMovie } from '../../utils/MainApi';

function MoviesCard ({poster, title, duration, type, info, isLiked, onDislike}) {

  function handleLikeCard(e) {
    const movieCard = e.target;
    movieCard.classList.add('moviescard__like_liked');
    saveMovie(info)
      .then(savedMovie => {info._id = savedMovie._id
  })

  }

  function handleDislikeCard(e) {
    onDislike();
    deleteMovie(info._id)
    const movieCard = e.target;
    movieCard.classList.remove('moviescard__like_liked');
  }

  function handleToggleLikeCard(e) {
    const movieCard = e.target;
    if (movieCard.classList.contains('moviescard__like_liked')) {
      handleDislikeCard(e)
    } else {
      handleLikeCard(e)
    }
  }

  function handleDeleteCard() {
    deleteMovie(info._id)
      .then((res) => {
        onDislike()
      })
      .then(() => {
        const oldSavedCards = JSON.parse(localStorage.foundSaved);
        const newSavedCards = oldSavedCards.filter(item => {
          return item._id !== info._id
        })
        localStorage.foundSaved = JSON.stringify(newSavedCards);
      })

  }
  return (
    <div className='moviescard'>
      <img  className='moviescard__cover' src={poster} alt="photod" />
      <div className='moviescard__info'>
        <p className='moviescard__caption'>{title}</p>
        {type === 'saved' ? <button className='moviescard__delete' type='button' onClick={handleDeleteCard}></button> : <button className={`moviescard__like ${isLiked ? 'moviescard__like_liked' : ''}`} type='button' onClick={handleToggleLikeCard}></button> }
        <p className='moviescard__length'>{duration}</p>
      </div>
    </div>
  )
}

export default MoviesCard;