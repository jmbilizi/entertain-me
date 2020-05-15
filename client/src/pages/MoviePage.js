import React, { useState } from 'react';
import moment from 'moment';
import 'materialize-css';
import {
  Container,
  Row,
  Col,
  Footer,
  Card
} from 'react-materialize';


import { ContainerWrapper } from '../styles';
// import NavBar from '../components/NavBar';
import ResultsCard from '../components/ResultsCard';
import SearchBar from '../components/SearchBar';
import Trailer from '../components/Trailer';
import Favorites from '../components/Favorites';
import Trending from '../components/Trending';
import RelatedCard from '../components/RelatedCard';
import API from '../utils/API';

const MoviePage = () => {
  const [state, setState] = useState({
    userInput: '',
    mediaType: '',
    movie: '',
    tvShow: '',
    release: '',
    overview: '',
    poster: '',
    id: '',
    backdrop: '',
    genre: '',
    score: '',
    trailer: '',
    tvTrailer: '',
    runtime: '',
    rating: '',
    tvUSRating: '',
    tvRating: '',
    network: '',
    networkLogo: '',
    studio: '',
    studioLogo: '',
    lastAir: '',
    lastEpisode: '',
    trendingMovies: '',
    relatedMovies: '',
    relatedTVInfo: '',
    relatedTV1: '',
    relatedTV2: '',
    relatedTV3: '',
    relatedTV4: '',
    relatedTV5: '',
    trendingTV1: '',
    trendingTV2: '',
    trendingTV3: '',
    trendingTV4: '',
    trendingTV5: '',
    trendingTVPoster1: '',
    trendingTVPoster2: '',
    trendingTVPoster3: '',
    trendingTVPoster4: '',
    trendingTVPoster5: '',
    relatedTVPoster1: '',
    relatedTVPoster2: '',
    relatedTVPoster3: '',
    relatedTVPoster4: '',
    relatedTVPoster5: '',
    logo: ''
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
    trendingMovies,
    relatedMovies,
    relatedTVInfo,
    related,
    relatedTV1,
    relatedTV2,
    relatedTV3,
    relatedTV4,
    relatedTV5,
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
    relatedTVPoster1,
    relatedTVPoster2,
    relatedTVPoster3,
    relatedTVPoster4,
    relatedTVPoster5,
    title,
    logo
  } = state;

  const imageURL = 'https://image.tmdb.org/t/p/w500';
  const trailerURL = 'https://www.youtube.com/embed/';
  console.log(`state: `, state);
  async function mediaSearch(title) {
    if (!title) {
      return alert('Enter a movie or tv show title.');
    }

    const mainData = await API.mediaSearch(title);
    const movieInfo = mainData.data.results[0];
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
    } = movieInfo;
    const trailerData = await API.trailerSearch(id, mainData.data.results[0].media_type);
    const trailerInfo = trailerData.data;
    const ratingData = await API.ratingSearch(id, mainData.data.results[0].media_type);
    // const { results } = ratingData.data;
    // const usRating = results.find((el) => el.iso_3166_1 === 'US');
    // const rating = usRating.release_dates.find((el) => el.certification !== '');
    const relatedData = await API.relatedMoviesSearch(id);
    const relatedInfo = relatedData.data;
    // const tvRatingData = await API.ratingSearch(id, mainData.data.results[0].media_type);
    // const { results2 } = tvRatingData.data;
    // const tvUSRating = results2.find((el) => el.iso_3166_1 === 'US');
    // const tvRating = tvUSRating;
    const relatedTVData = await API.relatedTVSearch(id, mainData.data.results[0].media_type);
    const relatedTVInfo = relatedTVData.data;
    const tvTrailerData = await API.tvTrailerSearch(id, mainData.data.results[0].media_type);
    const tvTrailerInfo = tvTrailerData.data;
    const trendingMoviesData = await API.trendingMoviesSearch();
    const trendingMoviesInfo = trendingMoviesData.data;
    const trendingTVData = await API.trendingTVSearch();
    const trendingTVInfo = trendingTVData.data;

    // console.log({ mainData, id, trailerData, ratingData });
    console.log('main call: ', mainData);
    console.log('trailer call: ', trailerData);
    console.log('TV trailer call: ', tvTrailerData);
    // console.log('rating call: ', ratingData);
    console.log('related movies call: ', relatedData);
    console.log('related TV call: ', relatedTVData);
    console.log('trending movies call: ', trendingMoviesData);
    console.log('trending TV call: ', trendingTVData);
    // console.log('TV rating call: ', tvRatingData);
    console.log('tvTrailerInfo: ', tvTrailerInfo.data);
    console.log('relatedTVData.data ', relatedTVData.data);
    console.log('relatedTVInfo', relatedTVInfo.results[0].name);
    console.log('trendingTVPoster1: ', trendingTVPoster1);
    console.log('lastEpisode: ', lastEpisode);
    // console.log('tvRatingData.data: ', tvRatingData.data);
 

    setState({
      ...state,
      mediaType: movieInfo.media_type,
      movie: movieTitle,
      tvShow: name,
      release: release_date,
      first_air: first_air_date,
      overview: overview,
      poster: `${imageURL}` + poster_path,
      id: id,
      backdrop: `${imageURL}` + backdrop_path,
      genre: genre_ids[0],
      score: vote_average,
      trailerPath: trailerInfo.videos.results[0].key,
      trailer: `${trailerURL}` + trailerInfo.videos.results[0].key,
      tvTrailer: `${trailerURL}` + tvTrailerInfo.videos.results[0].key,
      runtime: trailerInfo.runtime,
      // rating: rating.certification,
      // tvRating: tvUSRating.rating,
      // rating: mainData.data.results[0].media_type === 'movie' ? rating.certification : tvUSRating.rating,
      logo: mainData.data.results[0].media_type === 'movie' ? `${imageURL}` + trailerInfo.production_companies[1].logo_path : `${imageURL}` + tvTrailerInfo.networks[0].logo_path ,
      // networkLogo: mainData.data.results[0].media_type === 'tv' ? `${imageURL}` + tvTrailerInfo.networks[0].logo_path : 'movie path to icon goes here',
      network: mainData.data.results[0].media_type === 'tv' ? tvTrailerInfo.networks[0].name : 'tv studio icon goes here',
      studio: mainData.data.results[0].media_type === 'movie' ? trailerInfo.production_companies[0].name : 'movie studio icon goes here',
      lastAir: mainData.data.results[0].media_type === 'tv' ? tvTrailerInfo.last_air_date : ' no last air date for movies',
      lastEpisode: mainData.data.results[0].media_type === 'tv' ? tvTrailerInfo.last_episode_to_air.name : ' no last episode for movies',
      
      relatedMovies: relatedInfo.results,
      
      relatedTV1: relatedTVInfo.results[0].name,
      relatedTV2: relatedTVInfo.results[1].name,
      relatedTV3: relatedTVInfo.results[2].name,
      relatedTV4: relatedTVInfo.results[3].name,
      relatedTV5: relatedTVInfo.results[4].name,

      relatedTVPoster1: `${imageURL}` + relatedTVInfo.results[0].poster_path,
      relatedTVPoster2: `${imageURL}` + relatedTVInfo.results[1].poster_path,
      relatedTVPoster3: `${imageURL}` + relatedTVInfo.results[2].poster_path,
      relatedTVPoster4: `${imageURL}` + relatedTVInfo.results[3].poster_path,
      relatedTVPoster5: `${imageURL}` + relatedTVInfo.results[4].poster_path,

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
        {/* <Row>
          <NavBar />
        </Row> */}

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
            {/* { mediaType==='movie' ? ( logos='studio'): ( logos='network'), */}
         
            {
            id ? (
              <ResultsCard
                title={movie}
                title2={tvShow}
                release={moment(release, 'YYYY-MM-DD').format('MMM Do, YYYY')}
                release2={moment(first_air, 'YYYY-MM-DD').format(
                  'MMM Do, YYYY'
                )}
                overview={overview}
                poster={poster}
                id={id}
                backdrop={backdrop}
                genre={genre}
                score={score}
                runtime={runtime}
                rating={rating}
                // tvRating={tvRating}
                relatedMovies={relatedMovies}
                network={network}
                networkLogo={networkLogo}
                studio={studio}
                studioLogo={studioLogo}
                logo={logo}
                lastAir={lastAir}
                lastEpisode={lastEpisode}
              />
            ) : (
              <Card className='blue-grey darken-1 discover' title='DISCOVER'>
                This area will display info about a random movie or TV show that
                is related to one of the user's favorites.
              </Card>
              // console.log('No title entered.')
            )}
          </Col>
          <Col m={3}>

          {!mediaType ? (
              <Card className='blue-grey darken-1 discover' title='DISCOVER'>
              This area will display trailers for the discovery feature.
            </Card>
            ) : (
              console.log('.')
            )}


            {mediaType ==='tv' ? (
              <Trailer trailer={tvTrailer} />
            ) : (
              console.log('No movie trailer available.')
            )}
            {mediaType ==='movie' ? (
              <Trailer trailer={trailer} />
            ) : (
              console.log('No TV trailer available.')
            )}
            {id ? (
              <RelatedCard
                className='related'
                heading={'RELATED'}
                relatedTV1={relatedTV1}
                relatedTV2={relatedTV2}
                relatedTV3={relatedTV3}
                relatedTV4={relatedTV4}
                relatedTV5={relatedTV5}
                relatedTVPoster1={relatedTVPoster1}
                relatedTVPoster2={relatedTVPoster2}
                relatedTVPoster3={relatedTVPoster3}
                relatedTVPoster4={relatedTVPoster4}
                relatedTVPoster5={relatedTVPoster5}
              />
            ) : (
              <Card
                className='blue-grey darken-1 discover-related'
                title='RELATED'
              >
                This area will display a list of movies or TV shows related to
                the discovery feature.
              </Card>
              // console.log('No Title entered.')
            )}
          </Col>
          <Col m={3}>
            <Favorites heading={'MY MOVIES'} />
            <br></br>
            <Favorites heading={'MY SHOWS'} />
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

      </Container>
    </ContainerWrapper>
  );
};

export default MoviePage;
