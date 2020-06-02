import React from 'react';
import { Collection, CollectionItem } from 'react-materialize';
import _ from 'lodash';

const RelatedCard = (props) => {

  const getDetails = (e) => {

    console.log(e);
    props.mediaSearch(e)
  };

  const { favorites } = props
  console.log({ favorites })
  return (
    <>
      <h6 className='center-align title'>RELATED</h6>
      <Collection className='frame'>
        <CollectionItem id='related-background'>
          <img className='related-images' src={props.poster1} alt={props.related1} title={props.title1} />
          <span className='related' onClick={() => getDetails(props.title1)} >
            {_.truncate(props.title1, {
              length: 21,
              separator: '...',
            })}
          </span>
        </CollectionItem>
        <CollectionItem id='related-background2'>
          <img className='related-images' src={props.poster2} alt={props.related2} />
          <span className='related' onClick={() => getDetails(props.title2)}>
            {_.truncate(props.title2, {
              length: 21,
              separator: '...',
            })}
          </span>
        </CollectionItem>
        <CollectionItem id='related-background3'>
          <img className='related-images' src={props.poster3} alt={props.related3} />
          <span className='related' onClick={() => getDetails(props.title3)}>
            {_.truncate(props.title3, {
              length: 21,
              separator: '...',
            })}</span>
        </CollectionItem>
        <CollectionItem id='related-background4'>
          <img className='related-images' src={props.poster4} alt={props.related4} />
          <span className='related' onClick={() => getDetails(props.title4)}>
            {_.truncate(props.title4, {
              length: 21,
              separator: '...',
            })}</span>
        </CollectionItem>
        <CollectionItem id='related-background5'>
          <img className='related-images' src={props.poster5} alt={props.related5} />
          <span className='related' onClick={() => getDetails(props.title5)}>
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