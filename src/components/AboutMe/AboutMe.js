import './AboutMe.css';
import studentAvatar from '../../images/student-avatar.jpg';


function AboutMe() {
  return (
    <section className='aboutme'>
          <div className='aboutme__container page__container'>
            <h4 className='aboutme__section-name page__section-name'>Студент</h4>
            <div className='aboutme__about'>
              <div className='aboutme__personals'>
                <h3 className='aboutme__section-header page__section-header'>Дмитрий</h3>
                <p className='aboutme__subheader'>Фронтенд-разработчик, 35 лет</p>
                <p className='aboutme__text page__text'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                <div className='aboutme__socials'>
                  <p  className='aboutme__social'>Facebook</p>
                  <p  className='aboutme__social'>Github</p>
                </div>
              </div>
              <img className='aboutme__photo' src={studentAvatar} alt="аватар"></img>
            </div>
          </div>
        </section>
  )
}

export default AboutMe;