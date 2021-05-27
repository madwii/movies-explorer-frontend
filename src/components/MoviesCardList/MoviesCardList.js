import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";


function MoviesCardList({ movies, onAddLike, onRemoveLike, isMovieSaved }) {
  return (
    <section className="movies-cards">
      {movies.map((movie) => {
        return (
          <MoviesCard
            movie={movie}
            onAddLike={onAddLike}
            onRemoveLike={onRemoveLike}
            isMovieSaved={isMovieSaved}
            key={movie.id ?? movie._id}
          />
        );
      })}
    </section>
  );
}

export default MoviesCardList;