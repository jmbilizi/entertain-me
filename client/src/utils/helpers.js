import jwtDecode from 'jwt-decode';

export function getCurrentUserId() {
    const userToken = localStorage.getItem("jwtToken");
    console.log(userToken);
    const decodedToken = jwtDecode(userToken);
    console.log(decodedToken);
    return decodedToken._id
  }

export function getCurrentUser () {
  const userToken = localStorage.getItem("jwtToken");
  console.log(userToken);
  const decodedToken = jwtDecode(userToken);
  return decodedToken;
}


