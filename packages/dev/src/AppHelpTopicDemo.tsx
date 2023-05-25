import './App.css';
import { Page } from '@patternfly/react-core';
import { LoadingBox, HelpTopicContainerProps, HelpTopicContainer } from '@patternfly/quickstarts';
import { helpTopics } from './quickstarts-data/quick-start-test-data';
import React from 'react';
import i18n from './i18n/i18n';
import { AppHeader, AppSidebar } from './common/Page';

interface AppProps {
  children?: React.ReactNode;
  showCardFooters?: boolean;
}

const AppHelpTopicDemo: React.FC<AppProps> = ({ children }) => {
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

  const helpTopicContainerProps: HelpTopicContainerProps = {
    helpTopics,
    resourceBundle,
    language,
    loading,
  };

  return (
    <React.Suspense fallback={<LoadingBox />}>
      <HelpTopicContainer {...helpTopicContainerProps}>
        <Page header={AppHeader} sidebar={AppSidebar} isManagedSidebar>
          {children}
        </Page>
      </HelpTopicContainer>
    </React.Suspense>
  );
};

export default AppHelpTopicDemo;
