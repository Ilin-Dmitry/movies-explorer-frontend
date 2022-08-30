import './App.css';
import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { IsLoggedContext } from '../../contexts/IsLoggedContext';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Footer from '../Footer/Footer';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {
  const [isLogged, setIsLogged] = useState(true);

  return (
    <IsLoggedContext.Provider value={isLogged}>

      <div className='page'>

          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/signup" >
              <Register />
            </Route>
            <Route path="/signin">
              <Login />
            </Route>
            <Route path="/movies">
              <Movies />
            </Route>
            <Route path="/saved-movies">
              <SavedMovies />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
          {/* <Footer /> */}
      </div>
    </IsLoggedContext.Provider>
  )
}

export default App;
