export const API_OPTION = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNWU1NDU0NDk2NDVkMjZjOGYwM2QzNzFiZjkyNmUyOCIsIm5iZiI6MTcwNTUyMjczNS42NDcsInN1YiI6IjY1YTgzNjJmNTVjMWY0MDEzMTg5OWFhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GEJ3bvjlKjBKXTorpcJt9SuFzz-JSl8fvlJxvmISMX4",
  },
};

export const NOW_PLAYING_MOVIES_API =
  "https://api.themoviedb.org/3/movie/now_playing?page=1";

export const MOVIES_IMAGES_URL = "https://image.tmdb.org/t/p/w300";

export const MOVIES_POSTER_CDN = "https://image.tmdb.org/t/p/w500";

export const POPULAR_MOVIES_API =
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=2";

export const TOP_RATED_MOVIES_API =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

export const UPCOMING_MOVIES_API =
  "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";