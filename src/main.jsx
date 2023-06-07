import React from "react";
// import ReactDOM from "react-dom/client";
import ReactDOM from "react-dom";
import "./index04.css";
import App from "./App";

import HouseContextProvider from "./components/HouseContext";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <HouseContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </HouseContextProvider>
  </Router>,
  document.getElementById("root")
);
