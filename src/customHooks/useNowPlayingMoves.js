import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NOW_PLAYING_MOVIES_API } from "../utils/constant";
import { API_OPTION } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/store/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  //TMBD API CALL Now Playing
  const getNowPlayingMovies = async () => {
    const data = await fetch(NOW_PLAYING_MOVIES_API, API_OPTION);

    const json = await data.json();
    // console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []); //eslint-disable-line
};

export default useNowPlayingMovies;
