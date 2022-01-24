import React from "react";
import { moviesData } from "../../constant/data";
import Rating from "@mui/material/Rating";
const movieDetails = ({ match, history }) => {
  const findMovie = moviesData.find((el) => el.id === +match.params.id);

  return (
    <>
      {findMovie ? (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <div style={{ width: "100x" }}>
            <h1 style={{ color: "white" }}>
              {findMovie.name} {findMovie.date}{" "}
              <Rating name="read-only" value={findMovie.rating} readOnly />
            </h1>

            <img
              style={{ width: "50%" }}
              src={findMovie.image}
              alt={findMovie.name}
            />
          </div>
          <div style={{ width: "200" }}>
            <h1 style={{ color: "white" }}> description:</h1>
            <h3 style={{ color: "white" }}>{findMovie.description}</h3>

            <button
              style={{
                width: "8%",
                height: 30,
                backgroundColor: "#800000",
                color: "white",
                fontSize: 15,
                borderRadius: 4,
              }}
              onClick={() => history.goBack()}
            >
              back
            </button>
          </div>
        </div>
      ) : (
        <h1 style={{ color: "red" }}>
          Sorry there is no movies{" "}
          <button
            style={{
              width: "8%",
              height: 30,
              backgroundColor: "#800000",
              color: "white",
              fontSize: 15,
              borderRadius: 4,
            }}
            onClick={() => history.goBack()}
          >
            back
          </button>
        </h1>
      )}
    </>
  );
};

export default movieDetails;
