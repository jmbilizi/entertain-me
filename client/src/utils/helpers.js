import jwtDecode from "jwt-decode";

export function getCurrentUserId() {
  const userToken = localStorage.getItem("jwtToken");
  console.log("Helper userToken: ", userToken);

  if (userToken) {
    const decodedToken = jwtDecode(userToken);
    console.log("Helper decodedToken: ", decodedToken);
    return decodedToken._id;
  } else {
    console.log("No token.");
  }
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