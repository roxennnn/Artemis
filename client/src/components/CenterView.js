import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const CenterView = (props) => {

  return (
    <Container>
      <Row className="show-grid">
        <Col xs={1} md={props.sides}>
          {props.left}
        </Col>
        <Col xs={4} md={props.middle}>
          {props.children}
        </Col>
        <Col xs={1} md={props.sides}>
          {props.right}
        </Col>
      </Row>
    </Container>
  );
};

export default CenterView;