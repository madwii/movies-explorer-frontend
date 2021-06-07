export const сalсStep = () => {
  const resolution = window.screen.availWidth;
  let step = 3;
  if (resolution <= 768 && resolution > 480) {
    step = 2;
  } else if (resolution <= 480 && resolution >= 320) {
    step = 5;
  }
  return step;
};

export const searchMovies = (movies, query, shortFilm) => {
  return movies.filter((movie) => {
    if (!shortFilm) {
      return (
        movie.nameRU.toLowerCase().indexOf(query) >= 0 ||
        movie.nameEN?.toLowerCase().indexOf(query) >= 0
      );
    } else {
      return (
        (movie.nameRU.toLowerCase().indexOf(query) >= 0 ||
          movie.nameEN?.toLowerCase().indexOf(query) >= 0) &&
        movie.duration <= 40
      );
    }
  });
};
