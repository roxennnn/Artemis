import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from "./languages/LanguageProvider";
import { fetchTranslations } from "./languages/fetchTranslations";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <LanguageProvider fetchTranslations={fetchTranslations}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </LanguageProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
