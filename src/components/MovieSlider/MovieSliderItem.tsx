import React from "react";
import { getImageUrl } from "../../utils/helper";

const MovieSliderItem: React.FC<MovieSliderItemProps> = ({
  updateSelectedMovieSliderId,
  selectedMovieSliderId,
  movie,
  index,
}) => {
  const isSelectedMovie = index === selectedMovieSliderId;

  const handleSelectedMovie = () => {
    updateSelectedMovieSliderId(index);
  };

  return (
    <div
      className="select-none hover:cursor-pointer  transition-all"
      onClick={handleSelectedMovie}
    >
      <div className="img-container relative z-[99] w-16">
        <img
          className="w-full rounded-md hover:cursor-pointer"
          src={getImageUrl(movie.poster_path)}
          alt={`${movie.original_title}`}
        />

        <div
          className={`absolute inset-0 rounded-lg ${
            isSelectedMovie ? "" : "bg-[rgba(0,0,0,0.5)]"
          } hover:bg-transparent transition-all`}
        ></div>
      </div>
    </div>
  );
};

export default MovieSliderItem;
