import React, { useState } from "react";
import { Form } from "react-bootstrap";

import AuthService from "../services/auth.service";

const CitizenSignUp = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitHandler = async () => {
    const first = firstName;
    const last = lastName;
    const bday = birthday;
    const emailValue = email;
    const pass = password;
    const confirmPass = confirmPassword;

    if (pass === confirmPass) {
      try {
        await AuthService.registerCitizen(
          first,
          last,
          bday,
          emailValue,
          password
        );
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
      setFirstName("");
      setLastName("");
      setBirthday("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } else {
      console.log("Password and confirm password don't match");
    }
  };

  return (
    <Form>
      <h1>Citizen Sign Up</h1>
      <Form.Group>
        <Form.Label>First Name</Form.Label>
        <Form.Control
          onChange={(name) => setFirstName(name.target.value)}
          value={firstName}
          type="text"
          placeholder="Enter your first name"
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          onChange={(name) => setLastName(name.target.value)}
          value={lastName}
          type="text"
          placeholder="Enter your last name"
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Birthday</Form.Label>
        <Form.Control
          onChange={(day) => {
            console.log(day.target.value);
            console.log(typeof day.target.value);
            setBirthday(day.target.value);
          }}
          value={birthday}
          type="date"
          placeholder="Enter your birthday"
        />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onChange={(email) => setEmail(email.target.value)}
          value={email}
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
          onChange={(pass) => setPassword(pass.target.value)}
          value={password}
          type="password"
          placeholder="Password"
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          onChange={(pass) => setConfirmPassword(pass.target.value)}
          value={confirmPassword}
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
          className="btn-radius btn btn-success btn-lg"
          role="button"
          // href="/home"
          onClick={submitHandler}
        >
          Sign Up
        </a>
      </div>
    </Form>
  );
};

export default CitizenSignUp;
