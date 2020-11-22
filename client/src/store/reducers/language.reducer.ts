import {
  DispatchActionTypes,
  Language,
  LanguageStateI,
  SET_LANGUAGE,
  SET_LANGUAGE_FAIL,
  SET_LANGUAGE_SUCCESS,
} from '../../model/language.model';

import EnglishStrings from '../../languages/locales/en';

const initialState: LanguageStateI = {
  language: Language.EN,
  strings: EnglishStrings,
  loading: false,
};

const languageReducer = (
  state: LanguageStateI = initialState,
  action: DispatchActionTypes
): LanguageStateI => {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    case SET_LANGUAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        language: action.payload.lang,
        strings: action.payload.strings,
      };
    case SET_LANGUAGE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default languageReducer;
