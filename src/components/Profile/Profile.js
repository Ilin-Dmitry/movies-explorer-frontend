import './Profile.css';
import Header from '../Header/Header';

function Profile() {
  return (
    <section className='profile'>
      <Header />
      <div className='profile__container page__container'>
        <h3 className='profile__title'>Привет, Виталий!</h3>
        <form className='profile__form'>
          <div className='profile__input-wrapper'>
            <label for="profile-name" className='profile__input-label'>Имя</label>
            <input className='profile__form-input' id="profile-name" placeholder='Виталий' />
          </div>
          <div className='profile__input-wrapper'>
            <label for="profile-mail" className='profile__input-label'>E-mail</label>
            <input className='profile__form-input' id="profile-mail" placeholder='pochta@yandex.ru' />
          </div>
        </form>
        <a className='profile__btn profile__edit-btn' href='ya.ru'>Редактировать</a>
        <a className='profile__btn profile__signout-btn' href='ya.ru'>Выйти из аккаунта</a>
      </div>
    </section>
  )
}

export default Profile;