import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import BattleInput from './components/battle';

function App() {
  return (
    <Router>
      <div className="Dndata">
          <p>
            Edit <code>src/app/App.tsx</code> and save to reload.
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
            <Route path="/battle"><BattleInput /></Route>
            <Route path="/adventure">{"Adventure"}</Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
