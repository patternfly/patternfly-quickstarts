import React from 'react';
import {
  LoadingBox,
  QuickStartContainer,
  useLocalStorage,
  QuickStartCatalogPage,
  QuickStartDrawerContent,
  QuickStartCloseModal,
  QuickStartStatus,
} from '@patternfly/quickstarts';
import {
  Drawer,
  DrawerContent,
  DrawerPanelContent,
  DrawerHead,
  DrawerActions,
  DrawerCloseButton,
  DrawerPanelDescription,
  DrawerPanelBody,
  DrawerContentBody,
  Button,
} from '@patternfly/react-core';
import { quickStarts as exampleQuickStarts } from './example-data';

export const App = ({ showCardFooters }) => {
  const [activeQuickStartID, setActiveQuickStartID] = useLocalStorage('quickstartId', '');
  const [allQuickStartStates, setAllQuickStartStates] = useLocalStorage('quickstarts', {});
  const language = localStorage.getItem('bridge/language') || 'en';

  // eslint-disable-next-line no-console
  React.useEffect(() => console.log(activeQuickStartID), [activeQuickStartID]);
  React.useEffect(() => {
    // callback on state change
    // eslint-disable-next-line no-console
    console.log(allQuickStartStates);
  }, [allQuickStartStates]);

  const [loading, setLoading] = React.useState(true);
  const [quickStarts, setQuickStarts] = React.useState([]);
  React.useEffect(() => {
    const load = async () => {
      setQuickStarts(exampleQuickStarts);
      setLoading(false);
    };
    setTimeout(() => {
      load();
    }, 500);
  }, []);

  const drawerProps = {
    quickStarts,
    activeQuickStartID,
    allQuickStartStates,
    setActiveQuickStartID,
    setAllQuickStartStates,
    showCardFooters,
    language,
    loading,
    alwaysShowTaskReview: true,
    markdown: {
      extensions: [
        // variable substitution
        {
          type: 'output',
          filter(html) {
            html = html.replace(/\[APPLICATION\]/g, 'Mercury');
            html = html.replace(/\[PRODUCT\]/g, 'Lightning');

            return html;
          },
        },
      ],
    },
  };

  const [modalOpen, setModalOpen] = React.useState(false);
  const onClose = () => setActiveQuickStartID('');
  const handleClose = (activeQuickStartStatus) => {
    if (activeQuickStartStatus === QuickStartStatus.IN_PROGRESS) {
      setModalOpen(true);
    } else {
      onClose();
    }
  };
  const onModalConfirm = () => {
    setModalOpen(false);
    onClose();
  };
  const onModalCancel = () => setModalOpen(false);

  const [otherDrawerOpen, setOtherDrawerOpen] = React.useState(false);

  const otherDrawerPanelContent = (
    <DrawerPanelContent>
      <DrawerHead>
        <span tabIndex={otherDrawerOpen ? 0 : -1}>Drawer panel header</span>
        <DrawerActions>
          <DrawerCloseButton onClick={() => setOtherDrawerOpen(false)} />
        </DrawerActions>
      </DrawerHead>
      <DrawerPanelDescription>Drawer panel description</DrawerPanelDescription>
      <DrawerPanelBody>Drawer panel body</DrawerPanelBody>
    </DrawerPanelContent>
  );

  return (
    <React.Suspense fallback={<LoadingBox />}>
      <QuickStartContainer {...drawerProps} isManagedDrawer={false}>
        <Drawer isExpanded={activeQuickStartID !== '' || otherDrawerOpen} isInline>
          <DrawerContent
            panelContent={
              activeQuickStartID !== '' ? (
                <QuickStartDrawerContent handleDrawerClose={handleClose} />
              ) : (
                otherDrawerPanelContent
              )
            }
          >
            <DrawerContentBody>
              <Button
                variant="secondary"
                onClick={() => setActiveQuickStartID('explore-pipelines')}
              >
                Getting started with quick starts
              </Button>
              <Button variant="secondary" onClick={() => setOtherDrawerOpen(true)}>
                Open a different drawer
              </Button>
              <QuickStartCatalogPage
                title="Quick starts"
                hint={
                  'Learn how to create, import, and run applications with step-by-step instructions and tasks.'
                }
              />
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
