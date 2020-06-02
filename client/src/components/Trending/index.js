import React, { useState, useEffect } from "react";
import { Slider, Slide, Caption } from "react-materialize";
import _ from "lodash";
import API from "../../utils/API";

const Trending = (props) => {

  const [state, setState] = useState({
    trending1: "",
    trending2: "",
    trending3: "",
    trending4: "",
    trending5: "",
    trending6: "",
    trending7: "",
    trending8: "",
    trending9: "",
    trending10: "",
  });

  const imageURL = "https://image.tmdb.org/t/p/w500";

  const type = 'tv'

  useEffect(() => {
    trendingMoviesTV()
    async function trendingMoviesTV() {
      const trendingData = await API.trendingSearch(type);
      const trendingInfo = trendingData.data;
      console.log('trendingInfo ', trendingInfo)
      
  
  
      setState({
        trending1:
          trendingInfo.results[0].name
            ? [
              `${imageURL}` + trendingInfo.results[0].poster_path,
              trendingInfo.results[0].name,
            ]
            : [
              `${imageURL}` + trendingInfo.results[0].poster_path,
              trendingInfo.results[0].title,
            ],
        trending2:
          trendingInfo.results[0].name
            ? [
              `${imageURL}` + trendingInfo.results[1].poster_path,
              trendingInfo.results[1].name,
            ]
            : [
              `${imageURL}` + trendingInfo.results[1].poster_path,
              trendingInfo.results[1].title,
            ],
        trending3:
          trendingInfo.results[0].name
            ? [
              `${imageURL}` + trendingInfo.results[2].poster_path,
              trendingInfo.results[2].name,
            ]
            : [
              `${imageURL}` + trendingInfo.results[2].poster_path,
              trendingInfo.results[2].title,
            ],
        trending4:
          trendingInfo.results[0].name
            ? [
              `${imageURL}` + trendingInfo.results[3].poster_path,
              trendingInfo.results[3].name,
            ]
            : [
              `${imageURL}` + trendingInfo.results[3].poster_path,
              trendingInfo.results[3].title,
            ],
        trending5:
          trendingInfo.results[0].name
            ? [
              `${imageURL}` + trendingInfo.results[4].poster_path,
              trendingInfo.results[4].name,
            ]
            : [
              `${imageURL}` + trendingInfo.results[4].poster_path,
              trendingInfo.results[4].title,
            ],
        trending6:
          trendingInfo.results[0].name
            ? [
              `${imageURL}` + trendingInfo.results[5].poster_path,
              trendingInfo.results[5].name,
            ]
            : [
              `${imageURL}` + trendingInfo.results[5].poster_path,
              trendingInfo.results[5].title,
            ],
        trending7:
          trendingInfo.results[0].name
            ? [
              `${imageURL}` + trendingInfo.results[6].poster_path,
              trendingInfo.results[6].name,
            ]
            : [
              `${imageURL}` + trendingInfo.results[6].poster_path,
              trendingInfo.results[6].title,
            ],
        trending8:
          trendingInfo.results[0].name
            ? [
              `${imageURL}` + trendingInfo.results[7].poster_path,
              trendingInfo.results[7].name,
            ]
            : [
              `${imageURL}` + trendingInfo.results[7].poster_path,
              trendingInfo.results[7].title,
            ],
        trending9:
          trendingInfo.results[0].name
            ? [
              `${imageURL}` + trendingInfo.results[8].poster_path,
              trendingInfo.results[8].name,
            ]
            : [
              `${imageURL}` + trendingInfo.results[8].poster_path,
              trendingInfo.results[8].title,
            ],
        trending10:
          trendingInfo.results[0].name
            ? [
              `${imageURL}` + trendingInfo.results[9].poster_path,
              trendingInfo.results[9].name,
            ]
            : [
              `${imageURL}` + trendingInfo.results[9].poster_path,
              trendingInfo.results[9].title,
            ],
      });
    }
  }, []);



  console.log('STATE: ', state)












  return (
    <div >
      <h6 className='title'>TRENDING TV</h6>
      <br></br>
      <Slider
        className="frame slide"
        fullscreen={false}
        options={{
          duration: 500,
          height: 550,
          indicators: true,
          interval: 6000,
        }}
      >
        <Slide image={<img alt="" src={state.trending1[0]} />}>
          <Caption placement="left">
            <h5 className="trending-title">
              {_.truncate(`#1: ${state.trending1[1]}`, {
                length: 50,
                separator: "...",
              })}
            </h5>
          </Caption>
        </Slide>
        <Slide image={<img alt="" src={state.trending2[0]} />}>
          <Caption placement="left">
            <h5 className="trending-title">
              {_.truncate(`#2: ${state.trending2[1]}`, {
                length: 50,
                separator: "...",
              })}
            </h5>
          </Caption>
        </Slide>
        <Slide image={<img alt="" src={state.trending3[0]} />}>
          <Caption placement="left">
            <h5 className="trending-title">
              {_.truncate(`#3: ${state.trending3[1]}`, {
                length: 50,
                separator: "...",
              })}
            </h5>
          </Caption>
        </Slide>
        <Slide image={<img alt="" src={state.trending4[0]} />}>
          <Caption placement="left">
            <h5 className="trending-title">
              {_.truncate(`#4: ${state.trending4[1]}`, {
                length: 50,
                separator: "...",
              })}
            </h5>
          </Caption>
        </Slide>
        <Slide image={<img alt="" src={state.trending5[0]} />}>
          <Caption placement="left">
            <h5 className="trending-title">
              {_.truncate(`#5: ${state.trending5[1]}`, {
                length: 50,
                separator: "...",
              })}
            </h5>
          </Caption>
        </Slide>
        <Slide image={<img alt="" src={state.trending6[0]} />}>
          <Caption placement="left">
            <h5 className="trending-title">
              {_.truncate(`#6: ${state.trending6[1]}`, {
                length: 50,
                separator: "...",
              })}
            </h5>
          </Caption>
        </Slide>
        <Slide image={<img alt="" src={state.trending7[0]} />}>
          <Caption placement="left">
            <h5 className="trending-title">
              {_.truncate(`#7: ${state.trending7[1]}`, {
                length: 50,
                separator: "...",
              })}
            </h5>
          </Caption>
        </Slide>
        <Slide image={<img alt="" src={state.trending8[0]} />}>
          <Caption placement="left">
            <h5 className="trending-title">
              {_.truncate(`#8: ${state.trending8[1]}`, {
                length: 50,
                separator: "...",
              })}
            </h5>
          </Caption>
        </Slide>
        <Slide image={<img alt="" src={state.trending9[0]} />}>
          <Caption placement="left">
            <h5 className="trending-title">
              {_.truncate(`#9: ${state.trending9[1]}`, {
                length: 50,
                separator: "...",
              })}
            </h5>
          </Caption>
        </Slide>
        <Slide image={<img alt="" src={state.trending10[0]} />}>
          <Caption placement="left">
            <h5 className="trending-title">
              {_.truncate(`#10: ${state.trending10[1]}`, {
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
