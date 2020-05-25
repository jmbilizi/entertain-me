import React, { useState } from "react";
import "materialize-css";
import { Container } from "react-materialize";
import { Redirect } from "react-router-dom";
import { ProfilePageWrapper } from "../assets/styles";
import { user } from "../utils/helpers";

const Profile = (props) => {
  const { token } = props;
  if (!token) return <Redirect to={"/login"} />;

  const [userProfile, redirectToLogin] = useState({
    userProfile: "",
    redirectToLogin: false,
  });

  const showProfile = () => {
    const userId = user()._id;

    fetch(`${process.env.REACT_APP_API_URL}/user/${userId}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
        Authorization: `Beater ${token}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.error) {
          this.setState({ redirectToLogin: true });
        } else {
          this.setState({ userProfile: data });
        }
      });
  };

  // if (redirectToLogin) return <Redirect to={"/login"} />;

  // for (const i = 0; i < user().favorites.lenght; i++) {
  //   const favorites = user().favorites[i].media_name;
  //   console.log(favorites);
  // }

  return (
    <ProfilePageWrapper>
      <div className="container white-text">
        <h2 className="mt-5 mb-5">Profile</h2>
        <p>First Name: {`${user().fname}`}</p>
        <p>Last Name: {`${user().lname}`}</p>
        <p>Email: {`${user().username}`}</p>

        <h4>Favorites tv show: </h4>
        <ul></ul>
      </div>
    </ProfilePageWrapper>
  );
};

export default Profile;
