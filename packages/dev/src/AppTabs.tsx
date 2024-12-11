import './App.css';
import {
  Page,
  Button,
  Drawer,
  DrawerContent,
  Tabs,
  Tab,
  TabTitleText,
  DrawerContentBody,
  DrawerPanelContent,
  DrawerHead,
  DrawerActions,
  DrawerCloseButton,
  DrawerPanelDescription,
  DrawerPanelBody,
} from '@patternfly/react-core';
import {
  LoadingBox,
  QuickStartContainer,
  QuickStartContainerProps,
  QuickStartController,
  QuickStartCloseModal,
  QuickStartStatus,
  useLocalStorage,
  setQueryArgument,
  removeQueryArgument,
  QUICKSTART_ID_FILTER_KEY,
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
  const language = localStorage.getItem('bridge/language') || 'en';
  const resourceBundle = i18n.getResourceBundle(language, 'quickstart');

  // eslint-disable-next-line no-console
  React.useEffect(() => console.log(activeQuickStartID), [activeQuickStartID]);
  React.useEffect(() => {
    // callback on state change
    // eslint-disable-next-line no-console
    console.log(allQuickStartStates);
  }, [allQuickStartStates]);

  const withQueryParams = true;

  const containerProps: QuickStartContainerProps = {
    quickStarts: yamlQuickStarts,
    activeQuickStartID,
    allQuickStartStates,
    setActiveQuickStartID,
    setAllQuickStartStates,
    resourceBundle,
    showCardFooters,
    language,
    useQueryParams: withQueryParams,
    alwaysShowTaskReview: true,
    markdown: {
      extensions: [
        // variable substitution
        {
          type: 'output',
          filter(html: string) {
            html = html.replace(/\[APPLICATION\]/g, 'Mercury');
            html = html.replace(/\[PRODUCT\]/g, 'Lightning');

            return html;
          },
        },
      ],
    },
  };

  const toggleQuickStart = (quickStartId: string) => {
    if (activeQuickStartID !== quickStartId) {
      // activate
      setActiveQuickStartID(quickStartId);
      // optionally add the query param
      withQueryParams && setQueryArgument(QUICKSTART_ID_FILTER_KEY, quickStartId);
    } else {
      // deactivate
      setActiveQuickStartID('');
      // optionally remove the query param
      withQueryParams && removeQueryArgument(QUICKSTART_ID_FILTER_KEY);
    }
  };

  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const onClose = () => {
    setActiveQuickStartID('');
    setIsDrawerOpen(false);
  };
  const handleClose = (activeQuickStartStatus: string | number) => {
    // need to hook up to modal close button
    if (activeQuickStartStatus === QuickStartStatus.IN_PROGRESS) {
      setModalOpen(true);
    } else {
      onClose();
    }
    onClose();
  };
  const onModalConfirm = () => {
    setModalOpen(false);
    onClose();
  };
  const onModalCancel = () => setModalOpen(false);

  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [activeTabKey, setActiveTabKey] = React.useState<string | number>(0);
  // Toggle currently active tab
  const handleTabClick = (
    event: React.MouseEvent<any> | React.KeyboardEvent | MouseEvent,
    tabIndex: string | number,
  ) => {
    setActiveTabKey(tabIndex);
  };

  // needed for QuickStartController and metadata filling out
  // we're basically rendering the QS on the user code opposed to QuickStartPanelContent
  const quickStart = yamlQuickStarts.find((qs) => qs.metadata.name === activeQuickStartID);
  const nextQuickStart = yamlQuickStarts.filter((qs) =>
    quickStart?.spec.nextQuickStart?.includes(qs.metadata.name),
  );
  const panelContent = (
    <DrawerPanelContent isResizable>
      <DrawerHead>
        <span>{activeQuickStartID !== '' ? quickStart?.spec.displayName : 'No QS title'}</span>
        <DrawerActions>
          <DrawerCloseButton onClick={() => setIsDrawerOpen(false)} />
        </DrawerActions>
      </DrawerHead>
      <DrawerPanelDescription>Drawer panel description</DrawerPanelDescription>
      <DrawerPanelBody
        style={{ display: 'flex', flexDirection: 'column' } /** need for footer spacing */}
      >
        <Tabs
          activeKey={activeTabKey}
          onSelect={handleTabClick}
          aria-label="Tabs in a drawer"
          role="region"
        >
          {activeQuickStartID !== '' && (
            <Tab
              eventKey={0}
              title={<TabTitleText>Quickstart</TabTitleText>}
              aria-label="Default content - users"
              style={{ flex: '1 1', display: 'flex', flexDirection: 'column' }} // not currently spread to tab - react issue opened https://github.com/patternfly/patternfly-react/issues/11342
            >
              <QuickStartController quickStart={quickStart} nextQuickStarts={nextQuickStart} />
            </Tab>
          )}

          <Tab eventKey={1} title={<TabTitleText>Chatbot</TabTitleText>}>
            Chatbot
            <Button
              variant="secondary"
              onClick={() => {
                toggleQuickStart('getting-started-with-quick-starts');
              }}
            >
              Toggle QS
            </Button>
          </Tab>
        </Tabs>
      </DrawerPanelBody>
    </DrawerPanelContent>
  );

  return (
    <React.Suspense fallback={<LoadingBox />}>
      <QuickStartContainer {...containerProps} isManagedDrawer={false}>
        <Drawer isExpanded={isDrawerOpen} isInline>
          <DrawerContent panelContent={panelContent}>
            <DrawerContentBody>
              <Page masthead={AppHeader} sidebar={AppSidebar} isManagedSidebar>
                <Button
                  variant="secondary"
                  onClick={() => {
                    setIsDrawerOpen(!isDrawerOpen);
                  }}
                >
                  Toggle Drawer
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => {
                    toggleQuickStart('getting-started-with-quick-starts');
                  }}
                >
                  Toggle QS
                </Button>
                {children}
              </Page>
            </DrawerContentBody>
          </DrawerContent>
        </Drawer>
        <QuickStartCloseModal
          isOpen={modalOpen}
          onConfirm={onModalConfirm}
          onCancel={onModalCancel}
        />
      </QuickStartContainer>
    </React.Suspense>
  );
};
export default App;
