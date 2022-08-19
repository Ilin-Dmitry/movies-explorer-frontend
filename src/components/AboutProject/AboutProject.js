import './AboutProject.css';

function AboutProject() {
  return (
    <section className='aboutproject'>
      <div className='page__container aboutproject__container'>
        <h4 className='aboutproject__section-name page__section-name'>О проекте</h4>
        <div className="aboutproject__features">
          <div className='aboutproject__feature'>
            <h4 className='aboutproject__feature-heading'>Дипломный проект включал 5 этапов</h4>
            <p className='aboutproject__feature-text page__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div className='aboutproject__feature'>
            <h4 className='aboutproject__feature-heading'>На выполнение диплома ушло 5 недель</h4>
            <p className='aboutproject__feature-text page__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>
        <div className='aboutproject__feature-bar'>
            <div className='aboutproject__bar-cell aboutproject__bar-cell_1'>1 неделя</div>
            <div className='aboutproject__bar-cell aboutproject__bar-cell_2'>4 недели</div>
            <div className='aboutproject__bar-cell aboutproject__bar-cell_3'>Back-end</div>
            <div className='aboutproject__bar-cell aboutproject__bar-cell_4'>Front-end</div>
          </div>
      </div>
    </section>
  )
}

export default AboutProject;