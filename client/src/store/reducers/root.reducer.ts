import { combineReducers } from 'redux';
import authenticationReducer from './authentication.reducer';
import languageReducer from './language.reducer';

const rootReducer = combineReducers({
  authentication: authenticationReducer,
  language: languageReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;