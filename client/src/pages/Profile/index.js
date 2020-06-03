import React, { useState, useEffect } from "react";
import "materialize-css";
import { Container, Col, Row } from "react-materialize";
import { Redirect } from "react-router-dom";

import { user } from "../../utils/helpers";
import "./style.css";
import Axios from "axios";
import { MdEdit } from "react-icons/md";

const Profile = (props) => {
  const { token } = props;
  if (!token) return <Redirect to={"/login"} />;

  const [theUser, setTheUser] = useState(null);

  useEffect(() => {
    getUser();
  }, []);

  //get user info axios call
  async function getUser() {
    let userId = await user()._id;

    const response = await Axios.get(`/api/user/${userId}`);

    const currentUser = await response.data;

    setTheUser(currentUser);
  }

  //update user info axios call
  const updateUser = async () => {
    let userId = await user()._id;

    let response = await Axios.put(`/api/user/${userId}`, theUser);

    setTheUser(theUser);
  };

  //handleInputChange function
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTheUser({ ...theUser, [name]: value });
  };

  //input field style
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
              className="materialboxed"
              data-caption="blank profile picture"
              width="250"
              src={require("../../assets/images/blank-profile-picture.png")}
              alt=""
            ></img>
          </Col>
          <Col s={6}>
            {theUser && (
              <div className="input-field">
                <input
                  style={mystyle}
                  name="fname"
                  value={theUser.fname}
                  type="text"
                  onChange={handleInputChange}
                ></input>
                <label className="active" htmlFor="first_name">
                  First Name
                </label>
              </div>
            )}
            {theUser && (
              <div className="input-field">
                <input
                  style={mystyle}
                  value={theUser.lname}
                  name="lname"
                  type="text"
                  onChange={handleInputChange}
                ></input>
                <label className="active" htmlFor="last_name">
                  Last Name
                </label>
              </div>
            )}
            {theUser && (
              <div className="input-field">
                <input
                  style={mystyle}
                  name="email"
                  value={theUser.username}
                  type="text"
                  onChange={handleInputChange}
                ></input>
                <label className="active" htmlFor="email">
                  Email
                </label>
              </div>
            )}
            {theUser && (
              <p>Joined: {new Date(theUser.created).toDateString()}</p>
            )}
            <Row>
              <Col s={6}>
                <div onClick={updateUser} className="btn btn-flat">
                  Update
                </div>
              </Col>
              <Col s={6}>
                <div className="btn btn-flat">Delete</div>
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
            <h6>Favorite Movies</h6>
          </Col>
          <Col s={4}>
            <h6>Favorite TV shows</h6>
          </Col>
          <Col s={4}>
            <h6>Favorite Celebrities</h6>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
