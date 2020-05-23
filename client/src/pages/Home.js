import React from "react";
import "materialize-css";
import { Container, Row, Col } from "react-materialize";
import Headlines from "../components/Headlines";
import { ContainerWrapper } from "../assets/styles";

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


const Home = () => {
  return (
    <ContainerWrapper>
      <Container>
        <Row></Row>
        <Row>
          <Headlines />
        </Row>
        <Row>
          <Col s={3}>
            <h6 className="title">SUGGESTIONS</h6>

            <img src={require("../assets/images/Kevin-Hart.jpg")}
              className="home-placeholder"
            />
            <p className="default-text">
              Side content Side content Side content Side content Side content
              Side content Side content Side content Side content Side content
              Side content Side content Side content
            </p>
          </Col>
          <Col s={6}>
            <img src="https://admitonefilmaddict.files.wordpress.com/2016/08/gladiator-e1470584300765.jpg?w=672&h=372&crop=1"
              className="home-main-placeholder"
            />

            <h5 className="default-text ">DISCOVER YOUR NEXT FAVORITE THING</h5>
            <p className="default-text">
              some text some text some text some text some text some text some
              text some text some text some text some text some text some text
              some text some text some text some text some text some text some
              text some text some text some text some text some text some text
              
       
            </p>
          </Col>
          <Col s={3}>
            <h6 className="title">STAFF PICKS</h6>
            <ul className="default-text">
              <h6>MOVIES</h6>
              <li>Bad Boys For Life</li>
              <li>Avengers: End Game</li>
              <li>1917</li>
              <h6>SHOWS</h6>
              <li>Upload</li>
              <li>The Masked Singer</li>
              <li>Billions</li>
              <h6>PEOPLE</h6>
              <li>Elon Musk</li>
              <li>Will Smith</li>
              <li>Katy Perry</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </ContainerWrapper>
  );
};

export default Home;
