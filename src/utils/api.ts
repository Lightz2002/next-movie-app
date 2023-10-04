import { handleError } from "./helper";

// const baseUrl = "http://localhost:3000";
const baseUrl = "https://api.tmdb-proxy.com.ryankenidy.site";

export async function getGenres() {
  try {
    const res = await fetch(`${baseUrl}/api/genre`);
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error: unknown) {
    handleError(error);
  }
}

export async function getNowPlayingMovies(options?: FetchParam) {
  try {
    const url = `${baseUrl}/api/movie/now_playing?language=${options?.language}&page=${options?.page}`;

    const response = await fetch(url);

    return response.json();
  } catch (error: unknown) {
    handleError(error);
  }
}

export async function getWeeklyTrendingMovies() {
  try {
    const url = `${baseUrl}/api/movie/trending`;

    const response = await fetch(url);

    return response.json();
  } catch (error: unknown) {
    handleError(error);
  }
}

export async function getTopRatedMovies(options?: FetchParam) {
  try {
    const url = `${baseUrl}/api/movie/top_rated?language=${options?.language}&page=${options?.page}`;

    const response = await fetch(url);

    return response.json();
  } catch (error: unknown) {
    handleError(error);
  }
}
