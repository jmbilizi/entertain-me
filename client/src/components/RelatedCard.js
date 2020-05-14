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
        <a href=""> <img className='related-images' src={props.relatedTVPoster1} alt={props.relatedTV1}/></a><span>
        {_.truncate(props.relatedTV1, {
                  length: 26,
                  separator: "...",
                })}</span>
        </CollectionItem>
        <CollectionItem onClick={getDetails}>
        <a href=""> <img className='related-images' src={props.relatedTVPoster2} alt={props.relatedTV2}/></a><span> 
                {_.truncate(props.relatedTV2, {
                  length: 26,
                  separator: "...",
                })}</span>
        </CollectionItem>
        <CollectionItem onClick={getDetails}>
        <a href=""> <img className='related-images' src={props.relatedTVPoster3} alt={props.relatedTV3}/></a><span> 
                {_.truncate(props.relatedTV3, {
                  length: 26,
                  separator: "...",
                })}</span>
        </CollectionItem>
        <CollectionItem onClick={getDetails}>
        <a href=""> <img className='related-images' src={props.relatedTVPoster4} alt={props.relatedTV4}/></a><span>  
               {_.truncate(props.relatedTV4, {
                  length: 26,
                  separator: "...",
                })}</span>
        </CollectionItem>
        <CollectionItem onClick={getDetails}>
        <a href=""> <img className='related-images' src={props.relatedTVPoster5} alt={props.relatedTV5}/></a><span>  
               {_.truncate(props.relatedTV5, {
                  length: 26,
                  separator: "...",
                })}</span>
        </CollectionItem>
      </Collection>
    </>
  );
};

export default RelatedCard;
