import React, { useState } from "react";
import moment from "moment";
import "materialize-css";
import { Row, Col } from "react-materialize";

import { MoviePageWrapper } from "../../assets/styles";
import ResultsCard from "../../components/ResultsCard";
import SearchBar from "../../components/SearchBar";
import Trailer from "../../components/Trailer";
import TrailerDefault from "../../components/TrailerDefault";
import Favorites from "../../components/Favorites";
import FavoritesDefault from "../../components/FavoritesDefault";
import TrendingDefault from "../../components/TrendingDefault";
import Trending from "../../components/Trending";
import RelatedCard from "../../components/RelatedCard";
import RelatedCardDefault from "../../components/RelatedCardDefault";
import DiscoverCardDefault from "../../components/DiscoverCardDefault";
import API from "../../utils/API";
import axios from "axios";
import { user } from "../../utils/helpers";
import $ from 'jquery';
import "./style.css";

const users = [
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Berkant",
      last: "Sip",
    },
    location: {
      street: {
        number: 8077,
        name: "Hoofdveld",
      },
      city: "Starnmeer",
      state: "Wyoming",
    },
  },
];

// hard coded communityFavorites

// const communityFavorites = [
//   {
//     title: "Westworld"
//   },
//   {
//     title: "Devs"
//   },
//   {
//     title: "Snowpiercer"
//   }
// ];

