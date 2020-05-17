import React from "react";
import { Slider, Slide, Caption } from "react-materialize";
import "./carousel.css";

function LeftSideContent() {
  return (
    <>
   <Slider
  fullscreen={false}
  options={{
    duration: 1000,
    height: 400,
    indicators: false,
    interval: 6000
  }}
>
  <Slide image={<img alt="" src={require("./images/movie.jpg")}/>}>
    <Caption>
      <h3>
        This is our big Tagline!
      </h3>
      <h5 className="light grey-text text-lighten-3">
        Here's our small slogan.
      </h5>
    </Caption>
  </Slide>
  <Slide image={<img alt="" src={require("./images/show.jpg")}/>}>
    <Caption placement="left">
      <h3>
        Left Aligned Caption
      </h3>
      <h5 className="light grey-text text-lighten-3">
        Here's our small slogan.
      </h5>
    </Caption>
  </Slide>
  <Slide image={<img alt="" src={require("./images/celebrity.jpg")}/>}>
    <Caption placement="right">
      <h3>
        Right Aligned Caption
      </h3>
      <h5 className="light grey-text text-lighten-3">
        Here's our small slogan.
      </h5>
    </Caption>
  </Slide>
</Slider>

    </>
  );
}

export default LeftSideContent;
