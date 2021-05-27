import "./SavedMovies.css";
import React, { useState, useEffect } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import { searchMovies, сalсStep } from "../../utils/utils";

function SavedMovies({
  isLoading,
  setIsLoading,
  savedMovies,
  getSavedMovies,
  filterSavedMovies,
  setFilterSavedMovies,
  onAddLike,
  onRemoveLike,
  isMovieSaved,
  countSavedMovies,
  setCountSavedMovies,
}) {
  const [query, setQuery] = useState("");
  const [shortFilm, setShortFilm] = useState(false);
  const [empty, setEmpty] = useState(false);
  const [more, setMore] = useState(false);

  const handleFormSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      getMovies();
      setIsLoading(false);
    }, 500);
  };

  const handleShortMoviesClick = () => {
    setShortFilm(!shortFilm);
    getMovies();
  };

  const handleMoreClick = () => {
    let stair = сalсStep();
    const start = countSavedMovies.length;
    const end = start + stair;
    setCountSavedMovies(
      countSavedMovies.concat(filterSavedMovies.slice(start, end))
    );
    if (end >= filterSavedMovies.length) {
      setMore(false);
    }
  };

  const getMovies = () => {
    setIsLoading(true);
    setTimeout(() => {
      setMore(false);
      const result = searchMovies(savedMovies, query, shortFilm);
      if (!result.length) {
        setEmpty(true);
      }
      setFilterSavedMovies(result);
      checkCount(result);
      setIsLoading(false);
    }, 500);
  };

  const checkCount = (result) => {
    if (result.length > 12) {
      setMore(true);
      setCountSavedMovies(result.slice(0, 12));
    } else {
      setMore(false);
      setCountSavedMovies(result);
    }
  };

  useEffect(() => {
    getMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [savedMovies]);

  useEffect(() => {
    getMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shortFilm]);

  useEffect(() => {
    if (!localStorage.savedMovies) {
      getSavedMovies();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="saved-movies">
      <SearchForm
        onSubmitSearch={handleFormSubmit}
        onFilterShort={handleShortMoviesClick}
        query={query}
        setQuery={setQuery}
        isLoading={isLoading}
      />
      {isLoading && <Preloader />}
      {countSavedMovies.length ? (
        <MoviesCardList
          movies={countSavedMovies}
          onAddLike={onAddLike}
          onRemoveLike={onRemoveLike}
          isMovieSaved={isMovieSaved}
        />
      ) : empty && !isLoading ? (
        <p className="saved-movies__message">Ничего не найдено</p>
      ) : null}
      {more ? (
        <button
          type="button"
          className="saved-movies__more-button"
          onClick={handleMoreClick}
        >
          Ещё
        </button>
      ) : null}
    </section>
  );
}

export default SavedMovies;
