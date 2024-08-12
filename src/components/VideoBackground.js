import React from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ id }) => {
  useMovieTrailer({ id });
  const trailerVideo = useSelector((state) => state.movies?.trailerVideo);

  return (
    <div className="w-screen">
      <iframe
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&loop=1&controls=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className="w-screen aspect-video"

      ></iframe>
    </div>
  );
};

export default VideoBackground;
