import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-materialize";
import API from "../../utils/API";
import moment from 'moment';

const Upcoming = (props) => {

  const [state, setState] = useState({
    upcoming1: "",
    upcoming2: "",
    upcoming3: "",
    upcoming4: "",
    upcoming5: "",
    upcoming6: "",
  });

  const {
    upcoming1,
    upcoming2,
    upcoming3,
    upcoming4,
    upcoming5,
    upcoming6,
  } = state;

  const imageURL = "https://image.tmdb.org/t/p/w500";

  const type = 'movie'

  useEffect(() => {
    upcomingMoviesTV()
    async function upcomingMoviesTV() {
      const upcomingData = await API.upcomingSearch(type);
      const upcomingInfo = upcomingData.data;
      console.log('upcomingInfo ', upcomingInfo)



      setState({
        upcoming1:
          upcomingInfo.results[0].name
            ? [
              `${imageURL}` + upcomingInfo.results[0].poster_path,
              upcomingInfo.results[0].name, upcomingInfo.results[0].release_date
            ]
            : [
              `${imageURL}` + upcomingInfo.results[0].poster_path,
              upcomingInfo.results[0].title, upcomingInfo.results[0].release_date
            ],
        upcoming2:
          upcomingInfo.results[1].name
            ? [
              `${imageURL}` + upcomingInfo.results[1].poster_path,
              upcomingInfo.results[1].name, upcomingInfo.results[1].release_date
            ]
            : [
              `${imageURL}` + upcomingInfo.results[1].poster_path,
              upcomingInfo.results[1].title, upcomingInfo.results[1].release_date
            ],
        upcoming3:
          upcomingInfo.results[2].name
            ? [
              `${imageURL}` + upcomingInfo.results[2].poster_path,
              upcomingInfo.results[2].name, upcomingInfo.results[2].release_date
            ]
            : [
              `${imageURL}` + upcomingInfo.results[2].poster_path,
              upcomingInfo.results[2].title, upcomingInfo.results[2].release_date
            ],
        upcoming4:
          upcomingInfo.results[3].name
            ? [
              `${imageURL}` + upcomingInfo.results[3].poster_path,
              upcomingInfo.results[3].name, upcomingInfo.results[3].release_date
            ]
            : [
              `${imageURL}` + upcomingInfo.results[3].poster_path,
              upcomingInfo.results[3].title, upcomingInfo.results[3].release_date
            ],
        upcoming5:
          upcomingInfo.results[4].name
            ? [
              `${imageURL}` + upcomingInfo.results[4].poster_path,
              upcomingInfo.results[4].name, upcomingInfo.results[4].release_date
            ]
            : [
              `${imageURL}` + upcomingInfo.results[4].poster_path,
              upcomingInfo.results[4].title, upcomingInfo.results[4].release_date
            ],
        upcoming6:
          upcomingInfo.results[5].name
            ? [
              `${imageURL}` + upcomingInfo.results[5].poster_path,
              upcomingInfo.results[5].name, upcomingInfo.results[5].release_date
            ]
            : [
              `${imageURL}` + upcomingInfo.results[5].poster_path,
              upcomingInfo.results[5].title, upcomingInfo.results[5].release_date
            ]
      });
    }
  }, []);



  console.log('STATE: ', state)


  return (
    <div className='center-align'>
      <h6 className='title'>UPCOMING MOVIES</h6>
      <br></br>
      <Container className='upcoming'>
        <Row>
          <Col m={2}>
            <img className='upcoming-img' alt="" src={upcoming1[0]} />
          </Col>
          <Col m={3}>
            <div className='upcoming-info' >
              <h6>{upcoming1[1]}</h6>
              <span className='upcoming-info-text'>Coming: {moment(upcoming1[2]).format('MMM Do, YYYY')}</span>
            </div>
          </Col>
          <Col m={1}></Col>
          <Col m={2} className=''>
            <img className='upcoming-img' alt="" src={upcoming2[0]} />
          </Col>
          <Col m={4}>
            <div className='upcoming-info' >
              <h6>{upcoming2[1]}</h6>
              <span className='upcoming-info-text'>Coming: {moment(upcoming2[2]).format('MMM Do, YYYY')}</span>
            </div>
          </Col>
        </Row>

        <Row>
          <Col m={2} className>
            <img className='upcoming-img' alt="" src={upcoming3[0]} />
          </Col>
          <Col m={3} className>
            <div className='upcoming-info' >
              <h6>{upcoming3[1]}</h6>
              <span className='upcoming-info-text'>Coming: {moment(upcoming3[2]).format('MMM Do, YYYY')}</span>
            </div>
          </Col>
          <Col m={1}></Col>
          <Col m={2} className=''>
            <img className='upcoming-img' alt="" src={upcoming4[0]} />
          </Col>
          <Col m={4}>
            <div className='upcoming-info ' >
              <h6>{upcoming4[1]}</h6>
              <span className='upcoming-info-text'>Coming: {moment(upcoming4[2]).format('MMM Do, YYYY')}</span>
            </div>
          </Col>
        </Row>

        <Row>
          <Col m={2} className>
            <img className='upcoming-img' alt="" src={upcoming5[0]} />
          </Col>
          <Col m={3} className>
            <div className='upcoming-info' >
              <h6>{upcoming5[1]}</h6>
              <span className='upcoming-info-text'>Coming: {moment(upcoming5[2]).format('MMM Do, YYYY')}</span>
            </div>
          </Col>
          <Col m={1}></Col>
          <Col m={2} className=''>
            <img className='upcoming-img' alt="" src={upcoming6[0]} />
          </Col>
          <Col m={4}>
            <div className='upcoming-info ' >
              <h6>{upcoming6[1]}</h6>
              <span className='upcoming-info-text'>Coming: {moment(upcoming6[2]).format('MMM Do, YYYY')}</span>
            </div>
          </Col>
        </Row>
      </Container>

    </div>
  );
};

export default Upcoming;
