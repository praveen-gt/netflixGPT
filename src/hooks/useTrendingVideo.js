import { useDispatch, useSelector } from "react-redux";
import { ADD_TRENDING_VIDEO } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

export const useTrendingVideo = () => {
  const dispatch = useDispatch();

  const trendingVideo = useSelector((store) => store.movies.trendingVideo);

  const getTrending = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/all/day?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    console.log('popular data' + json.results)
    dispatch(ADD_TRENDING_VIDEO(json.results));
  };
  useEffect(() => {
    !trendingVideo && getTrending();
  }, []); 

};
