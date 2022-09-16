import { useState } from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import { signupUser } from '../../utils/MainApi';

function Register() {
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  function handleSetName(evt) {
    setName(evt.target.value)
  }

  function handleSetEmail(evt) {
    setEmail(evt.target.value)
  }

  function handleSetPassword(evt) {
    setPassword(evt.target.value)
  }

  function handleRegisterFormSubmit(evt) {
    evt.preventDefault();
    signupUser({name: name, email: email, password: password})
  }

  return (
    <main className='register'>
      <Link to='/'><div className='register__logo page__logo' /></Link>
      <h3 className='register__heading page__auth-heading'>Добро пожаловать!</h3>
      <form className='register__form page__auth-form' onSubmit={handleRegisterFormSubmit}>
        <div className='register__input-wrapper page__input-wrapper'>
          <label className='register__input-label page__auth-input-label' htmlFor='register-name'>Имя</label>
          <input className='register__input page__auth-input' value={name} onChange={handleSetName} id='register-name' placeholder='Виталий'/>
        </div>

        <div className='register__input-wrapper page__input-wrapper'>
          <label className='register__input-label page__auth-input-label' htmlFor='register-email'>E-mail</label>
          <input className='register__input page__auth-input' value={email} onChange={handleSetEmail} id='register-email' placeholder='pochta@yandex.ru' type='email'/>
        </div>

        <div className='register__input-wrapper page__input-wrapper'>
          <label className='register__input-label page__auth-input-label' htmlFor='register-password'>Пароль</label>
          <input className='register__input page__auth-input' value={password} onChange={handleSetPassword} id='register-password' placeholder='password' type='password'/>
        </div>

        <p className='register__form-error page__auth-error'>Что-то пошло не так</p>
        <button className='register__form-button page__auth-button'>Зарегистрироваться</button>
        <p className='register__btn-subtext page__btn-subtext'>Уже зарегистрированы? <Link className='register__btn-sublink page__btn-sublink' to='/signin'>Войти</Link></p>
      </form>

    </main>
  )
}

export default Register;