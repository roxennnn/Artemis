import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import MdPerson from "react-ionicons/lib/MdPerson";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";

import AuthService from "./services/auth.service";

import NavComponent from "./components/NavComponent";
import SwitchComponent from "./components/SwitchComponent";

const App = (props) => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    console.log(user);
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };

  return (
    <Router>
      <div style={{width: "100%", height: "100%"}}>
        <NavComponent currentUser={currentUser} />
        <SwitchComponent />
      </div>
    </Router>
  );
};

export default App;
