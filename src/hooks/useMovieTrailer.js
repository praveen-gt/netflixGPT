import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { ADD_TRAILER_VIDEO } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = ({ id }) => {
  const dispatch = useDispatch();
  const getVideoData = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    const filteredVideos = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filteredVideos.length ? filteredVideos[0] : json.results[0];
    dispatch(ADD_TRAILER_VIDEO(trailer));
  };

  useEffect(() => {
    getVideoData();
  }, []);
};

export default useMovieTrailer;
