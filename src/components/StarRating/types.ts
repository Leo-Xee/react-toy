export type StarsRatingProps = {
  size: number;
  fill: string;
  maxRating: number;
};

export type StarProps = {
  size: number;
  fill: string;
  index: number;
  rating: number;
  setRating: React.Dispatch<React.SetStateAction<number>>;
  hoverRating: number;
  setHoverRating: React.Dispatch<React.SetStateAction<number>>;
};
