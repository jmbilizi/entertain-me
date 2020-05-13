import React from 'react';

const Trailer = (props) => {
    console.log(`movie trailer: `, props.trailer);

    return (
        <>
            <div className='center-align'>
                <h3>TRAILERS</h3>
                <div className='trailer'>
                    <iframe title='trailers' width="300" height="175" src={props.trailer} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen embed='true'></iframe>
                </div>
            </div>
        </>
    )
}

export default Trailer;

