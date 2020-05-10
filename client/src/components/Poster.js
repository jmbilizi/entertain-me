import React from 'react';

const Poster = (props) => {

    const addFavorite =()=>{      
        alert('ADD TO FAVORITES');
        }

    return (
        <>
            <img className='poster' onClick={addFavorite} src={props.poster} alt={props.title} />
        </>
    )
}

export default Poster;

