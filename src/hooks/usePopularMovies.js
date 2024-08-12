import { useDispatch, useSelector } from "react-redux";
import { ADD_POPULAR_MOVIES } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

export const usePopularMovies = () => {
  const dispatch = useDispatch();

  const popularMovies = useSelector((store) => store.movies.popularMovies);

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(ADD_POPULAR_MOVIES(json.results));
  };
  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []); 

};
