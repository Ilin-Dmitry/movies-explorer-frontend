import './SavedMovies.css';
import { useState } from 'react';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';

function SavedMovies() {
  const [ isMoviesShown, setIsMoviesShown ] = useState(true);
  return (
    <div className='moviescardlist'>
      <Header />
      <SearchForm />
      { isMoviesShown ? <MoviesCardList /> : <Preloader />}
    </div>
  )
}

export default SavedMovies;