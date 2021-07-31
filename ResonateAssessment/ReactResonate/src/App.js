import React, { useState } from "react";
import Contacts from "./pages/Contacts";
import Details from "./pages/Details";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./custom.scss";

import "./App.css";
function App() {
  document.title = "~ResonateContacts!~";

  return (
    <Router>
      <Route exact path="/" component={Contacts} />
      <Route path="/details/:id" component={Details} />
    </Router>
  );
}

export default App;
