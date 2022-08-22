import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
  return (
    <section className='moviescardlist'>
      <div className='moviescardlist__container page__container'>
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </div>
      <div className='moviescardlist__loadmore-wrapper page__container'>
        <button className='moviescardlist__loadmore-button'>Ещё</button>
      </div>
    </section>
  )
}

export default MoviesCardList;