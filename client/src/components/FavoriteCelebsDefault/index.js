import React from "react";
import { Collection, CollectionItem } from "react-materialize";


const FavoriteCelebsDefault = (props) => {
  
  const getDetails = (e) => {

    console.log(e);
    props.celebSearch(e)
  };

  console.log("FavoriteCelebsDefault props: ", props);

  const { communityCelebrities } = props;

  return (
    <>
      <h6 className="celeb-title-center title">{props.heading}</h6>
      <Collection className="frame">
        {communityCelebrities.map(item => 
        (<CollectionItem id="fav-background">
          <span onClick={() => getDetails(item._id)} >{item._id}</span>
        </CollectionItem>)
        )}
      </Collection>
    </>

  );
};

export default FavoriteCelebsDefault;
