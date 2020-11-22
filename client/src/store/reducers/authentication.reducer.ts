import {
  AuthenticationStateI,
  DispatchActionTypes,
  GET_LOCAL_TOKEN,
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

const initialState: AuthenticationStateI = {};

const authenticationReducer = (
  state: AuthenticationStateI = initialState,
  action: DispatchActionTypes
): AuthenticationStateI => {
  switch (action.type) {
    case SIGN_UP_WOMAN:
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    case SIGN_UP_WOMAN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SIGN_UP_WOMAN_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case SIGN_UP_ORGANISATION:
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    case SIGN_UP_ORGANISATION_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SIGN_UP_ORGANISATION_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case SIGN_IN:
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        loading: false,
      };
    case SIGN_IN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_LOCAL_TOKEN:
      return {
        // loading?, error?
        ...state,
        ...action.payload,
      };
    case SIGN_OUT:
      return initialState;
    default:
      return state;
  }
};

export default authenticationReducer;
