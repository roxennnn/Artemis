import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import MdPerson from "react-ionicons/lib/MdPerson";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";

import NavComponent from "./components/NavComponent";
import SwitchComponent from "./components/SwitchComponent";
import Footer from "./components/Footer";

const App = (props) => {
  return (
    <div className="switch-content">
      <Router>
        <div style={{ width: "100%", height: "100%" }}>
          <NavComponent />
          <SwitchComponent />
        </div>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
