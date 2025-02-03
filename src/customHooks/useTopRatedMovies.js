import { useEffect } from "react";
import { API_OPTION, TOP_RATED_MOVIES_API } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/store/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    try {
      const data = await fetch(TOP_RATED_MOVIES_API, API_OPTION);
      const json = await data.json();
      dispatch(addTopRatedMovies(json.results));
    } catch (error) {
      console.error("Error fetching top rated api", error);
    }
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []); // eslint-disable-line
};

export default useTopRatedMovies;
