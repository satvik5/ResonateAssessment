import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  // In index.js change <React.StrictMode><App /><React.StrictMode> to <App /> and you will not see this warning. Please note that strict mode helps you with

  // Identifying components with unsafe lifecycles
  // Warning about legacy string ref API usage
  // Warning about deprecated findDOMNode usage
  // Detecting unexpected side effects
  // Detecting legacy context API

  // <React.StrictMode>
  <App />,
  // </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();