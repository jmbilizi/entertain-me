import React from 'react';
import { MediaBox } from 'react-materialize';

const ResultsCardDefault = () => {
   return (
    <MediaBox
    id="MediaBox_7"
    options={{
      inDuration: 275,
      onCloseEnd: null,
      onCloseStart: null,
      onOpenEnd: null,
      onOpenStart: null,
      outDuration: 200,
      caption: 'Scoob!'
    }}
  >
    <img
      alt=""
      src={require('../../assets/images/scoob.jpg')}
      width="410"
    />
  </MediaBox>
  );
};

export default ResultsCardDefault;
