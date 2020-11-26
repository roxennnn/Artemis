import { Dispatch } from 'redux';
import Axios, { AxiosResponse } from 'axios';
import {} from '../../model/user.model';
import { authHeader, FixMeLater } from '../../constants/Utilities';
import {
  GetMatchingsDispachTypes,
  GetOccupationDetailDispachTypes,
  GetSkillsDispachTypes,
  GET_MATCHINGS,
  GET_MATCHINGS_FAIL,
  GET_MATCHINGS_SUCCESS,
  GET_OCCUPATION_DETAIL,
  GET_OCCUPATION_DETAIL_FAIL,
  GET_OCCUPATION_DETAIL_SUCCESS,
  GET_SKILLS,
  GET_SKILLS_FAIL,
  GET_SKILLS_SUCCESS,
} from '../../model/matching.model';

const API_URL = 'http://localhost:8080/api/matching/';

export const getMatchings = (language: string) => async (
  dispatch: Dispatch<GetMatchingsDispachTypes>
) => {
  try {
    dispatch({
      type: GET_MATCHINGS,
    });

    const header = authHeader();
    const response: AxiosResponse<FixMeLater> = await Axios.get(
      API_URL + `${language}/occupation`,
      { headers: header }
    );

    dispatch({
      type: GET_MATCHINGS_SUCCESS,
      payload: response.data.scoredOccupations,
    });
  } catch (err) {
    if (err.response) {
      dispatch({
        type: GET_MATCHINGS_FAIL,
        payload: err.response.data.message,
      });
    } else {
      dispatch({
        type: GET_MATCHINGS_FAIL,
        payload: err.message,
      });
    }
  }
};

export const getOccupationDetail = (language: string, oid: number) => async (
  dispatch: Dispatch<GetOccupationDetailDispachTypes>
) => {
  try {
    dispatch({
      type: GET_OCCUPATION_DETAIL,
    });

    const header = authHeader();
    const response: AxiosResponse<FixMeLater> = await Axios.get(
      API_URL + `${language}/occupation/${oid}`,
      { headers: header }
    );

    dispatch({
      type: GET_OCCUPATION_DETAIL_SUCCESS,
      payload: response.data.details,
    });
  } catch (err) {
    if (err.response) {
      dispatch({
        type: GET_OCCUPATION_DETAIL_FAIL,
        payload: err.response.data.message,
      });
    } else {
      dispatch({
        type: GET_OCCUPATION_DETAIL_FAIL,
        payload: err.message,
      });
    }
  }
};

export const getSkills = (language: string) => async (
  dispatch: Dispatch<GetSkillsDispachTypes>
) => {
  try {
    dispatch({
      type: GET_SKILLS,
    });

    const header = authHeader();
    const response: AxiosResponse<FixMeLater> = await Axios.get(
      API_URL + `${language}/skill`,
      { headers: header }
    );

    dispatch({
      type: GET_SKILLS_SUCCESS,
      payload: response.data.scores,
    });
  } catch (err) {
    if (err.response) {
      dispatch({
        type: GET_SKILLS_FAIL,
        payload: err.response.data.message,
      });
    } else {
      dispatch({
        type: GET_SKILLS_FAIL,
        payload: err.message,
      });
    }
  }
};
