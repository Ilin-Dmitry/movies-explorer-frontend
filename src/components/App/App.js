import './App.css';
import { Route, Switch } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {
  return (

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
            <Route path="/Profile">
              <Profile />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>

            {/* <Main /> */}
            {/* <Movies /> */}
            {/* <Profile /> */}
            {/* <Register /> */}
            {/* <Login /> */}
            {/* <PageNotFound /> */}
          </Switch>
          <Footer />
      </div>
  )
}

export default App;
