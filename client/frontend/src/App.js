import React, { Component } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";

import MainPage from "./pages/index.jsx";
import RedirectPage from "./pages/Redirect.jsx";
import ErrorPage from "./pages/Error.jsx";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/link" component={RedirectPage} />
          <Route exact path="/error" component={ErrorPage} />
          <Redirect to="/error" />
        </Switch>
      </Router>
    );
  }
}

export default App;
