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
import axios from "axios";
import { getCurrentUserId } from "../utils/helpers";

const users = [
  {
    "gender": "male",
    "name": {
      "title": "Mr",
      "first": "Berkant",
      "last": "Sip"
    },
    "location": {
      "street": {
        "number": 8077,
        "name": "Hoofdveld"
      },
      "city": "Starnmeer",
      "state": "Wyoming"
    }
  }
];

const MoviePage = ({ favorites, setFavorites }) => {
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
    genre2: '',
    score: '',
    trailer: '',
    tvTrailer: '',
    runtime: '',
    rating: '',
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
    star1: '',
    star2: '',
    director: '',
    director2: '',
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
    star1,
    star2,
    director,
    director2,
    logo,
    provider,
  } = state;

  const imageURL = 'https://image.tmdb.org/t/p/w500';
  const trailerURL = 'https://www.youtube.com/embed/';

  // make new function

  function deleteMedia(mediaName) {
    // to do: make ajax request to delete media and update react state when deleted
    // get user id (use helper function)
    // axios.delete

    const userId = getCurrentUserId();

    const favList = favorites.slice();
    const newFavList = favList.filter(item => item.media_name !== mediaName);
    console.log("delete new fav list: ", newFavList);
    setFavorites(newFavList);


    axios
      .delete(`/api/favorites/${userId}/${mediaName}`)
      .then((result) => {
        console.log("Deleting: ", mediaName);
      })
      .catch((error) => {
        console.log(error);
      });

  };

  async function mediaSearch(entry) {
    if (!entry) {
      return alert('Enter a movie or tv show title.');
    }

    const mainData = await API.mainSearch(entry);
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

    const creditsData = await API.creditsSearch(
      id,
      mainData.data.results[0].media_type
    );


    const creditsInfo = creditsData.data;

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
    // console.log('director: ', creditsData.data.crew.filter((el) => el.job === 'Director')[0].name);


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
      genre2: trailerInfo.genres.length > 1 ? (trailerInfo.genres[1].name) : (''),
      score: vote_average,
      trailerPath: trailerInfo.videos.results[0].key,
      trailer: `${trailerURL}` + trailerInfo.videos.results[0].key,
      tvTrailer: `${trailerURL}` + tvTrailerInfo.videos.results[0].key,
      runtime:
        mainData.data.results[0].media_type === 'movie'
          ? trailerInfo.runtime
          : trailerInfo.episode_run_time[0],
      rating:
        mainData.data.results[0].media_type === 'movie'
          ? rating.certification
          : usRating.rating,
      star1: creditsInfo.cast[0].name,
      star2: creditsInfo.cast[1].name,

      director: mainData.data.results[0].media_type === 'movie' && creditsData.data.crew.find((el) => el.job === 'Director').name ? (creditsData.data.crew.filter((el) => el.job === 'Director')[0].name) : (''),
      director2: mainData.data.results[0].media_type === 'movie' && creditsData.data.crew.filter((el) => el.job === 'Director').length === 2 ? ('& ' + creditsData.data.crew.filter((el) => el.job === 'Director')[1].name) : (''),


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
          ? [relatedInfo.results[0].name, `${imageURL}` + relatedInfo.results[0].poster_path]
          : [relatedInfo.results[0].original_title, `${imageURL}` + relatedInfo.results[0].poster_path],
      related2:
        mainData.data.results[0].media_type === 'tv'
          ? [relatedInfo.results[1].name, `${imageURL}` + relatedInfo.results[1].poster_path]
          : [relatedInfo.results[1].original_title, `${imageURL}` + relatedInfo.results[1].poster_path],
      related3:
        mainData.data.results[0].media_type === 'tv'
          ? [relatedInfo.results[2].name, `${imageURL}` + relatedInfo.results[2].poster_path]
          : [relatedInfo.results[2].original_title, `${imageURL}` + relatedInfo.results[2].poster_path],
      related4:
        mainData.data.results[0].media_type === 'tv'
          ? [relatedInfo.results[3].name, `${imageURL}` + relatedInfo.results[3].poster_path]
          : [relatedInfo.results[3].original_title, `${imageURL}` + relatedInfo.results[3].poster_path],
      related5:
        mainData.data.results[0].media_type === 'tv'
          ? [relatedInfo.results[4].name, `${imageURL}` + relatedInfo.results[4].poster_path]
          : [relatedInfo.results[4].original_title, `${imageURL}` + relatedInfo.results[4].poster_path],

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

  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    mediaSearch(userInput);
  };
  const favoritesTV = favorites.filter(item => item.media_type === 'tv');
  const favoritesMovie = favorites.filter(item => item.media_type === 'movie');
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
                mediaType={mediaType}
                release={moment(release, 'YYYY-MM-DD').format('MMM Do, YYYY')}
                overview={overview}
                poster={poster}
                backdrop={backdrop}
                genre={genre}
                genre2={genre2}
                score={score}
                runtime={runtime}
                rating={rating}
                network={network}
                provider={provider}
                // logo={logo}
                star1={star1}
                star2={star2}
                director={director}
                director2={director2}
                lastAir={lastAir}
                lastEpisode={lastEpisode}
                favorites={favorites}
                setFavorites={setFavorites}
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
                title1={related1[0]}
                title2={related2[0]}
                title3={related3[0]}
                title4={related4[0]}
                title5={related5[0]}
                poster1={related1[1]}
                poster2={related2[1]}
                poster3={related3[1]}
                poster4={related4[1]}
                poster5={related5[1]}
              />
            ) : (
                <RelatedCardDefault />
              )}
          </Col>
          <Col m={3}>

            <Favorites heading={'MY MOVIES'} favorites={favoritesMovie} mediaSearch={mediaSearch} deleteMedia={deleteMedia} />
            {/* <br></br> */}
            <Favorites heading={'MY SHOWS'} favorites={favoritesTV} mediaSearch={mediaSearch} deleteMedia={deleteMedia} />
          </Col>
        </Row>
      </Container>
      {/* </DarkWrapper> */}
    </ContainerWrapper>
  );
};

export default MoviePage;