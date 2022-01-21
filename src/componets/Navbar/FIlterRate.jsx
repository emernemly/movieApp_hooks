import React from "react";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
const FIlterRate = ({ setgetRate }) => {
  return (
    <div>
      <Typography component="legend"></Typography>
      <Rating
        name="simple-controlled"
        onChange={(event, newValue) => {
          setgetRate(newValue);
        }}
      />
    </div>
  );
};

export default FIlterRate;
