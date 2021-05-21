import "./MoviesCard.css";
import React from "react";
import { useLocation } from "react-router";

function MoviesCard({ data }) {
  const { pathname } = useLocation();
  const { nameRU, duration, image, saved } = data;
  return (
    <div className="movies-card">
      <div className="movies-card__caption">
        <p className="movies-card__title">{nameRU}</p>
        <button
          className={`movies-card__button 
          ${saved && pathname === "/movies" && "movies-card__button_active"}
          ${saved && (pathname === "/movies"
              ? "movies-card__button_active"
              : "movies-card__button_delete")}`}>
        </button>
      </div>
      <p className="movies-card__time">{`${Math.floor(duration / 60)} м`}</p>
      <img className="movies-card__image" src={image.url} alt="Обложка" />
    </div>
  );
}

export default MoviesCard;
