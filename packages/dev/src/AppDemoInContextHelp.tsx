import './App.css';
import { Page } from '@patternfly/react-core';
import {
  LoadingBox,
  InContextHelpContainerProps,
  InContextHelpContainer,
} from '@patternfly/quickstarts';
import { inContextHelpTopics } from './quickstarts-data/quick-start-test-data';
import React from 'react';
import i18n from './i18n/i18n';
import { AppHeader, AppSidebar } from './common/Page';

type AppProps = {
  children?: React.ReactNode;
  showCardFooters?: boolean;
};

const AppDemoInContextHelp: React.FC<AppProps> = ({ children }) => {
  const language = localStorage.getItem('bridge/language') || 'en';
  const resourceBundle = i18n.getResourceBundle(language, 'quickstart');

  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const load = async () => {
      setLoading(false);
    };
    setTimeout(() => {
      load();
    }, 500);
  }, []);

  const inContextHelpProps: InContextHelpContainerProps = {
    inContextHelpTopics,
    resourceBundle,
    language,
    loading,
  };

  return (
    <React.Suspense fallback={<LoadingBox />}>
      <InContextHelpContainer {...inContextHelpProps}>
        <Page header={AppHeader} sidebar={AppSidebar} isManagedSidebar>
          {children}
        </Page>
      </InContextHelpContainer>
    </React.Suspense>
  );
};

export default AppDemoInContextHelp;
