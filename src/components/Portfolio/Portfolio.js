import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <a
        className="portfolio__link"
        href="https://github.com/madwii/how-to-learn"
        target="_blank"
        rel="noreferrer"
      >
        Одностраничный сайт<span className="portfolio__arrow">&#8599;</span>
      </a>
      <a
        className="portfolio__link"
        href="https://github.com/madwii/russian-travel"
        target="_blank"
        rel="noreferrer"
      >
        Адаптивный сайт<span className="portfolio__arrow">&#8599;</span>
      </a>
      <a
        className="portfolio__link"
        href="https://github.com/madwii/react-mesto-api-full"
        target="_blank"
        rel="noreferrer"
      >
        Одностраничное приложение<span className="portfolio__arrow">&#8599;</span>
      </a>
    </section>
  );
}

export default Portfolio;
