import { Dispatch } from 'redux';
import Axios, { AxiosResponse } from 'axios';
import {
  GET_LOCAL_TOKEN,
  SignInDispachTypes,
  SignInResponseI,
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
  ResetSurveyDispachTypes,
  RESET_SURVEY,
  RESET_SURVEY_FAIL,
  RESET_SURVEY_SUCCESS,
  SubmitSurveyDispachTypes,
  SUBMIT_SURVEY,
  SUBMIT_SURVEY_FAIL,
  SUBMIT_SURVEY_SUCCESS,
} from '../../model/user.model';
import { authHeader } from '../../constants/Utilities';

// FixMeLater: Add Token renewal

const AUTH_API_URL = 'http://localhost:8080/api/auth/';
const SURVEY_API_URL = 'http://localhost:8080/api/survey/';

export const signUpWoman = (
  username: string,
  email: string,
  password: string
) => async (dispatch: Dispatch<SignUpWomanDispachTypes>) => {
  try {
    dispatch({
      type: SIGN_UP_WOMAN,
    });

    await Axios.post(AUTH_API_URL + 'signup/woman', {
      username,
      email,
      password,
    });

    dispatch({
      type: SIGN_UP_WOMAN_SUCCESS,
    });
  } catch (err) {
    if (err.response) {
      dispatch({
        type: SIGN_UP_WOMAN_FAIL,
        payload: err.response.data.message,
      });
    } else {
      dispatch({
        type: SIGN_UP_WOMAN_FAIL,
        payload: err.message,
      });
    }
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

    await Axios.post(AUTH_API_URL + 'signup/organisation', {
      organisationName,
      email,
      password,
    });

    dispatch({
      type: SIGN_UP_ORGANISATION_SUCCESS,
    });
  } catch (err) {
    if (err.response) {
      dispatch({
        type: SIGN_UP_ORGANISATION_FAIL,
        payload: err.response.data.message,
      });
    } else {
      dispatch({
        type: SIGN_UP_ORGANISATION_FAIL,
        payload: err.message,
      });
    }
  }
};

export const signIn = (username: string, password: string) => async (
  dispatch: Dispatch<SignInDispachTypes>
) => {
  try {
    dispatch({
      type: SIGN_IN,
    });

    const response: AxiosResponse<SignInResponseI> = await Axios.post(
      AUTH_API_URL + 'signin',
      {
        username,
        password,
      }
    );

    // Handle token data
    const tokenData: SignInResponseI = { ...response.data };
    localStorage.setItem('ACCESS_TOKEN', tokenData.accessToken);
    // localStorage.setItem('EXPIRATION_DATE', tokenData.expirationDate);

    dispatch({
      type: SIGN_IN_SUCCESS,
      payload: tokenData,
    });
  } catch (err) {
    if (err.response) {
      dispatch({
        type: SIGN_IN_FAIL,
        payload: err.response.data.message,
      });
    } else {
      dispatch({
        type: SIGN_IN_FAIL,
        payload: err.message,
      });
    }
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

export const submitSurvey = (survey: string, answers: number[]) => async (
  dispatch: Dispatch<SubmitSurveyDispachTypes>
) => {
  try {
    dispatch({
      type: SUBMIT_SURVEY,
    });

    const header = authHeader();
    const response = await Axios.post(
      SURVEY_API_URL + survey,
      { answers },
      {
        headers: header,
      }
    );

    dispatch({
      type: SUBMIT_SURVEY_SUCCESS,
      payload: {
        survey: survey,
        timestamp: response.data.timestamp
      }
    });
  } catch (err) {
    if (err.response) {
      dispatch({
        type: SUBMIT_SURVEY_FAIL,
        payload: err.response.data.message,
      });
    } else {
      dispatch({
        type: SUBMIT_SURVEY_FAIL,
        payload: err.message,
      });
    }
  }
};

export const resetSurvey = (survey: string) => async (
  dispatch: Dispatch<ResetSurveyDispachTypes>
) => {
  try {
    dispatch({
      type: RESET_SURVEY,
    });

    const header = authHeader();
    await Axios.get(`${SURVEY_API_URL}reset/${survey}`, {
      headers: header,
    });

    dispatch({
      type: RESET_SURVEY_SUCCESS,
      payload: survey
    });
  } catch (err) {
    if (err.response) {
      dispatch({
        type: RESET_SURVEY_FAIL,
        payload: err.response.data.message,
      });
    } else {
      dispatch({
        type: RESET_SURVEY_FAIL,
        payload: err.message,
      });
    }
  }
};
