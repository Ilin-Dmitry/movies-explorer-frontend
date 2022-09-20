import './SavedMovies.css';
import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';
import { getSavedMovies } from '../../utils/MainApi';
import showSearchResult from '../../utils/showSearchResult';

function SavedMovies() {
  const [ isMoviesShown, setIsMoviesShown ] = useState(true);
  const [ savedCards, setSavedCards ] = useState([]);
  const [ listRefreshed, setListRefreshed] = useState(false);
  const [ movieToFind, setMovieToFind ] = useState('');

  function handleListRefresh() {
    setListRefreshed(true);
  }

  function handleSearchMovieInput(mov) {
    setMovieToFind(mov)
  }

    function handleSubmitSearchForm() {
      getSavedMovies()
        .then((res) => {
          setSavedCards(showSearchResult(res, movieToFind))
          localStorage.searchSaved = movieToFind;
          localStorage.foundSaved = JSON.stringify(showSearchResult(res, movieToFind));
          localStorage.shortFilmCheckSaved = JSON.stringify(document.querySelector('.filtercheckbox__input').checked);
        })
  }

  useEffect(() => {
    getSavedMovies()
      .then((res) => {
        if(localStorage.foundSaved) {
          setMovieToFind(localStorage.searchSaved)
          setSavedCards(showSearchResult(res, localStorage.searchSaved));
        }
        else {
          setSavedCards(res)}
      })
      setListRefreshed(false)
  }, [listRefreshed])

  return (
    <div className='savedmovies'>
      <Header />
      <main>
        <SearchForm onChange={handleSearchMovieInput} origin='saved' movie={movieToFind} onSubmit={handleSubmitSearchForm}/>
        { isMoviesShown ? <MoviesCardList cards={savedCards} type='saved' onRefresh={handleListRefresh}/> : <Preloader />}
      </main>
      <Footer />
    </div>
  )
}

export default SavedMovies;