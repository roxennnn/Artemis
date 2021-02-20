import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';

import RootReducer from './reducers/root.reducer';
export type RootStore = ReturnType<typeof RootReducer>;

// Get authentication and user stored data on store creation
const preloadState = () => {
  try {
    let isLogged = false;
    let accessToken;
    let tmp = JSON.parse(localStorage.getItem('ACCESS_TOKEN') as string);
    if (Object.keys(tmp).length > 0) { // check if empty
      accessToken = tmp;
      isLogged = true;
    }

    let user;
    tmp = JSON.parse(localStorage.getItem('USER_DATA') as string);
    if (Object.keys(tmp).length > 0) { // check if empty
      user = tmp;
    }
    return {
      user: {
        accessToken: accessToken,
        user: user,
        isLogged: isLogged,
        loading: false,
      },
    };
  } catch (err) {
    return { user: { isLogged: false, loading: false } };
  }
};

// Store authentication and user data on change
const setAuthData = (state: RootStore) => {
  try {
    localStorage.setItem(
      'ACCESS_TOKEN',
      JSON.stringify(state.user.accessToken || {})
    );
    localStorage.setItem('USER_DATA', JSON.stringify(state.user.user || {}));
  } catch (err) {
    console.log(err.message);
    return undefined;
  }
};

// Create store
const store = createStore(
  RootReducer,
  { ...preloadState() },
  applyMiddleware(ReduxThunk)
);

// Subscribe to store changes
store.subscribe(() => {
  setAuthData(store.getState());
});

export default store;
