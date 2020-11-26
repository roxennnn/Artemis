import { FixMeLater } from '../constants/Utilities';

export interface UserDataI {
  username: string;
  organisation: boolean;
  // Update the following data when performing the submit request of the surveys
  demographicsDone: boolean;
  demographicsTimestamp?: FixMeLater;
  domesticDone: boolean;
  domesticTimestamp?: FixMeLater;
  skillsDone: boolean;
  skillsTimestamp?: FixMeLater;
  geoPosition?: number[];
}

export const getEmptyUserData = (): UserDataI => ({
  username: '',
  organisation: false,
  demographicsDone: false,
  domesticDone: false,
  skillsDone: false,
});

export interface SignInResponseI {
  accessToken: string;
  user: UserDataI;
}

export interface UserStateI {
  accessToken?: string;
  user?: UserDataI;
  isLogged: boolean; // useless if accessToken? / redundant
  error?: string;
  loading: boolean;
}

/* SIGN_IN */
export const SIGN_IN = 'SIGN_IN';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAIL = 'SIGN_IN_FAIL';

export interface SignInI {
  type: typeof SIGN_IN;
}

export interface SignInFailI {
  type: typeof SIGN_IN_FAIL;
  payload: string;
}

export interface SignInSuccessI {
  type: typeof SIGN_IN_SUCCESS;
  payload: SignInResponseI;
}

export type SignInDispachTypes = SignInI | SignInFailI | SignInSuccessI;

/* SIGN_UP_WOMAN */
export const SIGN_UP_WOMAN = 'SIGN_UP_WOMAN';
export const SIGN_UP_WOMAN_SUCCESS = 'SIGN_UP_WOMAN_SUCCESS';
export const SIGN_UP_WOMAN_FAIL = 'SIGN_UP_WOMAN_FAIL';

export interface SignUpWomanI {
  type: typeof SIGN_UP_WOMAN;
}

export interface SignUpWomanFailI {
  type: typeof SIGN_UP_WOMAN_FAIL;
  payload: string;
}

export interface SignUpWomanSuccessI {
  type: typeof SIGN_UP_WOMAN_SUCCESS;
}

export type SignUpWomanDispachTypes =
  | SignUpWomanI
  | SignUpWomanFailI
  | SignUpWomanSuccessI;

/* SIGN_UP_ORGANISATION */
export const SIGN_UP_ORGANISATION = 'SIGN_UP_ORGANISATION';
export const SIGN_UP_ORGANISATION_SUCCESS = 'SIGN_UP_ORGANISATION_SUCCESS';
export const SIGN_UP_ORGANISATION_FAIL = 'SIGN_UP_ORGANISATION_FAIL';

export interface SignUpOrganisationI {
  type: typeof SIGN_UP_ORGANISATION;
}

export interface SignUpOrganisationFailI {
  type: typeof SIGN_UP_ORGANISATION_FAIL;
  payload: string;
}

export interface SignUpOrganisationSuccessI {
  type: typeof SIGN_UP_ORGANISATION_SUCCESS;
}

export type SignUpOrganisationDispachTypes =
  | SignUpOrganisationI
  | SignUpOrganisationFailI
  | SignUpOrganisationSuccessI;

/* SIGN_OUT */
export const SIGN_OUT = 'SIGN_OUT';

export interface SignOutI {
  type: typeof SIGN_OUT;
}

/* GET_LOCAL_TOKEN */
export const GET_LOCAL_TOKEN = 'GET_LOCAL_TOKEN'; // get an access token if stored in the local storage

export interface GetLocalTokenI {
  type: typeof GET_LOCAL_TOKEN;
  payload: string;
}

/* SUBMIT_SURVEY */
export const SUBMIT_SURVEY = 'SUBMIT_SURVEY';
export const SUBMIT_SURVEY_SUCCESS = 'SUBMIT_SURVEY_SUCCESS';
export const SUBMIT_SURVEY_FAIL = 'SUBMIT_SURVEY_FAIL';

export interface SubmitSurveyI {
  type: typeof SUBMIT_SURVEY;
}

export interface SubmitSurveyFailI {
  type: typeof SUBMIT_SURVEY_FAIL;
  payload: string;
}

export interface SubmitSurveySuccessI {
  type: typeof SUBMIT_SURVEY_SUCCESS;
  payload: {
    survey: string;
    timestamp: string;
  };
}

export type SubmitSurveyDispachTypes =
  | SubmitSurveyI
  | SubmitSurveyFailI
  | SubmitSurveySuccessI;

/* RESET_SURVEY */
export const RESET_SURVEY = 'RESET_SURVEY';
export const RESET_SURVEY_SUCCESS = 'RESET_SURVEY_SUCCESS';
export const RESET_SURVEY_FAIL = 'RESET_SURVEY_FAIL';

export interface ResetSurveyI {
  type: typeof RESET_SURVEY;
}

export interface ResetSurveyFailI {
  type: typeof RESET_SURVEY_FAIL;
  payload: string;
}

export interface ResetSurveySuccessI {
  type: typeof RESET_SURVEY_SUCCESS;
  payload: string;
}

export type ResetSurveyDispachTypes =
  | ResetSurveyI
  | ResetSurveyFailI
  | ResetSurveySuccessI;

/* Dispatch Action Types */
export type DispatchActionTypes =
  | SignInDispachTypes
  | SignUpWomanDispachTypes
  | SignUpOrganisationDispachTypes
  | SignOutI
  | GetLocalTokenI
  | SubmitSurveyDispachTypes
  | ResetSurveyDispachTypes;
