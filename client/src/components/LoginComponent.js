import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import Colors from "../constants/Colors";

import AuthService from "../services/auth.service";

const LoginComponent = (props) => {
  const history = useHistory();

  const [usernameValue, setUsernameValue] = useState("");
  const [passValue, setPassValue] = useState("");

  const submitHandler = async () => {
    const username = usernameValue;
    const pass = passValue;

    // make login POST request
    try {
      await AuthService.login(username, pass);
      history.push("/profile");
      window.location.reload();
      // props.history.push("/profile");
      // reset inputs
      setUsernameValue("");
      setPassValue("");
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
  };

  return (
    <div className="col-md-12">
      <Form>
        <Form.Group controlId="formUsername">
          <Form.Control
            type="text"
            placeholder="Username"
            onChange={(username) => setUsernameValue(username.target.value)}
            value={usernameValue}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                submitHandler();
              }
            }}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(pass) => setPassValue(pass.target.value)}
            value={passValue}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
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
