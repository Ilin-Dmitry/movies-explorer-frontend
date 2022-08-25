import './Login.css';

function Login() {
  return (
    <section className='login'>
      <div className='login__logo page__logo' />
      <h3 className='login__heading page__auth-heading'>Рады видеть!</h3>
      <form className='login__form page__auth-form'>
        <div className='login__input-wrapper page__input-wrapper'>
          <label className='login__input-label page__auth-input-label' for='login-email'>E-mail</label>
          <input className='login__input page__auth-input' id='login-email' placeholder='pochta@yandex.ru' type='email'/>
        </div>

          <div className='login__input-wrapper page__input-wrapper'>
            <label className='login__input-label page__auth-input-label' for='login-password'>Пароль</label>
            <input className='login__input page__auth-input' id='login-password' placeholder='' type='password'/>
          </div>

          <button className='login__form-button page__auth-button'>Войти</button>
          <p className='register__btn-subtext page__btn-subtext'>Ещё не зарегистрированы?<a className='register__btn-sublink page__btn-sublink' href='ya.ru'>Регистрация</a></p>
      </form>
    </section>
  )
}

export default Login;