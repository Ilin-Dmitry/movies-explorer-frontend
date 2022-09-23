import { useState, useEffect } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import {signinUser} from '../../utils/MainApi';
import { IsLoggedContext } from '../../contexts/IsLoggedContext';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

function Login({onLogin}) {
  const [ email, setEmail ] = useState({entered: false, email: ''});
  const [ password, setPassword ] = useState({entered: false, password: ''});
  const [ emailValidity, setEmailValidity ] = useState('');
  const [ passwordValidity, setPasswordValidity ] = useState('');
  const history = useHistory();

  function handleSetEmail(evt) {
    setEmail({email: evt.target.value, entered: true})
  }

  function checkEmailValidity() {
    // handleSetEmail(evt)
    if (email.email.match(/^[\w]{1}[\w-.]*@[\w-]+\.[a-z]{2,4}$/i)) {
      setEmailValidity('valid')
      // console.log('email match');
    } else {
      setEmailValidity('not valid')
      // console.log('email not match');
    }
  }

  function handleSetPassword(evt) {
    setPassword({password: evt.target.value, entered: true})
  }

  function checkPasswordValidity() {
    if (3 <= password.password.length && 30>= password.password.length) {
      setPasswordValidity('valid')
    } else {
      setPasswordValidity('not valid')
    }
  }

  function handleLoginFormSubmit(evt) {
    evt.preventDefault();
    if (emailValidity === 'valid' && passwordValidity === 'valid') {
      signinUser({ email: email.email, password: password.password })
        .then((res) => {
          if (res.ok) {
            onLogin()
            history.push('./movies');
          }
          })
        // .then(() => {
        //   onLogin()
        //   .then((res) => {
        //     console.log('res ===>', res);
        //     if (res.ok) {
        //       history.push('./movies')
        //     }
        //   })
        // })

    }
  }

  function setLoginBtnActive() {
    const loginBtn = document.querySelector('.login__form-button')
    if (emailValidity === 'valid' && passwordValidity === 'valid') {
      loginBtn.classList.add('login__form-button_active')
    } else {
      loginBtn.classList.remove('login__form-button_active')
    }
  }

  useEffect(() => {
    // console.log('nameValidity', nameValidity);
    checkEmailValidity()
    checkPasswordValidity()
    setLoginBtnActive()
  })

  return (
    <main className='login'>
      <Link to='/'><div className='login__logo page__logo' /></Link>
      <h3 className='login__heading page__auth-heading'>Рады видеть!</h3>
      <form className='login__form page__auth-form' onSubmit={handleLoginFormSubmit}>
        <div className='login__input-wrapper page__input-wrapper'>
          <label className='login__input-label page__auth-input-label' htmlFor='login-email'>E-mail</label>
          <input className='login__input page__auth-input' id='login-email' placeholder='pochta@yandex.ru' type='email' value={email.email} onChange={handleSetEmail}/>
        </div>
        {emailValidity === 'not valid' && email.entered && <ErrorMessage errorText='Введен неверный email.' />}
        <div className='login__input-wrapper page__input-wrapper'>
          <label className='login__input-label page__auth-input-label' htmlFor='login-password'>Пароль</label>
          <input className='login__input page__auth-input' id='login-password' placeholder='' type='password' value={password.password} onChange={handleSetPassword}/>
        </div>
        {passwordValidity === 'not valid' && password.entered && <ErrorMessage errorText='Пароль должен содержать от 3 до 30 символов' />}
        <button className='login__form-button page__auth-button' type='submit'>Войти</button>
        <p className='register__btn-subtext page__btn-subtext'>Ещё не зарегистрированы? <Link className='register__btn-sublink page__btn-sublink' to='/signup'>Регистрация</Link></p>
      </form>
    </main>
  )
}

export default Login;