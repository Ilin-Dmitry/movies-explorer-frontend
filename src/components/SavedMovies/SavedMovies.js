import './SavedMovies.css';
import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';
import { getSavedMovies, temporaryAuth } from '../../utils/MainApi';

function SavedMovies() {
  const [ isMoviesShown, setIsMoviesShown ] = useState(true);
  const [ savedCards, setSavedCards ] = useState([]);
  const [ listRefreshed, setListRefreshed] = useState(false);

  // useEffect(() => {
  //   getSavedMovies()
  //     .then((res) => {
  //       setSavedCards(res)
  //     })
  // })
    // console.log('savedCards[1] =>', savedCards[1]);
  // console.log('SAVED_CARDS ==>', savedCards);


  function handleListRefresh() {
    setListRefreshed(true);
  }

  // useEffect(() => {
  //   temporaryAuth()
  //     .then(() => {
  //       getSavedMovies()
  //         .then((res) => {
  //           setSavedCards(res)
  //         })
  //     })
  //     setListRefreshed(false)
  // }, [listRefreshed])

  useEffect(() => {
    getSavedMovies()
      .then((res) => {
        setSavedCards(res)
      })
      setListRefreshed(false)
  }, [listRefreshed])

  return (
    <div className='savedmovies'>
      <Header />
      <main>
        <SearchForm />
        { isMoviesShown ? <MoviesCardList cards={savedCards} type='saved' onRefresh={handleListRefresh}/> : <Preloader />}
      </main>
      <Footer />
    </div>
  )
}

export default SavedMovies;