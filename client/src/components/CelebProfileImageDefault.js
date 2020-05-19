import React from "react";

const CelebProfileImageDefault = () => {
  return (
    <>
      <img
        className="celeb-profile-pic"
        src={require("../assets/images/celeb.jpg")}
        alt="celebrity profile pic"
      />
    </>
  );
};

export default CelebProfileImageDefault;
