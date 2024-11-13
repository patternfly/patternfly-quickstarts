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
import { Drawer } from '@patternfly/react-core';
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

  // The above code is identical to the current quickstarts setup
  // Below is additional handling to support a custom drawer with an in-progress close confirm modal
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

  return (
    <React.Suspense fallback={<LoadingBox />}>
      <QuickStartContainer {...drawerProps} isManagedDrawer={false}>
        <Drawer isExpanded={activeQuickStartID !== ''} isInline>
          <QuickStartDrawerContent handleDrawerClose={handleClose}>
            <QuickStartCatalogPage
              title="Quick starts"
              hint={
                'Learn how to create, import, and run applications with step-by-step instructions and tasks.'
              }
            />
          </QuickStartDrawerContent>
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
