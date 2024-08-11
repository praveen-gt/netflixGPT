import { useDispatch } from "react-redux";
import { ADD_NOW_PLAYING_MOVIES } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

export const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(ADD_NOW_PLAYING_MOVIES(json.results));
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []); 

};
