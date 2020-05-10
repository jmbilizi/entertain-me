import React from 'react';
import { Row, Col } from 'react-materialize';

import { ResultsWrapper } from '../styles'
import MoviePoster from './Poster'


// normally don't destructure with this many items
const MovieCard = (props) => {


    return (

        <ResultsWrapper>
            <Row>
                <Col>
                    <img className='back' src={props.backdrop} alt={props.title} />
                    <div className='details'>
                        <h2>{props.title}</h2>
                        <h2>{props.title2}</h2>
                        <p>Release date: {props.release}</p><br></br>
                        <p className='description'>{props.description}</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col m={1}></Col>
                <Col m={1}>
                    <MoviePoster
                        poster={props.poster}
                    />
                </Col>
                <Col m={1}></Col>
                <Col m={4}>
                    <p>Genre: <strong>{props.genre}</strong></p>
                    <p>Rating: <strong>{props.score}</strong></p>
                    <p>Runtime: <strong>{props.score}</strong></p>
                    <p>Avg. viewer score: <strong>{props.score}</strong></p><br></br>
                    <p>{props.movieID}</p>
                </Col>
                <Col>
                    <p>Watch</p>
                </Col>
                <Col>
                    <span className="material-icons watch">tv</span>
                </Col>
            </Row>
        </ResultsWrapper>

    )
}

export default MovieCard;