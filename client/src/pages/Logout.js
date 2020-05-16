import React from "react";
import "materialize-css";
import { Container } from "react-materialize";
import { Redirect } from "react-router-dom";
import { ContainerWrapper } from "../styles";

const Profile = (props) => {
  const { token, setToken } = props;
  setToken(null);
  return <Redirect to={"/login"} />;
};

export default Profile;
