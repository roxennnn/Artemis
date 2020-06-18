import React, { useContext, useState } from "react";
import { Container, Row, Form, Button } from "react-bootstrap";

import CenterView from "../components/CenterView";
import { LoggedContext } from "../components/LoggedContextProvider";

import loginPostReq from "../utils/loginPostReq";

const LoginPage = (props) => {
  const contextValue = useContext(LoggedContext);
  const [emailValue, setEmailValue] = useState("");
  const [passValue, setPassValue] = useState("");

  return (
    <div style={{ margin: 50 }}>
      <CenterView>
        <h1>Login</h1>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(email) => setEmailValue(email.target.value)}
              value={emailValue}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(pass) => setPassValue(pass.target.value)}
              value={passValue}
            />
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
              // href="/home"
              onClick={async () => {
                contextValue.setLogged(true);
                // console.log(emailValue);
                // console.log(passValue);
                const email = emailValue;
                const pass = passValue;
                // make login POST request
                try {
                  const response = await loginPostReq(email, pass);
                  console.log(response);
                } catch (err) {
                  console.log(err);
                }
                
                // reset inputs
                setEmailValue("");
                setPassValue("");
               
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
