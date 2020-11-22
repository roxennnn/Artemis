export interface AuthUserDataI {
  accessToken: string;
  username: string;
  organisation?: boolean;
  // expirationDate: string;
}

export interface AuthenticationStateI {
  accessToken?: string;
  username?: string;
  organisation?: boolean;
  error?: string;
  loading?: boolean;
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
  payload: AuthUserDataI;
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
  payload: AuthUserDataI;
}

export type DispatchActionTypes =
  | SignInDispachTypes
  | SignUpWomanDispachTypes
  | SignUpOrganisationDispachTypes
  | SignOutI
  | GetLocalTokenI;
