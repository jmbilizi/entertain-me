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
      <Container>
        <div className="row">
          <div className="col s12 center-align">
            <h2 className="white-text">Profile</h2>
            <br />
            <h6 className="white-text">
              First Name: XXXXXXXXX
              {/* {user.name} */}
            </h6>
            <br />
            <h6 className="white-text">
              Last Name: XXXXXXXXX
              {/* {user.name} */}
            </h6>
            <br />
            <h6 className="white-text">
              Email: YYYYYY@gmail.com
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
