import React, { useState } from "react";

import Star from "./Star";
import { StarsRatingProps } from "./types";

function StarsRating({ size, fill, maxRating }: StarsRatingProps) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  return (
    <div>
      {Array.from({ length: maxRating }).map((_, idx) => (
        <Star
          key={idx + 1}
          size={size}
          fill={fill}
          index={idx + 1}
          rating={rating}
          setRating={setRating}
          hoverRating={hoverRating}
          setHoverRating={setHoverRating}
        />
      ))}
      <span>{rating}</span>
    </div>
  );
}

export default StarsRating;
