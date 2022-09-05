import './MoviesCardList.css';
import { useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import { defaultMoviesList } from '../../utils/defaultMoviesList';

function MoviesCardList({type}) {
  const [ maxCards, setMaxCards ] = useState(12)

  function showMoreCards () {
    setMaxCards(maxCards + 12);
  }

  return (
    <section className='moviescardlist'>
      <div className='moviescardlist__container page__container'>
        {defaultMoviesList.length === 0 && <p className='moviescardlist__text'>По вашему запросу фильмов не найдено</p>}
        {defaultMoviesList.map((movie, i) => {
          if (i < maxCards) {
          return <MoviesCard title={movie.title} duration={movie.duration} poster={movie.poster} type={type} key={i}/> }
        })}
      </div>
      { defaultMoviesList.length > maxCards
      && <div className='moviescardlist__loadmore-wrapper page__container'>
          <button className='moviescardlist__loadmore-button' onClick={showMoreCards}>Ещё</button>
         </div>}

    </section>
  )
}

export default MoviesCardList;