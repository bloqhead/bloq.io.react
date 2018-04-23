import React from "react";
import ReactDOM from "react-dom";

import normalize from "normalize.css";
import "./src/styles/styles.scss";

import Main from "./src/Main.js";

// render app
ReactDOM.render(
  <Main />,
  document.getElementById("app")
);
