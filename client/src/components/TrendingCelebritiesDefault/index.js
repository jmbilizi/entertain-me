import React from "react";
import { Row, Col } from "react-materialize";
import './style.css'

const DefaultCelebAppearances = () => {
  return (
    <>
      <Row>
      <h6 className="trending-celeb-title">TRENDING CELEBRITIES</h6>
        <Col>
          <img
            className="trending-celeb-images"
            src="https://static.tvtropes.org/pmwiki/pub/images/rick_and_morty_8.jpg"
            title="Rick Sanchez"
            alt="default trending celebrities"
          />
          <img
            className="trending-celeb-images"
            src={require('../../../src/assets/images/Vin-Diesel.jpg')}
            title="Vin Diesel"
            alt="default trending celebrities"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <img
            className="trending-celeb-images"
            src="https://www.toonpool.com/user/18089/files/taylor_swift_1274625.jpg"
            title="Taylor Swift"
            alt="default trending celebrities"
          />

          <img
            className="trending-celeb-images"
            src="https://vignette.wikia.nocookie.net/ricksanchez/images/e/e8/Morty.png/revision/latest/top-crop/width/360/height/450?cb=20160605181037"
            title="Morty Smith"
            alt="default trending celebrities"
          />
        </Col>
      </Row>
    </>
  );
};

export default DefaultCelebAppearances;
