import React from "react";
import { Collection, CollectionItem } from "react-materialize";

const FavoritesCelebs = (props) => {
  const getDetails = (e) => {

    console.log(e);
    props.celebSearch(e)
  };

  const deleteItemCeleb = (celebName) => {
    props.deleteCeleb(celebName);
  }

  console.log("FavoriteCelebs props: ", props);

  const { celebrities } = props;

  return (
    <>
      <h6 className="center-align title">{props.heading}</h6>
      <Collection className="frame">
        {celebrities.map(item => 
        (<CollectionItem id="fav-background">
          <span onClick={() => getDetails(item.celeb_name)}>{item.celeb_name}</span>
          <span onClick={ () => deleteItemCeleb(item.celeb_name) } className="material-icons remove">remove_circle</span>
        </CollectionItem>)
        )}
      </Collection>
    </>

  );
};

export default FavoritesCelebs;
