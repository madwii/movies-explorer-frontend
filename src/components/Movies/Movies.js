import "./Movies.css";
import React, { useEffect, useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import { searchMovies, сalсStep } from "../../utils/utils";

function Movies({
  isLoading,
  setIsLoading,
  allMovies,
  getAllMovies,
  filterMovies,
  setFilterMovies,
  onAddLike,
  onRemoveLike,
  isMovieSaved,
  countMovies,
  setCountMovies,
}) {
  const [query, setQuery] = useState("");
  const [shortFilm, setShortFilm] = useState(false);
  const [empty, setEmpty] = useState(false);
  const [more, setMore] = useState(false);

  const getMovies = () => {
    setIsLoading(true);
    setTimeout(() => {
      setMore(false);
      const result = searchMovies(allMovies, query, shortFilm);
      if (!result.length) {
        setEmpty(true);
      }
      setFilterMovies(result);
      checkCount(result);
      setIsLoading(false);
    }, 500);
  };

  const handleFormSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      if (localStorage.allMovies) {
        getMovies();
      } else {
        getAllMovies();
      }
      setIsLoading(false);
    }, 500);
  };

  const handleShortMoviesClick = () => {
    setShortFilm(!shortFilm);
  };

  const handleMoreClick = () => {
    let stair = сalсStep();
    const start = countMovies.length;
    const end = start + stair;
    setCountMovies(countMovies.concat(filterMovies.slice(start, end)));
    if (end >= filterMovies.length) {
      setMore(false);
    }
  };

  const checkCount = (result) => {
    if (result.length > 12) {
      setMore(true);
      setCountMovies(result.slice(0, 12));
    } else {
      setMore(false);
      setCountMovies(result);
    }
  };

  useEffect(() => {
    getMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shortFilm]);

  return (
    <section className="movies">
      <SearchForm
        onSubmitSearch={handleFormSubmit}
        onFilterShort={handleShortMoviesClick}
        query={query}
        setQuery={setQuery}
        isLoading={isLoading}
      />
      {isLoading && <Preloader />}
      {countMovies.length ? (
        <MoviesCardList
          movies={countMovies}
          onAddLike={onAddLike}
          onRemoveLike={onRemoveLike}
          isMovieSaved={isMovieSaved}
        />
      ) : empty && !isLoading ? (
        <p className="movies__message">Ничего не найдено</p>
      ) : null}
      {more ? (
        <button
          type="button"
          className="movies__more-button"
          onClick={handleMoreClick}
        >
          Ещё
        </button>
      ) : null}
    </section>
  );
}

export default Movies;
