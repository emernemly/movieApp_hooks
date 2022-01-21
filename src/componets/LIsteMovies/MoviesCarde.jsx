import React from "react";
import "./MoviesCarde.css";
import Rating from "@mui/material/Rating";

const MoviesCarde = ({ movie, handelDelet, id }) => {
  return (
    <div className="cardes">
      <img src={movie.image} alt={movie.name} />
      <h1>
        {movie.name} {movie.date}{" "}
        <Rating name="read-only" value={movie.rating} readOnly />
      </h1>
      <h3>{movie.description}</h3>
      <button id="deleted" onClick={() => handelDelet(id)}>
        Deleted
      </button>
    </div>
  );
};

export default MoviesCarde;
