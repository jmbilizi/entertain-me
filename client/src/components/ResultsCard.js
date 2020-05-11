import React from 'react';
import { Row, Col } from 'react-materialize';

import { ResultsWrapper } from '../styles'
import Poster from './Poster'

const ResultsCard = (props) => {

    const addFavorite = () => {
        alert('ADD TO FAVORITES');
    }

    return (

        <ResultsWrapper>
            <div className='results-card'>
                <Row>
                    <Col m={1}></Col>
                    <Col>
                        <img className='backdrop-image' src={props.backdrop} alt={props.title} />
                        <div className='details'>
                            <h3 className='results-card-title'>{props.title}{props.title2} <span onClick={addFavorite} ><span className="material-icons favorite">favorite</span></span></h3>
                            {/* <p>Release date: {props.release}</p><br></br> */}
                            <p className='description'>{props.description}</p>
                        </div>
                    </Col>
                    <Col m={1}></Col>
                </Row>
                <Row>
                    <Col m={1}></Col>
                    <Col m={3}>
                        <Poster
                            poster={props.poster}
                        />
                    </Col>
                    <Col m={8}>
                        <div className='stats'>
                            <p>Release: <strong>{props.release}</strong></p>
                            <p>Genre: <strong>{props.genre}</strong></p>
                            <p>Rating: <strong>{props.rating}</strong></p>
                            <p>Runtime: <strong>{props.runtime}</strong></p>
                            <p>Viewer score: <strong>{props.score}</strong></p>
                            <p>Watch</p>
                            <span className="material-icons watch">tv</span>
                            {props.movieID}
                        </div>
                    </Col>
                </Row>
            </div>
        </ResultsWrapper >

    )
}

export default ResultsCard;