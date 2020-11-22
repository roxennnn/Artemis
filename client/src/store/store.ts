import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';

import RootReducer from './reducers/root.reducer';

// const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(ReduxThunk)));
const store = createStore(RootReducer, applyMiddleware(ReduxThunk));

export type RootStore = ReturnType<typeof RootReducer>;

export default store;