import React from "react";
import "materialize-css";
import { Container, Row, Col } from "react-materialize";
import Headlines from "../components/Headlines";
import { ContainerWrapper } from "../assets/styles";

const Home = () => {
  return (
    <ContainerWrapper>
      <Container>
        <Row>
          <Col>
            <Headlines />
          </Col>
        </Row>
      </Container>
    </ContainerWrapper>
  );
};

export default Home;
