import React from 'react';

const Poster = (props) => {

    const getTrailer =()=>{
      
        alert('TRAILER');

        }

    return (
        <>
            <img id='trailer' className='poster' src={props.poster} alt={props.title} />
        </>
    )
}

export default Poster;

