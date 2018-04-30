import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Router from "./components/Router";
import registerServiceWorker from "./registerServiceWorker";
import "./css/style.css";

ReactDOM.render(<Router />, document.getElementById("root"));
registerServiceWorker();
