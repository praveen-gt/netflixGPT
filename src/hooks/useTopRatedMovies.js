import { useDispatch, useSelector } from "react-redux";
import { ADD_TOP_RATED_MOVIES } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

export const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);

  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log('popular data' + json.results)
    dispatch(ADD_TOP_RATED_MOVIES(json.results));
  };
  useEffect(() => {
    !topRatedMovies && getTopRatedMovies();
  }, []); 

};
