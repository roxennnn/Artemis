import { Dispatch } from 'redux';
import {
  Language,
  SetLanguageDispachTypes,
  SET_LANGUAGE,
  SET_LANGUAGE_FAIL,
  SET_LANGUAGE_SUCCESS,
} from '../../model/language.model';

export const setLanguage = (lang: Language) => async (
  dispatch: Dispatch<SetLanguageDispachTypes>
) => {
  try {
    dispatch({
      type: SET_LANGUAGE,
    });

    const strings = await import(`../../languages/locales/${lang}`);

    dispatch({
      type: SET_LANGUAGE_SUCCESS,
      payload: {
        lang: lang,
        strings: strings.default,
      },
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: SET_LANGUAGE_FAIL,
      payload: err,
    });
  }
};
