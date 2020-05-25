import React from "react";
import { Collection, CollectionItem } from "react-materialize";

const FavoritesDefault = (props) => {
  const getDetails = (e) => {

    console.log(e);
    props.mediaSearch(e)
  };

 
  const { favorites } = props
  console.log({ favorites })
  return (
    <>
      <h6 className="center-align title">{props.heading}</h6>
      <Collection className="frame">
        {favorites.map(item => 
        (<CollectionItem>
         <span onClick={() => getDetails(item.title)}>{item.title}</span>
          {/* <span onClick={ () => deleteItem(item.media_name) } className="material-icons remove">remove_circle</span> */}
        </CollectionItem>)
        )}


      </Collection>
    </>

    // iterate over array and filter by media type

  );
};

export default FavoritesDefault;
