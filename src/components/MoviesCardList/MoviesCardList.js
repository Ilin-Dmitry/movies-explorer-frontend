import './MoviesCardList.css';
import { useState, useEffect } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import durationFormatting from '../../utils/durationFormatting';
import { getSavedMovies } from '../../utils/MainApi';

function MoviesCardList({type, cards, onRefresh}) {
  const [ maxCards, setMaxCards ] = useState(12);
  const [ savedMoviesList, setSavedMoviesList ] = useState([])
  // const [ listRefreshed, setListRefreshed ] = useState(false)

  function showMoreCards () {
    setMaxCards(maxCards + 12);
  }

  // function showLikedCards () {
  //   getSavedMovies()
  //     .then((movieList) => {
  //       if (movieList.some((mov) => {
  //         return (mov.movieId === info.id)
  //       }))
  //       {
  //         isLiked = true;
  //       }
  //       console.log('isLiked?', isLiked);
  //     })
  // }

  // function refreshList() {
  //   getSavedMovies()
  //     .then((movieList) => {
  //       setSavedMoviesList(movieList)
  //     })
  //     .then(() => {
  //       console.log('refresh')
  //       setListRefreshed(true)
  //     })

    // getSavedMovies()
    // .then((movieList) => {
    //   setSavedMoviesList(movieList)
    // })
  // }

  useEffect(() => {
    getSavedMovies()
      .then((movieList) => {
        setSavedMoviesList(movieList)
      })
  }, [])

  return (
    <section className='moviescardlist'>
      <div className='moviescardlist__container page__container'>
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
          // console.log('movie.id ===>', movie.id);
          if (i < maxCards) {
          return <MoviesCard title={movie.nameRU} duration={durationFormatting(movie.duration)} poster={movie.image.url ? `https://api.nomoreparties.co${movie.image.url}` : movie.image} type={type} key={movie.id ? movie.id : movie._id} info={movie} isLiked={isLiked} onDislike={onRefresh}/> }
        })}
      </div>
      { cards.length > maxCards
      && <div className='moviescardlist__loadmore-wrapper page__container'>
          <button className='moviescardlist__loadmore-button' type='button' onClick={showMoreCards}>Ещё</button>
         </div>}
    </section>
  )
}

export default MoviesCardList;