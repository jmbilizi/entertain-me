import React from "react";
import "materialize-css";
import { Container, Row, Col } from "react-materialize";
import Headlines from "../components/Headlines";
import { ContainerWrapper } from "../assets/styles";

const users = [
  {
    "name": {
      "first": "Fred",
      "last": "Thomas"
    }
  },
  {
    "name": {
      "first": "Sandy",
      "last": "Davis"
    }
  },
  {
    "name": {
      "first": "Erica",
      "last": "Lane"
    }
  },
  {
    "name": {
      "first": "Roger",
      "last": "Willis"
    }
  },
  {
    "name": {
      "first": "Roxanna",
      "last": "Garcia"
    }
  },
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
            <br></br>
            <h6 className="title">Social Feed</h6>
             <div className="default-text">
             <strong>{users[0].name.first} says:</strong><br></br>"The Mandalorian rocks!"<br></br>
             <strong>{users[1].name.first} says:</strong><br></br>"Taylor Swift for president!"<br></br>
             <strong>{users[2].name.first} says:</strong><br></br> "Joker changed my life!"<br></br>
             <strong>{users[3].name.first} says:</strong><br></br> "Can't wait for Christopher Nolan's new flick!"<br></br>
          </div>
          </Col>
        </Row>
      </Container>
    </ContainerWrapper>
  );
};

export default Home;
