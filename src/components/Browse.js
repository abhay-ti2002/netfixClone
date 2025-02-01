import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../customHooks/useNowPlayingMoves";
import MainContainer from "./MainContainer";
import MovieRecommendation from "./MovieRecommendation";

const Browse = () => {
  //eslint-disable-line
  useNowPlayingMovies();
  return (
    <div className="">
      <Header />
      <section>
        <MainContainer />
      </section>
      <section>
        <MovieRecommendation />
      </section>
    </div>
  );
};

export default Browse;
