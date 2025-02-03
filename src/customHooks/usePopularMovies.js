import { useEffect } from "react";
import { API_OPTION, POPULAR_MOVIES_API } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/store/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getpopularMovies = async () => {
    try {
      const data = await fetch(POPULAR_MOVIES_API, API_OPTION);

      const json = await data.json();
      console.log(json);
      dispatch(addPopularMovies(json.results));
    } catch (error) {
      console.error("Error to fetch data in popular movies", error);
    }
  };

  useEffect(() => {
    getpopularMovies();
  }, []); //eslint-disable-line
};

export default usePopularMovies;
