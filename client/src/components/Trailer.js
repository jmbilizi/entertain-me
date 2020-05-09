import React from 'react';

const Trailer = (props) => {
    // console.log(`props.movieTrailer`, props.movieTrailer);
    console.log(`movie trailer: `,props);

    return (
        <>
            <div className='center-align'>
                <iframe width="560" height="315" src={props.movieTrailer} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen embed='true'></iframe>
            </div>
        </>
    )
}

export default Trailer;

