import { useState } from 'react';
import './MoviesCard.css';
import { saveMovie, deleteMovie, getSavedMovies } from '../../utils/MainApi';
import TopErrorMessage from '../TopErrorMessage/TopErrorMessage';

function MoviesCard ({poster, title, duration, type, info, isLiked, onDislike, link}) {
  const [error, setError] = useState('');
  function handleLikeCard(e) {
    setError('');
    saveMovie(info)
      .then(savedMovie => {
        info._id = savedMovie._id;
        const movieCard = e.target;
        movieCard.classList.add('moviescard__like_liked');
      })
      .then(() => {
        getSavedMovies()
        .then((res) => {
          localStorage.savedCards = JSON.stringify(res)
        })
      })
      .catch(() => {
        setError('Произошла ошибка, попробуйте позже')
      })
  }

  function handleDislikeCard(e) {
    setError('');
    onDislike();
    deleteMovie(info._id)
    .then(() => {
      const movieCard = e.target;
      movieCard.classList.remove('moviescard__like_liked');
    })
    .then(() => {
      getSavedMovies()
      .then((res) => {
        localStorage.savedCards = JSON.stringify(res)
        onDislike()
      })
    })
    .catch(() => {
      setError('Произошла ошибка, попробуйте позже')
    })
  }

  function handleDeleteCard(e) {
    setError('');
    deleteMovie(info._id)
    .then(() => {
      const movieCard = e.target;
      movieCard.classList.remove('moviescard__like_liked');
    })
    .then(() => {
      getSavedMovies()
      .then((res) => {
        localStorage.savedCards = JSON.stringify(res)
        onDislike()
      })
    })
    .catch(() => {
      setError('Произошла ошибка, попробуйте позже')
    })
  }

  function handleToggleLikeCard(e) {
    const movieCard = e.target;
    if (movieCard.classList.contains('moviescard__like_liked')) {
      handleDislikeCard(e)
    } else {
      handleLikeCard(e)
    }
  }

  return (
    <div className='moviescard'>
      {error && <TopErrorMessage errorText={error} />}
      <a href={link} target='_blank' rel='noreferrer' ><img  className='moviescard__cover' src={poster} alt="photod" /></a>
      <div className='moviescard__info'>
        <p className='moviescard__caption'>{title}</p>
        {type === 'saved' ? <button className='moviescard__delete' type='button' onClick={handleDeleteCard}></button> : <button className={`moviescard__like ${isLiked ? 'moviescard__like_liked' : ''}`} type='button' onClick={handleToggleLikeCard}></button> }
        <p className='moviescard__length'>{duration}</p>
      </div>
    </div>
  )
}

export default MoviesCard;