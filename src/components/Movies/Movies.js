import './Movies.css';
import { useState } from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';


function Movies() {
  const [ isMoviesShown, setIsMoviesShown ] = useState(true);
  return (
    <div className="movies">
      <Header />
      <SearchForm />
      { isMoviesShown ? <MoviesCardList /> : <Preloader />}
    </div>
  )
}

export default Movies;