import React from "react";
import { Collection, CollectionItem } from "react-materialize";
import _ from 'lodash';

const RelatedCard = (props) => {
  const getDetails = (e) => {
      e.preventDefault();
    alert("RETRIVE DETAILS");
  };

  return (
    <>
      <h6>RELATED</h6>
      <Collection>
        <CollectionItem onClick={getDetails}>
        <a href=""> <img className='related-images' src={props.relatedPoster1} alt={props.related1}/></a><span>
        {_.truncate(props.related1, {
                  length: 26,
                  separator: "...",
                })}</span>
        </CollectionItem>
        <CollectionItem onClick={getDetails}>
        <a href=""> <img className='related-images' src={props.relatedPoster2} alt={props.related2}/></a><span> 
                {_.truncate(props.related2, {
                  length: 26,
                  separator: "...",
                })}</span>
        </CollectionItem>
        <CollectionItem onClick={getDetails}>
        <a href=""> <img className='related-images' src={props.relatedPoster3} alt={props.related3}/></a><span> 
                {_.truncate(props.related3, {
                  length: 26,
                  separator: "...",
                })}</span>
        </CollectionItem>
        <CollectionItem onClick={getDetails}>
        <a href=""> <img className='related-images' src={props.relatedPoster4} alt={props.related4}/></a><span>  
               {_.truncate(props.related4, {
                  length: 26,
                  separator: "...",
                })}</span>
        </CollectionItem>
        <CollectionItem onClick={getDetails}>
        <a href=""> <img className='related-images' src={props.relatedPoster5} alt={props.related5}/></a><span>  
               {_.truncate(props.related5, {
                  length: 26,
                  separator: "...",
                })}</span>
        </CollectionItem>
      </Collection>
    </>
  );
};

export default RelatedCard;
