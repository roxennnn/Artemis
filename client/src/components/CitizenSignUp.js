import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Checkbox } from "@material-ui/core";

import AuthService from "../services/auth.service";

import Colors from "../constants/Colors";
import { validateEmail } from "../constants/Utilities";

const CitizenSignUp = (props) => {
  const [username, setUsername] = useState("");
  const [usernameInvalid, setUsernameInvalid] = useState(false);

  const [email, setEmail] = useState("");
  const [emailInvalid, setEmailInvalid] = useState(false);

  const [confirmEmail, setConfirmEmail] = useState("");
  const [confirmEmailInvalid, setConfirmEmailInvalid] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordInvalid, setPasswordInvalid] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordInvalid, setConfirmPasswordInvalid] = useState(false);

  const [termsAndConditions, setTermsAndConditions] = useState(false);
  const [termsAndConditionsInvalid, setTermsAndConditionsInvalid] = useState(
    false
  );

  const submitHandler = async () => {
    const usernameValue = username;
    const emailValue = email;
    const confirmEmailValue = confirmEmail;
    const pass = password;
    const confirmPass = confirmPassword;

    let noErrors = true;
    // VALIDATION

    // Duplicate username?
    // Duplicate email?

    // Empty username
    if (usernameValue.length === 0) {
      setUsernameInvalid(true);
      noErrors = false;
    } else {
      setUsernameInvalid(false);
    }

    // Invalid email
    if (!validateEmail(emailValue)) {
      setEmailInvalid(true);
      noErrors = false;
    } else {
      setEmailInvalid(false);
    }

    // Confirm email
    if (emailValue !== confirmEmailValue) {
      setConfirmEmailInvalid(true);
      noErrors = false;
    } else {
      setConfirmEmailInvalid(false);
    }

    // Password length
    if (pass.length < 8) {
      setPasswordInvalid(true);
      noErrors = false;
    } else {
      setPasswordInvalid(false);
    }

    // Confirm password
    if (pass !== confirmPass) {
      setConfirmPasswordInvalid(true);
      noErrors = false;
    } else {
      setConfirmPasswordInvalid(false);
    }

    // Terms and conditions
    if (!termsAndConditions) {
      setTermsAndConditionsInvalid(true);
      noErrors = false;
    } else {
      setTermsAndConditionsInvalid(false);
    }

    if (noErrors) {
      try {
        await AuthService.registerCitizen(usernameValue, emailValue, pass);
        props.history.push("/home");
        window.location.reload();
        // props.history.push("/profile");
      } catch (err) {
        // here we should handle duplicate usernames or emails
        console.log(`ERROR: ${err}`);
        // THE FOLLOWING CAN BE USED FOR THE ERROR MESSAGE....
        // const resMessage =
        //   (error.response &&
        //     error.response.data &&
        //     error.response.data.message) ||
        //   error.message ||
        //   error.toString();
      }
      // // reset inputs
      // setUsername("");
      // setEmail("");
      // setConfirmEmail("");
      // setPassword("");
      // setConfirmPassword("");
    } else {
      setTermsAndConditions(false); // user has to accept again
    }
  };

  return (
    <Form noValidate>
      <h1>Citizen Sign Up</h1>
      <Form.Group controlId="formUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          onChange={(name) => setUsername(name.target.value)}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              submitHandler();
            }
          }}
          value={username}
          isInvalid={usernameInvalid}
          type="text"
          placeholder="Enter your username"
          required
        />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onChange={(email) => setEmail(email.target.value)}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              submitHandler();
            }
          }}
          value={email}
          isInvalid={emailInvalid}
          type="email"
          placeholder="Enter your email address"
          required
        />
        <Form.Control.Feedback type="invalid">
          Not a valid email address.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formConfirmEmail">
        <Form.Label>Confirm email address</Form.Label>
        <Form.Control
          onChange={(email) => setConfirmEmail(email.target.value)}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              submitHandler();
            }
          }}
          value={confirmEmail}
          isInvalid={confirmEmailInvalid}
          type="email"
          placeholder="Re-enter your email address"
          required
        />
        <Form.Control.Feedback type="invalid">
          Email addresses do not match.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          onChange={(pass) => setPassword(pass.target.value)}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              submitHandler();
            }
          }}
          value={password}
          isInvalid={passwordInvalid}
          type="password"
          placeholder="Password"
          required
        />
        <Form.Control.Feedback type="invalid">
          The password should be at least 8 characters long.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formControlPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          onChange={(pass) => setConfirmPassword(pass.target.value)}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              submitHandler();
            }
          }}
          value={confirmPassword}
          isInvalid={confirmPasswordInvalid}
          type="password"
          placeholder="Confirm password"
          required
        />
        <Form.Control.Feedback type="invalid">
          Passwords do not match.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Text>
        We'll never share your personal informations with anyone else.
      </Form.Text>

      <br />

      <Form.Group controlId="formTermsAndConditions">
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Checkbox
            classes={termsAndConditionsInvalid ? {root: "error-checkbox"} : {}}
            color="primary"
            checked={termsAndConditions}
            onChange={() => setTermsAndConditions(!termsAndConditions)}
          />
          <Form.Label>
            Agree to <a href="">terms</a> and <a href="">conditions</a>
          </Form.Label>
        </div>
        {termsAndConditionsInvalid && (
          <div
            style={{
              width: "100%",
              marginTop: ".25rem",
              marginLeft: "1%",
              fontSize: "80%",
              color: "#dc3545",
            }}
          >
            You must agree before submitting.
          </div>
        )}
      </Form.Group>

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

export default CitizenSignUp;
