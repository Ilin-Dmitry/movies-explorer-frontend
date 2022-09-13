import './Movies.css';
import { useState } from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';
import { getMovies } from '../../utils/MoviesApi';


function Movies() {
  const [ movieToFind, setMovieToFind ] = useState('');
  const [ cards, setCards ] = useState([]);

  function handleSearchMovieInput(mov) {
    setMovieToFind(mov)
  }

  function handleSubmitSearchForm() {
      if (movieToFind !== '') {
        getMovies()
        .then((res) => {
          setCards(res);
          setMovieToFind('');
        })
    }
  }

  const [ isMoviesShown, setIsMoviesShown ] = useState(true);
  return (
    <div className="movies">
      <Header />
      <main>
        <SearchForm onChange={handleSearchMovieInput} movie={movieToFind} onSubmit={handleSubmitSearchForm} on/>
        { isMoviesShown ? <MoviesCardList cards={cards}/> : <Preloader />}
      </main>
      <Footer />
    </div>
  )
}

export default Movies;