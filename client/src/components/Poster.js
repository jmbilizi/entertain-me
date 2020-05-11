import React from 'react';

const Poster = (props) => {

    return (
        <>
            <img className='poster' src={props.poster} alt={props.title} />
        </>
    )
}

export default Poster;

