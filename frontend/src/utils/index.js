export const getStars = (value, color) => {
  const stars = [1, 2, 3, 4, 5].map((number) => (
    <i
      style={{ color }}
      className={
        value >= number
          ? "fas fa-star"
          : value >= number - 0.5
          ? "fas fa-star-half-alt"
          : "far fa-star"
      }
    ></i>
  ));

  return stars;
};
