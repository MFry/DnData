import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Button, DatePicker, version } from 'antd';
import styled from '@emotion/styled';

import 'antd/dist/antd.css';

import { BattleInput } from './components/battle';

const StyledApp = styled.div`
  padding: 20px;
`;

function App() {
  return (
    <Router>
      <StyledApp>
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
            <h1>antd version: {version}</h1>
            <section>
              <p>Sample Ant Design components.</p>
              <br />
              <p>
                Edit <code>src/app/App.tsx</code> and save to reload.
              </p>
              <DatePicker />
              <br />
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </section>
          </Route>
          <Route path="/battle">
            <BattleInput />
          </Route>
          <Route path="/adventure">{'Adventure'}</Route>
        </Switch>
      </StyledApp>
    </Router>
  );
}

export default App;
