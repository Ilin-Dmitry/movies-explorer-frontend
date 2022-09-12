import './Techs.css';

function Techs() {
    return (
        <section className='techs'>
          <div className='techs__container page__container'>
            <h4 className='techs__section-name page__section-name'>Технологии</h4>
            <h3 className='techs__section-header page__section-header'>7 технологий</h3>
            <p className='techs__text page__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <ul className='techs__elements'>
              <li className='techs__element'>HTML</li>
              <li className='techs__element'>CSS</li>
              <li className='techs__element'>JS</li>
              <li className='techs__element'>React</li>
              <li className='techs__element'>Git</li>
              <li className='techs__element'>Express.js</li>
              <li className='techs__element'>mongoDB</li>
            </ul>
          </div>
        </section>
    )
}

export default Techs;
