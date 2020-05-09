import React, { useState, useEffect } from 'react';
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
    release: '',
    description: '',
    poster: '',
    movieID: null,
    backdrop: '',
    genre: '',
    score: '',
    tvShow: '',
    movieTrailer: '',
    input: '',
    tvShow: ''
  })

  //destructuring to use above values directly
  const { movie, release, description, poster, movieID, backdrop, tvShow, movieTrailer, genre, score, input } = state;

  const posterURL = 'https://image.tmdb.org/t/p/w500/';
  const backdropURL = 'https://image.tmdb.org/t/p/w500/';
  const trailerURL = 'https://www.youtube.com/embed/'

  const mediaSearch = title => {
    if (!title) {
      return alert("Enter a movie or tv show title.");
    }

    API.mediaSearch(movie)
      .then(res => {
        console.log(res);
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
        })
      })
      .catch(err => console.log(err))
  }

  const movieTrailerSearch = title => {
    // if (!title) {
    //   return alert("Enter a movie title.");
    // }

    API.movieTrailerSearch(movieID)
      .then(res => {
        console.log(res);
        setState({
          movieTrailer: `${trailerURL}` + res.data.results[0].key,
        })
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
    // movieTrailerSearch(movieID);
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
            score={score}
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
