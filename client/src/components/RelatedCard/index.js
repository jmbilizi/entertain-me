import React from 'react';
import { Collection, CollectionItem } from 'react-materialize';
import _ from 'lodash';
// import mediaSearch from '../../pages/MoviePage';
import API from '../../utils/API';

const RelatedCard = (props) => {
 async  function getDetails(e){
    e.preventDefault();
    let input = props.title1
    // alert('RETRIVE DETAILS');
    const updateSearch = await API.mediaSearch(input)
   
    console.log('new search: ',updateSearch.data)
  };

  return (
    <>
      <h6 className='center-align title'>RELATED</h6>
      <Collection className='frame'>
        <CollectionItem>
          <img id='one' className='related-images' src={props.poster1} alt={props.related1} title={props.title1} />
          <span onClick={getDetails}
          />
            {_.truncate(props.title1, {
              length: 21,
              separator: '...',
            })}
        </CollectionItem>
        <CollectionItem >

          <img className='related-images' src={props.poster2} alt={props.related2} />
          <span onClick={getDetails}>
            {_.truncate(props.title2, {
              length: 21,
              separator: '...',
            })}</span>
        </CollectionItem>
        <CollectionItem>

          <img className='related-images' src={props.poster3} alt={props.related3} />
          <span onClick={getDetails}>
            {_.truncate(props.title3, {
              length: 21,
              separator: '...',
            })}</span>
        </CollectionItem>
        <CollectionItem>

          <img className='related-images' src={props.poster4} alt={props.related4} />
          <span onClick={getDetails}>
            {_.truncate(props.title4, {
              length: 21,
              separator: '...',
            })}</span>
        </CollectionItem>
        <CollectionItem >

          <img className='related-images' src={props.poster5} alt={props.related5} />
          <span onClick={getDetails}>
            {_.truncate(props.title5, {
              length: 21,
              separator: '...',
            })}</span>
        </CollectionItem>
      </Collection>
    </>
  );
};

export default RelatedCard;
