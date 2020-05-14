import axios from "axios";
// const apiKey = process.env.REACT_APP_API_KEY;
const apiKey = "32a9ec1e57a6839fcf26fa958bca7cf5";

export default {
  // API call for initial tv or movie details -- need to credit
  mediaSearch: function (title) {
    return axios.get(
      `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&query=${title}&page=1&include_adult=false`
    );
  },
  movieSearch: function (userInput) {
    return axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${userInput}&page=1&include_adult=false`
    );
  },
  // API call for movie poster, trailers and runtime -- need to credit
  trailerSearch: function (id) {
    return axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US&append_to_response=videos`
    );
  },
  // API call for movie rating -- need to credit
  movieRatingSearch: function (id) {
    return axios.get(
      `https://api.themoviedb.org/3/movie/${id}/release_dates?api_key=${apiKey}`
    );
  },
  // API call for similar movies -- need to credit
  relatedMoviesSearch: function (id) {
    return axios.get(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${apiKey}&language=en-US&page=1`
    );
  },

    // API call for tv ratings -- need to credit
    tvRatingSearch: function (id) {
      return axios.get(
        `https://api.themoviedb.org/3/tv/${id}/content_ratings?api_key=${apiKey}&language=en-US`
      );
    },

  // API call for similar movies -- need to credit
  relatedTVSearch: function (id) {
    return axios.get(
      `https://api.themoviedb.org/3/tv/${id}/similar?api_key=${apiKey}&language=en-US&page=1`
    );
  },
  // API call for TV poster, trailers, network and next episode -- need to credit
  tvTrailerSearch: function (tvID) {
    return axios.get(
      `https://api.themoviedb.org/3/tv/${tvID}?api_key=${apiKey}&language=en-US&append_to_response=videos`
    );
  },
  // API call for trending movies -- need to credit
  trendingMoviesSearch: function () {
    return axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`
    );
  },
  // API call for trending tv shows -- need to credit
  trendingTVSearch: function () {
    return axios.get(
      `https://api.themoviedb.org/3/trending/tv/week?api_key=${apiKey}`
    );
  },
  // API call for trending celebrities  -- need to cache every 30 min
  trendingCelebritySearch: function () {
    return axios.get(
      `https://celebritybucks.com/developers/export/JSON?limit=10`
    );
  },
};
