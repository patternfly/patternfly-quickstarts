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
import AppContext from './AppContext';
import AppProps from './AppProps';
import AppLocalized from './AppLocalized';
import AppDemoInContextHelp from './AppDemoInContextHelp';
import { DefaultCatalog } from './DefaultCatalog';
import { CustomCatalog } from './CustomCatalog';
import { MockConsole } from './MockConsole';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/">
        <AppProps showCardFooters={false}>
          <CustomCatalog />
        </AppProps>
      </Route>
      <Route exact path="/quickstarts-localized">
        <AppLocalized showCardFooters={false}>
          <DefaultCatalog hint="This catalog displays quick starts that have been localized" />
        </AppLocalized>
      </Route>
      <Route exact path="/quickstarts-props">
        <AppProps showCardFooters={false}>
          <DefaultCatalog hint="This catalog is for testing the component props based quick starts approach by utilizing the QuickStartContainer component" />
        </AppProps>
      </Route>
      <Route exact path="/quickstarts-context">
        <AppContext showCardFooters={false}>
          <DefaultCatalog hint="This catalog is for testing the context based quick starts approach by utilizing the QuickStartContextProvider" />
        </AppContext>
      </Route>
      <Route exact path="/in-context-help">
        <AppDemoInContextHelp showCardFooters={false}>
          <MockConsole />
        </AppDemoInContextHelp>
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root'),
);
