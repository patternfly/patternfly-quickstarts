import * as React from 'react';
import { Drawer, DrawerContent, DrawerContentBody } from '@patternfly/react-core';
import { QuickStartContext, QuickStartContextValues } from './utils/quick-start-context';
import { QuickStart, QuickStartStatus } from './utils/quick-start-types';
import QuickStartPanelContent from './QuickStartPanelContent';
import QuickStartCloseModal from './QuickStartCloseModal';
import QuickStartsLoader from './loader/QuickStartsLoader';
import { QUICKSTART_ID_FILTER_KEY } from './utils/const';
import { getQuickStartByName } from './utils/quick-start-utils';
import './QuickStartDrawer.scss';

export type QuickStartsLoaderProps = {
  children: (quickStarts: QuickStart[], loaded: boolean) => React.ReactNode;
};

export interface QuickStartDrawerProps extends React.HTMLProps<HTMLDivElement> {
  children?: React.ReactNode;
  appendTo?: HTMLElement | (() => HTMLElement);
  isStatic?: boolean;
  fullWidth?: boolean;
  LoaderComponent?: React.FC<QuickStartsLoaderProps>
}

export const QuickStartDrawer: React.FC<QuickStartDrawerProps> = ({
  children,
  appendTo,
  isStatic,
  fullWidth,
  LoaderComponent = QuickStartsLoader,
  ...props
}) => {
  const allContext = React.useContext<QuickStartContextValues>(QuickStartContext);
  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const quickStartId = params.get(QUICKSTART_ID_FILTER_KEY) || '';
    if (quickStartId && allContext.activeQuickStartID !== quickStartId) {
      const activeQuickStart = getQuickStartByName(quickStartId, allContext.allQuickStarts);
      if (activeQuickStart && !activeQuickStart.spec.link) {
        // don't try to load a quick start that is actually just an external resource
        allContext.setActiveQuickStart(quickStartId);
      }
    }
  }, []);

  const { activeQuickStartID, activeQuickStartState, setActiveQuickStart } = allContext;
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const activeQuickStartStatus = activeQuickStartState?.status;
  const onClose = () => setActiveQuickStart('');
  const handleClose = () => {
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
          display: !!activeQuickStartID ? 'none' : 'flex',
        },
      }
    : {};

  const panelContent = (
    <LoaderComponent>
      {(quickStarts) => (
        <QuickStartPanelContent
          quickStarts={quickStarts}
          handleClose={handleClose}
          activeQuickStartID={activeQuickStartID}
          appendTo={appendTo}
          isResizable={!fullWidth}
          {...fullWidthPanelStyle}
        />
      )}
    </LoaderComponent>
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
