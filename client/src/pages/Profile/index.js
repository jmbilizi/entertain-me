import React, { useState, useEffect } from "react";
import "materialize-css";
import { Container, Col, Row } from "react-materialize";
import { Redirect } from "react-router-dom";

import { user } from "../../utils/helpers";
import './style.css';
import Axios from "axios";

const Profile = (props) => {
  const { token } = props;

  // const [state, setState] = useState({
  //   userProfile: "",
  //   redirectToLogin: false,
  // });

  // const userId = user()._id;

  // useEffect(() => {
  //   console.log(`testing user: ${userId}`);

  //   Axios(`/user/${userId}`, {
  //     method: "GET",
  //   }).then((response) => {
  //     console.log(response);
  //     // return response.json();
  //   });
  // });

  if (!token) return <Redirect to={"/login"} />;

  // for (const i = 0; i < user().favorites.lenght; i++) {
  //   const favorites = user().favorites[i].media_name;
  //   console.log(favorites);
  // }

  return (
    <>
      <Container className="white-text">
        <Row>
          <h3>Profile</h3>
        </Row>
        <Row className="row">
          <Col s={6}>
            <img
              class="materialboxed"
              data-caption="A picture of a way with a group of trees in a park"
              width="250"
              src="https://lorempixel.com/800/400/nature/4"
            ></img>
          </Col>
          <Col s={6}>
            <p>First Name: {`  ${user().fname}`}</p>
            <p>Last Name: {`   ${user().lname}`}</p>
            <p>Email: {`       ${user().username}`}</p>
            <p>{`Joined:       ${new Date(user().created).toDateString()}`}</p>
            <hr />
            <Row>
              <Col s={6}>
                <a class="btn teal">Update</a>
              </Col>
              <Col s={6}>
                <button class="btn btn-flat red">Delete</button>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr />
        <br />
        <Row className="center-align">
          <h6>Calendar</h6>
        </Row>
        <Row className="center-align">
          <Col s={4}>
            <h6>Favorites movies</h6>
          </Col>
          <Col s={4}>
            <h6>Favorites TV shows</h6>
          </Col>
          <Col s={4}>
            <h6>Favorites Celebrities</h6>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
