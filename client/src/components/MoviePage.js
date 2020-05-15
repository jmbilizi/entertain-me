import React, { useState } from "react";
import moment from "moment";
import "materialize-css";
import { Container, Row, Col, Footer, Card } from "react-materialize";

import { ContainerWrapper } from "../styles";
import NavBar from "./NavBar";
import ResultsCard from "./ResultsCard";
import SearchBar from "./SearchBar";
import Trailer from "./Trailer";
import Favorites from "./Favorites";
import Trending from "./Trending";
import RelatedCard from "./RelatedCard";
import API from "../utils/API";

const MoviePage = () => {
  const [state, setState] = useState({
    userInput: "",
    mediaType: "",
    // movie: "",
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
    tvUSRating: "",
    tvRating: "",
    network: "",
    networkLogo: "",
    studio: "",
    studioLogo: "",
    lastAir: "",
    lastEpisode: "",
    trendingMovies: "",
    relatedMovies: "",
    relatedInfo: "",
    related1: "",
    related2: "",
    related3: "",
    related4: "",
    related5: "",
    trendingTV1: "",
    trendingTV2: "",
    trendingTV3: "",
    trendingTV4: "",
    trendingTV5: "",
    trendingTVPoster1: "",
    trendingTVPoster2: "",
    trendingTVPoster3: "",
    trendingTVPoster4: "",
    trendingTVPoster5: "",
    relatedPoster1: "",
    relatedPoster2: "",
    relatedPoster3: "",
    relatedPoster4: "",
    relatedPoster5: "",
    logo: "",
  });

  //destructuring to use above values directly
  const {
    userInput,
    mediaType,
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
    tvUSRating,
    tvRating,
    network,
    networkLogo,
    studio,
    studioLogo,
    lastAir,
    lastEpisode,
    trendingMovies, //includes tv
    relatedInfo,
    related,
    related1,
    related2,
    related3,
    related4,
    related5,
    trendingTV1,
    trendingTV2,
    trendingTV3,
    trendingTV4,
    trendingTV5,
    trendingTVPoster1,
    trendingTVPoster2,
    trendingTVPoster3,
    trendingTVPoster4,
    trendingTVPoster5,
    relatedPoster1,
    relatedPoster2,
    relatedPoster3,
    relatedPoster4,
    relatedPoster5,
    title,
    logo,
    provider,
  } = state;

  const imageURL = "https://image.tmdb.org/t/p/w500";
  const trailerURL = "https://www.youtube.com/embed/";
  console.log(`state: `, state);
  async function mediaSearch(title) {
    if (!title) {
      return alert("Enter a movie or tv show title.");
    }

    const mainData = await API.mediaSearch(title);
    const searchInfo = mainData.data.results[0];
    const {
      userInput,
      id,
      mediaType,
      title: movieTitle,
      name,
      release_date,
      first_air_date,
      overview,
      poster_path,
      backdrop_path,
      vote_average,
      genre_ids,
    } = searchInfo;

    const trailerData = await API.trailerSearch(
      id,
      mainData.data.results[0].media_type
    );
    const trailerInfo = trailerData.data;
    const ratingData = await API.ratingSearch(
      id,
      mainData.data.results[0].media_type
    );
    const { results } = ratingData.data;
    const usRating = results.find((el) => el.iso_3166_1 === "US");
    const rating =
      mainData.data.results[0].media_type === "movie"
        ? usRating.release_dates.find((el) => el.certification !== "")
        : usRating.rating;

    const relatedData = await API.relatedSearch(
      id,
      mainData.data.results[0].media_type
    );
    const relatedInfo = relatedData.data;

    const tvTrailerData = await API.tvTrailerSearch(
      id,
      mainData.data.results[0].media_type
    );
    const tvTrailerInfo = tvTrailerData.data;
    const trendingMoviesData = await API.trendingMoviesSearch();
    const trendingMoviesInfo = trendingMoviesData.data;
    const trendingTVData = await API.trendingTVSearch();
    const trendingTVInfo = trendingTVData.data;

    // console.log({ mainData, id, trailerData, ratingData });
    console.log("main call: ", mainData);
    console.log("trailer call: ", trailerData);
    console.log("TV trailer call: ", tvTrailerData);
    console.log("rating call: ", ratingData);
    console.log("related movies call: ", relatedData);
    console.log("related TV call: ", relatedData);
    console.log("trending movies call: ", trendingMoviesData);
    console.log("trending TV call: ", trendingTVData);
    console.log("tvTrailerInfo: ", tvTrailerInfo.data);
    console.log("relatedData.data ", relatedData.data);
    console.log("relatedInfo", relatedInfo.results[0].name);
    console.log("trendingTVPoster1: ", trendingTVPoster1);
    console.log("lastEpisode: ", lastEpisode);
    console.log("THIS: ", usRating.rating);

    setState({
      ...state,
      mediaType: searchInfo.media_type,
      movie: movieTitle,
      tvShow: name,
      release: release_date,
      first_air: first_air_date,
      overview: overview,
      poster: `${imageURL}` + poster_path,
      id: id,
      backdrop: `${imageURL}` + backdrop_path,
      genre:
        mainData.data.results[0].media_type === "movie"
          ? trailerInfo.genres[0].name + ", " + trailerInfo.genres[1].name
          : searchInfo.genre,
      genre: trailerInfo.genres[0].name + ", " + trailerInfo.genres[1].name,
      score: vote_average,
      trailerPath: trailerInfo.videos.results[0].key,
      trailer: `${trailerURL}` + trailerInfo.videos.results[0].key,
      tvTrailer: `${trailerURL}` + tvTrailerInfo.videos.results[0].key,
      runtime: mainData.data.results[0].media_type === "movie" ? trailerInfo.runtime : trailerInfo.episode_run_time[0],
      tvRating: tvUSRating.rating,
      rating:
        mainData.data.results[0].media_type === "movie"
          ? rating.certification
          : usRating.rating,
      logo:
        mainData.data.results[0].media_type === "movie"
          ? `${imageURL}` + tvTrailerInfo.production_companies[1].logo_path
          : `${imageURL}` + tvTrailerInfo.networks[0].logo_path,
      network:
        mainData.data.results[0].media_type === "tv"
          ? tvTrailerInfo.networks[0].name
          : "tv studio icon goes here",
      studio:
        mainData.data.results[0].media_type === "movie"
          ? trailerInfo.production_companies[0].name
          : "movie studio icon goes here",

      provider:
        mainData.data.results[0].media_type === "tv" ? { network } : { studio },

      lastAir:
        mainData.data.results[0].media_type === "tv"
          ? tvTrailerInfo.last_air_date
          : " no last air date for movies",
      lastEpisode:
        mainData.data.results[0].media_type === "tv"
          ? tvTrailerInfo.last_episode_to_air.name
          : " no last episode for movies",

      related1:
        mainData.data.results[0].media_type === "tv"
          ? relatedInfo.results[0].name
          : relatedInfo.results[0].original_title,
      related2:
        mainData.data.results[0].media_type === "tv"
          ? relatedInfo.results[1].name
          : relatedInfo.results[1].original_title,
      related3:
        mainData.data.results[0].media_type === "tv"
          ? relatedInfo.results[2].name
          : relatedInfo.results[2].original_title,
      related4:
        mainData.data.results[0].media_type === "tv"
          ? relatedInfo.results[3].name
          : relatedInfo.results[3].original_title,
      related5:
        mainData.data.results[0].media_type === "tv"
          ? relatedInfo.results[4].name
          : relatedInfo.results[4].original_title,

      relatedPoster1: `${imageURL}` + relatedInfo.results[0].poster_path,
      relatedPoster2: `${imageURL}` + relatedInfo.results[1].poster_path,
      relatedPoster3: `${imageURL}` + relatedInfo.results[2].poster_path,
      relatedPoster4: `${imageURL}` + relatedInfo.results[3].poster_path,
      relatedPoster5: `${imageURL}` + relatedInfo.results[4].poster_path,

      trendingTV1: trendingTVInfo.results[0].name,
      trendingTV2: trendingTVInfo.results[1].name,
      trendingTV3: trendingTVInfo.results[2].name,
      trendingTV4: trendingTVInfo.results[3].name,
      trendingTV5: trendingTVInfo.results[4].name,

      trendingTVPoster1: `${imageURL}` + trendingTVInfo.results[0].poster_path,
      trendingTVPoster2: `${imageURL}` + trendingTVInfo.results[1].poster_path,
      trendingTVPoster3: `${imageURL}` + trendingTVInfo.results[2].poster_path,
      trendingTVPoster4: `${imageURL}` + trendingTVInfo.results[3].poster_path,
      trendingTVPoster5: `${imageURL}` + trendingTVInfo.results[4].poster_path,
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
          <Col m={6}>
            {id ? (
              <ResultsCard
                title={movie}
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
                network={network}
                provider={provider}
                logo={logo}
                lastAir={lastAir}
                lastEpisode={lastEpisode}
              />
            ) : (
              <Card className="blue-grey darken-1 discover" title="DISCOVER">
                This area will display info about a random movie or TV show that
                is related to one of the user's favorites.
              </Card>
            )}
          </Col>
          <Col m={3}>
            {!mediaType ? (
              <Card className="blue-grey darken-1 discover" title="DISCOVER">
                This area will display trailers for the discovery feature.
              </Card>
            ) : (
              console.log(".")
            )}

            {mediaType === "tv" ? (
              <Trailer trailer={tvTrailer} />
            ) : (
              console.log("No movie trailer available.")
            )}
            {mediaType === "movie" ? (
              <Trailer trailer={trailer} />
            ) : (
              console.log("No TV trailer available.")
            )}
            {id ? (
              <RelatedCard
                className="related"
                heading={"RELATED"}
                related1={related1}
                related2={related2}
                related3={related3}
                related4={related4}
                related5={related5}
                relatedPoster1={relatedPoster1}
                relatedPoster2={relatedPoster2}
                relatedPoster3={relatedPoster3}
                relatedPoster4={relatedPoster4}
                relatedPoster5={relatedPoster5}
              />
            ) : (
              <Card
                className="blue-grey darken-1 discover-related"
                title="RELATED"
              >
                This area will display a list of movies or TV shows related to
                the discovery feature.
              </Card>
              // console.log('No Title entered.')
            )}
          </Col>
          <Col m={3}>
            <Favorites heading={"MY MOVIES"} />
            <br></br>
            <Favorites heading={"MY SHOWS"} />
          </Col>
        </Row>

        <Row>
          <Col m={6}>
            <Trending
              trendingTV1={trendingTV1}
              trendingTV2={trendingTV2}
              trendingTV3={trendingTV3}
              trendingTV4={trendingTV4}
              trendingTV5={trendingTV5}
              trendingTVPoster1={trendingTVPoster1}
              trendingTVPoster2={trendingTVPoster2}
              trendingTVPoster3={trendingTVPoster3}
              trendingTVPoster4={trendingTVPoster4}
              trendingTVPoster5={trendingTVPoster5}
            />
          </Col>
          <Col m={3}></Col>
          <Col m={3}></Col>
        </Row>

        <Footer
          className="red"
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

export default MoviePage;
