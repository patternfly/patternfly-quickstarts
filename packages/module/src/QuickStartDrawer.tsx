import './QuickStartDrawer.scss';
import * as React from 'react';
import { Drawer, DrawerContent, DrawerContentBody } from '@patternfly/react-core';
import QuickStartCloseModal from './QuickStartCloseModal';
import QuickStartPanelContent from './QuickStartPanelContent';
import { QUICKSTART_ID_FILTER_KEY } from './utils/const';
import { QuickStartContext, QuickStartContextValues } from './utils/quick-start-context';
import { QuickStart, QuickStartStatus } from './utils/quick-start-types';
import { getQuickStartByName } from './utils/quick-start-utils';

export interface QuickStartDrawerProps extends React.HTMLProps<HTMLDivElement> {
  quickStarts?: QuickStart[];
  children?: React.ReactNode;
  appendTo?: HTMLElement | (() => HTMLElement);
  isStatic?: boolean;
  fullWidth?: boolean;
  onCloseInProgress?: any;
  onCloseNotInProgress?: any;
}

export const QuickStartDrawer: React.FC<QuickStartDrawerProps> = ({
  quickStarts = [],
  children,
  appendTo,
  isStatic,
  fullWidth,
  onCloseInProgress,
  onCloseNotInProgress,
  ...props
}) => {
  const {
    activeQuickStartID,
    setActiveQuickStart,
    allQuickStarts,
    activeQuickStartState,
  } = React.useContext<QuickStartContextValues>(QuickStartContext);
  const combinedQuickStarts = allQuickStarts.concat(quickStarts);
  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const quickStartId = params.get(QUICKSTART_ID_FILTER_KEY) || '';
    if (quickStartId && activeQuickStartID !== quickStartId) {
      const activeQuickStart = getQuickStartByName(quickStartId, combinedQuickStarts);
      if (
        !combinedQuickStarts ||
        combinedQuickStarts.length === 0 ||
        (activeQuickStart && !activeQuickStart.spec.link)
      ) {
        // don't try to load a quick start that is actually just an external resource
        setActiveQuickStart(quickStartId);
      }
    }
  }, [activeQuickStartID, combinedQuickStarts, setActiveQuickStart]);

  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const activeQuickStartStatus = activeQuickStartState?.status;
  const onClose = () => setActiveQuickStart('');
  const handleClose = () => {
    if (activeQuickStartStatus === QuickStartStatus.IN_PROGRESS) {
      if (onCloseInProgress) {
        onCloseInProgress();
      } else {
        setModalOpen(true);
      }
    } else if (onCloseNotInProgress) {
      onCloseNotInProgress();
    } else {
      onClose();
    }
  };

  const onModalConfirm = () => {
    setModalOpen(false);
    onClose();
  };

  const onModalCancel = () => setModalOpen(false);

  const fullWidthPanelStyle = fullWidth
    ? {
        style: {
          flex: 1,
        },
      }
    : {};

  const fullWidthBodyStyle = fullWidth
    ? {
        style: {
          display: activeQuickStartID ? 'none' : 'flex',
        },
      }
    : {};

  const panelContent = (
    <QuickStartPanelContent
      quickStarts={combinedQuickStarts}
      handleClose={handleClose}
      activeQuickStartID={activeQuickStartID}
      appendTo={appendTo}
      isResizable={!fullWidth}
      {...fullWidthPanelStyle}
    />
  );

  return (
    <>
      <Drawer isExpanded={!!activeQuickStartID} isInline isStatic={isStatic} {...props}>
        {children ? (
          <DrawerContent panelContent={panelContent} {...fullWidthBodyStyle}>
            <DrawerContentBody className="pfe-quick-start-drawer__body">
              {children}
            </DrawerContentBody>
          </DrawerContent>
        ) : (
          <div className="pf-c-drawer__main">{panelContent}</div>
        )}
      </Drawer>
      <QuickStartCloseModal
        isOpen={modalOpen}
        onConfirm={onModalConfirm}
        onCancel={onModalCancel}
      />
    </>
  );
};
