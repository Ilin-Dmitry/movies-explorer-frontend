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
                {/* <p className='aboutme__text page__text'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p> */}
                <p className='aboutme__text page__text'>Я родился в Саратове, в настоящее время живу в Батуми. Закончил исторический факультет СГУ. С 2010 года работал торговым представителем. С 2015 &ndash; гитарист в местных рок-группах.</p>
                <p className='aboutme__text page__text'>Во время пандемии пришел к мысли о смене сферы деятельности, начал верстать сайты. В 2021 году поступил в Яндекс Практикум на специальность &laquo;Веб-разработчик&raquo;. В октябре 2022г. успешно завершил обучение.</p>
                <p className='aboutme__text page__text'>Изучаю английский язык, люблю музыку, литературу и путешествия. В настоящее время ищу работу в области веб-разработки.</p>
                <div className='aboutme__socials'>
                  {/* <a className='aboutme__social' href='https://facebook.com' target='_blank' rel='noreferrer'>Facebook</a> */}
                  <a className='aboutme__social' href='https://github.com/Ilin-Dmitry' target='_blank' rel='noreferrer'>Github</a>
                </div>
              </div>
              <img className='aboutme__photo' src={studentAvatar} alt="аватар"></img>
            </div>
          </div>
        </section>
  )
}

export default AboutMe;