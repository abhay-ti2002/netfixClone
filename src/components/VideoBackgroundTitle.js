import React from "react";
import { MOVIES_IMAGES_URL } from "../utils/constant";

const VideoBackgroundTitle = (props) => {
  const { title, overview, poster } = props;
  console.log(title);
  return (
    <div className="pt-36 absolute pl-5 z-30 text-white  bg-gradient-to-r from-black/80  h-screen right-0 left-0">
      <div className="pl-5 w-56">
        <img
          className="rounded-full w-44 h-44"
          src={MOVIES_IMAGES_URL + poster}
          alt="poster"
        />
      </div>
      <h1 className="text-5xl font-sans font-bold pl-4 w-1/2">{title}</h1>
      <p className="pt-3 w-2/3 text-sm pl-4">{overview}</p>
      <div className="flex justify-center items-center gap-2 w-56 mt-5 ">
        <div>
          <button className="flex justify-center text-black items-center gap-1 rounded-sm bg-white pt-2 pl-4 pr-4 outline- text-sm font-sans font-semibold pb-1">
            <span>
              <img
                className="w-4 h-4"
                src="/images/play-button-arrowhead.png"
                alt="icon"
              />
            </span>
            Play
          </button>
        </div>
        <div>
          <button className="flex justify-center items-center rounded-sm gap-1 bg-opacity-25  bg-slate-500 pl-2 pr-2 outline- text-sm font-sans font-semibold pb-1">
            <span>
              <img className="w-6 h-6 mt-1" src="/images/info.png" alt="icon" />
            </span>
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoBackgroundTitle;
