import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Checkbox } from "@material-ui/core";

import AuthService from "../services/auth.service";

import PrimaryButton from "../components/PrimaryButton";
import Colors from "../constants/Colors";
import { validateEmail } from "../constants/Utilities";

const WomanSignUp = (props) => {
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
        await AuthService.registerWoman(usernameValue, emailValue, pass);
        props.history.push("/home");
        // window.location.reload();
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
      <h3>
        {props.strings.SignupPage && props.strings.SignupPage.citizenSignUp}
      </h3>
      <Form.Group controlId="formUsername">
        <Form.Label style={{ fontSize: 22 }}>Username</Form.Label>
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
            props.strings.SignupPage.enterYourUsername
          }
          required
        />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label style={{ fontSize: 22 }}>
          {props.strings.SignupPage && props.strings.SignupPage.emailAddress}
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
            props.strings.SignupPage.enterYourEmailAddress
          }
          required
        />
        <Form.Control.Feedback type="invalid">
          {props.strings.SignupPage && props.strings.SignupPage.invalidEmail}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formConfirmEmail">
        <Form.Label style={{ fontSize: 22 }}>
          {props.strings.SignupPage &&
            props.strings.SignupPage.confirmEmailAddress}
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
            props.strings.SignupPage.reEnterYourEmailAddress
          }
          required
        />
        <Form.Control.Feedback type="invalid">
          {props.strings.SignupPage && props.strings.SignupPage.emailsDontMatch}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label style={{ fontSize: 22 }}>
          {props.strings.SignupPage && props.strings.SignupPage.password}
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
            props.strings.SignupPage && props.strings.SignupPage.password
          }
          required
        />
        <Form.Control.Feedback type="invalid">
          {props.strings.SignupPage && props.strings.SignupPage.passwordLength}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formControlPassword">
        <Form.Label style={{ fontSize: 22 }}>
          {props.strings.SignupPage && props.strings.SignupPage.confirmPassword}
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
            props.strings.SignupPage && props.strings.SignupPage.confirmPassword
          }
          required
        />
        <Form.Control.Feedback type="invalid">
          {props.strings.SignupPage &&
            props.strings.SignupPage.passwordsDontMatch}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Text>
        {props.strings.SignupPage && props.strings.SignupPage.neverShare}
      </Form.Text>

      <br />

      <Form.Group controlId="formTermsAndConditions">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Checkbox
            classes={
              termsAndConditionsInvalid ? { root: "error-checkbox" } : {}
            }
            color="primary"
            checked={termsAndConditions}
            onChange={() => setTermsAndConditions(!termsAndConditions)}
          />
          <Form.Label style={{ marginBottom: 0 }}>
            {props.strings.SignupPage && props.strings.SignupPage.agreeTo}{" "}
            <a href="">
              {props.strings.SignupPage && props.strings.SignupPage.terms}
            </a>{" "}
            {props.strings.SignupPage && props.strings.SignupPage.and}{" "}
            <a href="">
              {props.strings.SignupPage && props.strings.SignupPage.conditions}
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
            {props.strings.SignupPage && props.strings.SignupPage.youMustAgree}
          </div>
        )}
      </Form.Group>

      <PrimaryButton
        label={props.strings.SignupPage && props.strings.SignupPage.register}
        buttonStyle={{ margin: 10 }}
        onClick={submitHandler}
      />

      <div
        className="hover-underline"
        style={{
          textAlign: "center",
          marginTop: "2%",
          color: Colors.primary,
          fontSize: 20,
        }}
        onClick={() => {
          props.onChangeUserType("Login-Woman");
        }}
      >
        {props.strings.NavComponent &&
          props.strings.NavComponent.LoginNavbar.loginQuestion}{" "}
        Login
      </div>
    </Form>
  );
};

export default WomanSignUp;
