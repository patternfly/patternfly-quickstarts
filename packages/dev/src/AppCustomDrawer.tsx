import './App.css';
import {
  Page,
  Button,
  Drawer,
  DrawerContent,
  DrawerPanelContent,
  DrawerHead,
  DrawerActions,
  DrawerCloseButton,
  DrawerPanelDescription,
  DrawerPanelBody,
  DrawerContentBody,
} from '@patternfly/react-core';
import {
  LoadingBox,
  QuickStartContainer,
  QuickStartContainerProps,
  QuickStartDrawerContent,
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
    setDrawerContent('none');
  };
  const handleClose = (activeQuickStartStatus: string | number) => {
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

  const [drawerContent, setDrawerContent] = React.useState('none');

  const otherDrawerPanelContent = (
    <DrawerPanelContent>
      <DrawerHead>
        <span tabIndex={drawerContent === 'custom' ? 0 : -1}>Drawer panel header</span>
        <DrawerActions>
          <DrawerCloseButton onClick={() => setDrawerContent('none')} />
        </DrawerActions>
      </DrawerHead>
      <DrawerPanelDescription>Drawer panel description</DrawerPanelDescription>
      <DrawerPanelBody>Drawer panel body</DrawerPanelBody>
    </DrawerPanelContent>
  );

  return (
    <React.Suspense fallback={<LoadingBox />}>
      <QuickStartContainer {...containerProps} isManagedDrawer={false}>
        <Drawer isExpanded={drawerContent !== 'none'} isInline>
          <DrawerContent
            panelContent={
              drawerContent === 'quickstart' || activeQuickStartID !== '' ? (
                <QuickStartDrawerContent handleDrawerClose={handleClose} />
              ) : (
                otherDrawerPanelContent
              )
            }
          >
            <DrawerContentBody>
              <Page masthead={AppHeader} sidebar={AppSidebar} isManagedSidebar>
                <Button
                  variant="secondary"
                  onClick={() => {
                    toggleQuickStart('getting-started-with-quick-starts');
                    setDrawerContent('quickstart');
                  }}
                >
                  Getting started with quick starts
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => {
                    setActiveQuickStartID('');
                    setDrawerContent('custom');
                  }}
                >
                  Open a different drawer
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
