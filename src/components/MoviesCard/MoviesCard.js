import "./MoviesCard.css";
import React from "react";
import { useLocation } from "react-router";

function MoviesCard({ movie, onAddLike, onRemoveLike, isMovieSaved }) {
  const { nameRU, duration, trailer, image } = movie;
  const { pathname } = useLocation();
  const isSaved = isMovieSaved(movie);
  const isMoves = pathname === "/movies";
  const isSavedMovies = pathname === "/saved-movies";

  function durationFormat(duration) {
    const hours = Math.trunc(duration / 60);
    const minutes = duration % 60;
    return `${hours > 0 ? hours + "ч " : ""}${minutes}м`;
  }

  const handleLikeClick = (e) => {
    if (!isSaved) {
      onAddLike(movie);
    } else {
      onRemoveLike(movie);
    }
  };

  const handleRemoveClick = (e) => {
    onRemoveLike(movie);
  };

  return (
    <div className="movies-card">
      <div className="movies-card__caption">
        <p className="movies-card__title">{nameRU}</p>

        {isMoves && (
          <button
            className={`movies-card__button ${
              isSaved ? "movies-card__button_active" : ""
            }`}
            onClick={handleLikeClick}
          >
            {" "}
          </button>
        )}

        {isSavedMovies && (
          <button
            className={`movies-card__button movies-card__button_delete`}
            onClick={handleRemoveClick}
          >
            {" "}
          </button>
        )}
      </div>
      <p className="movies-card__time">{durationFormat(duration)}</p>
      <a href={trailer} target="_blank" rel="noopener noreferrer">
        <img className="movies-card__image" src={image} alt="Обложка" />
      </a>
    </div>
  );
}

export default MoviesCard;
