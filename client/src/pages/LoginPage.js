import React, { useState } from "react";
import { Form } from "react-bootstrap";

import CenterView from "../components/CenterView";

import AuthService from "../services/auth.service";

const LoginPage = (props) => {
  const [emailValue, setEmailValue] = useState("");
  const [passValue, setPassValue] = useState("");

  const submitHandler = async () => {
    const email = emailValue;
    const pass = passValue;

    // make login POST request
    try {
      await AuthService.login(email, pass);
      props.history.push("/home");
      window.location.reload();
      // props.history.push("/profile");
    } catch (err) {
      console.log(err);
      // THE FOLLOWING CAN BE USED FOR THE ERROR MESSAGE....
      // const resMessage =
      //   (error.response &&
      //     error.response.data &&
      //     error.response.data.message) ||
      //   error.message ||
      //   error.toString();
    }
    // reset inputs
    setEmailValue("");
    setPassValue("");
  };

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
              onKeyPress={event => {
                if (event.key === "Enter") {
                  submitHandler();
                }
              }}
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
              onKeyPress={event => {
                if (event.key === "Enter") {
                  console.log("TESTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTS");
                  submitHandler();
                }
              }}
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
              // href=""
              onClick={submitHandler}
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
