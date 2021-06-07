import "./AboutMe.css";
import Title from "../Title/Title";
import photo from "../../images/svg-editor-image.svg";

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <Title text="Студент" />
      <div className="about-me__box">
        <img className="about-me__photo" src={photo} alt="student" />
        <div className="aboute-me__text-box">
          <h2 className="about-me__title">Григорий</h2>
          <p className="about-me__caption">Фронтенд-разработчик, 24 года</p>
          <p className="about-me__text">
            Я родился и живу в Москве, закончил факультет АТ МАДИ. Я люблю чтение, а ещё увлекаюсь
            активным отдыхом. Недавно начал кодить. С 2019 года работал в компании "ИнтерСтрой". После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <div className="aboute-me__links">
            <a
              className="about-me__link"
              href="https://t.me/madkor"
              target="_blank"
              rel="noreferrer"
            >
              Telegram
            </a>
            <a
              className="about-me__link"
              href="https://github.com/madwii/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
