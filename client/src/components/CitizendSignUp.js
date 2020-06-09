import React from "react";
import { Container, Row, Form, Button } from "react-bootstrap";

const CitizenSignUp = (props) => {
  return (
    <Form>
      <h1>Citizen Sign Up</h1>
      <Form.Group>
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your first name" />
      </Form.Group>

      <Form.Group>
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your last name" />
      </Form.Group>

      <Form.Group>
        <Form.Label>Birthday</Form.Label>
        <Form.Control type="date" placeholder="Enter your birthday" />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm password" />
      </Form.Group>

      {/* <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}
      {/* <Button variant="primary" type="submit">
            Login
          </Button> */}
      <Form.Text>
        We'll never share your personal informations with anyone else.
      </Form.Text>
      <br />
      <div className="center-col col">
        <a
          className="btn-radius btn btn-success btn-lg"
          role="button"
          href="/home"
        >
          Sign Up
        </a>
      </div>
    </Form>
  );
};

export default CitizenSignUp;
