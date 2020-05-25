import jwtDecode from "jwt-decode";

export function user() {
  const userToken = localStorage.getItem("jwtToken");
  if (userToken) {
    console.log(userToken);
    const decodedToken = jwtDecode(userToken);
    console.log(decodedToken);
    return decodedToken;
  } else {
    console.log("No token found!");
  }
}
