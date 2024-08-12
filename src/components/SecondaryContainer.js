import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const moviesData = useSelector(state => state.movies)
  return (
    <div className='mt-0 lg:-mt-32 2xl:-mt-52 relative z-1'>
      <MovieList title ={"Now Playing"} movies={moviesData?.nowPlayingMovies} />
      <MovieList title ={"Trending"} movies={moviesData?.trendingVideo} />
      <MovieList title ={"Popular"} movies={moviesData?.popularMovies} />
      <MovieList title ={"Top Rated Movies"} movies={moviesData?.topRatedMovies} />

      {/* <MovieList title ={"Horror"} movies={moviesData?.nowPlayingMovies} /> */}
    </div>
  )
}

export default SecondaryContainer
