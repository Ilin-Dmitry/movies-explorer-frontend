import './Movies.css';
import { useState } from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';


function Movies() {
  const [ isMoviesShown, setIsMoviesShown ] = useState(true);
  return (
    <div className="movies">
      <Header />
      <SearchForm />
      { isMoviesShown ? <MoviesCardList /> : <Preloader />}
      <Footer />
    </div>
  )
}

export default Movies;