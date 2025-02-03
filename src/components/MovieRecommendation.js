import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const MovieRecommendation = () => {
  const moviesData = useSelector((store) => store.movies);
  console.log(moviesData);
  if (!moviesData) {
    return;
  }

  return (
    <div className="h-screen overflow-y-visible scrollbar-hidden text-white bg-black">
      <div className="-mt-40 z-30 relative">
        <MovieList title={""} movies={moviesData?.nowPlayingMovies} />
        <MovieList
          title={"POPULAR MOVOIES"}
          movies={moviesData?.popularMovies}
        />
        <MovieList
          title={"TOP RATED MOVIES"}
          movies={moviesData?.topRatedMovies}
        />
        <MovieList
          title={"UOCOMING MOVIES"}
          movies={moviesData?.upcomingMovies}
        />
      </div>
    </div>
  );
};

export default MovieRecommendation;
