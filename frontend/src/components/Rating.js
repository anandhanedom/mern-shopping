import React from "react";
import { getStars } from "../utils";

const Rating = ({ value = 0, text, color = "#f8e825" }) => {
  return (
    <div className="rating">
      <span>{getStars(value, color)}</span>
      <span>{text && text}</span>
    </div>
  );
};

export default Rating;
