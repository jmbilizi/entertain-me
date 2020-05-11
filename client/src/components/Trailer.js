import React from 'react';

const Trailer = (props) => {
    console.log(`movie trailer: `, props);

    return (
        <>
            <div className='center-align'>
                <h3>TRAILERS</h3>
                <div className='trailer'>
                    <iframe title='trailers' width="560" height="315" src={props.movieTrailer} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen embed='true'></iframe>
                </div>
            </div>
        </>
    )
}

export default Trailer;

