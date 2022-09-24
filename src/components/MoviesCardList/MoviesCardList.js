import './MoviesCardList.css';
import { useState, useEffect } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import durationFormatting from '../../utils/durationFormatting';
import { getSavedMovies } from '../../utils/MainApi';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

function MoviesCardList({type, cards, onRefresh}) {
  const [ maxCards, setMaxCards ] = useState(12);
  const [ addCards, setAddCards ] = useState(3)
  const [ savedMoviesList, setSavedMoviesList ] = useState([])
  const [error, setError] = useState('');

  function setCardsNumber() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 900) {
      setMaxCards(12)
      setAddCards(3)
    } else if (screenWidth >= 551) {
      setMaxCards(8)
      setAddCards(2)
    } else {
      setMaxCards(5)
      setAddCards(2)
    }
  }

  function showMoreCards () {
    setMaxCards(maxCards + addCards);
  }

  useEffect(() => {
    // console.log('ширина экрана', window.innerWidth);
    setCardsNumber();
    setError('')
    getSavedMovies()
      .then((movieList) => {
        setSavedMoviesList(movieList)
      })
      .catch((err) => {
        setError('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
      })
  }, [cards])

  return (
    <section className='moviescardlist'>
      {error
      ? <div className='moviescardlist__container page__container'>
        <ErrorMessage errorText={error} />
      </div>
      :<div className='moviescardlist__container page__container'>
        {cards.length === 0 && <p className='moviescardlist__text'>По вашему запросу фильмов не найдено</p>}
        {cards.map((movie, i) => {
          let isLiked = false;
          if (savedMoviesList.some(mov => {
            return mov.movieId === movie.id
          })) {
            savedMoviesList.forEach(mov => {
              movie._id = mov._id
            })
            isLiked = true;
          }
          if (i < maxCards) {
          return <MoviesCard title={movie.nameRU} duration={durationFormatting(movie.duration)} poster={movie.image.url ? `https://api.nomoreparties.co${movie.image.url}` : movie.image} type={type} key={movie.id ? movie.id : movie._id} info={movie} isLiked={isLiked} onDislike={onRefresh}/> }
        })}
      </div>
      }

      { cards.length > maxCards
      && <div className='moviescardlist__loadmore-wrapper page__container'>
          <button className='moviescardlist__loadmore-button' type='button' onClick={showMoreCards}>Ещё</button>
         </div>}
    </section>
  )
}

export default MoviesCardList;