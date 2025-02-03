import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../customHooks/useNowPlayingMoves";
import MainContainer from "./MainContainer";
import MovieRecommendation from "./MovieRecommendation";
import usePopularMovies from "../customHooks/usePopularMovies";
import useTopRatedMovies from "../customHooks/useTopRatedMovies";
import useUpcomingMovies from "../customHooks/useUpcomingMovies";

const Browse = () => {
  //eslint-disable-line
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div className="">
      <Header />
      <section>
        <MainContainer />
      </section>
      <div>
        <MovieRecommendation />
      </div>
    </div>
  );
};

export default Browse;
