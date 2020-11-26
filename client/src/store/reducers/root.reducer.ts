import { combineReducers } from 'redux';
import userReducer from './user.reducer';
import languageReducer from './language.reducer';
import matchingReducer from './matching.reducer';

const rootReducer = combineReducers({
  user: userReducer,
  language: languageReducer,
  matching: matchingReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;