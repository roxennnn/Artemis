import React, { useState } from "react";
import { Form } from "react-bootstrap";

import Colors from "../constants/Colors";

import AuthService from "../services/auth.service";

const LoginComponent = (props) => {
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
    <div className="col-md-12">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Email address"
            onChange={(email) => setEmailValue(email.target.value)}
            value={emailValue}
            onKeyPress={(event) => {
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
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(pass) => setPassValue(pass.target.value)}
            value={passValue}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                console.log("TESTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTS");
                submitHandler();
              }
            }}
          />
        </Form.Group>
        <div className="help-block text-right">
          <a href="/todo" style={{ color: Colors.primary }}>
            Forget the password ?
          </a>
        </div>
        <div className="center-col col">
          <a
            className="btn-radius btn"
            style={{
              background: Colors.gradient,
              backgroundColor: Colors.primary,
              color: Colors.accent,
              margin: 10,
            }}
            role="button"
            // href="/home"
            onClick={submitHandler}
          >
            Log In
          </a>
        </div>
      </Form>
    </div>
  );
};

export default LoginComponent;