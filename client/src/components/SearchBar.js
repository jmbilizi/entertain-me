import React from 'react';
import { Button } from 'react-materialize';
import { ButtonWrapper } from '../styles'

const SearchBar = ({ title, handleInputChange, handleFormSubmit }) => {
    return (
        <>
            <form inline='true' onSubmit={handleFormSubmit}>
                <label hidden>Search for a movie.</label>
                <input
                    type="text"
                    name="movie"
                    id="movie"
                    placeholder="Enter a movie or tv show title"
                    value={title}
                    onChange={handleInputChange}
                />
                {/* <ButtonWrapper> */}
                    <button className='btn-flat' onClick={handleFormSubmit}>Search</button>
                {/* </ButtonWrapper> */}

            </form>
        </>
    )
}

export default SearchBar;