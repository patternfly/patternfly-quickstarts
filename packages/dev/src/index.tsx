import '@patternfly/react-core/dist/styles/base.css';
import '@patternfly/quickstarts/dist/quickstarts.css';
import '@patternfly/transform-adoc/dist/transform-adoc.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './i18n/i18n';
import App from './App';
import App2 from './App2';
import {
  QUICKSTART_SEARCH_FILTER_KEY,
  QUICKSTART_STATUS_FILTER_KEY,
  QuickStartStatus,
  QuickStartContext,
  updateQueryArguments,
} from '@patternfly/quickstarts';
import { DefaultCatalog } from './DefaultCatalog';
import { CustomCatalog } from './CustomCatalog';

const SomeNestedComponent = () => {
  const qsContext = React.useContext(QuickStartContext);
  // the quick start ID is defined in the quick start object's metadata.name field

  const setActiveQuickStart = () => {
    qsContext.setActiveQuickStart('node-with-s2i');
  };
  const clearQuickStartFilters = () => {
    updateQueryArguments({
      [QUICKSTART_SEARCH_FILTER_KEY]: '',
      [QUICKSTART_STATUS_FILTER_KEY]: [],
    });
  };
  const setQuickStartFilters = () => {
    updateQueryArguments({
      [QUICKSTART_SEARCH_FILTER_KEY]: 'serverless',
      [QUICKSTART_STATUS_FILTER_KEY]: [QuickStartStatus.NOT_STARTED, QuickStartStatus.IN_PROGRESS],
    });
  };

  return (
    <>
      <button onClick={setActiveQuickStart}>Toggle quick start through context</button>
      <button onClick={clearQuickStartFilters}>Clear URL arguments</button>
      <button onClick={setQuickStartFilters}>Set URL arguments</button>
    </>
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
