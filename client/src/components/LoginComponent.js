import React, { useState } from "react";
import { Form } from "react-bootstrap";

import CenterView from "../components/CenterView";
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
    <div class="col-md-12">
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
        <div class="help-block text-right">
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

{
  /* <div class="col-md-12">
  <form
    class="form"
    role="form"
    method="post"
    action="login"
    accept-charset="UTF-8"
    id="login-nav"
  >
    <div class="form-group">
      <label class="sr-only" for="exampleInputEmail2">
        Email address
      </label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail2"
        placeholder="Email address"
        required
      />
    </div>
    <div class="form-group">
      <label class="sr-only" for="exampleInputPassword2">
        Password
      </label>
      <input
        type="password"
        class="form-control"
        id="exampleInputPassword2"
        placeholder="Password"
        required
      />
      <div class="help-block text-right">
        <a href="/todo" style={{ color: Colors.primary }}>
          Forget the password ?
        </a>
      </div>
    </div>
    <div class="form-group">
      <button
        type="submit"
        class="btn btn-block"
        style={{ backgroundColor: Colors.primary, color: Colors.accent }}
      >
        Sign in
      </button>
    </div>
    {/* <div class="checkbox">
                            <label>
                              <input type="checkbox" /> keep me logged-in
                            </label>
                          </div> 
  </form>
</div>; */
}
