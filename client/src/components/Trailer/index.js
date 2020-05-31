import React from "react";

const Trailer = (props) => {
  console.log(`Trailer: `, props.trailer);

  return (
    <>
      <div className="trailer-card">
      <h6 className='center-align title'>TRAILER</h6>
        <div className="center-align">
          <iframe
            id="trailer"
            title="trailers"
            width="500"
            height="345"
            src={props.trailer}
            frameBorder="1"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            embed="true"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Trailer;
