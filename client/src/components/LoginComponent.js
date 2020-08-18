import React, { useState } from "react";
import { Form } from "react-bootstrap";

import Colors from "../constants/Colors";
import PrimaryButton from "./PrimaryButton";

import AuthService from "../services/auth.service";

const LoginComponent = (props) => {
  const [usernameValue, setUsernameValue] = useState("");
  const [passValue, setPassValue] = useState("");

  const submitHandler = async () => {
    const username = usernameValue;
    const pass = passValue;

    // make login POST request
    try {
      await AuthService.login(username, pass);
      localStorage.setItem("language", props.language);
      props.history.push("/profile");
      window.location.reload();

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
            placeholder={
              props.strings.NavComponent &&
              props.strings.NavComponent.LoginNavbar.password
            }
            onChange={(pass) => setPassValue(pass.target.value)}
            value={passValue}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                submitHandler();
              }
            }}
          />
        </Form.Group>
        <div className="help-block text-right hover-underline" style={{ color: Colors.primary }}>
          <a href="/todo" style={{ color: Colors.primary }}>
            {props.strings.NavComponent &&
              props.strings.NavComponent.LoginNavbar.forgotPassword}
          </a>
        </div>
        <PrimaryButton
          label="Log In"
          buttonStyle={{ margin: 10 }}
          onClick={submitHandler}
        />
      </Form>
    </div>
  );
};

export default LoginComponent;
