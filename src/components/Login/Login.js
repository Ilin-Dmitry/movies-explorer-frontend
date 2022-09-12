import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <main className='login'>
      <Link to='/'><div className='login__logo page__logo' /></Link>
      <h3 className='login__heading page__auth-heading'>Рады видеть!</h3>
      <form className='login__form page__auth-form'>
        <div className='login__input-wrapper page__input-wrapper'>
          <label className='login__input-label page__auth-input-label' htmlFor='login-email'>E-mail</label>
          <input className='login__input page__auth-input' id='login-email' placeholder='pochta@yandex.ru' type='email'/>
        </div>

          <div className='login__input-wrapper page__input-wrapper'>
            <label className='login__input-label page__auth-input-label' htmlFor='login-password'>Пароль</label>
            <input className='login__input page__auth-input' id='login-password' placeholder='' type='password'/>
          </div>

          <button className='login__form-button page__auth-button' type='submit'>Войти</button>
          <p className='register__btn-subtext page__btn-subtext'>Ещё не зарегистрированы? <Link className='register__btn-sublink page__btn-sublink' to='/signup'>Регистрация</Link></p>
      </form>
    </main>
  )
}

export default Login;