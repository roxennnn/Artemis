import { Dispatch } from 'redux';
import Axios, { AxiosResponse } from 'axios';
import {
  AuthUserDataI,
  GET_LOCAL_TOKEN,
  SignInDispachTypes,
  SignUpOrganisationDispachTypes,
  SignUpWomanDispachTypes,
  SIGN_IN,
  SIGN_IN_FAIL,
  SIGN_IN_SUCCESS,
  SIGN_OUT,
  SIGN_UP_ORGANISATION,
  SIGN_UP_ORGANISATION_FAIL,
  SIGN_UP_ORGANISATION_SUCCESS,
  SIGN_UP_WOMAN,
  SIGN_UP_WOMAN_FAIL,
  SIGN_UP_WOMAN_SUCCESS,
} from '../../model/authentication.model';

// Add Token renewal?

const API_URL = '/api/auth/';

export const signUpWoman = (
  username: string,
  email: string,
  password: string
) => async (dispatch: Dispatch<SignUpWomanDispachTypes>) => {
  try {
    dispatch({
      type: SIGN_UP_WOMAN,
    });

    await Axios.post(API_URL + 'signup', { username, email, password });

    dispatch({
      type: SIGN_UP_WOMAN_SUCCESS,
    });
  } catch (err) {
    dispatch({
      type: SIGN_UP_WOMAN_FAIL,
      payload: err,
    });
  }
};

export const signUpOrganisation = (
  organisationName: string,
  email: string,
  password: string
) => async (dispatch: Dispatch<SignUpOrganisationDispachTypes>) => {
  try {
    dispatch({
      type: SIGN_UP_ORGANISATION,
    });

    await Axios.post(API_URL + 'signup', { organisationName, email, password });

    dispatch({
      type: SIGN_UP_ORGANISATION_SUCCESS,
    });
  } catch (err) {
    dispatch({
      type: SIGN_UP_ORGANISATION_FAIL,
      payload: err,
    });
  }
};

export const signIn = (username: string, password: string) => async (
  dispatch: Dispatch<SignInDispachTypes>
) => {
  try {
    dispatch({
      type: SIGN_IN,
    });

    const response: AxiosResponse<AuthUserDataI> = await Axios.post(
      API_URL + 'signin',
      {
        username,
        password,
      }
    );

    // Handle token data
    const tokenData: AuthUserDataI = { ...response.data };
    localStorage.setItem('ACCESS_TOKEN', tokenData.accessToken);
    // localStorage.setItem('EXPIRATION_DATE', tokenData.expirationDate);

    dispatch({
      type: SIGN_IN_SUCCESS,
      payload: tokenData,
    });
  } catch (err) {
    dispatch({
      type: SIGN_IN_FAIL,
      payload: err,
    });
  }
};

export const signOut = () => {
  localStorage.removeItem('ACCESS_TOKEN');
  return { type: SIGN_OUT };
};

export const getLocalToken = () => {
  // SUCCESS and FAIL?
  const accessToken = localStorage.getItem('ACCESS_TOKEN');

  return {
    type: GET_LOCAL_TOKEN,
    payload: {
      accessToken: accessToken,
    },
  };
};
