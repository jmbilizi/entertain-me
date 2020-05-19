import React from "react";
import { Container, Row, Col } from "react-materialize";

const DefaultCelebAppearances = () => {
  return (
    <>
      <Row>
        <Col>
          <img
            className="trending-celeb-images"
            src="https://static.tvtropes.org/pmwiki/pub/images/rick_and_morty_8.jpg"
            title="pic1"
            alt="default trending celebrities"
          />
          <img
            className="trending-celeb-images"
            src={require('../../src/assets/images/Vin-Diesel.jpg')}
            title="pic2"
            alt="default trending celebrities"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <img
            className="trending-celeb-images"
            src="https://www.toonpool.com/user/18089/files/taylor_swift_1274625.jpg"
            title="pic2"
            alt="default trending celebrities"
          />

          <img
            className="trending-celeb-images"
            src="https://vignette.wikia.nocookie.net/ricksanchez/images/e/e8/Morty.png/revision/latest/top-crop/width/360/height/450?cb=20160605181037"
            title="pic2"
            alt="default trending celebrities"
          />
        </Col>
      </Row>
    </>
  );
};

export default DefaultCelebAppearances;
