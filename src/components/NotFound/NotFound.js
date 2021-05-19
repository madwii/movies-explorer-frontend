import "./NotFound.css";
import { useHistory } from "react-router-dom";

function NotFound() {
  const history = useHistory();
  function returnPath() {
    history.goBack();
  }

  return (
    <section className="not-found">
      <div className="not-found__title">
        <h1 className="not-found__number">404</h1>
        <p className="not-found__text">Страница не найдена</p>
      </div>
      <button className="not-found__return" to="/" onClick={returnPath}>
        Назад
      </button>
    </section>
  );
}

export default NotFound;
