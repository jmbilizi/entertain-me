import React from "react";
import "materialize-css";
import { Container, Row, Col } from "react-materialize";
import Headlines from "../components/Headlines";
import { ContainerWrapper } from "../assets/styles";

const Home = () => {
  return (
    <ContainerWrapper>
      <Container>
        <Row></Row>
        <Row>
          <Headlines />
        </Row>
        <Row>
          <Col s={4}>
            <h6 className="title">SUGGESTIONS</h6>
            <br></br>
            <p className="default-text">
              Side content Side content Side content Side content Side content
              Side content Side content Side content Side content Side content
              Side content Side content Side content
            </p>
            <img src={require("../assets/images/Kevin-Hart.jpg")} />
            <p className="default-text">
              Side content Side content Side content Side content Side content
              Side content Side content Side content Side content Side content
            </p>
            <img
              src="https://www.hellomagazine.com/imagenes/celebrities/2020051389741/brad-pitt-unrecognisable-school-photos-identical-to-daughter-shiloh/0-429-986/brad-pitt-unrecognisable-school-photos-t.jpg?filter=w600&interpolation=lanczos-normal&downsize=0.75xw:*&output-format=progressive-jpeg&output-quality=70"
              className="home-placeholder"
            />
          </Col>
          {/* <Col s={1}></Col> */}
          <Col s={8}>
            <img src="https://admitonefilmaddict.files.wordpress.com/2016/08/gladiator-e1470584300765.jpg?w=672&h=372&crop=1" />

            <h4 className="default-text ">DISCOVER YOUR NEXT FAVORITE THING</h4>
            <p className="default-text">
              some text some text some text some text some text some text some
              text some text some text some text some text some text some text
              some text some text some text some text some text some text some
              text some text some text some text some text some text some text
              some text some text some text some text some text some text some
              text some text some text some text some text some text some text
              some text some text some text some text some text some text some
              some text some text some text some text some text some text some
              text some text some text some text some text some text some text
              some text some text some text some text some text some text some
              text some text some text some text some text some text some text
              some text some text some text some text some text some text some
              text some text some text some text some text some text some text
              some text some text some text some text some text some text some
              text some text some text some text some text some text some text
              some text some text some text some text some text some text some
              text some text some text some text some text some text some text
              some text some text some text some text some text some text some
              text some text some text some text some text some text some text
            </p>
          </Col>
        </Row>
      </Container>
    </ContainerWrapper>
  );
};

export default Home;
