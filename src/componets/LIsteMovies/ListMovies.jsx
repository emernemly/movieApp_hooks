import React from "react";
import MoviesCarde from "./MoviesCarde";

const ListMovies = ({ Movies, text, getRate, handelDelet }) => {
  const filtred = Movies.filter((film) =>
    film.name.toLowerCase().includes(text.toLowerCase())
  ).filter((film) => film.rating >= getRate);
  return (
    <div className="cardsList">
      {filtred.length ? (
        filtred.map((movie) => (
          <MoviesCarde movie={movie} id={movie.id} handelDelet={handelDelet} />
        ))
      ) : (
        <h1>There is no movies with this combination</h1>
      )}
    </div>
  );
};

export default ListMovies;
