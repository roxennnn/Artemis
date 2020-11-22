import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

import Colors from '../constants/Colors';
import PrimaryButton from './PrimaryButton';

import AuthService from '../services/auth.service';
import { FixMeLater } from '../constants/Utilities';
import { signIn } from '../store/actions/authentication.action';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/reducers/root.reducer';

const LoginComponent = (props: FixMeLater) => {
  const [usernameValue, setUsernameValue] = useState('');
  const [passValue, setPassValue] = useState('');
  const [loginErrorMessage, setLoginErrorMessage] = useState();

  const { organisation } = useSelector((state: RootState) => state.authentication);
  const dispatch = useDispatch();

  const submitHandler = async () => {
    const username = usernameValue;
    const pass = passValue;

    setLoginErrorMessage(undefined);

    // make login POST request
    try {
      // const response = await AuthService.login(username, pass);
      // localStorage.setItem('language', props.language);
      dispatch(signIn(username, pass));
      if (organisation) {
        props.history.push('/organisation');
      } else {
        props.history.push('/profile');
      }

      setUsernameValue('');
      setPassValue('');
    } catch (err) {
      // THE FOLLOWING CAN BE USED FOR THE ERROR MESSAGE....
      const resMessage =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();

      setLoginErrorMessage(resMessage);
    }
  };

  return (
    <div className={props.show ? '' : 'col-md-12'}>
      <Form>
        <Form.Group controlId="formUsername">
          <div>
            {props.show && (
              <Form.Label style={{ fontSize: 22 }}>Username</Form.Label>
            )}
          </div>
          <Form.Control
            type="text"
            placeholder={
              props.show
                ? props.strings.SignupPage &&
                  props.strings.SignupPage.enterYourUsername
                : 'Username'
            }
            onChange={(username) => setUsernameValue(username.target.value)}
            value={usernameValue}
            onKeyPress={(event: FixMeLater) => {
              if (event.key === 'Enter') {
                submitHandler();
              }
            }}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <div>
            {props.show && (
              <Form.Label style={{ fontSize: 22 }}>
                {props.strings.SignupPage && props.strings.SignupPage.password}
              </Form.Label>
            )}
          </div>
          <Form.Control
            type="password"
            placeholder={
              props.strings.NavComponent &&
              props.strings.NavComponent.LoginNavbar.password
            }
            onChange={(pass) => setPassValue(pass.target.value)}
            value={passValue}
            onKeyPress={(event: FixMeLater) => {
              if (event.key === 'Enter') {
                submitHandler();
              }
            }}
          />
        </Form.Group>
        <div
          className="help-block text-right hover-underline"
          style={{ color: Colors.primary }}
        >
          <a href="/todo" style={{ color: Colors.primary }}>
            {props.strings.NavComponent &&
              props.strings.NavComponent.LoginNavbar.forgotPassword}
          </a>
        </div>
        {loginErrorMessage && (
          <div style={{ color: 'red', textAlign: 'center' }}>
            {loginErrorMessage}
          </div>
        )}
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
