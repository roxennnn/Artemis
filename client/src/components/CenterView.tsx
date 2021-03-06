import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FixMeLater } from '../constants/Utilities';

const CenterView = (props: FixMeLater) => {
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
