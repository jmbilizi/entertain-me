import React from "react";
import { Slider, Slide, Caption } from "react-materialize";
import _ from "lodash";

const Trending = (props) => {
  return (
<div className='center-align title'>
    <h6>TRENDING</h6>
    <Slider
      className="frame"
      fullscreen={false}
      options={{
        duration: 500,
        height: 400,
        indicators: true,
        interval: 6000,
      }}
    >
      <Slide image={<img alt="" src={props.trending1[0]} />}>
        <Caption placement="left">
          <h5 className="trending-title">
            {_.truncate(`#1: ${props.trending1[1]}`, {
              length: 50,
              separator: "...",
            })}
          </h5>
        </Caption>
      </Slide>
      <Slide image={<img alt="" src={props.trending2[0]} />}>
        <Caption placement="left">
          <h5 className="trending-title">
            {_.truncate(`#2: ${props.trending2[1]}`, {
              length: 50,
              separator: "...",
            })}
          </h5>
        </Caption>
      </Slide>
      <Slide image={<img alt="" src={props.trending3[0]} />}>
        <Caption placement="left">
          <h5 className="trending-title">
            {_.truncate(`#3: ${props.trending3[1]}`, {
              length: 50,
              separator: "...",
            })}
          </h5>
        </Caption>
      </Slide>
      <Slide image={<img alt="" src={props.trending4[0]} />}>
        <Caption placement="left">
          <h5 className="trending-title">
            {_.truncate(`#4: ${props.trending4[1]}`, {
              length: 50,
              separator: "...",
            })}
          </h5>
        </Caption>
      </Slide>
      <Slide image={<img alt="" src={props.trending5[0]} />}>
        <Caption placement="left">
          <h5 className="trending-title">
            {_.truncate(`#5: ${props.trending5[1]}`, {
              length: 50,
              separator: "...",
            })}
          </h5>
        </Caption>
      </Slide>
      <Slide image={<img alt="" src={props.trending6[0]} />}>
        <Caption placement="left">
          <h5 className="trending-title">
            {_.truncate(`#6: ${props.trending6[1]}`, {
              length: 50,
              separator: "...",
            })}
          </h5>
        </Caption>
      </Slide>
      <Slide image={<img alt="" src={props.trending7[0]} />}>
        <Caption placement="left">
          <h5 className="trending-title">
            {_.truncate(`#7: ${props.trending7[1]}`, {
              length: 50,
              separator: "...",
            })}
          </h5>
        </Caption>
      </Slide>
      <Slide image={<img alt="" src={props.trending8[0]} />}>
        <Caption placement="left">
          <h5 className="trending-title">
            {_.truncate(`#8: ${props.trending8[1]}`, {
              length: 50,
              separator: "...",
            })}
          </h5>
        </Caption>
      </Slide>
      <Slide image={<img alt="" src={props.trending9[0]} />}>
        <Caption placement="left">
          <h5 className="trending-title">
            {_.truncate(`#9: ${props.trending9[1]}`, {
              length: 50,
              separator: "...",
            })}
          </h5>
        </Caption>
      </Slide>
      <Slide image={<img alt="" src={props.trending10[0]} />}>
        <Caption placement="left">
          <h5 className="trending-title">
            {_.truncate(`#10: ${props.trending10[1]}`, {
              length: 50,
              separator: "...",
            })}
          </h5>
        </Caption>
      </Slide>
    </Slider>
    </div>
  );
};

export default Trending;
