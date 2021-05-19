import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

function MoviesCardList({ cards }) {
  // обновлять страницу
  const countCards =
    window.screen.width > 768
    ? 12 
    : window.screen.width > 520 
    ? 8
    : 5;
  const cardElements = 
  cards.slice(0, countCards).map((movie) => (
    <li key={movie.id}>
      <MoviesCard data={movie} />
    </li>
  ));
  return <ul className="movies-cards">{cardElements}</ul>;
}

export default MoviesCardList;
