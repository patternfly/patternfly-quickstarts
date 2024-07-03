import './App.css';
import { Page } from '@patternfly/react-core';
import {
  LoadingBox,
  QuickStart,
  QuickStartContainer,
  QuickStartContainerProps,
  useLocalStorage,
} from '@patternfly/quickstarts';
import { localizedQuickStarts as yamlQuickStarts } from './quickstarts-data/quick-start-test-data';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { AppHeader, AppSidebar } from './common/Page';

interface AppProps {
  children?: React.ReactNode;
  showCardFooters?: boolean;
}

// filter quickStarts by language (there is also an option to filter by country code)
const filterByLanguage = (quickStarts: QuickStart[], currentLanguage: string) => {
  if (currentLanguage !== 'en') {
    let filtered = quickStarts.filter((qs) => qs.metadata.language === currentLanguage);
    // if there are no translation for the currentLanguage default to en
    if (!filtered.length) {
      filtered = quickStarts.filter((qs) => qs.metadata.language === 'en');
    }
    return filtered;
  }
  // en
  // also include quick starts that do not have the locale set
  return quickStarts.filter(
    (qs) => qs.metadata.language === currentLanguage || !qs.metadata.language,
  );
};

const App3: React.FC<AppProps> = ({ children, showCardFooters }) => {
  const [activeQuickStartID, setActiveQuickStartID] = useLocalStorage('quickstartId', '');
  const [allQuickStartStates, setAllQuickStartStates] = useLocalStorage('quickstarts', {});
  const [loading, setLoading] = React.useState(true);

  const { i18n } = useTranslation();

  // eslint-disable-next-line no-console
  React.useEffect(() => console.log(activeQuickStartID), [activeQuickStartID]);
  React.useEffect(() => {
    // callback on state change
    // eslint-disable-next-line no-console
    console.log(allQuickStartStates);
  }, [allQuickStartStates]);

  const language = localStorage.getItem('bridge/language') || 'en';
  const resourceBundle = i18n.getResourceBundle(language, 'quickstart');

  const [allQuickStarts, setAllQuickStarts] = React.useState<QuickStart[]>([]);
  React.useEffect(() => {
    const load = async () => {
      setAllQuickStarts(filterByLanguage(yamlQuickStarts, language));
      setLoading(false);
    };
    setTimeout(() => {
      load();
    }, 500);
  }, [language]);

  const withQueryParams = true;

  const drawerProps: QuickStartContainerProps = {
    quickStarts: allQuickStarts,
    activeQuickStartID,
    allQuickStartStates,
    setActiveQuickStartID,
    setAllQuickStartStates,
    resourceBundle,
    showCardFooters,
    language,
    loading,
    useQueryParams: withQueryParams,
    alwaysShowTaskReview: true,
  };

  return (
    <React.Suspense fallback={<LoadingBox />}>
      <QuickStartContainer {...drawerProps}>
        <Page masthead={AppHeader} sidebar={AppSidebar} isManagedSidebar>
          {children}
        </Page>
      </QuickStartContainer>
    </React.Suspense>
  );
};
export default App3;
