import React from "react";
import "./MoviesCarde.css";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";

const MoviesCarde = ({ movie, handelDelet, id }) => {
  return (
    <div className="cardes">
      <Link to={`/movieDetails/${movie.id}`} className="appLink">
        <img src={movie.image} alt={movie.name} />
        <h1>
          {movie.name} {movie.date}{" "}
          <Rating name="read-only" value={movie.rating} readOnly />
        </h1>
      </Link>
      <button id="deleted" onClick={() => handelDelet(id)}>
        Deleted
      </button>
    </div>
  );
};

export default MoviesCarde;
