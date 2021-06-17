import * as React from 'react';
import { Drawer, DrawerContent, DrawerContentBody } from '@patternfly/react-core';
import { QuickStartContext, QuickStartContextValues } from './utils/quick-start-context';
import { QuickStartStatus } from './utils/quick-start-types';
import QuickStartPanelContent from './QuickStartPanelContent';
import QuickStartCloseModal from './QuickStartCloseModal';
import { QUICKSTART_ID_FILTER_KEY } from './utils/const';
import { getQuickStartByName } from './utils/quick-start-utils';
import './QuickStartDrawer.scss';

export interface QuickStartDrawerProps extends React.HTMLProps<HTMLDivElement> {
  children?: React.ReactNode;
  appendTo?: HTMLElement | (() => HTMLElement);
  isStatic?: boolean;
  fullWidth?: boolean;
  onCloseInProgress?: any;
  onCloseNotInProgress?: any;
}

export const QuickStartDrawer: React.FC<QuickStartDrawerProps> = ({
  children,
  appendTo,
  isStatic,
  fullWidth,
  onCloseInProgress,
  onCloseNotInProgress,
  ...props
}) => {
  const { activeQuickStartID, setActiveQuickStart, allQuickStarts, activeQuickStartState } = React.useContext<QuickStartContextValues>(QuickStartContext);
  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const quickStartId = params.get(QUICKSTART_ID_FILTER_KEY) || '';
    if (quickStartId && activeQuickStartID !== quickStartId) {
      const activeQuickStart = getQuickStartByName(quickStartId, allQuickStarts);
      if (activeQuickStart && !activeQuickStart.spec.link) {
        // don't try to load a quick start that is actually just an external resource
        setActiveQuickStart(quickStartId);
      }
    }
  }, []);

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
    } else {
      if (onCloseNotInProgress) {
        onCloseNotInProgress();
      } else {
        onClose();
      }
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
      quickStarts={allQuickStarts}
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
            <DrawerContentBody className="co-quick-start-drawer__body">
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
