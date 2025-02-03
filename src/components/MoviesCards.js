import React from "react";
import { MOVIES_POSTER_CDN } from "../utils/constant";

const MoviesCards = (props) => {
  const { poster } = props;

  return (
    <div className="w-40  h-24 overflow-hidden   rounded-sm mr-2 hover:scale-150 hover:transition-all">
      <img className="w-40 aspect-square" src={MOVIES_POSTER_CDN + poster} alt="poster" />
    </div>
  );
};

export default MoviesCards;
