import React from "react";
import "materialize-css";
import { Container } from "react-materialize";
import { Redirect } from "react-router-dom";
import { ContainerWrapper } from "../assets/styles";

const Profile = (props) => {
  const { token } = props;
  if (!token) return <Redirect to={"/login"} />;

  return (
    <ContainerWrapper>
      <Container></Container>
    </ContainerWrapper>
  );
};

export default Profile;
