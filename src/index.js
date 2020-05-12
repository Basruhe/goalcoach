import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory } from "react-router";

import App from "./components/App";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

// Test

// const App = () => (
//   <Switch>
//     <Route exact path="/" component={Home} />
//     <Route path="/about" component={About} />
//     <Route path="/contact" component={Contact} />
//   </Switch>

// Not functional. This is an outdated method, and requires updating! Use reader
ReactDOM.render(
  // <Router path="/" history={browserHistory}>
  //   <Route path="/app" component={App} />
  //   <Route path="/signin" component={SignIn} />
  //   <Route path="/signup" component={SignUp} />
  // </Router>,
  document.getElementById("root")
);
