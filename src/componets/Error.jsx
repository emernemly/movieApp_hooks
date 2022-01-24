import React from "react";

const Error = ({ history }) => {
  return (
    <div
      style={{
        color: "red",

        fontSize: "170px",
      }}
    >
      Error Error
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
  );
};

export default Error;
