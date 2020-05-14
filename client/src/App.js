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
    overview: "",
    poster: "",
    id: "",
    backdrop: "",
    genre: "",
    score: "",
    trailer: "",
    tvTrailer: "",
    runtime: "",
    rating: "",
    trendingMovies: "",
    relatedMovies: "",
    relatedTV: ""
  });

  //destructuring to use above values directly
  const {
    userInput,
    movie,
    tvShow,
    release,
    first_air,
    overview,
    poster,
    id,
    backdrop,
    genre,
    score,
    trailer,
    tvTrailer,
    trailerPath,
    runtime,
    rating,
    trendingMovies,
    relatedMovies,
    relatedTV,
    related,
    title,
  } = state;

  const posterURL = "https://image.tmdb.org/t/p/w500";
  const backdropURL = "https://image.tmdb.org/t/p/w500";
  const trailerURL = "https://www.youtube.com/embed/";
  console.log(`state: `, state);
  async function mediaSearch(userInput) {
    if (!userInput) {
      return alert("Enter a movie or tv show title.");
    }

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
    // const trailerData = await API.trailerSearch(id);
    // const trailerInfo = trailerData.data;
    // const ratingData = await API.movieRatingSearch(id);
    // const { results } = ratingData.data;
    // const usRating = results.find((el) => el.iso_3166_1 === "US");
    // const rating = usRating.release_dates.find((el) => el.certification !== "");
    // const relatedData = await API.relatedMoviesSearch(id);
    // const relatedInfo = relatedData.data;
    const relatedTVData = await API.relatedTVSearch(id);
    const relatedTVInfo = relatedTVData.data;
    // const tvTrailerData = await API.tvTrailerSearch(id);
    // const tvTrailerInfo = tvTrailerData.data;
    const trendingMoviesData = await API.trendingMoviesSearch();
    const trendingMoviesInfo = trendingMoviesData.data;
    const trendingTVData = await API.trendingTVSearch();
    const trendingTVInfo = trendingTVData.data;

    // console.log({ mainData, id, trailerData, ratingData });
    console.log("main call: ", mainData);
    // console.log("trailer call: ", trailerData);
    // console.log("rating call: ", ratingData);
    // console.log("related movies call: ", relatedData);
    console.log("related TV call: ", relatedTVData);
    console.log("trending movies call: ", trendingMoviesData);
    console.log("trending TV call: ", trendingTVData);
 

    setState({
      ...state,
      movie: movieTitle,
      tvShow: name,
      release: release_date,
      first_air: first_air_date,
      overview: overview,
      poster: `${posterURL}` + poster_path,
      id: id,
      backdrop: `${backdropURL}` + backdrop_path,
      genre: genre_ids[0],
      score: vote_average,
      // trailerPath: trailerInfo.videos.results[0].key,
      // trailer: `${trailerURL}` + trailerInfo.videos.results[0].key,
      // tvTrailer: `${trailerURL}` + tvTrailerInfo.videos.results[0].key,
      // runtime: trailerInfo.runtime,
      // rating: rating.certification,
      // relatedMovies: relatedInfo.results,
      relatedTV: relatedTVInfo.results,
    });
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
                release2={moment(first_air, "YYYY-MM-DD").format(
                  "MMM Do, YYYY"
                )}
                overview={overview}
                poster={poster}
                id={id}
                backdrop={backdrop}
                genre={genre}
                score={score}
                runtime={runtime}
                rating={rating}
                relatedMovies={relatedMovies}
                relatedTV={relatedTV}
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
            {trailer ? (
              <Trailer trailer={trailer} />
            ) : (
              console.log("No movie trailer available.")
            )}
            {tvTrailer ? (
              <Trailer trailer={tvTrailer} />
            ) : (
              console.log("No TV trailer available.")
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
