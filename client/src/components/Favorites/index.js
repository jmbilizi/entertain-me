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
  const top5 = favorites.slice(0, 5)
  return (
    <>
      <h6 className="center-align title">{props.heading}</h6>
      <Collection className="frame">
        {top5.map(item =>
          (<CollectionItem id='fav-background'>
            <span onClick={() => getDetails(item.media_name)}>{item.media_name}</span>
            <span onClick={() => deleteItem(item.media_name)} className="material-icons remove">remove_circle</span>
          </CollectionItem>)
        )}


      </Collection>
      <div >
        <a href='/profile'>see all</a>
      </div>

    </>

    // iterate over array and filter by media type

  );
};

export default Favorites;
