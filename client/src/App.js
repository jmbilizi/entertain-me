import React, { useState } from "react";
import moment from "moment";
import "materialize-css";
import { Container, Row, Col, Footer } from "react-materialize";

import { ContainerWrapper } from "./styles";
import NavBar from "./components/NavBar";
import ResultsCard from "./components/ResultsCard";
import SearchBar from "./components/SearchBar";
import InputField from "./components/InputField";
import Trailer from "./components/Trailer";
import Favorites from "./components/Favorites";
import Trending from "./components/Trending";
import API from "./utils/API";

const App = () => {
  const [state, setState] = useState({
    userInput: "",
    movie: "",
    tvShow: "",
    release: "",
    description: "",
    poster: "",
    id: "",
    backdrop: "",
    genre: "",
    score: "",
    trailer: "",
    runtime: "",
    rating: "",
    trendingMovies: "",
    related: "",
  });

  //destructuring to use above values directly
  const {
    userInput,
    movie,
    tvShow,
    release,
    first_air,
    description,
    poster,
    id,
    backdrop,
    genre,
    score,
    trailer,
    trailerPath,
    runtime,
    rating,
    trendingMovies,
    related,
    title
  } = state;

  const posterURL = "https://image.tmdb.org/t/p/w500";
  const backdropURL = "https://image.tmdb.org/t/p/w500";
  const trailerURL = "https://www.youtube.com/embed/";
  console.log(`initial state:`, state);
  async function mediaSearch(userInput) {
    
    if (!userInput) {
      return alert("Enter a movie or tv show title.");
    }
    // console.log({ mainData, movieId, trailerData, ratingData });
    const mainData = await API.mediaSearch(userInput);
    const movieInfo = mainData.data.results[0];
    const {
      id,
      title: movieTitle,
      name,
      release_date,
      first_air_date,
      overview,
      poster_path,
      backdrop_path,
      vote_average,
      genre_ids,
    } = movieInfo;
    const trailerData = await API.trailerSearch(id);
    const trailInfo = trailerData.data
    const ratingData = await API.movieRatingSearch(id);
     const { results } = ratingData.data;
   const usRating = results.find( el => el.iso_3166_1 === 'US' )
   const rating = usRating.release_dates.find( el => el.certification !== '' )
   

    setState({
      ...state,
      movie: movieTitle,
      tvShow: name,
      release: release_date,
      first_air: first_air_date,
      description: overview,
      poster: `${posterURL}` + poster_path,
      id: id,
      backdrop: `${backdropURL}` + backdrop_path,
      genre: genre_ids[0],
      score: vote_average,
      trailerPath: trailInfo.videos.results[0].key,
      trailer: `${trailerURL}` + trailInfo.videos.results[0].key,
      runtime: trailInfo.runtime,
      rating:  rating.certification
    });

    //   return API.trailerSearch( id);
    // })
 
    //   return API.movieRatingSearch(res.data.id);
    // })
    // .then(res => {
    //   console.log(`API call for movie rating info:`, res);
    //   // setState({
    //   //   ...state,
    //   //   rating:  release_dates[0].certification
    //   // })
    //   return API.relatedMoviesSearch(res.data.id);
    // })
    // .then(res => {
    //   console.log(`API call for related movies`, res);
    //   // setState({
    //   //   ...state,
    //   //   related: res.data.results
    //   // })
    //   return API.trendingMoviesSearch();
    // })
    // .then(res => {
    //   console.log(`API call for trending movies info:`, res);

    //   // setState({
    //   //   ...state,
    //   //   trendingMovies: res.data.results,
    //   // })
    //   console.log(`final state:`, state);
    // })
    // .catch(err => console.log(err))
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    mediaSearch(userInput);
  };

  return (
    <ContainerWrapper>
      <Container>
        <Row>
          <NavBar />
        </Row>

        <Row>
          <Col m={4}></Col>
          <Col m={4}>
            <SearchBar
              handleInputChange={handleInputChange}
              handleFormSubmit={handleFormSubmit}
            />
          </Col>
          <Col m={4}></Col>
        </Row>

        <Row>
          <Col m={2}></Col>
          <Col m={4}>
            {id ? (
              <ResultsCard
                title={movie}
                title2={tvShow}
                release={moment(release, "YYYY-MM-DD").format("MMM Do, YYYY")}
                first_air={moment(first_air, "YYYY-MM-DD").format(
                  "MMM Do, YYYY"
                )}
                description={description}
                poster={poster}
                id={id}
                backdrop={backdrop}
                genre={genre}
                score={score}
                runtime={runtime}
                rating={rating}
                related={related}
              />
            ) : (
              console.log("No title entered.")
            )}
          </Col>
          <Col m={4}>
            <Favorites heading={"My Movies"} favoriteType={"Movie"} />
            <br></br>
            <Favorites heading={"My TV Shows"} favoriteType={"TV show"} />
          </Col>
          <Col m={2}></Col>
        </Row>

        <Row>
          <Col m={4}></Col>
          <Col m={4}>
            {trailerPath ? (
              <Trailer trailer={trailer} />
            ) : (
              console.log("No video available.")
            )}
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
          links={
            <ul>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Link 1
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Link 2
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Link 3
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Link 4
                </a>
              </li>
            </ul>
          }
          moreLinks={
            <a className="grey-text text-lighten-4 right" href="#!">
              More Links
            </a>
          }
        >
          <h5 className="white-text">Footer Content</h5>
          <p className="grey-text text-lighten-4">
            You can use rows and columns here to organize your footer content.
          </p>
        </Footer>
      </Container>
    </ContainerWrapper>
  );
};

export default App;
