import styled from 'styled-components';
import { Card, Navbar, Container } from 'react-materialize';

export const ResultsWrapper = styled(Card)`
  .results-card, {
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
  .network-logo {
    width: 25px;
    height: 15px;
    margin-left: 0.55em;
  }
  .poster {
    position: relative;
    bottom: 2.5em;
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
  .stats {
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
  margin: 0;
  width: 100vw;
  max-width: 2000px;
  .discover {
    min-height: 31em;
    max-height: 31em;
  }
  .discover-related {
    min-height: 21em;
    max-height: 21em;
  }
  .trailer {
    position: relative;
    right: 7em;
  }
  .trailer{
    // position: relative;
    // left: 1em;
  }
  .trending-movies-tv{
    // width: 400px;
    // height: 400px;
  }
`;


