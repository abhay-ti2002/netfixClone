import React from "react";
import { useSelector } from "react-redux";
import VideoBackgroundTitle from "./VideoBackgroundTitle";
import VideoBackgroundTrailer from "./VideoBackgroundTrailer";

const MainContainer = () => {
  const nowPlayingMoviesData = useSelector(
    (state) => state.movies?.nowPlayingMovies
  );

  if (nowPlayingMoviesData === null) {
    return;
  }

  const oneMovie = nowPlayingMoviesData[0];

  const { original_title, overview, poster_path, id } = oneMovie;

  //   console.log(oneMovie);
  return (
    <div>
      <VideoBackgroundTitle
        title={original_title}
        overview={overview}
        poster={poster_path}
      />
      <div>
        <VideoBackgroundTrailer movieId={id} />
      </div>
    </div>
  );
};

export default MainContainer;
