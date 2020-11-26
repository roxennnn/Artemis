export interface Matching {
  OID: number;
  title: string;
  score: number;
}

export interface Skill {
  name: string;
  score: number;
}

export interface OccupationDetail {
  OID: number;
  title: string;
  description: string;
  categories: number[];
  categoryNames: string[];
  categoryScores: number[];
}

export interface MatchingStateI {
  error?: string;
  loading: boolean;
  matchings: Matching[];
  skills: Skill[];
  currentOccupation?: OccupationDetail;
}

/* GET_MATCHINGS */
export const GET_MATCHINGS = 'GET_MATCHINGS';
export const GET_MATCHINGS_SUCCESS = 'GET_MATCHINGS_SUCCESS';
export const GET_MATCHINGS_FAIL = 'GET_MATCHINGS_FAIL';

export interface GetMatchingsI {
  type: typeof GET_MATCHINGS;
}

export interface GetMatchingsFailI {
  type: typeof GET_MATCHINGS_FAIL;
  payload: string;
}

export interface GetMatchingsSuccessI {
  type: typeof GET_MATCHINGS_SUCCESS;
  payload: Matching[];
}

export type GetMatchingsDispachTypes =
  | GetMatchingsI
  | GetMatchingsFailI
  | GetMatchingsSuccessI;

/* GET_OCCUPATION_DETAIL */
export const GET_OCCUPATION_DETAIL = 'GET_OCCUPATION_DETAIL';
export const GET_OCCUPATION_DETAIL_SUCCESS = 'GET_OCCUPATION_DETAIL_SUCCESS';
export const GET_OCCUPATION_DETAIL_FAIL = 'GET_OCCUPATION_DETAIL_FAIL';

export interface GetOccupationDetailI {
  type: typeof GET_OCCUPATION_DETAIL;
}

export interface GetOccupationDetailFailI {
  type: typeof GET_OCCUPATION_DETAIL_FAIL;
  payload: string;
}

export interface GetOccupationDetailSuccessI {
  type: typeof GET_OCCUPATION_DETAIL_SUCCESS;
  payload: OccupationDetail;
}

export type GetOccupationDetailDispachTypes =
  | GetOccupationDetailI
  | GetOccupationDetailFailI
  | GetOccupationDetailSuccessI;

/* GET_SKILLS */
export const GET_SKILLS = 'GET_SKILLS';
export const GET_SKILLS_SUCCESS = 'GET_SKILLS_SUCCESS';
export const GET_SKILLS_FAIL = 'GET_SKILLS_FAIL';

export interface GetSkillsI {
  type: typeof GET_SKILLS;
}

export interface GetSkillsFailI {
  type: typeof GET_SKILLS_FAIL;
  payload: string;
}

export interface GetSkillsSuccessI {
  type: typeof GET_SKILLS_SUCCESS;
  payload: Skill[];
}

export type GetSkillsDispachTypes =
  | GetSkillsI
  | GetSkillsFailI
  | GetSkillsSuccessI;

/* Dispatch Action Types */
export type DispatchActionTypes =
  | GetMatchingsDispachTypes
  | GetOccupationDetailDispachTypes
  | GetSkillsDispachTypes;
