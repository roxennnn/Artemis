import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const CenterView = (props) => {
  return (
    <Container>
      <Row className="show-grid">
        <Col xs={1} md={3}>
          {props.left}
        </Col>
        <Col xs={4} md={6}>
          {props.children}
        </Col>
        <Col xs={1} md={3}>
          {props.right}
        </Col>
      </Row>
    </Container>
  );
};

export default CenterView;