import React from "react";
import { Button, Row, Col } from "react-materialize";

const CelebSearchBar = ({ handleInputChange, handleFormSubmit }) => {
  return (
    <div className="center-align">
      <Row>
        <Col m={9}>
          <form
            inline="true"
            className="search-input"
            onSubmit={handleFormSubmit}
          >
            <label hidden>Search for a celebrity.</label>
            <input
             className="search-input-box"
              type="text"
              name="userInput"
              id="userInput"
              placeholder="      Enter a celebrity name"
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

export default CelebSearchBar;
