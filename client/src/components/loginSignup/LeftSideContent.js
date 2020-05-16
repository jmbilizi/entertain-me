import React from "react";
import { Carousel } from "react-materialize";
import "./carousel.css";

function LeftSideContent() {
  return (
    <>
      <Carousel
        carouselId="Carousel-2"
        images={[
          <img
            className="d-block w-100"
            src={require("./images/movie.jpg")}
            alt="First slide"
          />,
          <img
            className="d-block w-100"
            src={require("./images/show.jpg")}
            alt="Second slide"
          />,
          <img
            className="d-block w-100"
            src={require("./images/celebrity.jpg")}
            alt="Third slide"
          />,
        ]}
        options={{
          dist: -100,
          duration: 200,
          fullWidth: true,
          indicators: false,
          noWrap: false,
          numVisible: 5,
          onCycleTo: null,
          padding: 0,
          shift: 0,
        }}
      />
    </>
  );
}

export default LeftSideContent;
