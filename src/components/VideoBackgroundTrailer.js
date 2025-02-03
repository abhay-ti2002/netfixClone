import React from "react";
import useBackgroundTrailerApi from "../customHooks/useBackgroundTrailerApi";
import { useSelector } from "react-redux";

const VideoBackgroundTrailer = (props) => {
  const trailerKey = useSelector((state) => state.trailer.bgTrailer?.key);
  const { movieId } = props;

  useBackgroundTrailerApi(movieId);
  return (
    <iframe
      className="w-full h-screen"
      src={
        "https://www.youtube.com/embed/" +
        trailerKey +
        "?version=3&autoplay=1&loop=1&mute=1&controls=0&disablekb=1"
      }
      title="YouTube video player"
    ></iframe>
  );
};

export default VideoBackgroundTrailer;
