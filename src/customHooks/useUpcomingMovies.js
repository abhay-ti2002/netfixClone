import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/store/movieSlice";
import { API_OPTION, UPCOMING_MOVIES_API } from "../utils/constant";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    try {
      const data = await fetch(UPCOMING_MOVIES_API, API_OPTION);
      const json = await data.json();
      dispatch(addUpcomingMovies(json.results));
    } catch (error) {
      console.error("error fetch a Api", error);
    }
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []); //eslint-disable-line
};

export default useUpcomingMovies;
