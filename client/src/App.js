import React, { useState, useContext, createContext } from "react";

import RouterComponent from "./components/RouterComponent";
import LoggedContextProvider from "./components/LoggedContextProvider";

const App = () => {
  return (
    <LoggedContextProvider>
      <RouterComponent></RouterComponent>
    </LoggedContextProvider>
  );
};

export default App;
