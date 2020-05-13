import React from 'react';
import { Button, Row, Col } from 'react-materialize';

const SearchBar = ({ userInput, handleInputChange, handleFormSubmit }) => {
    return (

        <div className='center-align'>
            <Row>
                <Col m={9}>
                    <form inline='true' onSubmit={handleFormSubmit}>
                        <label hidden>Search for a movie or TV show.</label>
                        <input
                            type='text'
                            name='userInput'
                            id='userInput'
                            placeholder='Enter a movie or tv show title'
                            value={userInput}
                            onChange={handleInputChange}
                        />
                    </form>
                </Col>
                <Col m={3}>
                    <Button className='btn-flat' onClick={handleFormSubmit}>GO</Button>
                </Col>
            </Row>

        </div>
    )
}

export default SearchBar;