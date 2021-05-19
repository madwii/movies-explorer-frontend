import "./Techs.css";
import Title from "../Title/Title";

function Techs() {
  return (
    <section className="techs" id="techs">
      <Title text="Технологии" />
      <div className="techs__description">
        <h2 className="techs__title">7 технологий</h2>
        <p className="techs__text">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
      </div>
      <div className="techs__icons">
        <div className="techs__icon">HTML</div>
        <div className="techs__icon">CSS</div>
        <div className="techs__icon">JS</div>
        <div className="techs__icon">React</div>
        <div className="techs__icon">Git</div>
        <div className="techs__icon">Express.js</div>
        <div className="techs__icon">mongoDB</div>
      </div>
    </section>
  );
}

export default Techs;
