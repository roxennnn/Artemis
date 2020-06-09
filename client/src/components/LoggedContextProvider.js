import React, { useState, createContext } from "react";


export const LoggedContext = createContext(null);

const LoggedContextProvider = (props) => {
  const [logged, setLogged] = useState(false);

  return (
    <LoggedContext.Provider value={{logged: logged, setLogged: setLogged}}>
      {props.children}
    </LoggedContext.Provider>
  );
};

export default LoggedContextProvider;
