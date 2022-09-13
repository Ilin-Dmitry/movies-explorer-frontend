import './MoviesCardList.css';
import { useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import durationFormatting from '../../utils/durationFormatting';

function MoviesCardList({type, cards}) {
  const [ maxCards, setMaxCards ] = useState(12);

  function showMoreCards () {
    setMaxCards(maxCards + 12);
  }

  return (
    <section className='moviescardlist'>
      <div className='moviescardlist__container page__container'>
        {cards.length === 0 && <p className='moviescardlist__text'>По вашему запросу фильмов не найдено</p>}
        {cards.map((movie, i) => {
          if (i < maxCards) {
          return <MoviesCard title={movie.nameRU} duration={durationFormatting(movie.duration)} poster={`https://api.nomoreparties.co${movie.image.url}`} type={type} key={movie.id}/> }
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