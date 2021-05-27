import "./SearchForm.css";
import searchIcon from "../../images/search-icon.svg";
import React, { useState } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({
  onSubmitSearch,
  onFilterShort,
  query,
  setQuery,
  isLoading,
}) {
  const [error, setError] = useState();

  const handleSearchFormSubmit = (e) => {
    e.preventDefault();
    if (!error) {
      onSubmitSearch();
    }
  };

  function handleOnChange(e) {
    setQuery(e.target.value);
  }

  const handleSearchClick = (e) => {
    if (!query.length) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <form className="search-form" onSubmit={handleSearchFormSubmit} action="#">
      <fieldset className="search-form__search">
        <img
          src={searchIcon}
          alt="Картинка поиска"
          className="search-form__icon"
        />
        <input
          className="search-form__input"
          placeholder="Фильм"
          type="text"
          value={query}
          autoComplete="off"
          disabled={isLoading}
          onChange={handleOnChange}
        />

        <button
          type="submit"
          disabled={isLoading}
          className="search-form__button"
          onClick={handleSearchClick}
        >
          Найти
        </button>
      </fieldset>

      <span className="search-form__error">
        {error ? "Нужно ввести ключевое слово" : ""}
      </span>
      <hr className="search-form__line" />
      <FilterCheckbox onFilter={onFilterShort} />
    </form>
  );
}

export default SearchForm;
