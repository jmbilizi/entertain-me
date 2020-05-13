import React from 'react';
import {Collection, CollectionItem } from 'react-materialize';


const Favorites = (props) => {

    const getDetails = () => {
        console.log(`favorite ${props.favoriteType} selected`);
    }

    return (
        <>
            <h5>{props.heading}</h5>
            <Collection>
                <CollectionItem onClick={getDetails}>
                {props.favoriteType} 1
            </CollectionItem>
                <CollectionItem onClick={getDetails}>
                {props.favoriteType} 2
            </CollectionItem>
                <CollectionItem onClick={getDetails}>
                {props.favoriteType} 3
            </CollectionItem>
                <CollectionItem onClick={getDetails}>
                {props.favoriteType} 4
            </CollectionItem>
            <CollectionItem onClick={getDetails}>
                {props.favoriteType} 5
            </CollectionItem>
            </Collection>
        </>

    )
}

export default Favorites;