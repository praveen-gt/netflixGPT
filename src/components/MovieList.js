import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log("movies", movies);
  if (movies === null) return;
  return (
    <div className="px-6 py-4">
      <h1 className="text-white font-bold text-2xl mb-4">{title}</h1>
      <div className="flex overflow-x-scroll overscroll-x-contain hide-scrollbar">
        <div className="flex ">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} data={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
