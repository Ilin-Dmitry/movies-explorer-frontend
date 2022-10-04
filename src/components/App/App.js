import './App.css';
import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { IsLoggedContext } from '../../contexts/IsLoggedContext';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import {checkCookieWithToken, checkToken} from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import LoggedRoute from '../LoggedRoute/LoggedRoute';
import {CurrentUserContext} from '../../contexts/CurrentUserContext'

function App() {
  const [isLogged, setIsLogged] = useState('');
  const [user, setUser] = useState({})

  function handleCheckToken() {
    checkCookieWithToken()
        .then((res) => {
          return res.text();
        })
        .then(text => {
          if(text === 'false') {
            setIsLogged(false)
            return false
          }
          if(text === 'true') {
            return true
          }
        })
        .then(res => {
          if(res) {
              checkToken()
                .then((res) => {
                  setUser({name: res.name, email: res.email})
                  setIsLogged(true);
                })
                .catch(error => {
                  setIsLogged(false)
                })
            }
        })
  }

  function handleSetIsLoggedIn() {
    setIsLogged(true);
  }

  function handleSetIsLoggedOut() {
    setIsLogged(false);
  }

  useEffect(() => {
    handleCheckToken()
  }, [])

  if (isLogged !== '') {
    return (
      <IsLoggedContext.Provider value={isLogged}>

        <CurrentUserContext.Provider value={user}>
          <div className='page'>
              <Switch>
                <Route exact path="/">
                  <Main />
                </Route>
                <LoggedRoute exact path="/signup" >
                  <Register onSignup={handleSetIsLoggedIn}/>
                </LoggedRoute>
                <LoggedRoute exact path="/signin">
                  <Login onLogin={handleSetIsLoggedIn}/>
                </LoggedRoute>
                <ProtectedRoute exact path="/movies">
                    <Movies />
                </ProtectedRoute>
                <ProtectedRoute exact path="/saved-movies">
                  <SavedMovies />
                </ProtectedRoute>
                <ProtectedRoute exact path="/profile">
                  <Profile onLogout={handleSetIsLoggedOut}/>
                </ProtectedRoute>
                <Route path="*">
                  <PageNotFound />
                </Route>
              </Switch>
          </div>
        </CurrentUserContext.Provider>
      </IsLoggedContext.Provider>
    )
  }
  }

export default App;
