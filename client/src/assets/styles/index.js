import styled from "styled-components";
import { Card, Container } from "react-materialize";

export const ResultsWrapper = styled(Card)`
  position: relative;
  top: 2em;
  border: solid 2px #212121;
  .results-card {
    min-height: 31em;
    max-height: 31em;
  }
  .results-card-title {
    position: relative;
    bottom: 0.5em;
    margin: 0.75em 0 0.8em 0;
    font-size: 2em;
  }
  .backdrop-image {
    width: 300px;
    height: 165px;
    margin-left: 0.6em;
  }
  .tmdb {
    width: 50px;
    height: 40px;
    float: right;
    position: relative;
    top: 2em;
    left: 2em;
  }
  .network-logo {
    width: 45px;
    height: 25px;
    float: right;
  }
  .poster {
    width: 90px;
    display: block;
    position: relative;
    right: 1.25em;
    bottom: 6.75em;
  }
  .overview {
    position: relative;
    bottom: 2.75em;
    width: 95%;
    min-height: 7.5em;
    max-height: 7.5em;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .details {
    position: relative;
    bottom: 0.5em;
    margin-left: 0.5em;
  }
  .stats,
  .stats2 {
    position: relative;
    bottom: 7em;
    right: 2em;
  }
  .result-btns {
    position: relative;
    bottom: 2.25em;
    left: 0.5em;
    margin-bottom: 0.75em;
  }
  .favorite,
  .notify,
  .watch {
    margin-right: 0.4em;
    font-size: 1.15em;
  }
  .favorite,
  .notify,
  .watch {
    cursor: pointer;
    color: lightGray;
  }
  .favorite:hover {
    color: red;
  }
  .notify:hover,
  .watch:hover {
    color: green;
  }
`;

export const ContainerWrapper = styled(Container)`
  // -- for testing dark mode--- background-color: black;
  margin: 0;
  width: 100vw;
  max-width: 1500px;




  .discover {
    min-height: 21em;
    max-height: 21em;
    border: solid 2px #212121;
  }
  .discover-related,
  .trending {
    min-height: 21em;
    max-height: 21em;
    border: solid 2px #212121;
  }
  .trailers-default {
    min-height: 10em;
    max-height: 10em;
  }
  .remove {
    cursor: pointer;
    color: lightGray;
    float: right;
  }
  .remove:hover {
    color: red;
  }
  .related-images {
    width: 40px;
    height: 55px;
    position: relative;
    right: 1em;
    margin: 0 0;
  }
  .trending-title {
    position: relative;
    top: 10em;
    right: 0.75em;
  }
  .known,
  .trending-celeb-images {
    width: 70px;
    height: 95px;
    float: left;
    margin-right: 0.5em;
    border: solid 2px #212121;
    color: #bdbdbd;
  }
  .celeb-profile-pic {
    width: 375px;
    height: 475px;
      border: solid 2px #212121;
  }
  .celeb-appearances-overview,
  .celeb-biography,
  .celeb-name,
  .default-text {
    color: #bdbdbd;
  }
  .celeb-name{
    position: relative;
    bottom: .75em;
  }
  .appearances-title{
    color: #cfb53b;
    margin-bottom: 1em;
  }
  .biography-title, .trending-celeb-title, .title{
   color: #cfb53b;
  }
  .frame {
    border: #212121 2px solid;
  }

  .home-placeholder {
    width: 325px;
    height: 225px;
   
  }
  .celeb-result-btns {
    position: relative;
    bottom: 2.25em;
    left: 0.5em;
    margin-bottom: 0.75em;
    color: red;
  }
  .favorite,
  .notify,
  .watch {
    margin-right: 0.4em;
    font-size: 1.15em;
  }
  .favorite,
  .notify,
  .watch {
    cursor: pointer;
    color: lightGray;
  }
  .favorite:hover {
    color: red;
  }
  .notify:hover,
  .watch:hover {
    color: green;
  }
`;
