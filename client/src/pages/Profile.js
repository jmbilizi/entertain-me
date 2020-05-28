import React, { useState, useEffect } from "react";
import "materialize-css";
import { Container } from "react-materialize";
import { Redirect } from "react-router-dom";
import { ProfilePageWrapper } from "../assets/styles";
import { user } from "../utils/helpers";
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
    <ProfilePageWrapper>
      <div className="container white-text">
        <div className="row">
          <h3>Profile</h3>
        </div>
        <div className="row">
          <div className="col s6">
            <img
              class="materialboxed"
              data-caption="A picture of a way with a group of trees in a park"
              width="250"
              src="https://lorempixel.com/800/400/nature/4"
            ></img>
          </div>
          <div className="col s6">
            <p>First Name: {`  ${user().fname}`}</p>
            <p>Last Name: {`   ${user().lname}`}</p>
            <p>Email: {`       ${user().username}`}</p>
            <p>{`Joined:       ${new Date(user().created).toDateString()}`}</p>
            <hr />
            <div className="row">
              <div className="col s6">
                <a class="btn teal">Update</a>
              </div>
              <div className="col s6">
                <button class="btn red">Delete</button>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <br />
        <div className="row center-align">
          <h6>Calendar</h6>
        </div>
        <div className="row center-align">
          <div className="col s4">
            <h6>Favorites movies</h6>
          </div>
          <div className="col s4">
            <h6>Favorites TV shows</h6>
          </div>
          <div className="col s4">
            <h6>Favorites Celebrities</h6>
          </div>
        </div>
      </div>
    </ProfilePageWrapper>
  );
};

export default Profile;
