import React from 'react';
import { Row, Col } from 'react-materialize';
import _ from 'lodash';
// import jwt from 'jsonwebtoken';
import jwtDecode from 'jwt-decode';
import axios from "axios";

import { ResultsWrapper } from '../../assets/styles';
import Poster from '../Poster';

function getCurrentUserId () {
  const userToken = localStorage.getItem("jwtToken");
  console.log(userToken);
  const decodedToken = jwtDecode(userToken);
  console.log(decodedToken);
  return decodedToken._id
}

const ResultsCard = (props) => {
  const addFavorite = () => {
    alert('ADDED TO FAVORITES');
    const userId = getCurrentUserId();
    console.log(userId);
    const mediaName = props.selection;
    // hit put route to add favorite to current user
    console.log(props);
    axios
      .put("/api/favorites", { userId, mediaName, mediaId: props.id })
      .then((result) => {
        // to do
        // update react state so that media return shows up in array 
        console.log(result);
      })
      .catch((error) => {
        debugger;
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
    <ResultsWrapper>
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
              <p>
                Release: <strong>{props.release}</strong>
              </p>
              <p>
                Genre: <strong>{props.genre}<br></br>{props.genre2}</strong>
              </p>
              <p>
                Rating:{' '}
                <strong>
                  {props.rating}
                </strong>
              </p>
              <p>
                Runtime: <strong>{props.runtime} min</strong>
              </p>
              <p>
                Viewer score: <strong>{props.score}</strong>
              </p>
              <p>movie id: {props.id}</p>
            </div>
          </Col>
          <Col m={4}>
            <div className='stats2'>
              Last Episode:<br></br>
              <strong>{props.lastEpisode}</strong>
              <br></br>
              Aired:<br></br>
              <strong>{props.lastAir}</strong>
              <img
                className='tmdb'
                src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg'
                alt=''
              />
            </div>
          </Col>
        </Row>
      </div>
    </ResultsWrapper>
  );
};

export default ResultsCard;