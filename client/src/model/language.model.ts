import { FixMeLater } from '../constants/Utilities';

export interface LanguageStateI {
  language: string;
  strings: FixMeLater;
  loading: boolean;
  error?: string;
}

export enum Language {
  EN = 'en',
  ES = 'es',
  PT = 'pt',
}

export interface LanguagePair {
  lang: Language;
  strings: FixMeLater;
}

// FixMeLater -> Move languages to backend

/* SET_LANGUAGE */
export const SET_LANGUAGE = 'SET_LANGUAGE';

export interface SetLanguageI {
  type: typeof SET_LANGUAGE;
}

export const SET_LANGUAGE_SUCCESS = 'SET_LANGUAGE_SUCCESS';

export interface SetLanguageSuccessI {
  type: typeof SET_LANGUAGE_SUCCESS;
  payload: LanguagePair;
}

export const SET_LANGUAGE_FAIL = 'SET_LANGUAGE_FAIL';

export interface SetLanguageFailI {
  type: typeof SET_LANGUAGE_FAIL;
  payload: string;
}

export type SetLanguageDispachTypes =
  | SetLanguageI
  | SetLanguageFailI
  | SetLanguageSuccessI;

export type DispatchActionTypes = SetLanguageDispachTypes;
