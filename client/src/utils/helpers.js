import jwtDecode from "jwt-decode";

export function getCurrentUserId() {
  const userToken = localStorage.getItem("jwtToken");
  console.log(userToken);
  const decodedToken = jwtDecode(userToken);
  console.log(decodedToken);
  return decodedToken._id;
}

export function getCurrentUserFirstName() {
  const userToken = localStorage.getItem("jwtToken");
  console.log(userToken);
  const decodedToken = jwtDecode(userToken);
  console.log(decodedToken.fname);
  return decodedToken.fname;
}

export function getCurrentUserLastName() {
  const userToken = localStorage.getItem("jwtToken");
  console.log(userToken);
  const decodedToken = jwtDecode(userToken);
  return decodedToken.lname;
}

export function getCurrentUserEmail() {
  const userToken = localStorage.getItem("jwtToken");
  console.log(userToken);
  const decodedToken = jwtDecode(userToken);
  return decodedToken.username;
}
