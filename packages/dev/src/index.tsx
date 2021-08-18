import '@patternfly/react-core/dist/styles/base.css';
import '@patternfly/quickstarts/dist/quickstarts.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './i18n/i18n';
import App from './App';
import App2 from './App2';
import { Home } from './Home';
import { DefaultCatalog } from './DefaultCatalog';
import { CustomCatalog } from './CustomCatalog';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/">
        <App>
          <Home />
        </App>
      </Route>
      <Route exact path="/quickstarts">
        <App showCardFooters={false}>
          <DefaultCatalog />
        </App>
      </Route>
      <Route exact path="/quickstarts-props">
        <App2 showCardFooters={false}>
          <DefaultCatalog />
        </App2>
      </Route>
      <Route exact path="/custom-catalog">
        <App showCardFooters>
          <CustomCatalog />
        </App>
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root'),
);
