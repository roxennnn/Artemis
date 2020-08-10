import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Checkbox } from "@material-ui/core";

import AuthService from "../services/auth.service";

import PrimaryButton from "../components/PrimaryButton";
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
    } else {
      setTermsAndConditions(false); // user has to accept again
    }
  };

  return (
    <Form noValidate>
      <h2>
        {props.strings.SignupPage &&
          props.strings.SignupPage.CitizenSignUp.citizenSignUp}
      </h2>
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
          placeholder={
            props.strings.SignupPage &&
            props.strings.SignupPage.CitizenSignUp.enterYourUsername
          }
          required
        />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>
          {props.strings.SignupPage &&
            props.strings.SignupPage.CitizenSignUp.emailAddress}
        </Form.Label>
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
          placeholder={
            props.strings.SignupPage &&
            props.strings.SignupPage.CitizenSignUp.enterYourEmailAddress
          }
          required
        />
        <Form.Control.Feedback type="invalid">
          {props.strings.SignupPage &&
            props.strings.SignupPage.CitizenSignUp.invalidEmail}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formConfirmEmail">
        <Form.Label>
          {props.strings.SignupPage &&
            props.strings.SignupPage.CitizenSignUp.confirmEmailAddress}
        </Form.Label>
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
          placeholder={
            props.strings.SignupPage &&
            props.strings.SignupPage.CitizenSignUp.reEnterYourEmailAddress
          }
          required
        />
        <Form.Control.Feedback type="invalid">
          {props.strings.SignupPage &&
            props.strings.SignupPage.CitizenSignUp.emailsDontMatch}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>
          {props.strings.SignupPage &&
            props.strings.SignupPage.CitizenSignUp.password}
        </Form.Label>
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
          placeholder={
            props.strings.SignupPage &&
            props.strings.SignupPage.CitizenSignUp.password
          }
          required
        />
        <Form.Control.Feedback type="invalid">
          {props.strings.SignupPage &&
            props.strings.SignupPage.CitizenSignUp.passwordLength}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formControlPassword">
        <Form.Label>
          {props.strings.SignupPage &&
            props.strings.SignupPage.CitizenSignUp.confirmPassword}
        </Form.Label>
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
          placeholder={
            props.strings.SignupPage &&
            props.strings.SignupPage.CitizenSignUp.confirmPassword
          }
          required
        />
        <Form.Control.Feedback type="invalid">
          {props.strings.SignupPage &&
            props.strings.SignupPage.CitizenSignUp.passwordsDontMatch}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Text>
        {props.strings.SignupPage &&
          props.strings.SignupPage.CitizenSignUp.neverShare}
      </Form.Text>

      <br />

      <Form.Group controlId="formTermsAndConditions">
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Checkbox
            classes={
              termsAndConditionsInvalid ? { root: "error-checkbox" } : {}
            }
            color="primary"
            checked={termsAndConditions}
            onChange={() => setTermsAndConditions(!termsAndConditions)}
          />
          <Form.Label>
            {props.strings.SignupPage &&
              props.strings.SignupPage.CitizenSignUp.agreeTo}{" "}
            <a href="">
              {props.strings.SignupPage &&
                props.strings.SignupPage.CitizenSignUp.terms}
            </a>{" "}
            {props.strings.SignupPage &&
              props.strings.SignupPage.CitizenSignUp.and}{" "}
            <a href="">
              {props.strings.SignupPage &&
                props.strings.SignupPage.CitizenSignUp.conditions}
            </a>
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
            {props.strings.SignupPage &&
              props.strings.SignupPage.CitizenSignUp.youMustAgree}
          </div>
        )}
      </Form.Group>

      <PrimaryButton
        label={
          props.strings.SignupPage &&
          props.strings.SignupPage.CitizenSignUp.register
        }
        buttonStyle={{ margin: 10 }}
        onClick={submitHandler}
      />
    </Form>
  );
};

export default CitizenSignUp;
