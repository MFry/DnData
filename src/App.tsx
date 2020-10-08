import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/battle">Battle</Link>
            </li>
            <li>
              <Link to="/adventure">Adventure</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/">
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </Route>
            <Route path="/battle">{"Battle"}</Route>
            <Route path="/adventure">{"Adventure"}</Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
