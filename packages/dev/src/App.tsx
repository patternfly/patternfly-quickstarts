import './App.css';
import { Page } from '@patternfly/react-core';
import {
  LoadingBox,
  QuickStart,
  QuickStartContextProvider,
  QuickStartContextValues,
  QuickStartDrawer,
  useLocalStorage,
} from '@patternfly/quickstarts';
import { loadJSONQuickStarts } from './quickstarts-data/mas-guides/quickstartLoader';
import { allQuickStarts as yamlQuickStarts } from './quickstarts-data/quick-start-test-data';
import React from 'react';
import i18n from './i18n/i18n';
import { AppHeader, AppSidebar } from './common/Page';

type AppProps = {
  children?: React.ReactNode;
  showCardFooters?: boolean;
};

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

  const [allQuickStarts, setAllQuickStarts] = React.useState<QuickStart[]>([]);
  React.useEffect(() => {
    const load = async () => {
      const masGuidesQuickstarts = await loadJSONQuickStarts('');
      setAllQuickStarts(yamlQuickStarts.concat(masGuidesQuickstarts));
    };
    setTimeout(() => {
      load();
    }, 1500);
  }, []);

  const language = localStorage.getItem('bridge/language') || 'en';
  const resourceBundle = i18n.getResourceBundle(language, 'quickstart');

  const valuesForQuickstartContext: QuickStartContextValues = {
    allQuickStarts,
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
      {allQuickStarts && allQuickStarts.length ? (
        <QuickStartContextProvider value={valuesForQuickstartContext}>
          <QuickStartDrawer>
            <Page header={AppHeader} sidebar={AppSidebar} isManagedSidebar>
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
