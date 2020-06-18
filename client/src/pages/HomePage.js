import React from "react";
import { Button, Container, Row, Col, Image } from "react-bootstrap";
import logo from "../logo.svg";
import "../css/HomePage.css";

const HomePage = (props) => {
  return (
    <Container fluid>
      <Row>
        <Col>
          {/* <h1 className="text-center">Work Your Freedom</h1> */}
          <img
            src={logo}
            className="App-logo rounded mx-auto d-block"
            alt="logo"
          />
        </Col>
      </Row>
      <Row>
        <Col xs={1}></Col>
        <Col xs={10}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            fermentum metus in tempus eleifend. Sed neque elit, feugiat quis
            metus ut, aliquam bibendum tellus. Quisque vitae aliquam diam. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Phasellus fermentum nisl
            eget neque placerat tincidunt. Maecenas efficitur accumsan
            vulputate. Sed gravida risus quis mi aliquam condimentum. Quisque
            feugiat, enim at sollicitudin aliquam, enim magna vehicula diam, ac
            laoreet justo nulla non enim. Vivamus malesuada pharetra eros non
            condimentum. Nam placerat ipsum turpis, eget molestie nulla
            venenatis ut. Donec posuere et eros in molestie. Vestibulum
            tincidunt pharetra porttitor.
          </p>
        </Col>
        <Col xs={1}></Col>
      </Row>
      <Row lg={3}>
        <Col></Col>
        <div className="center-col col">
          <a className="btn-radius btn btn-danger btn-lg" role="button" href="/learn-more">Learn More</a>
        </div>
        <Col></Col>
      </Row>
      <div className="container loginbuttons">
      <Row md={4}>
        <Col></Col>
        <div className="center-col col">
          <a className="btn-radius btn btn-success btn-lg" role="button" href="/signup">Sign Up</a>
        </div>
        <div className="center-col col">
          <a className="btn-radius btn btn-primary btn-lg" role="button" href="/login">Log In</a>
        </div>
        <Col></Col>
      </Row>
      </div>
    </Container>
  );
};

export default HomePage;
