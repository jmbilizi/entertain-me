import React from "react";
import { Container, Row, Col } from "react-materialize";


const DefaultCelebAppearances = () => {
  return (
    <>
      <Row>
        <Col>
          <img
            className="trending-celeb-images"
            src="https://via.placeholder.com/50"
            title="pic1"
            alt="default trending celebrities"
          />
          <img
            className="trending-celeb-images"
            src="https://via.placeholder.com/50"
            title="pic2"
            alt="default trending celebrities"
          />
        </Col>
      </Row>
      <Row>
        <Col>
        <img
          className="trending-celeb-images"
          src="https://via.placeholder.com/50"
          title="pic2"
          alt="default trending celebrities"
        />

        <img
          className="trending-celeb-images"
          src="https://via.placeholder.com/50"
          title="pic2"
          alt="default trending celebrities"
        />
        </Col>
      
      </Row>
      </>
  );
};

export default DefaultCelebAppearances;
