import React, { useState, useEffect } from "react";
import "materialize-css";
import { Container, Col, Row } from "react-materialize";
import { Redirect } from "react-router-dom";

import { user } from "../../utils/helpers";
import './style.css';
import Axios from "axios";

const Profile = (props) => {
  const { token } = props;
  if (!token) return <Redirect to={"/login"} />;

  const [theUser, setTheUser] = useState(null);

  useEffect(async () => {
    const userId = await user()._id;

    const response = await Axios.get(`/api/user/${userId}`);

    const currentUser = await response.data;

    setTheUser(currentUser);
  }, []);

  const mystyle = {
    borderBottom: "none",
    boxShadow: "none",
  };

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
            {theUser && (
              <div class="input-field">
                <input
                  style={mystyle}
                  value={theUser.fname}
                  type="text"
                ></input>
                <label class="active" htmlFor="first_name">
                  First Name
                </label>
              </div>
            )}
            {theUser && (
              <div class="input-field">
                <input
                  style={mystyle}
                  value={theUser.lname}
                  type="text"
                ></input>
                <label class="active" htmlFor="last_name">
                  Last Name
                </label>
              </div>
            )}
            {theUser && (
              <div class="input-field">
                <input
                  style={mystyle}
                  value={theUser.username}
                  type="text"
                ></input>
                <label class="active" htmlFor="email">
                  Email
                </label>
              </div>
            )}
            {theUser && (
              <p>Joined: {new Date(theUser.created).toDateString()}</p>
            )}
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
