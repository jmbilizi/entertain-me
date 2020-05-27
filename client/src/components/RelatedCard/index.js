import React from 'react';
import { Collection, CollectionItem } from 'react-materialize';
import _ from 'lodash';

import API from '../../utils/API';

const RelatedCard = (props) => {
  // async function getDetails(e) {
  //   e.preventDefault();
  //   let input = document.getElementsByClassName("related")[0].textContent
  //   const updateSearch = await API.mainSearch(input)
  //   let result = updateSearch.data.results[0]
  //   console.log(`NEW SEARCH FOR '${input}':`, result)

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
        {/* <CollectionItem>
          <img className='related-images' src={props.poster1} alt={props.related1} title={props.title1} />
          <span className='related' onClick={getDetails} >
            {_.truncate(props.title1, {
              length: 21,
              separator: '...',
            })}
          </span>
        </CollectionItem>
        <CollectionItem >
          <img className='related-images' src={props.poster2} alt={props.related2} />
          <span className='related' onClick={getDetails}>
            {_.truncate(props.title2, {
              length: 21,
              separator: '...',
            })}
          </span>
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
        </CollectionItem> */}

        {favorites.map(item =>
          (<CollectionItem>
            <span onClick={() => getDetails(item.title)}>{item.title}</span>
            {/* <span onClick={ () => deleteItem(item.media_name) } className="material-icons remove">remove_circle</span> */}
          </CollectionItem>)
        )}
      </Collection>
    </>
  );
};

export default RelatedCard;
