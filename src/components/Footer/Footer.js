import "./Footer.css";
import { Route, Switch } from "react-router-dom";

function Footer() {
  return (
    <Switch>
    <Route exact path="/">
    <footer className="footer">
      <p className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__box">
        <p className="footer__copyright">&copy; 2021</p>
        <section className="footer__list">
          <a
            className="footer__link"
            href="https://praktikum.yandex.ru/profile/web/"
            target="_blank"
            rel="noreferrer"
          >
            Яндекс.Практикум
          </a>
          <a
            className="footer__link"
            href="https://github.com/madwii/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="footer__link"
            href="https://t.me/madkor"
            target="_blank"
            rel="noreferrer"
          >
            Telegram
          </a>
        </section>
      </div>
    </footer>
    </Route>
    <Route path={["/movies", "/saved-movies"]}>
    <footer className="footer">
      <p className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__box">
        <p className="footer__copyright">&copy; 2021</p>
        <section className="footer__list">
          <a
            className="footer__link"
            href="https://praktikum.yandex.ru/profile/web/"
            target="_blank"
            rel="noreferrer"
          >
            Яндекс.Практикум
          </a>
          <a
            className="footer__link"
            href="https://github.com/madwii/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="footer__link"
            href="https://t.me/madkor"
            target="_blank"
            rel="noreferrer"
          >
            Telegram
          </a>
        </section>
      </div>
    </footer>
    </Route>
    </Switch>
  );
}

export default Footer;
