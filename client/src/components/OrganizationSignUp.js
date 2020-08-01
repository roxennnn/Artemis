import React, { useState } from "react";
import { Form } from "react-bootstrap";

import AuthService from "../services/auth.service";

import Colors from "../constants/Colors";

const OrganizationSignUp = (props) => {
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitHandler = async () => {
    // const org = organization;
    // const emailValue = email;
    const pass = password;
    const confirmPass = confirmPassword;

    if (pass === confirmPass) {
      try {
        await AuthService.registerOrganization(organization, email, password);
        props.history.push("/home");
        window.location.reload();
        // props.history.push("/profile");
      } catch (err) {
        console.log(err.message);
      }
    } else {
      console.log("Password and confirm password don't match");
    }
  };

  return (
    <Form>
      <h1>Organization Sign Up</h1>
      <Form.Group>
        <Form.Label>Organization Name</Form.Label>
        <Form.Control
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              submitHandler();
            }
          }}
          value={organization}
          onChange={(formValue) => setOrganization(formValue.target.value)}
          type="text"
          placeholder="Enter your organization's name"
        />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              submitHandler();
            }
          }}
          value={email}
          onChange={(formValue) => setEmail(formValue.target.value)}
          type="email"
          placeholder="Enter email"
        />
        {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              submitHandler();
            }
          }}
          value={password}
          onChange={(formValue) => setPassword(formValue.target.value)}
          type="password"
          placeholder="Password"
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              submitHandler();
            }
          }}
          value={confirmPassword}
          onChange={(formValue) => setConfirmPassword(formValue.target.value)}
          type="password"
          placeholder="Confirm password"
        />
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
          className="btn-radius btn"
          role="button"
          style={{
            background: Colors.gradient,
            backgroundColor: Colors.primary,
            color: Colors.accent,
            margin: 10,
          }}
          // href="/home"
          onClick={submitHandler}
        >
          Sign Up
        </a>
      </div>
    </Form>
  );
};

export default OrganizationSignUp;
