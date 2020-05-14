import React from 'react';
import {Collection, CollectionItem } from 'react-materialize';


const Favorites = (props) => {

    const getDetails = () => {
        console.log('FAVORITE SELECTED');
    }

    return (
        <>
            <h6>{props.heading}</h6>
            <Collection>
                <CollectionItem onClick={getDetails}>
                FAVORITE 1
            </CollectionItem>
                <CollectionItem onClick={getDetails}>
                FAVORITE 2
            </CollectionItem>
                <CollectionItem onClick={getDetails}>
                FAVORITE 3
            </CollectionItem>
                <CollectionItem onClick={getDetails}>
                FAVORITE 4
            </CollectionItem>
            <CollectionItem onClick={getDetails}>
                FAVORITE 5
            </CollectionItem>
            </Collection>
        </>

    )
}

export default Favorites;