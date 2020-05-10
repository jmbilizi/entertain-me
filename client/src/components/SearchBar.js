import React from 'react';
import { Button, Row, Col } from 'react-materialize';
import { ButtonWrapper } from '../styles'

const SearchBar = ({ title, handleInputChange, handleFormSubmit }) => {
    return (

        <div className='center-align'>
            <Row>
                <Col m={9}>
                    <form inline='true' onSubmit={handleFormSubmit}>
                        <label hidden>Search for a movie.</label>
                        <input
                            type='text'
                            name='movie'
                            id='movie'
                            placeholder='Enter a movie or tv show title'
                            value={title}
                            onChange={handleInputChange}
                        />
                    </form>
                </Col>
                <Col m={3}>
                    <Button className='btn-flat' onClick={handleFormSubmit}>Search</Button>
                </Col>
            </Row>

        </div>
    )
}

export default SearchBar;