import './App.css';
import { useState, useEffect, useContext } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { IsLoggedContext } from '../../contexts/IsLoggedContext';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Footer from '../Footer/Footer';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import {checkCookieWithToken, checkToken} from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import {CurrentUserContext} from '../../contexts/CurrentUserContext'

function App() {
  const history = useHistory()
  const currentUser = useContext(CurrentUserContext);
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
                  console.log('res from checkToken =>', res);
                  setUser({name: res.name, email: res.email})
                  // setUserEmail(res.email);
                  setIsLogged(true);
                  // history.push('/movies');
                  // IsLoggedContext.value = isLogged;
                })
                .catch(error => {
                  console.log(`Ошибка ${error}`)
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
                <Route exact path="/signup" >
                  <Register />
                </Route>
                <Route exact path="/signin">
                  <Login onLogin={handleSetIsLoggedIn}/>
                </Route>
                {/* <IsLoggedContext.Provider value={isLogged}> */}
                <ProtectedRoute exact path="/movies">
                    <Movies />
                </ProtectedRoute>
                {/* </IsLoggedContext.Provider> */}

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
