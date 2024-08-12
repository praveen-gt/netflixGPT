import Header from "./Header";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import { useSelector } from "react-redux";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { usePopularMovies } from "../hooks/usePopularMovies";
import { useTopRatedMovies } from "../hooks/useTopRatedMovies";
import { useTrendingVideo } from "../hooks/useTrendingVideo";
import GPTSearch from "./GptSearch.js";

const Browse = () => {
  const showGptSearch = useSelector((state) => state.search.showSearchPage);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useTrendingVideo();

  return (
    <div className="bg-black">
      <Header />
      {showGptSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}

      <div className="flex bg-black items-center justify-center py-2">
        <p className="text-white text-lg">
          Netflix India {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default Browse;
