import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((state) => state.movies?.nowPlayingMovies);
  if (!movies) return; // early return
  const mainMovie = movies[0];
  const { title, overview,  id} = mainMovie;
  console.log(mainMovie);
  return (
    <div className="pt-[30%] bg-black md:pt-0">
      <VideoTitle title={title} overview={overview} />
      <VideoBackground id={id} />
    </div>
  );
};

export default MainContainer;
