import React from "react";
import Searchbar from "./Searchbar";
import GptMovieSuggestions from "./GptMovieSuggestions";

const GPTSearch = () => {
  return (
      <div className="flex flex-col items-center justify-center h-screen">
        <Searchbar />
        <GptMovieSuggestions />
      </div>
  );
};

export default GPTSearch;
