import {
  UserStateI,
  DispatchActionTypes,
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
  SUBMIT_SURVEY,
  SUBMIT_SURVEY_SUCCESS,
  SUBMIT_SURVEY_FAIL,
  RESET_SURVEY,
  RESET_SURVEY_SUCCESS,
  RESET_SURVEY_FAIL,
  UserDataI,
  getEmptyUserData,
  Survey,
} from '../../model/user.model';

const initialState: UserStateI = {
  loading: false,
  isLogged: false,
};

const UserReducer = (
  state: UserStateI = initialState,
  action: DispatchActionTypes
): UserStateI => {
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
        error: undefined,
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
        error: undefined,
      };
    case SIGN_IN:
      return {
        ...state,
        loading: true,
        isLogged: false,
        error: undefined,
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        ...action.payload, // accessToken && user
        isLogged: true,
        loading: false,
        error: undefined,
      };
    case SIGN_IN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        isLogged: false,
      };
    case SIGN_OUT:
      return initialState;
    case SUBMIT_SURVEY:
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    case SUBMIT_SURVEY_SUCCESS:
      let submitUser: UserDataI = getEmptyUserData();
      if (state.user) {
        submitUser = {
          ...state?.user,
        };
      }
      switch (action.payload.survey) {
        case Survey.demographics:
          submitUser.demographicsDone = true;
          submitUser.demographicsTimestamp = action.payload.timestamp;
          break;
        case Survey.domestic:
          submitUser.domesticDone = true;
          submitUser.domesticTimestamp = action.payload.timestamp;
          break;
        case Survey.skills:
          submitUser.skillsDone = true;
          submitUser.skillsTimestamp = action.payload.timestamp;
          break;
        default:
          break;
      }
      return {
        ...state,
        user: submitUser,
        loading: false,
        error: undefined,
      };
    case SUBMIT_SURVEY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case RESET_SURVEY:
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    case RESET_SURVEY_SUCCESS:
      let resetUser: UserDataI = getEmptyUserData();
      if (state.user) {
        resetUser = {
          ...state?.user,
        };
      }
      switch (action.payload) {
        case Survey.demographics:
          resetUser.demographicsDone = false;
          resetUser.demographicsTimestamp = undefined;
          break;
        case Survey.domestic:
          resetUser.domesticDone = false;
          resetUser.domesticTimestamp = undefined;
          break;
        case Survey.skills:
          resetUser.skillsDone = false;
          resetUser.skillsTimestamp = undefined;
          break;
        default:
          break;
      }
      return {
        ...state,
        user: resetUser,
        loading: false,
        error: undefined,
      };
    case RESET_SURVEY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default UserReducer;
