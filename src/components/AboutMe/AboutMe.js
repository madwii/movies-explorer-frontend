import "./AboutMe.css";
import Title from "../Title/Title";
import photo from "../../images/photo.svg";

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <Title text="Студент" />
      <div className="about-me__box">
        <img className="about-me__photo" src={photo} alt="student" />
        <div className="aboute-me__text-box">
          <h2 className="about-me__title">Виталий</h2>
          <p className="about-me__caption">Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__text">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
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
