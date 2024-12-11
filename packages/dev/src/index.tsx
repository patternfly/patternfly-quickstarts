import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

// fonts, variables
import '@patternfly/patternfly/patternfly.css';
import '@patternfly/quickstarts/dist/quickstarts.css';
import '@patternfly/chatbot/dist/css/main.css';

import './i18n/i18n';
import AppContext from './AppContext';
import AppProps from './AppProps';
import AppLocalized from './AppLocalized';
import AppHelpTopicDemo from './AppHelpTopicDemo';
import AppCustomDrawer from './AppCustomDrawer';
import AppChatbotDrawer from './AppTabs';
import { DefaultCatalog } from './DefaultCatalog';
import { CustomCatalog } from './CustomCatalog';
import { MockConsole } from './MockConsole';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <AppProps showCardFooters={false}>
            <CustomCatalog />
          </AppProps>
        }
      />
      <Route
        path="/quickstarts-localized"
        element={
          <AppLocalized showCardFooters={false}>
            <DefaultCatalog hint="This catalog displays quick starts that have been localized" />
          </AppLocalized>
        }
      />
      <Route
        path="/quickstarts-props"
        element={
          <AppProps showCardFooters={false}>
            <DefaultCatalog hint="This catalog is for testing the component props based quick starts approach by utilizing the QuickStartContainer component" />
          </AppProps>
        }
      />
      <Route
        path="/quickstarts-context"
        element={
          <AppContext showCardFooters={false}>
            <DefaultCatalog hint="This catalog is for testing the context based quick starts approach by utilizing the QuickStartContextProvider" />
          </AppContext>
        }
      />
      <Route
        path="/in-app-documentation"
        element={
          <AppHelpTopicDemo>
            <MockConsole />
          </AppHelpTopicDemo>
        }
      />
      <Route
        path="/quickstarts-drawer"
        element={
          <AppCustomDrawer showCardFooters={false}>
            <DefaultCatalog hint="This catalog is for testing the component props based quick starts approach by utilizing the QuickStartContainer component" />
          </AppCustomDrawer>
        }
      />
      <Route
        path="/chatbot-drawer"
        element={
          <AppChatbotDrawer showCardFooters={false}>
            <DefaultCatalog hint="This catalog is for testing the component props based quick starts approach by utilizing the QuickStartContainer component" />
          </AppChatbotDrawer>
        }
      />
    </Routes>
  </BrowserRouter>,
);
