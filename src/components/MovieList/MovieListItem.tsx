import React from "react";
import { getDateYear, getImageUrl } from "../../utils/helper";
import Link from "next/link";
import Image from "next/image";

const MovieListItem: React.FC<MovieListItemProps> = ({ movie }) => {
  return (
    <div className="max-w-32 hover:transform hover:scale-105 hover:cursor-pointer transition-all">
      <Link href={`/movie/${movie.id.toString()}`}>
        <div className="img-container h-1/2">
          <Image
            width={100}
            height={100}
            className="w-full h-full object-cover rounded-md"
            src={getImageUrl(movie.poster_path)}
            alt={`${movie.original_title}`}
          />
        </div>

        <div>
          <h5 className="mb-1 truncate ">{movie.original_title}</h5>

          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-3 h-3 text-yellow-400 me-1"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-xs">{movie.vote_average}</span>

            <span className="text-xs ml-auto bg-gray-600 text-white px-2">
              {getDateYear(movie.release_date)}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieListItem;
