import React from "react";
import MoviesCards from "./MoviesCards";

const MovieList = (props) => {
  const { title, movies } = props;

  return (
    <div className="p-5">
      <h1 className="font-semibold font-sans">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-hidden ">
        <div>
          <div className="flex overflow-hidden">
            {movies?.map((movie) => (
              <MoviesCards key={Math.random()} poster={movie.poster_path} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
