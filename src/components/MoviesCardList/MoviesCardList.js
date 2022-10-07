import './MoviesCardList.css';
import { useState, useEffect } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import durationFormatting from '../../utils/durationFormatting';
import { getSavedMovies } from '../../utils/MainApi';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import {
  CARDS_TO_ADD_DESKTOP,
  CARDS_TO_ADD_TABLET,
  CARDS_TO_ADD_MOBILE,
  CARDS_TO_SHOW_DESKTOP,
  CARDS_TO_SHOW_TABLET,
  CARDS_TO_SHOW_MOBILE,
  BREAKPOINT_TABLET,
  BREAKPOINT_MOBILE,
} from '../../utils/config';

function MoviesCardList({type, cards, onRefresh}) {
  const [ maxCards, setMaxCards ] = useState(12);
  const [ addCards, setAddCards ] = useState(3)
  const [ savedMoviesList, setSavedMoviesList ] = useState([])
  const [error, setError] = useState('');

  function setCardsNumber() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= BREAKPOINT_TABLET) {
      setMaxCards(CARDS_TO_SHOW_DESKTOP)
      setAddCards(CARDS_TO_ADD_DESKTOP)
    } else if (screenWidth >= BREAKPOINT_MOBILE ) {
      setMaxCards(CARDS_TO_SHOW_TABLET)
      setAddCards(CARDS_TO_ADD_TABLET)
    } else {
      setMaxCards(CARDS_TO_SHOW_MOBILE)
      setAddCards(CARDS_TO_ADD_MOBILE)
    }
  }

  function showMoreCards () {
    setMaxCards(maxCards + addCards);
  }

  useEffect(() => {
    setCardsNumber();
    window.addEventListener('resize', setCardsNumber)
    setError('')
    if (localStorage.savedCards) {
      setSavedMoviesList(JSON.parse(localStorage.savedCards))
    } else {
      getSavedMovies()
        .then((movieList) => {
          setSavedMoviesList(movieList)
        })
        .catch((err) => {
          setError('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
        })
    }
    return () => {
      window.removeEventListener('resize', setCardsNumber);
    };
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
          return <MoviesCard title={movie.nameRU} duration={durationFormatting(movie.duration)} poster={movie.image.url ? `https://api.nomoreparties.co${movie.image.url}` : movie.image} type={type} key={movie.id ? movie.id : movie._id} info={movie} isLiked={isLiked} onDislike={onRefresh} link={movie.trailerLink}/> }
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