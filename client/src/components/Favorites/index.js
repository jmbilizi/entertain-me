import React from "react";
import { Collection, CollectionItem } from "react-materialize";

const Favorites = (props) => {
  const getDetails = (e) => {

    console.log(e);
    props.mediaSearch(e)
  };

  const deleteItem = (mediaName) => {
    props.deleteMedia(mediaName);
  }

  const { favorites } = props
  console.log({ favorites })
  return (
    <>
      <h6 className="center-align title">{props.heading}</h6>
      <Collection className="frame">
        {favorites.map(item => 
        (<CollectionItem>
          <span onClick={() => getDetails(item.media_name)}>{item.media_name}</span>
          <span onClick={ () => deleteItem(item.media_name) } className="material-icons remove">remove_circle</span>
        </CollectionItem>)
        )}


      </Collection>
    </>

    // iterate over array and filter by media type

  );
};

export default Favorites;
