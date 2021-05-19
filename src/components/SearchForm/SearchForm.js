import "./SearchForm.css";
import searchIcon from "../../images/search-icon.svg";
import { useState } from "react";

function SearchForm({ search, inputValueString }) {
  const [error, setError] = useState();
  const [shortFilms, setShortFilms] = useState(false);
  const [inputValue, setInputValue] = useState(inputValueString);

  function clearError() {
    setError(null);
  }

  function handleSwitch(e) {
    setShortFilms(!shortFilms);
  }

  function handleSearch(e) {
    clearError();

    e.preventDefault();
    if (!inputValue) {
      setError("Введите название");
    } else if (inputValue.length < 2) {
      setError("Необходимо ввести больше двух букв");
    } else {
      search(inputValue, shortFilms); //build in progress
    }
  }

  function handleChange(e) {
    clearError();
    setInputValue(e.target.value);
  }

  return (
    <form className="search-form">
      <fieldset className="search-form__search">
        <img
          src={searchIcon}
          alt="Картинка поиска"
          className="search-form__icon"
        />
        <input
          className="search-form__input"
          placeholder="Фильм"
          type="search"
          value={inputValue || ""}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="search-form__button"
          onClick={handleSearch}
        >
          Найти
        </button>
      </fieldset>
      {error && <p className="search-form__error">{error}</p>}
      <hr className="search-form__line" />
      <label className="switch">
        <input className="switch__default" type="checkbox" />
        <span
          className="switch__slider"
          onChange={handleSwitch}
          checked={shortFilms || false}
        />
        <span className="switch__label">Короткометражки</span>
      </label>
    </form>
  );
}

export default SearchForm;
