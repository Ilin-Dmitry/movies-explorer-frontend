import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import './Profile.css';
import Header from '../Header/Header';
import { signoutUser, editUserProfile } from '../../utils/MainApi';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import SuccessMessage from '../SuccessMessage/SuccessMessage';
import { CurrentUserContext } from '../../contexts/CurrentUserContext'

function Profile({onLogout}) {
  const user = useContext(CurrentUserContext)

  const [ nameValidity, setNameValidity ] = useState('');
  const [ emailValidity, setEmailValidity ] = useState('');
  const [ currentUser, setCurrentUser ] = useState(user);
  const [ name, setName ] = useState({entered: false, name: currentUser.name});
  const [ email, setEmail ] = useState({entered: false, email: currentUser.email});
  const [ error, setError ] = useState('');
  const [ success, setSuccess ] = useState(false);
  const history = useHistory();

  function signout() {
    signoutUser()
      .then(() => {
        onLogout();
        history.push('./');
        localStorage.clear();
      })
      .catch((err) => {
        console.log('Ошибка ', err);
      })
  }

  function handleSetEmail(evt) {
    setSuccess('')
    setEmail({email: evt.target.value, entered: true})
  }

  function handleSetName(evt) {
    setSuccess('')
    setName({name: evt.target.value, entered: true})
  }

  function checkNameValidity() {
    if (name.name.match(/^[a-zа-яё -]{2,30}$/i)) {
      setNameValidity('valid')
    } else {
      setNameValidity('not valid')
    }
  }

  function checkEmailValidity() {
    if (email.email.match(/^[\w]{1}[\w-.]*@[\w-]+\.[a-z]{2,4}$/i)) {
      setEmailValidity('valid')
    } else {
      setEmailValidity('not valid')
    }
  }

  function setEditBtnActive() {
    const editBtn = document.querySelector('.profile__edit-btn')
    if ((nameValidity === 'valid' && emailValidity === 'valid') && (name.name !== currentUser.name || email.email !== currentUser.email)) {
      editBtn.classList.add('profile__edit-btn_active')
    } else {
      editBtn.classList.remove('profile__edit-btn_active')
    }
  }

  function handleEditFormSubmit(evt) {
    evt.preventDefault();
    if  (name.name !== currentUser.name || email.email !== currentUser.email)
    {
      setSuccess(false);
      setError('');
      if (nameValidity === 'valid' && emailValidity === 'valid') {
        editUserProfile({name: name.name, email: email.email})
          .then((res) => {
            if (res.status === 409) {
              setError('Пользователь с такой почтой уже зарегистрирован')
              throw new Error('Пользователь с такой почтой уже зарегестрирован')
            }
            res.json()
              .then((res) => {
                setCurrentUser({name: res.name, email: res.email})
                user.name = res.name;
                user.email = res.email;
                setSuccess(true);
              })
            })
          .catch(err => {
            console.log('err =>', err)
          })
      }
    }

  }

  useEffect(() => {
    if (currentUser.email && currentUser.name) {
      checkEmailValidity()
      checkNameValidity()
    }
    setEditBtnActive()
  })

  return (
    <section className='profile'>
      <Header />
      <main>
        <div className='profile__container page__container'>
          <h3 className='profile__title'>Привет, {currentUser.name}!</h3>
          <form id='editForm' className='profile__form' onSubmit={handleEditFormSubmit}>
            <div className='profile__input-wrapper'>
              <label htmlFor="profile-name" className='profile__input-label'>Имя</label>
              <input className='profile__form-input' id="profile-name" placeholder='Введите имя' value={name.name} onChange={handleSetName} type='text'/>
            </div>
            {nameValidity === 'not valid' && name.entered && <ErrorMessage errorText='Имя пользователя должно быть от 2 до 30 символов, содержать только латиницу, кириллицу, пробел или дефис.' />}
            <div className='profile__input-wrapper profile__input-wrapper_last'>
              <label htmlFor="profile-mail" className='profile__input-label'>E-mail</label>
              <input className='profile__form-input' id="profile-mail" placeholder='Введите e-mail' value={email.email} onChange={handleSetEmail} type='email' />
            </div>
            {emailValidity === 'not valid' && email.entered && <ErrorMessage errorText='Введен неверный email.' />}
            { error && <ErrorMessage errorText={error} />}
            { success && <SuccessMessage successText='Данные профиля успешно обновлены'/>}
          </form>
          <button form='editForm' className='profile__btn profile__edit-btn' type='submit' onClick={handleEditFormSubmit}>Редактировать</button>
          <button className='profile__btn profile__signout-btn' type='button' onClick={signout}>Выйти из аккаунта</button>
        </div>
      </main>
    </section>
  )
}

export default Profile;