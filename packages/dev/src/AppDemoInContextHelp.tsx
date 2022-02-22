import './App.css';
import { Page } from '@patternfly/react-core';
import {
  LoadingBox,
  QuickStart,
  QuickStartContainer,
  QuickStartContainerProps,
  useLocalStorage,
} from '@patternfly/quickstarts';
import { loadJSONQuickStarts } from './quickstarts-data/asciidoc/quickstartLoader';
import {
  allQuickStarts as yamlQuickStarts,
  inContextHelpTopics,
} from './quickstarts-data/quick-start-test-data';
import React from 'react';
import i18n from './i18n/i18n';
import { AppHeader, AppSidebar } from './common/Page';

type AppProps = {
  children?: React.ReactNode;
  showCardFooters?: boolean;
};

const AppDemoInContextHelp: React.FC<AppProps> = ({ children, showCardFooters }) => {
  const [activeQuickStartID, setActiveQuickStartID] = useLocalStorage('quickstartId', '');
  const [allQuickStartStates, setAllQuickStartStates] = useLocalStorage('quickstarts', {});
  const language = localStorage.getItem('bridge/language') || 'en';
  const resourceBundle = i18n.getResourceBundle(language, 'quickstart');

  // eslint-disable-next-line no-console
  React.useEffect(() => console.log(activeQuickStartID), [activeQuickStartID]);

  React.useEffect(() => {
    // callback on state change
    // eslint-disable-next-line no-console
    console.log(allQuickStartStates);
  }, [allQuickStartStates]);

  const [loading, setLoading] = React.useState(true);
  const [quickStarts, setQuickStarts] = React.useState<QuickStart[]>([]);
  React.useEffect(() => {
    const load = async () => {
      const masGuidesQuickstarts = await loadJSONQuickStarts('');
      setQuickStarts(yamlQuickStarts.concat(masGuidesQuickstarts));
      setLoading(false);
    };
    setTimeout(() => {
      load();
    }, 500);
  }, []);

  const withQueryParams = true;

  const drawerProps: QuickStartContainerProps = {
    quickStarts,
    activeQuickStartID,
    allQuickStartStates,
    setActiveQuickStartID,
    setAllQuickStartStates,
    resourceBundle,
    showCardFooters,
    language,
    loading,
    useQueryParams: withQueryParams,
    alwaysShowTaskReview: false,
    inContextHelpTopics,
  };

  return (
    <React.Suspense fallback={<LoadingBox />}>
      <QuickStartContainer {...drawerProps}>
        <Page header={AppHeader} sidebar={AppSidebar} isManagedSidebar>
          {children}
        </Page>
      </QuickStartContainer>
    </React.Suspense>
  );
};

export default AppDemoInContextHelp;
