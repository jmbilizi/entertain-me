import React from "react";
import { Slider, Slide, Caption } from "react-materialize";

const Trending = (props) => {
  return (
   <Slider
  fullscreen={false}
  options={{
    duration: 500,
    height: 400,
    indicators: true,
    interval: 6000
  }}
>
  <Slide image={<img alt="" src={props.trending1}/>}>
    <Caption placement="left">
      <h3 className='trending-title'>
        #1: {props.trending1}
      </h3>
    </Caption>
  </Slide>
  <Slide image={<img alt="" src={props.trending2}/>}>
    <Caption placement="left">
      <h3 className='trending-title'>
      #2: {props.trending1}
      </h3>
    </Caption>
  </Slide>
  <Slide image={<img alt="" src={props.trending3}/>}>
    <Caption placement="left">
      <h3 className='trending-title'>
      #3: {props.trending1}
      </h3>
    </Caption>
  </Slide>
  <Slide image={<img alt="" src={props.trending4}/>}>
    <Caption placement="left">
      <h3 className='trending-title'>
      #4: {props.trending1}
      </h3>
    </Caption>
  </Slide>
  <Slide image={<img alt="" src={props.trending5}/>}>
    <Caption placement="left">
      <h3 className='trending-title'>
      #5: {props.trending1}
      </h3>
    </Caption>
  </Slide>
  <Slide image={<img alt="" src={props.trending6}/>}>
    <Caption placement="left">
      <h3 className='trending-title'>
      #6: {props.trending1}
      </h3>
    </Caption>
  </Slide>
  <Slide image={<img alt="" src={props.trending7}/>}>
    <Caption placement="left">
      <h3 className='trending-title'>
      #7: {props.trending1}
      </h3>
    </Caption>
  </Slide>
  <Slide image={<img alt="" src={props.trending8}/>}>
    <Caption placement="left">
      <h3 className='trending-title'>
      #8: {props.trending1}
      </h3>
    </Caption>
  </Slide>
  <Slide image={<img alt="" src={props.trending9}/>}>
    <Caption placement="left">
      <h3 className='trending-title'>
      #9: {props.trending1}
      </h3>
    </Caption>
  </Slide>
  <Slide image={<img alt="" src={props.trending10}/>}>
    <Caption placement="center">
      <h3 className='trending-title'>
      #10: {props.trending1}
      </h3>
    </Caption>
  </Slide>
</Slider>
  );
};

export default Trending;
