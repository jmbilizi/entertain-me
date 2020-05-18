import React from 'react';
import 'materialize-css';
import { Redirect } from 'react-router-dom';

const Profile = (props) => {
  const { token, setToken } = props;
  setToken(null);
  return <Redirect to={'/login'} />;
};

export default Profile;
