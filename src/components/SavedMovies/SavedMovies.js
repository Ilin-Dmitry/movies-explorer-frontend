import './SavedMovies.css';
import { useState } from 'react';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';

function SavedMovies() {
  const [ isMoviesShown, setIsMoviesShown ] = useState(true);
  return (
    <div className='savedmovies'>
      <Header />
      <SearchForm />
      { isMoviesShown ? <MoviesCardList /> : <Preloader />}
      <Footer />
    </div>
  )
}

export default SavedMovies;