import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import { LanguageProvider } from './languages/LanguageProvider';
// import { fetchTranslations } from './languages/fetchTranslations';
import { Provider } from 'react-redux';
import Store from './store/store';

import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  // <LanguageProvider fetchTranslations={fetchTranslations}>
  <Provider store={Store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  // </LanguageProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
