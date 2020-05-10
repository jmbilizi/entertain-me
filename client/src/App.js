import React, { useState } from 'react';
import moment from 'moment';
import 'materialize-css';
import { Container, Row, Col } from 'react-materialize';

import InputField from './components/InputField';
import MovieCard from './components/MovieCard';
import SearchBar from './components/SearchBar';
import Trailer from './components/Trailer';
import API from './utils/API'

const App = () => {

  const [state, setState] = useState({
    movie: '',
    tvShow: '',
    release: '',
    description: '',
    poster: '',
    movieID: '',
    backdrop: '',
    genre: '',
    score: '',
    movieTrailer: '',
    runtime: '',
    rating: '',
    trendingMovies: '',
    related: '',
    input: '',


  })

  //destructuring to use above values directly
  const { movie, tvShow, release, description, poster, movieID, backdrop, genre, score, movieTrailer, runtime, rating, trendingMovies, related, input } = state;

  const posterURL = 'https://image.tmdb.org/t/p/w500';
  const backdropURL = 'https://image.tmdb.org/t/p/w500';
  const trailerURL = 'https://www.youtube.com/embed/'

  const mediaSearch = title => {
    if (!title) {
      return alert("Enter a movie or tv show title.");
    }

    API.mediaSearch(movie)
      .then(res => {
        console.log(`main call`, res);
        setState({
          movie: res.data.results[0].title,
          tvShow: res.data.results[0].name,
          release: res.data.results[0].release_date,
          description: res.data.results[0].overview,
          poster: `${posterURL}` + res.data.results[0].poster_path,
          movieID: res.data.results[0].id,
          backdrop: `${backdropURL}` + res.data.results[0].backdrop_path,
          genre: res.data.results[0].genre_ids[0],
          score: res.data.results[0].vote_average,
        });
        return API.movieTrailerSearch(res.data.results[0].id);
      })
      .then(res => {
        console.log(`API call for movie trailer and runtime info: `, res);
        // setState({
        //   ...state,
        //   movieTrailer: `${trailerURL}` + res.data.videos.results[0].key,
        //   runtime: res.data.runtime
        // })
        return API.movieRatingSearch(res.data.id);
      })
      .then(res => {
        console.log(`API call for movie rating info:`, res);
        // setState({
        //   ...state,
        //   rating: res.data.results[0].release_dates[0].certification
        // })
        return API.relatedMoviesSearch(res.data.id);
      })
      .then(res => {
        console.log(`API call for related movies`, res);
        // setState({
        //   ...state,
        //   related: res.data.results
        // })
        return API.trendingMoviesSearch();
      })
      .then(res => {
        console.log(`API call for trending movies info:`, res);
        // setState({
        //   ...state,
        //   trendingMovies: res.data.results,
        // })
      })
      .catch(err => console.log(err))
  }

  const handleInputChange = e => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  }

  const handleFormSubmit = e => {
    e.preventDefault();
    mediaSearch(movie);
  }

  return (
    <Container>
      <Row>
        <Col m={2}></Col>
        <Col m={8}>
          <SearchBar
            movie={movie}
            handleInputChange={handleInputChange}
            handleFormSubmit={handleFormSubmit}
          />
          <MovieCard
            title={movie}
            title2={tvShow}
            release={moment(release, 'YYYY-MM-DD').format('MMM Do, YYYY')}
            description={description}
            poster={poster}
            movieID={movieID}
            backdrop={backdrop}
            genre={genre}
            runtime={runtime}
            score={score}
            rating={rating}
            related={related}
          />
          <Trailer
            movieTrailer={movieTrailer}
          />
          {/* <InputField
            placeholder="Enter a movie or tv show title"
            handleInputChange={handleInputChange}
            handleFormSubmit={handleFormSubmit}
            input={input}
          /> */}
        </Col>
        <Col m={2}></Col>
      </Row>
    </Container>
  );
}

export default App;
