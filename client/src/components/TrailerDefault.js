import React from "react";
import { Row, Col, Card } from "react-materialize";

const Trailer = (props) => {
  console.log(`Trailer: `, props.trailer);

  return (
    <Card className='trailers-default default-text'>
      <Row>
        <h6>DISCOVER TRAILERS</h6>
        <Col></Col>
      </Row>
    </Card>
  );
};

export default Trailer;
