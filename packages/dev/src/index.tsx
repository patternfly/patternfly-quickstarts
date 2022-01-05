// fonts, variables
import '@patternfly/react-core/dist/styles/base.css';
import '@patternfly/transform-adoc/dist/transform-adoc.css';

import '@patternfly/quickstarts/dist/quickstarts.css';

// the following stylesheets are here for testing quickstarts-standalone

// global styles for Drawer, Popover, Modal (including Backdrop and Bullseye)
// import '@patternfly/quickstarts/dist/patternfly-global.css';
// PF and quickstarts styles nested within .pfext-quick-start__base
// import '@patternfly/quickstarts/dist/quickstarts-standalone.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './i18n/i18n';
import App from './App';
import App2 from './App2';
import { QuickStartContext } from '@patternfly/quickstarts';
import { DefaultCatalog } from './DefaultCatalog';
import { CustomCatalog } from './CustomCatalog';

const SomeNestedComponent = () => {
  const qsContext = React.useContext(QuickStartContext);
  // the quick start ID is defined in the quick start object's metadata.name field
  return (
    <button onClick={() => qsContext.setActiveQuickStart('node-with-s2i')}>
      Toggle quick start through context
    </button>
  );
};

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/">
        <App showCardFooters={false}>
          <SomeNestedComponent />
          <DefaultCatalog />
        </App>
      </Route>
      <Route exact path="/quickstarts-props">
        <App2 showCardFooters={false}>
          <SomeNestedComponent />
          <DefaultCatalog />
        </App2>
      </Route>
      <Route exact path="/custom-catalog">
        <App showCardFooters>
          <SomeNestedComponent />
          <CustomCatalog />
        </App>
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root'),
);
