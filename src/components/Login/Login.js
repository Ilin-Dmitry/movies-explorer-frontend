import { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import {signinUser} from '../../utils/MainApi';
import { IsLoggedContext } from '../../contexts/IsLoggedContext';

function Login({onLogin}) {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const history = useHistory();

  function handleSetEmail(evt) {
    setEmail(evt.target.value);
  }

  function handleSetPassword(evt) {
    setPassword(evt.target.value);
  }

  function handleLoginFormSubmit(evt) {
    evt.preventDefault();
    signinUser({ email: email, password: password })
      .then(() => {
        onLogin();
        history.push('./movies');
      })
  }

  return (
    <main className='login'>
      <Link to='/'><div className='login__logo page__logo' /></Link>
      <h3 className='login__heading page__auth-heading'>Рады видеть!</h3>
      <form className='login__form page__auth-form' onSubmit={handleLoginFormSubmit}>
        <div className='login__input-wrapper page__input-wrapper'>
          <label className='login__input-label page__auth-input-label' htmlFor='login-email'>E-mail</label>
          <input className='login__input page__auth-input' id='login-email' placeholder='pochta@yandex.ru' type='email' value={email} onChange={handleSetEmail}/>
        </div>

          <div className='login__input-wrapper page__input-wrapper'>
            <label className='login__input-label page__auth-input-label' htmlFor='login-password'>Пароль</label>
            <input className='login__input page__auth-input' id='login-password' placeholder='' type='password' value={password} onChange={handleSetPassword}/>
          </div>

          <button className='login__form-button page__auth-button' type='submit'>Войти</button>
          <p className='register__btn-subtext page__btn-subtext'>Ещё не зарегистрированы? <Link className='register__btn-sublink page__btn-sublink' to='/signup'>Регистрация</Link></p>
      </form>
    </main>
  )
}

export default Login;