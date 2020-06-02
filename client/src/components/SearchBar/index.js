import React from "react";
import { Button, Row, Col } from "react-materialize";
import "./style.css"

const SearchBar = ({ handleInputChange, handleFormSubmit }) => {
  return (
    <div className="center-align">
      <Row>
        <Col m={9}>
          <form
            inline="true"
            className="search-input"
            onSubmit={handleFormSubmit}
          >

            <label hidden>Search for a movie or TV show.</label>
            <input
              className="search-input-box"
              type="text"
              name="userInput"
              id="userInput"
              placeholder="   Enter a movie or tv show title"
              onChange={handleInputChange}
            />
          </form>
        </Col>
        <Col m={3}>
          <Button className="btn-flat" onClick={handleFormSubmit}>
            GO
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default SearchBar;
