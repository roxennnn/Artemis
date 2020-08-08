import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import MdPerson from "react-ionicons/lib/MdPerson";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";

import AuthService from "./services/auth.service";

import NavComponent from "./components/NavComponent";
import SwitchComponent from "./components/SwitchComponent";
import Footer from "./components/Footer";

const App = (props) => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  return (
    <Router>
      <div style={{width: "100%", height: "100%"}}>
        <NavComponent currentUser={currentUser} />
        <SwitchComponent />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
