import React from 'react';

const Trailer = (props) => {
    console.log(`Trailer: `, props.trailer);

    return (
        <>
            <div className='center-align'>
                <h6>TRAILERS</h6>
                <div className='center-align'>
                    <iframe id='trailer' title='trailers' width="225" height="125" src={props.trailer} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen embed='true'></iframe>
                </div>
            </div>
        </>
    )
}

export default Trailer;

