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
      <Container>
        <div className="row">
          <div className="col s12 center-align">
            <h2 className="white-text">Profile</h2>
            <br />
            <h6 className="white-text">
              First Name: {`${user().fname}`}
              {/* {user.name} */}
            </h6>
            <br />
            <h6 className="white-text">
              Last Name: {`${user().lname}`}
              {/* {user.name} */}
            </h6>
            <br />
            <h6 className="white-text">
              Email: {`${user().username}`}
              {/* {user.email} */}
            </h6>
            {/* <p>{`Joined ${new Date(user.created).toDateString()}`}</p> */}
          </div>
        </div>
      </Container>
    </ProfilePageWrapper>
  );
};

export default Profile;
