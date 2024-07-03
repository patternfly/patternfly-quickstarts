import './App.css';
import { Page } from '@patternfly/react-core';
import {
  LoadingBox,
  QuickStartContextProvider,
  QuickStartContextValues,
  QuickStartDrawer,
  useLocalStorage,
} from '@patternfly/quickstarts';
import { allQuickStarts as yamlQuickStarts } from './quickstarts-data/quick-start-test-data';
import React from 'react';
import i18n from './i18n/i18n';
import { AppHeader, AppSidebar } from './common/Page';

interface AppProps {
  children?: React.ReactNode;
  showCardFooters?: boolean;
}

const App: React.FC<AppProps> = ({ children, showCardFooters }) => {
  const [activeQuickStartID, setActiveQuickStartID] = useLocalStorage('quickstartId', '');
  const [allQuickStartStates, setAllQuickStartStates] = useLocalStorage('quickstarts', {});

  // eslint-disable-next-line no-console
  React.useEffect(() => console.log(activeQuickStartID), [activeQuickStartID]);
  React.useEffect(() => {
    // callback on state change
    // eslint-disable-next-line no-console
    console.log(allQuickStartStates);
  }, [allQuickStartStates]);


  const language = localStorage.getItem('bridge/language') || 'en';
  const resourceBundle = i18n.getResourceBundle(language, 'quickstart');

  const valuesForQuickstartContext: QuickStartContextValues = {
    allQuickStarts: yamlQuickStarts,
    activeQuickStartID,
    setActiveQuickStartID,
    allQuickStartStates,
    setAllQuickStartStates,
    footer: {
      show: showCardFooters,
    },
    language,
    resourceBundle: {
      ...resourceBundle,
      // Start: "Let's go!",
      // Continue: 'Resume',
      // Restart: 'Start over',
    },
  };

  return (
    <React.Suspense fallback={<LoadingBox />}>
      {yamlQuickStarts && yamlQuickStarts.length ? (
        <QuickStartContextProvider value={valuesForQuickstartContext}>
          <QuickStartDrawer>
            <Page masthead={AppHeader} sidebar={AppSidebar} isManagedSidebar>
              {children}
            </Page>
          </QuickStartDrawer>
        </QuickStartContextProvider>
      ) : (
        <LoadingBox />
      )}
    </React.Suspense>
  );
};
export default App;