const MoviePage = ({ favorites, setFavorites, token, communityFavorites, setCommunityFavorites }) => {
  { $('.search-fail').hide() }
  const [state, setState] = useState({
    userInput: "",
    mediaType: "",
    selection: "",
    tvShow: "",
    release: "",
    overview: "",
    poster: "",
    id: "",
    backdrop: "",
    genre: "",
    genre2: "",
    score: "",
    trailer: "",
    tvTrailer: "",
    runtime: "",
    rating: "",
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
    trending1: "",
    trending2: "",
    trending3: "",
    trending4: "",
    trending5: "",
    trending6: "",
    trending7: "",
    trending8: "",
    trending9: "",
    trending10: "",
    star1: "",
    star2: "",
    director: "",
    director2: "",
    logo: "",
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
    tvTrailerInfo
  } = state;

  const imageURL = "https://image.tmdb.org/t/p/w500";
  const trailerURL = "https://www.youtube.com/embed/";

  // Favorites delete function

  function deleteMedia(mediaName) {
    const userId = user()._id;

    const favList = favorites.slice();
    const newFavList = favList.filter((item) => item.media_name !== mediaName);
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
  }

  async function mediaSearch(entry) {
    !entry ? alert("Enter a movie or tv show title.") : console.log('na');
    const mainData = await API.mainSearch(entry);
    if (!mainData.data.results[0]) {
      $('.search-fail').show()
      setTimeout(() => {
        $('.search-fail').hide()
      }, 2000)
      return;
    }
    $('.search-fail').hide();

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
      searchInfo.media_type
    );
    const trailerInfo = trailerData.data;
    const ratingData = await API.ratingSearch(
      id,
      searchInfo.media_type
    );
    const { results } = ratingData.data;
    const usRating = results.find((el) => el.iso_3166_1 === "US");
    const rating =
      searchInfo.media_type === "movie"
        ? usRating.release_dates.find((el) => el.certification !== "")
        : usRating != null
          ? (usRating.rating ? (usRating.rating) : (console.log('rferf'))) : (console.log('rferfd'));
    const relatedData = await API.relatedSearch(
      id,
      searchInfo.media_type
    );
    const relatedInfo = relatedData.data;

    const creditsData = await API.creditsSearch(
      id,
      searchInfo.media_type
    );

    const creditsInfo = creditsData.data;

    const tvTrailerData = await API.tvTrailerSearch(
      id,
      searchInfo.media_type
    );
    const tvTrailerInfo = tvTrailerData.data;

    const trendingData = await API.trendingSearch(
      searchInfo.media_type
    );
    const trendingInfo = trendingData.data;

    console.log("main call: ", mainData);
    console.log("trailer call: ", trailerData);
    console.log("TV trailer call: ", tvTrailerData);
    console.log("rating call: ", ratingData);
    console.log("related movies call: ", relatedData);
    console.log("related TV call: ", relatedData);
    console.log("trending  call: ", trendingData);
    // console.log("credits  call: ", creditsInfo.cast[0].name);
    // console.log("tvTrailerInfo: ", tvTrailerInfo.data);
    console.log("relatedData.data ", relatedData.data);
    console.log("relatedInfo", relatedInfo.results[0].name);
    console.log("trendingData: ", trendingData);
    // console.log('SEARCH>>>>>>', tvTrailerInfo.networks[0].logo_path);

    setState({
      ...state,
      mediaType: searchInfo.media_type,
      movie: title,
      tvShow: name,
      selection: searchInfo.media_type === "movie" ? title : name,
      release:
        searchInfo.media_type === "movie"
          ? release_date
          : first_air_date,

      overview: overview ? (overview) : ('NA'),
      poster: `${imageURL}` + poster_path,
      id: id,
      backdrop: `${imageURL}` + backdrop_path,
      genre: trailerInfo.genres[0].name,
      genre2: trailerInfo.genres.length > 1 ? trailerInfo.genres[1].name : "",
      score: vote_average,
      trailerPath: trailerInfo.videos.results[0] ? trailerInfo.videos.results[0].key : console.log('no trailer available'),
      trailer: trailerInfo.videos.results[0] ? `${trailerURL}` + trailerInfo.videos.results[0].key : console.log('no trailer available'),
      tvTrailer: trailerInfo.videos.results[0] ? (`${trailerURL}` + tvTrailerInfo.videos.results[0].key) : console.log('no trailer available'),
      runtime:
        trailerInfo.runtime ? (
          searchInfo.media_type === "movie"
            ? trailerInfo.runtime + ' min'
            : trailerInfo.episode_run_time[0]
        ) : (
            'NA'
          ),
      rating:
        searchInfo.media_type === "movie"
          ? rating.certification
          : usRating ? usRating.rating : 'NA', // TEMPORARY
      star1:
        creditsInfo.cast.length > 0
          ? creditsInfo.cast[0].name
          : 'NA',
      star2:
        creditsInfo.cast.length > 1
          ? ', ' + creditsInfo.cast[1].name
          : console.log('No results'),
      director:
        searchInfo.media_type === "movie" &&
          creditsInfo.crew.find((el) => el.job === "Director").name
          ? creditsInfo.crew.filter((el) => el.job === "Director")[0].name
          : "",
      director2:
        searchInfo.media_type === "movie" &&
          creditsInfo.crew.filter((el) => el.job === "Director").length === 2
          ? "& " + creditsInfo.crew.filter((el) => el.job === "Director")[1].name
          : "",
      logo:
        tvTrailerInfo.production_companies.length > 0 ? (searchInfo.media_type === "movie" &&
          tvTrailerInfo.production_companies.filter((el) => el.logo_path != null)
          ? <img className='network-logo' src={imageURL + tvTrailerInfo.production_companies.filter((el) => el.logo_path != null)[0].logo_path} alt='studio logo' />
          : <img className='network-logo' src={imageURL + tvTrailerInfo.networks.filter((el) => el.logo_path != null)[0].logo_path} alt='network logo' />
        ) : (<span className='network-logo-alt'>ON {tvTrailerInfo.networks[0].name}</span>),
      network:
        searchInfo.media_type === "tv"
          ? tvTrailerInfo.networks[0].name
          : "tv studio icon goes here",
      studio:
        searchInfo.media_type === "movie"
          ? trailerInfo.production_companies[0].name
          : "movie studio icon goes here",
      provider:
        searchInfo.media_type === "tv" ? { network } : { studio },
      lastAir:
        searchInfo.media_type === "tv"
          ? tvTrailerInfo.last_air_date
          : " no last air date for movies",
      lastEpisode:
        searchInfo.media_type === "tv"
          ? tvTrailerInfo.last_episode_to_air.name
          : " no last episode for movies",
      related1:
        searchInfo.media_type === "tv"
          ? [
            relatedInfo.results[0].name,
            `${imageURL}` + relatedInfo.results[0].poster_path,
          ]
          : [
            relatedInfo.results[0].original_title,
            `${imageURL}` + relatedInfo.results[0].poster_path,
          ],
      related2:
        searchInfo.media_type === "tv"
          ? [
            relatedInfo.results[1].name,
            `${imageURL}` + relatedInfo.results[1].poster_path,
          ]
          : [
            relatedInfo.results[1].original_title,
            `${imageURL}` + relatedInfo.results[1].poster_path,
          ],
      related3:
        searchInfo.media_type === "tv"
          ? [
            relatedInfo.results[2].name,
            `${imageURL}` + relatedInfo.results[2].poster_path,
          ]
          : [
            relatedInfo.results[2].original_title,
            `${imageURL}` + relatedInfo.results[2].poster_path,
          ],
      related4:
        searchInfo.media_type === "tv"
          ? [
            relatedInfo.results[3].name,
            `${imageURL}` + relatedInfo.results[3].poster_path,
          ]
          : [
            relatedInfo.results[3].original_title,
            `${imageURL}` + relatedInfo.results[3].poster_path,
          ],
      related5:
        searchInfo.media_type === "tv"
          ? [
            relatedInfo.results[4].name,
            `${imageURL}` + relatedInfo.results[4].poster_path,
          ]
          : [
            relatedInfo.results[4].original_title,
            `${imageURL}` + relatedInfo.results[4].poster_path,
          ],

      trending1:
        searchInfo.media_type === "tv"
          ? [
            `${imageURL}` + trendingInfo.results[0].poster_path,
            trendingInfo.results[0].name,
          ]
          : [
            `${imageURL}` + trendingInfo.results[0].poster_path,
            trendingInfo.results[0].title,
          ],
      trending2:
        searchInfo.media_type === "tv"
          ? [
            `${imageURL}` + trendingInfo.results[1].poster_path,
            trendingInfo.results[1].name,
          ]
          : [
            `${imageURL}` + trendingInfo.results[1].poster_path,
            trendingInfo.results[1].title,
          ],
      trending3:
        searchInfo.media_type === "tv"
          ? [
            `${imageURL}` + trendingInfo.results[2].poster_path,
            trendingInfo.results[2].name,
          ]
          : [
            `${imageURL}` + trendingInfo.results[2].poster_path,
            trendingInfo.results[2].title,
          ],
      trending4:
        searchInfo.media_type === "tv"
          ? [
            `${imageURL}` + trendingInfo.results[3].poster_path,
            trendingInfo.results[3].name,
          ]
          : [
            `${imageURL}` + trendingInfo.results[3].poster_path,
            trendingInfo.results[3].title,
          ],
      trending5:
        searchInfo.media_type === "tv"
          ? [
            `${imageURL}` + trendingInfo.results[4].poster_path,
            trendingInfo.results[4].name,
          ]
          : [
            `${imageURL}` + trendingInfo.results[4].poster_path,
            trendingInfo.results[4].title,
          ],
      trending6:
        searchInfo.media_type === "tv"
          ? [
            `${imageURL}` + trendingInfo.results[5].poster_path,
            trendingInfo.results[5].name,
          ]
          : [
            `${imageURL}` + trendingInfo.results[5].poster_path,
            trendingInfo.results[5].title,
          ],
      trending7:
        searchInfo.media_type === "tv"
          ? [
            `${imageURL}` + trendingInfo.results[6].poster_path,
            trendingInfo.results[6].name,
          ]
          : [
            `${imageURL}` + trendingInfo.results[6].poster_path,
            trendingInfo.results[6].title,
          ],
      trending8:
        searchInfo.media_type === "tv"
          ? [
            `${imageURL}` + trendingInfo.results[7].poster_path,
            trendingInfo.results[7].name,
          ]
          : [
            `${imageURL}` + trendingInfo.results[7].poster_path,
            trendingInfo.results[7].title,
          ],
      trending9:
        searchInfo.media_type === "tv"
          ? [
            `${imageURL}` + trendingInfo.results[8].poster_path,
            trendingInfo.results[8].name,
          ]
          : [
            `${imageURL}` + trendingInfo.results[8].poster_path,
            trendingInfo.results[8].title,
          ],
      trending10:
        searchInfo.media_type === "tv"
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
    $('.search-input-box').val('');
  };
  const favoritesTV = favorites.filter((item) => item.media_type === "tv");
  const favoritesMovie = favorites.filter(
    (item) => item.media_type === "movie"
  );

  return (
    <MoviePageWrapper>
      <Row>
        <Col m={4}></Col>
        <Col m={4}>
          <>
            <div className='search-fail'>No results found for <strong>{userInput.toUpperCase()}</strong>.</div>
            <SearchBar
              className='search-box'
              handleInputChange={handleInputChange}
              handleFormSubmit={handleFormSubmit}
            />
          </>
        </Col>
        <Col m={4}></Col>
      </Row>

      <Row>
        <Col s={9} className='movie-image'>
          {id ? (
            <ResultsCard
              token={token}
              selection={selection}
              mediaType={mediaType}
              release={moment(release, "YYYY-MM-DD").format("MMM Do, YYYY")}
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
              logo={logo}
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
        </Col>
        <Col s={3} className='community-favorites'>
          {token ? (
            <>
              <FavoritesDefault heading={'Community Favorites'}
                communityFavorites={communityFavorites} mediaSearch={mediaSearch}
              />

              <Favorites
                heading={"MY MOVIES"}
                favorites={favoritesMovie}
                mediaSearch={mediaSearch}
                deleteMedia={deleteMedia}
              />
              <Favorites
                heading={"MY SHOWS"}
                favorites={favoritesTV}
                mediaSearch={mediaSearch}
                deleteMedia={deleteMedia}
              />
            </>
          ) : (
              <FavoritesDefault heading={'Community Favorites'}
                communityFavorites={communityFavorites} mediaSearch={mediaSearch}
              />
            )}
        </Col>
      </Row>

      <Row>
        <Col s={4}>
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
        </Col>
        <Col s={4}>
          {id ? (
            <RelatedCard
              className="related"
              heading={"RELATED"}
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
              mediaSearch={mediaSearch}
              favorites={communityFavorites}
            />
          ) : (
              console.log('add content')
            )}
        </Col>
        <Row>
          <Col s={9}>
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
                console.log('add content')
              )}
          </Col>
        </Row>
      </Row>
    </MoviePageWrapper>

  );
};
export default MoviePage;
