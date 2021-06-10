import React from "react";

const getStars = (value) => {
  const stars = [1, 2, 3, 4, 5].map((number) => (
    <i
      className={
        value >= number
          ? "fas fa-star"
          : number - value === Math.abs(0.5)
          ? "fas fa-star-half-alt"
          : "far fa-star"
      }
    ></i>
  ));

  return stars;
};

const Rating = ({ value, text }) => {
  return (
    <div className="rating">
      <span>{getStars(value)}</span>
      <span>{text && text}</span>
    </div>
  );
};

export default Rating;
