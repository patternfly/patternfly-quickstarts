import '../App.css';
import { Page } from '@patternfly/react-core';
import {
  LoadingBox,
  QuickStart,
  QuickStartContainer,
  QuickStartContainerProps,
  useLocalStorage,
  setQueryArgument,
  removeQueryArgument,
  QUICKSTART_ID_FILTER_KEY,
} from '@patternfly/quickstarts';
import { DefaultCatalog } from '../DefaultCatalog';
import { loadJSONQuickStarts } from '../quickstarts-data/mas-guides/quickstartLoader';
import { allQuickStarts as yamlQuickStarts } from '../quickstarts-data/quick-start-test-data';
import React from 'react';
import i18n from '../i18n/i18n';
import { AppHeader, AppSidebar } from '../common/Page';
import './Editor.css';
import { EditorForm } from './EditorForm';
import { EditorTask } from './EditorTask';

type EditorProps = {
  children?: React.ReactNode;
  showCardFooters?: boolean;
};

const Editor: React.FC<EditorProps> = ({ children, showCardFooters }) => {
  const [catalogKey, setCatalogKey] = React.useState(0);
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
    }, 1500);
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
  };

  const onCreate = (quickStart: QuickStart) => {
    const quickStartIndex = quickStarts.findIndex(
      (q) => q.metadata.name === quickStart.metadata.name,
    );
    if (quickStartIndex === -1) {
      setQuickStarts([...quickStarts, quickStart]);
    } else {
      const newQuickStarts = [...quickStarts];
      newQuickStarts[quickStartIndex] = quickStart;
      setQuickStarts(newQuickStarts);
    }
    setCatalogKey(catalogKey + 1);
  };

  return (
    <React.Suspense fallback={<LoadingBox />}>
      <QuickStartContainer {...drawerProps}>
        <Page header={AppHeader} sidebar={AppSidebar} isManagedSidebar>
          <EditorForm onCreateCb={onCreate} quickStarts={quickStarts} />
          <DefaultCatalog key={catalogKey} />
        </Page>
      </QuickStartContainer>
    </React.Suspense>
  );
};
export default Editor;
