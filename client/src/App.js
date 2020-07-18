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
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };

  return (
    <Router>
      <div>
        <NavComponent currentUser={currentUser} />
        <SwitchComponent />
      </div>
    </Router>
  );
};

export default App;
