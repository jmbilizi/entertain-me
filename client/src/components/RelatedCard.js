import React from 'react';
import {Collection, CollectionItem } from 'react-materialize';


const RelatedCard = (props) => {

    const getDetails = ()=>{
        alert('RETRIVE DETAILS');
    }
  
    return (
        <div className='center-align'>
              <h6>RELATED</h6>
            <Collection>
                <CollectionItem onClick={getDetails}>
                {props.relatedTV1} 
            </CollectionItem>
                <CollectionItem onClick={getDetails}>
                {props.relatedTV2} 
            </CollectionItem>
                <CollectionItem onClick={getDetails}>
                {props.relatedTV3} 
            </CollectionItem>
                <CollectionItem onClick={getDetails}>
                {props.relatedTV4} 
            </CollectionItem>
            <CollectionItem onClick={getDetails}>
                {props.relatedTV5} 
            </CollectionItem>
            </Collection>
        </div>

    )
}

export default RelatedCard;