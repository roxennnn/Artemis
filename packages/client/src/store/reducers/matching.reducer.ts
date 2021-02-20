import {
  DispatchActionTypes,
  GET_MATCHINGS,
  GET_MATCHINGS_FAIL,
  GET_MATCHINGS_SUCCESS,
  GET_OCCUPATION_DETAIL,
  GET_OCCUPATION_DETAIL_FAIL,
  GET_OCCUPATION_DETAIL_SUCCESS,
  GET_SKILLS,
  GET_SKILLS_FAIL,
  GET_SKILLS_SUCCESS,
  MatchingStateI,
} from '../../model/matching.model';

const initialState: MatchingStateI = {
  loading: false,
  matchings: [],
  skills: [],
};

const matchingReducer = (
  state: MatchingStateI = initialState,
  action: DispatchActionTypes
): MatchingStateI => {
  switch (action.type) {
    case GET_MATCHINGS:
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    case GET_MATCHINGS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_MATCHINGS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: undefined,
        matchings: action.payload,
      };
    case GET_OCCUPATION_DETAIL:
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    case GET_OCCUPATION_DETAIL_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_OCCUPATION_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        error: undefined,
        currentOccupation: action.payload,
      };
    case GET_SKILLS:
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    case GET_SKILLS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_SKILLS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: undefined,
        skills: action.payload,
      };
    default:
      return state;
  }
};

export default matchingReducer;
