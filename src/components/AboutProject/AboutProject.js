import "./AboutProject.css";
import Title from "../Title/Title";

function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <Title text="О проекте" />
      <div className="about-project__text-box">
        <div className="about-project__text-column">
          <h3 className="about-project__header">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__text-column">
          <h3 className="about-project__header">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__chart">
      <div className='about-project__one-part'>1 неделя</div>
        <div className='about-project__one-part about-project__one-part_dark-theme'>4 недели</div>
        <div className='about-project__caption'>Back-end</div>
        <div className='about-project__caption'>Front-end</div>
      </div>
    </section>
  );
}

export default AboutProject;
