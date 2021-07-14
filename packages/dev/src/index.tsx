/*
Projects would typically either load the base.css stylesheet (in combination with PF react components)
or load the whole patternfly stylesheet (and maybe null load react-styles imported stylesheets from PF react components)
*/

// import '@patternfly/patternfly/patternfly.css';
// import '@patternfly/patternfly/utilities/Accessibility/accessibility.css';
import '@patternfly/react-core/dist/styles/base.css';

import '@patternfly/quickstarts/dist/quickstarts.min.css';
import '@patternfly/quickstarts/dist/quickstarts-bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './i18n/i18n';
import App from './App';
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
      <Route exact path="/custom-catalog">
        <App showCardFooters>
          <CustomCatalog />
        </App>
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root'),
);
