import jwtDecode from 'jwt-decode';

function getCurrentUserId() {
    const userToken = localStorage.getItem("jwtToken");
    console.log(userToken);
    const decodedToken = jwtDecode(userToken);
    console.log(decodedToken);
    return decodedToken._id
  }

export default {
    getCurrentUserId
};