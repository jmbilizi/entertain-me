import React, { useState } from 'react';
import moment from 'moment';
import 'materialize-css';
import { Container, Row, Col, Footer } from 'react-materialize';

import { ContainerWrapper } from './styles'
import NavBar from './components/NavBar';
import ResultsCard from './components/ResultsCard';
import SearchBar from './components/SearchBar';
import Trailer from './components/Trailer';
import Favorites from './components/Favorites';
import Trending from './components/Trending';
import API from './utils/API'

const App = () => {

  const [state, setState] = useState({
    movie: '',
    tvShow: '',
    release: '',
    description: '',
    poster: '',
    movieID: '',
    tvID: '',
    backdrop: '',
    genre: '',
    score: '',
    movieTrailer: '',
    runtime: '',
    rating: '',
    trendingMovies: '',
    related: '',
    input: ''
  })

  //destructuring to use above values directly
  const { movie, tvShow, release, description, poster, movieID, tvID, backdrop, genre, score, movieTrailer, runtime, rating, trendingMovies, related } = state;

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
          ...state,
          movie: res.data.results[0].title,
          tvShow: res.data.results[0].name,
          release: res.data.results[0].release_date,
          description: res.data.results[0].overview,
          poster: `${posterURL}` + res.data.results[0].poster_path,
          movieID: res.data.results[0].id,
          tvID: res.data.results[0].id,
          backdrop: `${backdropURL}` + res.data.results[0].backdrop_path,
          genre: res.data.results[0].genre_ids[0],
          score: res.data.results[0].vote_average,
        }, console.log(`state:`, state));
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
        console.log(`state:`, state);
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
    <ContainerWrapper>
      <Container>
        <Row>
          <NavBar
          />
        </Row>

        <Row>
          <Col m={4}></Col>
          <Col m={4}>
            <SearchBar
              movie={movie}
              handleInputChange={handleInputChange}
              handleFormSubmit={handleFormSubmit}
            />
          </Col>
          <Col m={4}></Col>
        </Row>

        <Row>
          <Col m={2}></Col>
          <Col m={4}>
            {movieID ? (
              <ResultsCard
                title={movie}
                title2={tvShow}
                release={moment(release, 'YYYY-MM-DD').format('MMM Do, YYYY')}
                description={description}
                poster={poster}
                movieID={movieID}
                backdrop={backdrop}
                genre={genre}
                score={score}
                runtime={runtime}
                rating={rating}
                related={related}
              />
            ) : (console.log('No title entered.'))}
            {/* <InputField
            placeholder="Enter a movie or tv show title"
            handleInputChange={handleInputChange}
            handleFormSubmit={handleFormSubmit}
            input={input}
          /> */}
          </Col>
          <Col m={4}>
            <Favorites
              heading={'My Movies'}
              favoriteType={'Movie'}
            /><br></br>
            <Favorites
              heading={'My TV Shows'}
              favoriteType={'TV show'}
            />
          </Col>
          <Col m={2}></Col>
        </Row>

        <Row>
          <Col m={4}></Col>
          <Col m={4}>
            {movieID || tvID ? (
              <Trailer
                movieTrailer={movieTrailer}
              />
            ) : (console.log('No video available.'))}

          </Col>
          <Col m={4}></Col>
        </Row>

        <Row>
          <Col m={2}></Col>
          <Col m={8}>
            
              <Trending />


          </Col>
          <Col m={2}></Col>
        </Row>

        <Footer
          className="example"
          copyrights="© 2020 The 4 Loops"
          links={<ul><li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li><li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li><li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li><li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li></ul>}
          moreLinks={<a className="grey-text text-lighten-4 right" href="#!">More Links</a>}
        >
          <h5 className="white-text">
            Footer Content
  </h5>
          <p className="grey-text text-lighten-4">
            You can use rows and columns here to organize your footer content.
  </p>
        </Footer>
      </Container>
    </ContainerWrapper>
  );
}

export default App;
