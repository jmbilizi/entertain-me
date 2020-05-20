import React, { useState } from 'react';
import moment from 'moment';
import 'materialize-css';
import { Container, Row, Col, Card } from 'react-materialize';

import { ContainerWrapper, DarkWrapper } from '../assets/styles';
import ResultsCard from '../components/ResultsCard';
import SearchBar from '../components/SearchBar';
import Trailer from '../components/Trailer';
import TrailerDefault from '../components/TrailerDefault';
import Favorites from '../components/Favorites';
import TrendingDefault from '../components/TrendingDefault';
import Trending from '../components/Trending';
import RelatedCard from '../components/RelatedCard';
import RelatedCardDefault from '../components/RelatedCardDefault';
import DiscoverCardDefault from '../components/DiscoverCardDefault';
import API from '../utils/API';

const MoviePage = () => {
  const [state, setState] = useState({
    userInput: '',
    mediaType: '',
    selection: '',
    tvShow: '',
    release: '',
    overview: '',
    poster: '',
    id: '',
    backdrop: '',
    genre: '',
    genre2:''
 ,   score: '',
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
    relatedInfo: '',
    related1: '',
    related2: '',
    related3: '',
    related4: '',
    related5: '',
    trending1: '',
    trending2: '',
    trending3: '',
    trending4: '',
    trending5: '',
    trending6: '',
    trending7: '',
    trending8: '',
    trending9: '',
    trending10: '',
    relatedPoster1: '',
    relatedPoster2: '',
    relatedPoster3: '',
    relatedPoster4: '',
    relatedPoster5: '',
    logo: '',
  });

  //destructuring to use above values directly
  const {
    userInput,
    mediaType,
    selection,
    release,
    overview,
    poster,
    id,
    backdrop,
    genre,
    genre2,
    score,
    trailer,
    tvTrailer,
    runtime,
    rating,
    tvUSRating,
    network,
    studio,
    lastAir,
    lastEpisode,
    related1,
    related2,
    related3,
    related4,
    related5,
    trending1,
    trending2,
    trending3,
    trending4,
    trending5,
    trending6,
    trending7,
    trending8,
    trending9,
    trending10,
    relatedPoster1,
    relatedPoster2,
    relatedPoster3,
    relatedPoster4,
    relatedPoster5,
    logo,
    provider,
  } = state;

  const imageURL = 'https://image.tmdb.org/t/p/w500';
  const trailerURL = 'https://www.youtube.com/embed/';

  async function mediaSearch(entry) {
    if (!entry) {
      return alert('Enter a movie or tv show title.');
    }

    const mainData = await API.mediaSearch(entry);
    const searchInfo = mainData.data.results[0];
    const {
      id,
      title,
      name,
      release_date,
      first_air_date,
      overview,
      poster_path,
      backdrop_path,
      vote_average,
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
    const usRating = results.find((el) => el.iso_3166_1 === 'US');
    const rating =
      mainData.data.results[0].media_type === 'movie'
        ? usRating.release_dates.find((el) => el.certification !== '')
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

    const trendingData = await API.trendingSearch(
      mainData.data.results[0].media_type
    );
    const trendingInfo = trendingData.data;

    console.log('main call: ', mainData);
    console.log('trailer call: ', trailerData);
    console.log('TV trailer call: ', tvTrailerData);
    console.log('rating call: ', ratingData);
    console.log('related movies call: ', relatedData);
    console.log('related TV call: ', relatedData);
    console.log('trending  call: ', trendingData);
    console.log('tvTrailerInfo: ', tvTrailerInfo.data);
    console.log('relatedData.data ', relatedData.data);
    console.log('relatedInfo', relatedInfo.results[0].name);
    console.log('trendingData: ', trendingData);
    console.log('selection', selection);

    setState({
      ...state,
      mediaType: searchInfo.media_type,
      movie: title,
      tvShow: name,
      selection: mainData.data.results[0].media_type === 'movie' ? title : name,
      release:
        mainData.data.results[0].media_type === 'movie'
          ? release_date
          : first_air_date,

      overview: overview,
      poster: `${imageURL}` + poster_path,
      id: id,
      backdrop: `${imageURL}` + backdrop_path,
      genre: trailerInfo.genres[0].name,
      // genre2: trailerInfo.genres[1].name,
      score: vote_average,
      trailerPath: trailerInfo.videos.results[0].key,
      trailer: `${trailerURL}` + trailerInfo.videos.results[0].key,
      tvTrailer: `${trailerURL}` + tvTrailerInfo.videos.results[0].key,
      runtime:
        mainData.data.results[0].media_type === 'movie'
          ? trailerInfo.runtime
          : trailerInfo.episode_run_time[0],
      tvRating: tvUSRating.rating,
      rating:
        mainData.data.results[0].media_type === 'movie'
          ? rating.certification
          : usRating.rating,
      // logo:
      //   mainData.data.results[0].media_type === 'movie'
      //     ? `${imageURL}` + tvTrailerInfo.production_companies[1].logo_path
      //     : `${imageURL}` + tvTrailerInfo.networks[0].logo_path,
      network:
        mainData.data.results[0].media_type === 'tv'
          ? tvTrailerInfo.networks[0].name
          : 'tv studio icon goes here',
      studio:
        mainData.data.results[0].media_type === 'movie'
          ? trailerInfo.production_companies[0].name
          : 'movie studio icon goes here',

      provider:
        mainData.data.results[0].media_type === 'tv' ? { network } : { studio },

      lastAir:
        mainData.data.results[0].media_type === 'tv'
          ? tvTrailerInfo.last_air_date
          : ' no last air date for movies',
      lastEpisode:
        mainData.data.results[0].media_type === 'tv'
          ? tvTrailerInfo.last_episode_to_air.name
          : ' no last episode for movies',

      related1:
        mainData.data.results[0].media_type === 'tv'
          ? relatedInfo.results[0].name
          : relatedInfo.results[0].original_title,
      related2:
        mainData.data.results[0].media_type === 'tv'
          ? relatedInfo.results[1].name
          : relatedInfo.results[1].original_title,
      related3:
        mainData.data.results[0].media_type === 'tv'
          ? relatedInfo.results[2].name
          : relatedInfo.results[2].original_title,
      related4:
        mainData.data.results[0].media_type === 'tv'
          ? relatedInfo.results[3].name
          : relatedInfo.results[3].original_title,
      related5:
        mainData.data.results[0].media_type === 'tv'
          ? relatedInfo.results[4].name
          : relatedInfo.results[4].original_title,

      relatedPoster1: `${imageURL}` + relatedInfo.results[0].poster_path,
      relatedPoster2: `${imageURL}` + relatedInfo.results[1].poster_path,
      relatedPoster3: `${imageURL}` + relatedInfo.results[2].poster_path,
      relatedPoster4: `${imageURL}` + relatedInfo.results[3].poster_path,
      relatedPoster5: `${imageURL}` + relatedInfo.results[4].poster_path,

      trending1:
        mainData.data.results[0].media_type === 'tv'
          ? [
              `${imageURL}` + trendingInfo.results[0].poster_path,
              trendingInfo.results[0].name,
            ]
          : [
              `${imageURL}` + trendingInfo.results[0].poster_path,
              trendingInfo.results[0].title,
            ],
      trending2:
      mainData.data.results[0].media_type === 'tv'
          ? [
              `${imageURL}` + trendingInfo.results[1].poster_path,
              trendingInfo.results[1].name,
            ]
          : [
              `${imageURL}` + trendingInfo.results[1].poster_path,
              trendingInfo.results[1].title,
            ],
      trending3:
      mainData.data.results[0].media_type === 'tv'
          ? [
              `${imageURL}` + trendingInfo.results[2].poster_path,
              trendingInfo.results[2].name,
            ]
          : [
              `${imageURL}` + trendingInfo.results[2].poster_path,
              trendingInfo.results[2].title,
            ],
      trending4:
      mainData.data.results[0].media_type === 'tv'
          ? [
              `${imageURL}` + trendingInfo.results[3].poster_path,
              trendingInfo.results[3].name,
            ]
          : [
              `${imageURL}` + trendingInfo.results[3].poster_path,
              trendingInfo.results[3].title,
            ],
      trending5:
      mainData.data.results[0].media_type === 'tv'
          ? [
              `${imageURL}` + trendingInfo.results[4].poster_path,
              trendingInfo.results[4].name,
            ]
          : [
              `${imageURL}` + trendingInfo.results[4].poster_path,
              trendingInfo.results[4].title,
            ],
      trending6:
      mainData.data.results[0].media_type === 'tv'
          ? [
              `${imageURL}` + trendingInfo.results[5].poster_path,
              trendingInfo.results[5].name,
            ]
          : [
              `${imageURL}` + trendingInfo.results[5].poster_path,
              trendingInfo.results[5].title,
            ],
      trending7:
      mainData.data.results[0].media_type === 'tv'
          ? [
              `${imageURL}` + trendingInfo.results[6].poster_path,
              trendingInfo.results[6].name,
            ]
          : [
              `${imageURL}` + trendingInfo.results[6].poster_path,
              trendingInfo.results[6].title,
            ],
      trending8:
      mainData.data.results[0].media_type === 'tv'
          ? [
              `${imageURL}` + trendingInfo.results[7].poster_path,
              trendingInfo.results[7].name,
            ]
          : [
              `${imageURL}` + trendingInfo.results[7].poster_path,
              trendingInfo.results[7].title,
            ],
      trending9:
      mainData.data.results[0].media_type === 'tv'
          ? [
              `${imageURL}` + trendingInfo.results[8].poster_path,
              trendingInfo.results[8].name,
            ]
          : [
              `${imageURL}` + trendingInfo.results[8].poster_path,
              trendingInfo.results[8].title,
            ],
      trending10:
      mainData.data.results[0].media_type === 'tv'
          ? [
              `${imageURL}` + trendingInfo.results[9].poster_path,
              trendingInfo.results[9].name,
            ]
          : [
              `${imageURL}` + trendingInfo.results[9].poster_path,
              trendingInfo.results[9].title,
            ],
    });
    console.log(`state: `, state);
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
      {/* <DarkWrapper> */}
      <Container>
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
                selection={selection}
                release={moment(release, 'YYYY-MM-DD').format('MMM Do, YYYY')}
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
                // logo={logo}
                lastAir={lastAir}
                lastEpisode={lastEpisode}
              />
            ) : (
              <DiscoverCardDefault />
            )}

            {id ? (
              <Trending
                trending1={trending1}
                trending2={trending2}
                trending3={trending3}
                trending4={trending4}
                trending5={trending5}
                trending6={trending6}
                trending7={trending7}
                trending8={trending8}
                trending9={trending9}
                trending10={trending10}
              />
            ) : (
              <TrendingDefault
                trending1={trending1}
                trending2={trending2}
                trending3={trending3}
                trending4={trending4}
                trending5={trending5}
                trending6={trending6}
                trending7={trending7}
                trending8={trending8}
                trending9={trending9}
                trending10={trending10}
              />
            )}
          </Col>
          <Col m={3}>
            {!mediaType ? <TrailerDefault /> : console.log('.')}

            {mediaType === 'tv' ? (
              <Trailer trailer={tvTrailer} />
            ) : (
              console.log('No movie trailer available.')
            )}
            {mediaType === 'movie' ? (
              <Trailer trailer={trailer} />
            ) : (
              console.log('No TV trailer available.')
            )}
            {id ? (
              <RelatedCard
                className='related'
                heading={'RELATED'}
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
              <RelatedCardDefault />
            )}
          </Col>
          <Col m={3}>
            <Favorites heading={'MY MOVIES'} />
            <br></br>
            <Favorites heading={'MY SHOWS'} />
          </Col>
        </Row>
      </Container>
      {/* </DarkWrapper> */}
    </ContainerWrapper>
  );
};

export default MoviePage;
