import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';


function Movies() {
  return (
    <div className="movies">
      <Header />
      <SearchForm />
      <MoviesCardList />
    </div>
  )
}

export default Movies;