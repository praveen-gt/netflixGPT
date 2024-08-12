import React from "react";
import { TMBD_IMAGE_URL } from "../utils/constants";

const MovieCard = ({ data }) => {
  if (!data.poster_path) return null;
  return (
    <div className="w-36 md:w-48 pr-4">
      <img src={`${TMBD_IMAGE_URL}${data.poster_path}`} alt={data.title} />
    </div>
  );
};

export default MovieCard;
