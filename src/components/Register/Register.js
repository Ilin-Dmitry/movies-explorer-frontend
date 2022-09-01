import './Register.css';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <section className='register'>
      <Link to='/'><div className='register__logo page__logo' /></Link>
      <h3 className='register__heading page__auth-heading'>Добро пожаловать!</h3>
      <form className='register__form page__auth-form'>
        <div className='register__input-wrapper page__input-wrapper'>
          <label className='register__input-label page__auth-input-label' htmlFor='register-name'>Имя</label>
          <input className='register__input page__auth-input' id='register-name' placeholder='Виталий'/>
        </div>

        <div className='register__input-wrapper page__input-wrapper'>
          <label className='register__input-label page__auth-input-label' htmlFor='register-email'>E-mail</label>
          <input className='register__input page__auth-input' id='register-email' placeholder='pochta@yandex.ru' type='email'/>
        </div>

        <div className='register__input-wrapper page__input-wrapper'>
          <label className='register__input-label page__auth-input-label' htmlFor='register-password'>Пароль</label>
          <input className='register__input page__auth-input' id='register-password' placeholder='password' type='password'/>
        </div>

        <p className='register__form-error page__auth-error'>Что-то пошло не так</p>
        <button className='register__form-button page__auth-button'>Зарегистрироваться</button>
        <p className='register__btn-subtext page__btn-subtext'>Уже зарегистрированы? <Link className='register__btn-sublink page__btn-sublink' to='/signin'>Войти</Link></p>
      </form>

    </section>
  )
}

export default Register;