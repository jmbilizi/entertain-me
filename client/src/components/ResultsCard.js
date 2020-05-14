import React from "react";
import { Row, Col } from "react-materialize";
import _ from "lodash";

import { ResultsWrapper } from "../styles";
import Poster from "./Poster";

const ResultsCard = (props) => {
  const addFavorite = () => {
    alert("ADDED TO FAVORITES");
  };
  const setNotification = () => {
    alert("NOTIFICATION SET");
  };
  const watchContent = () => {
    alert("GO TO CONTENT PROVIDER");
  };
  const shareContent = () => {
    alert("CONTENT SHARED");
  };

  return (
    <ResultsWrapper>
      <div className="results-card">
        <Row>
          <Col m={1}></Col>
          <Col>
            <img
              className="backdrop-image"
              src={props.backdrop}
              alt={props.title}
            /><br></br>
            <img
              className="network-logo"
              src={props.networkLogo}
              alt={"tv network"}
            />
            <div className="details">
              <h4 className="results-card-title">
                {props.title}
                {props.title2}
              </h4>
              <div className="result-btns">
                <span onClick={addFavorite}>
                  <span className="material-icons favorite">favorite</span>
                </span>
                <span onClick={setNotification}>
                  <span className="material-icons notify">notifications</span>
                </span>
                <span onClick={watchContent}>
                  <span className="material-icons watch">tv</span>
                </span>
                <span onClick={shareContent}>
                  <span className="material-icons watch">share</span>
                </span>
              </div>
              <p className="overview">
                {_.truncate(props.overview, {
                  length: 190,
                  separator: "...",
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
          <Col m={8}>
            <div className="stats">
              <p>
                Release: <strong>{props.release}</strong>
              </p>
              <p>
                Genre: <strong>{props.genre}</strong>
              </p>
              <p>
                Rating:{" "}
                <strong>
                  {props.rating}
                  {props.tvRating}
                </strong>
              </p>
              <p>
                Runtime: <strong>{props.runtime}</strong>
              </p>
              <p>
                Viewer score: <strong>{props.score}</strong>
              </p>
              <p>movie id: {props.id}</p>
            </div>
          </Col>
        </Row>
      </div>
    </ResultsWrapper>
  );
};

export default ResultsCard;
