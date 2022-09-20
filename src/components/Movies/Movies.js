import './Movies.css';
import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';
import { getMovies } from '../../utils/MoviesApi';
import showSearchResult from '../../utils/showSearchResult';


function Movies() {
  const [ movieToFind, setMovieToFind ] = useState('');
  const [ cards, setCards ] = useState([]);
  const [ isMoviesShown, setIsMoviesShown ] = useState(true);


  function handleSearchMovieInput(mov) {
    setMovieToFind(mov)
  }

  function handleSubmitSearchForm() {
    setIsMoviesShown(false)
    if (movieToFind !== '') {
      getMovies()
      .then((res) => {
        setCards(showSearchResult(res, movieToFind))
        localStorage.search = movieToFind;
        localStorage.found = JSON.stringify(showSearchResult(res, movieToFind));
        localStorage.shortFilmCheck = JSON.stringify(document.querySelector('.filtercheckbox__input').checked);
        setIsMoviesShown(true)
      })
    }
  }

  function handleMoviesRefresh() {
    setCards(showSearchResult(JSON.parse(localStorage.found), movieToFind))
  }

  useEffect(() => {
    if(localStorage.search && localStorage.found) {
      setMovieToFind(localStorage.search)
      setCards(JSON.parse(localStorage.found));
    }
  }, [])

  return (
    <div className="movies">
      <Header />
      <main>
        <SearchForm onChange={handleSearchMovieInput} movie={movieToFind} onSubmit={handleSubmitSearchForm} required={true}/>
        { isMoviesShown ? <MoviesCardList cards={cards} onRefresh={handleMoviesRefresh}/> : <Preloader />}
      </main>
      <Footer />
    </div>
  )
}

export default Movies;