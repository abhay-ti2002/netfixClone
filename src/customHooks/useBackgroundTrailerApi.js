import { useEffect} from "react";
import { API_OPTION } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTrailer } from "../utils/store/trailerSlice";

const useBackgroundTrailerApi = (movie_id) => {
  const dispatch = useDispatch();

  const getBcakgroundVideo = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/" +
          movie_id +
          "/videos?language=en-US",
        API_OPTION
      );

      const json = await data.json();
      const findTrailers = json.results.filter(
        (bgMovie) => bgMovie.type === "Trailer"
      );
      const trailer = findTrailers.length ? findTrailers[1] : json.results[0];
      dispatch(addTrailer(trailer));
    } catch (error) {
      console.error("Error fetching background trailer", error);
    }
  };

  useEffect(() => {
    getBcakgroundVideo();
  }, []); //eslint-disable-line
};

export default useBackgroundTrailerApi;
