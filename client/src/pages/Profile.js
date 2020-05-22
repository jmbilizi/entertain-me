import React from "react";
import "materialize-css";
import { Container } from "react-materialize";
import { Redirect } from "react-router-dom";
import { ContainerWrapper } from "../assets/styles";
import {
  getCurrentUserFirstName,
  getCurrentUserLastName,
  getCurrentUserEmail,
} from "../utils/helpers";

const Profile = (props) => {
  const { token } = props;
  if (!token) return <Redirect to={"/login"} />;

  const fname = getCurrentUserFirstName();
  const lname = getCurrentUserLastName();
  const email = getCurrentUserEmail();

  return (
    <ContainerWrapper>
      <Container>
        <div className="row">
          <div className="col s12 center-align">
            <h2 className="white-text">Profile</h2>
            <br />
            <h6 className="white-text">
              First Name: {fname}
              {/* {user.name} */}
            </h6>
            <br />
            <h6 className="white-text">
              Last Name: {lname}
              {/* {user.name} */}
            </h6>
            <br />
            <h6 className="white-text">
              Email: {email}
              {/* {user.email} */}
            </h6>
            {/* <p>{`Joined ${new Date(user.created).toDateString()}`}</p> */}
          </div>
        </div>
      </Container>
    </ContainerWrapper>
  );
};

export default Profile;
