import React from "react";
import { Collection, CollectionItem } from "react-materialize";

const FavoritesDefault = (props) => {
  const getDetails = (e) => {

    console.log(e);
    props.mediaSearch(e)
  };


  const { communityFavorites } = props
  return (
    <>
      <h6 className="fav-title-center title">{props.heading}</h6>
      <Collection className="frame">
        {communityFavorites.map(item =>
          (<CollectionItem id='fav-background'>
            <span onClick={() => getDetails(item._id)}>{item._id}</span>
          </CollectionItem>)
        )}


      </Collection>
    </>

    // iterate over array and filter by media type

  );
};

export default FavoritesDefault;
