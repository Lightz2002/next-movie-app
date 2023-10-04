import React from "react";
import MovieListItem from "./MovieListItem";

const MovieList: React.FC<MovieListProps> = ({ title, datas }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4  gap-8 items-start py-8">
      <h3 className="font-bold text-xl col-span-full">{title}</h3>

      {datas.map(data => (
        <MovieListItem key={data.id} movie={data} />
      ))}
    </div>
  );
};

export default MovieList;
