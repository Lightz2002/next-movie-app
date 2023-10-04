"use client";

import MovieList from "@/components/MovieList/MovieList";
import MovieSlider from "@/components/MovieSlider/MovieSlider";
import {
  getGenres,
  getNowPlayingMovies,
  getTopRatedMovies,
  getWeeklyTrendingMovies,
} from "@/utils/api";
import { getDateYear, getImageUrl } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  type GenreType = { genres: Genre[] };

  type MoviePaginationOrNull = MoviePagination | null;

  const [nowPlayingMoviesJson, setNowPlayingMoviesJson] =
    useState<MoviePaginationOrNull>(null);
  const [weeklyTrendingMoviesJson, setWeeklyTrendingMoviesJson] =
    useState<MoviePaginationOrNull>(null);
  const [topRatedMoviesJson, setTopRatedMoviesJson] =
    useState<MoviePaginationOrNull>(null);
  const [genresJson, setGenresJson] = useState<GenreType | null>(null);

  useEffect(() => {
    getNowPlayingMovies()
      .then(data => setNowPlayingMoviesJson(data))
      .catch(error =>
        console.error("Error fetching Now Playing Movies:", error)
      );

    getWeeklyTrendingMovies()
      .then(data => setWeeklyTrendingMoviesJson(data))
      .catch(error =>
        console.error("Error fetching Weekly Trending Movies:", error)
      );

    getTopRatedMovies()
      .then(data => setTopRatedMoviesJson(data))
      .catch(error => console.error("Error fetching Top Rated Movies:", error));

    getGenres()
      .then(data => setGenresJson(data))
      .catch(error => console.error("Error fetching Genres:", error));
  }, []);

  const [selectedMovieSliderId, setSelectedMovieSliderId] = useState(1);

  return (
    <div className="md:ml-48">
      {nowPlayingMoviesJson?.results ? (
        nowPlayingMoviesJson?.results[selectedMovieSliderId] && (
          <div className="p-4 px-8 relative rounded-tl-md ">
            <div className="absolute inset-0 bg-gray-800"></div>

            {/* Slider Movie */}
            <div className="relative rounded-lg h-[400px]">
              {/* Selected Slider Meta Data */}
              <div className="movie-metadata absolute z-50 top-0 left-0 p-12  select-none">
                <h1 className="font-sans font-bold text-5xl text-white mb-2">
                  {
                    nowPlayingMoviesJson?.results[selectedMovieSliderId]
                      .original_title
                  }
                </h1>

                <div className="text-gray-400 flex mb-4 items-center">
                  <span>
                    {getDateYear(
                      nowPlayingMoviesJson?.results[selectedMovieSliderId]
                        .release_date
                    )}
                  </span>

                  <div className="ms-2 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-yellow-400 me-1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <span>
                      {
                        nowPlayingMoviesJson?.results[selectedMovieSliderId]
                          .vote_average
                      }
                    </span>
                  </div>
                </div>

                {/* genres */}
                <ul className="list-none flex my-4 font-bold">
                  {nowPlayingMoviesJson?.results[
                    selectedMovieSliderId
                  ].genre_ids.map(genre_id => (
                    <li key={genre_id} className="text-gray-300 me-2">
                      {
                        genresJson?.genres?.find(genre => genre.id === genre_id)
                          ?.name
                      }
                    </li>
                  ))}
                </ul>

                <div className="movie-description w-3/5">
                  <p className="text-gray-300 mb-4">
                    {nowPlayingMoviesJson?.results[
                      selectedMovieSliderId
                    ].overview
                      .slice(0, 100)
                      .concat("...")}
                  </p>

                  <Link
                    href={`/movie/${nowPlayingMoviesJson?.results[selectedMovieSliderId].id}`}
                    className="w-24 bg-teal-700 flex justify-center items-center px-4 py-2 rounded-md text-white hover:bg-teal-800 "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 me-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>View</span>
                  </Link>
                </div>
              </div>

              {/* Selected Slider Image */}
              <Image
                width={1024}
                height={1024}
                className="w-full h-full object-cover rounded-lg select-none"
                src={getImageUrl(
                  nowPlayingMoviesJson?.results[selectedMovieSliderId]
                    .backdrop_path
                )}
                alt=""
              />

              {/* Slider List  */}
              <MovieSlider
                selectedMovieSliderId={selectedMovieSliderId}
                updateSelectedMovieSliderId={setSelectedMovieSliderId}
                datas={nowPlayingMoviesJson?.results}
              />

              {/* overlay */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[rgba(0,0,0,0.9)]"></div>
            </div>

            {/* Trending and Top Rated Movie */}
            <div className="relative text-white">
              {weeklyTrendingMoviesJson?.results && (
                <MovieList
                  title="Weekly Trending Movies"
                  datas={weeklyTrendingMoviesJson?.results}
                />
              )}
              {topRatedMoviesJson?.results && (
                <MovieList
                  title="Top Rated Movies"
                  datas={topRatedMoviesJson?.results}
                />
              )}
            </div>
          </div>
        )
      ) : (
        <div> Loading ...</div>
      )}
    </div>
  );
}
