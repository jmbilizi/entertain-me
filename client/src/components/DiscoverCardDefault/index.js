import React from 'react';
import { MediaBox } from 'react-materialize';
import _ from 'lodash';

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
      caption: 'whoe!!'
    }}
  >
    <img
      alt=""
      src={require('../../assets/images/scoob.jpg')}
      width="500"
    />
  </MediaBox>
  );
};

export default ResultsCardDefault;
