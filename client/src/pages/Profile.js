import React from "react";
import "materialize-css";
import { Container } from "react-materialize";
import { Redirect } from "react-router-dom";
import { ProfilePageWrapper } from "../assets/styles";
import { user } from "../utils/helpers";

const Profile = (props) => {
  const { token } = props;
  if (!token) return <Redirect to={"/login"} />;

  return (
    <ProfilePageWrapper>
      <div className="container white-text">
        <h2 className="mt-5 mb-5">Profile</h2>
        <p>First Name: {`${user().fname}`}</p>
        <p>Last Name: {`${user().lname}`}</p>
        <p>Email: {`${user().username}`}</p>
      </div>
    </ProfilePageWrapper>
  );
};

export default Profile;
