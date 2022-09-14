import './MoviesCard.css';
import { saveMovie, deleteMovie } from '../../utils/MainApi';
import { useEffect } from 'react';

function MoviesCard ({poster, title, duration, type, info, isLiked, onDislike}) {
  // let isLiked = false;
  // console.log('info._id ===>', info._id);
  // console.log('info ===>', info)

  function handleLikeCard(e) {
    const movieCard = e.target;
    movieCard.classList.add('moviescard__like_liked');
    saveMovie(info);
  }

  function handleDislikeCard() {
    deleteMovie(info._id)
      .then(() => {
        onDislike()
      })

  }
  return (
    <div className='moviescard'>
      <img  className='moviescard__cover' src={poster} alt="photod" />
      <div className='moviescard__info'>
        <p className='moviescard__caption'>{title}</p>
        {type === 'saved' ? <button className='moviescard__delete' type='button' onClick={handleDislikeCard}></button> : <button className={`moviescard__like ${isLiked ? 'moviescard__like_liked' : ''}`} type='button' onClick={handleLikeCard}></button> }
        <p className='moviescard__length'>{duration}</p>
      </div>
    </div>
  )
}

export default MoviesCard;