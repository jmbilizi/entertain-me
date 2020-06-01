import React, { useEffect } from 'react';
import { Row, Col } from 'react-materialize';
import _ from 'lodash';
import axios from "axios";
import { user } from "../../utils/helpers";
import $ from 'jquery';

import Poster from '../Poster';
import './style.css'
{ $('.favorite-added').hide() }
const ResultsCard = (props) => {

  useEffect(() => {
    const allFavorites = favoritesTV.concat(favoritesMovie);
    const existingFavorite = allFavorites.filter((el) => el.media_name === props.selection)
    existingFavorite.length > 0 ? ($('.favorite').hide()) : ($('.favorite').show());
  }, [props]);

  const { token, favoritesTV, favoritesMovie } = props;
  const addFavorite = () => {
    const userId = user()._id;
    console.log("props: ", props);
    const mediaName = props.selection;
    const mediaType = props.mediaType;
    // hit put route to add favorite to current user
    console.log(props);
    const newFavList = props.favorites.slice()
    newFavList.push({
      media_name: mediaName,
      media_type: mediaType
    })
    console.log({ newFavList, fav: props.favorites })

    props.setFavorites(newFavList);

    axios
      .put("/api/favorites", { userId, mediaName, mediaId: props.id, mediaType })
      .then((result) => {
        console.log("Adding favorites result: ", result);

        axios
          .get('/api/favorites')
          .then((response) => {
            console.log("Results card add favorites getCommunityFavorites response data: ", response.data);
            props.setCommunityFavorites(response.data);
          })

      })
      .catch((error) => {
        console.log(error);
      });

    $('.favorite-added').show()
    setTimeout(() => {
      $('.favorite-added').hide()
    }, 2000)

    // pass in media_type, name, and id, as well as user id
    // update array in react state that is storing all the favorites
  };
  const setNotification = () => {
    alert('NOTIFICATION SET');
  };
  const watchContent = () => {
    alert('GO TO CONTENT PROVIDER');
  };
  const shareContent = () => {
    alert('CONTENT SHARED');
  };
  console.log(props.overview)

  return (
    <div className='results-card'>

      <Row>
        <Col m={6}>
          <h4 className='results-card-title'>{props.selection}</h4>
        </Col>
        <Col m={6}>
          <div className='logo'>
            {props.logo}
          </div>
        </Col>
      </Row>

      <Row>
        <Col m={5}>
          <img
            className='backdrop-image'
            src={props.backdrop}
            alt={props.selection}
          />
          <br></br>
          <div className='details'>
          </div>
        </Col>
        <Col m={1}></Col>

        <Col m={5}>
          <p className='overview'>
            {_.truncate(props.overview, {
              length: 320,
              separator: '...',
            })}
          </p>
        </Col>
        <Col m={1}></Col>
      </Row>

      <Row >
        <div className='details'>
          <Col m={2}>
            <Poster poster={props.poster} />
          </Col>
          <Col m={3}>
            <div className='stats'>
              <strong>Release: </strong> {props.release}
              <br></br>
              <strong>  Genre:</strong> {props.genre}<br></br>{props.genre2}
              <br></br>
              <strong>  Rating:{' '}   </strong>

              {props.rating}

              <br></br>
              <strong>   Runtime:</strong> {props.runtime}
              <br></br>
              <strong>   Viewer score:</strong> {props.score}
            </div>
          </Col>
          <Col m={4}>
            <div className='stats2'>
              <strong>   Starring:</strong> {props.star1}{props.star2}<br></br>
              {props.mediaType === 'tv' ? (
                <>
                  <strong>   Last Episode:</strong><br></br>
                  {props.lastEpisode}
                  <br></br>
                  <strong>  Aired:</strong><br></br>
                  {props.lastAir}
                </>) : (<> <strong>Directed by:</strong> {props.director} {props.director2}</>)}
            </div>
          </Col>
        </div>
        <Col m={2}>
          {!token ? (
            console.log('User is not logged in.')
          ) : (
              <>
                <div className='result-btns'>
                  <span onClick={addFavorite}>
                    <span className='material-icons favorite'>favorite</span>
                  </span>
                  <span onClick={setNotification}>
                    <span className='material-icons notify'>notifications</span>
                  </span>
                  <span onClick={watchContent}>
                    <span className='material-icons watch'>tv</span>
                  </span>
                  <span onClick={shareContent}>
                    <span className='material-icons watch'>share</span>
                  </span>
                  <div className='favorite-added'><strong>{props.selection.toUpperCase()}</strong> added to favorites</div>
                </div>
              </>
            )}
          <img
            className='tmdb'
            src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg'
            alt=''
          />
        </Col>
      </Row>
    </div>
  );
};

export default ResultsCard;
