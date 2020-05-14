import React from "react";
import { Carousel } from "react-materialize";

const Trending = (props) => {
  return (
    <div className="center-align">
      <h6>TRENDING MOVIES/TV</h6>
      <Carousel
        carouselId="movies"
        className="white-text center trending-movies"
        options={{
          fullWidth: true,
          indicators: true,
        }}
      >
        <div className="black">
          <h2>#1: {props.trendingTV1}</h2>
          <img
            className="trending-movies-tv"
            src={props.trendingTVPoster1}
            alt="trending-1"
          />
        </div>
        <div className="black">
          <h2>#2: {props.trendingTV2}</h2>
          <img
            className="trending-movies-tv"
            src={props.trendingTVPoster2}
            alt="trending-2"
          />
        </div>
        <div className="black">
          <h2>#3: {props.trendingTV3}</h2>
          <img
            className="trending-movies-tv"
            src={props.trendingTVPoster3}
            alt="trending-3"
          />
        </div>
        <div className="black">
          <h2>#4: {props.trendingTV4}</h2>
          <img
            className="trending-movies-tv"
            src={props.trendingTVPoster4}
            alt="trending-4"
          />
        </div>
        <div className="black">
          <h2>#5: {props.trendingTV5}</h2>
          <img
            className="trending-movies-tv"
            src={props.trendingTVPoster5}
            alt="trending-5"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Trending;
