import React from "react";
import { AiFillStar } from "react-icons/ai";

import { StarProps } from "./types";

const DEFAULT_COLOR = "#f1f3f5";

function Star({
  index,
  size,
  fill,
  rating,
  setRating,
  hoverRating,
  setHoverRating,
}: StarProps) {
  const fillColor = () => {
    let color = DEFAULT_COLOR;

    if (hoverRating >= index) {
      color = fill;
    } else if (!hoverRating && rating >= index) {
      color = fill;
    }
    return color;
  };

  return (
    <span
      onMouseEnter={() => setHoverRating(index)}
      onMouseLeave={() => setHoverRating(0)}
      onClick={() => setRating(index)}
      aria-hidden="true"
    >
      <AiFillStar size={size} fill={fillColor()} />
    </span>
  );
}

export default Star;
