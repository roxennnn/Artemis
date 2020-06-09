import React, {useContext} from "react";
import { Container, Row, Form, Button } from "react-bootstrap";

import CenterView from "../components/CenterView";
import {LoggedContext} from "../components/LoggedContextProvider";

const LoginPage = (props) => {
  const contextValue = useContext(LoggedContext);

  return (
    <div style={{ margin: 50 }}>
      <CenterView>
        <h1>Login</h1>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          {/* <Button variant="primary" type="submit">
            Login
          </Button> */}
          <div className="center-col col">
            <a
              className="btn-radius btn btn-primary btn-lg"
              role="button"
              href="/home"
              onClick={() => {
                contextValue.setLogged(true);
              }}
            >
              Log In
            </a>
          </div>
        </Form>
      </CenterView>
    </div>
  );
};

export default LoginPage;
