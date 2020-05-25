import React from "react";
import { Collection, CollectionItem } from "react-materialize";

const FavoriteCelebsDefault = (props) => {
  // const getDetails = (e) => {

  //   console.log(e);
  //   props.celebSearch(e)
  // };


  console.log("FavoriteCelebs console props: ", props);

  const { celebrities } = props;

  return (
    <>
      <h6 className="center-align title">{props.heading}</h6>
      <Collection className="frame">
        {celebrities.map(item =>
          (<CollectionItem>
            <span> {item.celeb_name}</span>
          </CollectionItem>)
        )}
      </Collection>
    </>

  );
};

export default FavoriteCelebsDefault;
