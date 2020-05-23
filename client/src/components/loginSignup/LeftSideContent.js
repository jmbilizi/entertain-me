import React from 'react';
import { MediaBox } from 'react-materialize';
import './carousel.css';

function LeftSideContent() {
  return (
    <>
      <MediaBox
        id="MediaBox_1"
        options={{
          inDuration: 275,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200
        }}
      >
        <img alt='popcorn' src={require('./images/movie.jpg')} width="375" />
      </MediaBox>
      <MediaBox
        id="MediaBox_2"
        options={{
          inDuration: 275,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200
        }}
      >
        <img alt='popcorn' src={require('./images/show.jpg')} width="375" />
      </MediaBox>
      <MediaBox
        id="MediaBox_3"
        options={{
          inDuration: 275,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200
        }}
      >
        <img alt='popcorn' src={require('./images/celebrity.jpg')} width="375" />
      </MediaBox>
    </>
  );
}

export default LeftSideContent;
