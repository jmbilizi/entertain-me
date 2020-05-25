import React from 'react';
import { Row, Col } from 'react-materialize';
import _ from 'lodash';
import axios from "axios";
import { user } from "../../utils/helpers";

import { ResultsWrapper } from '../../assets/styles';
import Poster from '../Poster';

const ResultsCard = (props) => {
  const { token } = props;
  const addFavorite = () => {
    alert('ADDED TO FAVORITES');
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
      })
      .catch((error) => {
        console.log(error);
      });

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

  return (
    <div className='results-card'>
      <Row>
        <Col m={1}></Col>
        <Col>
          {/* <img
              className='network-logo'
              src={props.logo}
              alt={props.provider}
            /> */}
          <img
            className='backdrop-image'
            src={props.backdrop}
            alt={props.selection}
          />
          <br></br>
          <div className='details'>
            <h4 className='results-card-title'>{props.selection}</h4>
            {!token ?  (
                console.log('User is not logged in.')
              ):(
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
              </div>
            )}
            <p className='overview'>
              {_.truncate(props.overview, {
                length: 185,
                separator: '...',
              })}
            </p>
          </div>
        </Col>
        <Col m={1}></Col>
      </Row>
      <Row>
        <Col m={1}></Col>
        <Col m={3}>
          <Poster poster={props.poster} />
        </Col>
        <Col m={4}>
          <div className='stats'>
            Release: <strong>{props.release}</strong>
            <br></br>
              Genre: <strong>{props.genre}<br></br>{props.genre2}</strong>
            <br></br>
              Rating:{' '}
            <strong>
              {props.rating}
            </strong>
            <br></br>
              Runtime: <strong>{props.runtime} min</strong>
            <br></br>
              Viewer score: <strong>{props.score}</strong>
          </div>
        </Col>
        <Col m={4}>
          <div className='stats2'>
            Starring: <strong>{props.star1}, {props.star2}</strong><br></br>
            {props.mediaType === 'tv' ? (
              <>
                Last Episode:<br></br>
                <strong>{props.lastEpisode}</strong>
                <br></br>
                Aired:<br></br>
                <strong>{props.lastAir}</strong>
              </>) : (<>Directed by:<strong>{props.director} {props.director2}</strong></>)}
            <img
              className='tmdb'
              src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg'
              alt=''
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ResultsCard;
