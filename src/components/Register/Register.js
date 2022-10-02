import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Register.css';
import { Link } from 'react-router-dom';
import { signupUser } from '../../utils/MainApi';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

function Register() {
  const [ name, setName ] = useState({entered: false, name: ''});
  const [ email, setEmail ] = useState({entered: false, email: ''});
  const [ password, setPassword ] = useState({entered: false, password: ''});
  const [ nameValidity, setNameValidity ] = useState('');
  const [ emailValidity, setEmailValidity ] = useState('');
  const [ passwordValidity, setPasswordValidity ] = useState('');
  const [ error, setError ] = useState('');
  const history = useHistory();

  // name.entered = false;
  function handleSetName(evt) {
    // name.entered = true;
    setName({name: evt.target.value, entered: true})
  }

  function checkNameValidity() {
    // if (2 <= name.length && 30>= name.length) {
    if (name.name.match(/^[a-zа-яё -]{2,30}$/i)) {
      setNameValidity('valid')
      // console.log('name valid');
    } else {
      setNameValidity('not valid')
      // console.log('name NOT valid');
    }
  }

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

  function handleRegisterFormSubmit(evt) {
    evt.preventDefault();
    if (nameValidity === 'valid' && emailValidity === 'valid' && passwordValidity === 'valid') {
      signupUser({name: name.name, email: email.email, password: password.password})
      .then((res) => {
        console.log('res =>', res)
        if (res.status === 409) {
          setError('Пользователь с такой почтой уже зарегистрирован')
          throw new Error('Пользователь с такой почтой уже зарегестрирован')
        } else if (res.ok) {
          history.push('/signin')
        } else {
          setError('Что-то пошло не так, попробуйте еще раз')
          throw new Error('Что-то пошло не так, попробуйте еще раз')
        }
      })
      .catch(err => {
        console.log('err => ', err);
      })
    }
  }

  function setRegisterBtnActive() {
    const registerBtn = document.querySelector('.register__form-button')
    if (nameValidity === 'valid' && emailValidity === 'valid' && passwordValidity === 'valid') {
      registerBtn.classList.add('register__form-button_active')
    } else {
      registerBtn.classList.remove('register__form-button_active')
    }
  }

  useEffect(() => {
    // console.log('nameValidity', nameValidity);
    checkEmailValidity()
    checkNameValidity()
    checkPasswordValidity()
    setRegisterBtnActive()
  })

  return (
    <main className='register'>
      <Link to='/'><div className='register__logo page__logo' /></Link>
      <h3 className='register__heading page__auth-heading'>Добро пожаловать!</h3>
      <form className='register__form page__auth-form' onSubmit={handleRegisterFormSubmit}>
        <div className='register__input-wrapper page__input-wrapper'>
          <label className='register__input-label page__auth-input-label' htmlFor='register-name'>Имя</label>
          <input className='register__input page__auth-input' value={name.name} onChange={handleSetName} id='register-name' placeholder='Виталий' type="text"/>
        </div>
        {nameValidity === 'not valid' && name.entered && <ErrorMessage errorText='Имя пользователя должно быть от 2 до 30 символов, содержать только латиницу, кириллицу, пробел или дефис.' />}
        <div className='register__input-wrapper page__input-wrapper'>
          <label className='register__input-label page__auth-input-label' htmlFor='register-email'>E-mail</label>
          <input className='register__input page__auth-input' value={email.email} onChange={handleSetEmail} id='register-email' placeholder='pochta@yandex.ru' type='email'/>
        </div>
        {emailValidity === 'not valid' && email.entered && <ErrorMessage errorText='Введен неверный email.' />}
        <div className='register__input-wrapper page__input-wrapper'>
          <label className='register__input-label page__auth-input-label' htmlFor='register-password'>Пароль</label>
          <input className='register__input page__auth-input' value={password.password} onChange={handleSetPassword} id='register-password' placeholder='password' type='password' required/>
        </div>
        {passwordValidity === 'not valid' && password.entered && <ErrorMessage errorText='Пароль должен содержать от 3 до 30 символов' />}
        {/* <p className='register__form-error page__auth-error'>Что-то пошло не так</p> */}
        { error && <ErrorMessage errorText={error} />}
        <button className='register__form-button page__auth-button'>Зарегистрироваться</button>
        <p className='register__btn-subtext page__btn-subtext'>Уже зарегистрированы? <Link className='register__btn-sublink page__btn-sublink' to='/signin'>Войти</Link></p>
      </form>

    </main>
  )
}

export default Register;