import './QuickStartDrawer.scss';
import * as React from 'react';
import { Drawer, DrawerContent, DrawerContentBody } from '@patternfly/react-core';
import QuickStartCloseModal from './QuickStartCloseModal';
import QuickStartPanelContent from './QuickStartPanelContent';
import {
  getDefaultQuickStartState,
  QuickStartContext,
  QuickStartContextValues,
  useValuesForQuickStartContext,
} from './utils/quick-start-context';
import { QUICKSTART_ID_FILTER_KEY } from './utils/const';
import { QuickStart, QuickStartStatus, AllQuickStartStates } from './utils/quick-start-types';
import { getQuickStartByName } from './utils/quick-start-utils';

export interface QuickStartContainerProps extends React.HTMLProps<HTMLDivElement> {
  /* array of quick starts */
  quickStarts: QuickStart[];
  /* id of the currently active quick start */
  activeQuickStartID: string;
  /* setter for the active quick starts */
  setActiveQuickStartID: React.Dispatch<React.SetStateAction<string>>;
  /* quick starts state object */
  allQuickStartStates: AllQuickStartStates;
  /* setter for the quick starts state object */
  setAllQuickStartStates: React.Dispatch<React.SetStateAction<AllQuickStartStates>>;
  /* content to render within the container */
  children?: React.ReactNode;
  /* element to render the drawer panel into */
  appendTo?: HTMLElement | (() => HTMLElement);
  /* if true, the panel will take up the full browser width */
  fullWidth?: boolean;
  /* callback when an in-progress quick start is closed */
  onCloseInProgress?: any;
  /* callback when a not-in-progress quick start is closed */
  onCloseNotInProgress?: any;
  /* true to show footer buttons in the catalog tiles (default true) */
  showCardFooters?: boolean;
  /* text resources object */
  resourceBundle?: any;
  /* language of the current resource bundle */
  language?: string;
  /* if true, will show a loading spinner on the catalog page (default false) */
  loading?: boolean;
  /* if true, will update the browser URL with ?quickstart={ID} (default true) */
  useQueryParams?: boolean;
  /* if true, the TaskReview component, aka "Check your work", will be shown regardless of task status */
  alwaysShowTaskReview?: boolean;
  /**
   * Additional markdown extensions and renderers to use
   * TODO: example usage - In the meantime you can take a look at:
   * https://github.com/openshift/console/blob/master/frontend/packages/console-app/src/components/quick-starts/utils/quick-start-context.tsx#L235
   */
  markdown?: {
    extensions?: any[];
    renderExtension?: (docContext: HTMLDocument, rootSelector: string) => React.ReactNode;
  };
  /* additional quick start context props */
  contextProps?: QuickStartContextValues;
}

export const QuickStartContainer: React.FC<QuickStartContainerProps> = ({
  quickStarts,
  children,
  activeQuickStartID,
  allQuickStartStates,
  setActiveQuickStartID,
  setAllQuickStartStates,
  appendTo,
  fullWidth,
  onCloseInProgress,
  onCloseNotInProgress,
  resourceBundle,
  showCardFooters,
  language,
  loading = false,
  useQueryParams = true,
  markdown,
  contextProps,
  alwaysShowTaskReview = false,
  ...props
}) => {
  const valuesForQuickstartContext: QuickStartContextValues = useValuesForQuickStartContext({
    allQuickStarts: quickStarts,
    activeQuickStartID,
    setActiveQuickStartID,
    allQuickStartStates,
    setAllQuickStartStates,
    footer: {
      show: showCardFooters,
    },
    language,
    resourceBundle: {
      ...resourceBundle,
      // Start: "Let's go!",
      // Continue: 'Resume',
      // Restart: 'Start over',
    },
    loading,
    useQueryParams,
    markdown,
    ...contextProps,
    alwaysShowTaskReview,
  });

  React.useEffect(() => {
    if (
      quickStarts &&
      JSON.stringify(quickStarts) !== JSON.stringify(valuesForQuickstartContext.allQuickStarts)
    ) {
      valuesForQuickstartContext.setAllQuickStarts(quickStarts);
    }
  }, [quickStarts, valuesForQuickstartContext]);

  React.useEffect(() => {
    if (loading !== valuesForQuickstartContext.loading) {
      valuesForQuickstartContext.setLoading(loading);
    }
  }, [loading, valuesForQuickstartContext]);

  const drawerProps = {
    appendTo,
    fullWidth,
    onCloseInProgress,
    onCloseNotInProgress,
    ...props,
  };

  return (
    <QuickStartContext.Provider value={valuesForQuickstartContext}>
      <QuickStartDrawer {...drawerProps}>{children}</QuickStartDrawer>
    </QuickStartContext.Provider>
  );
};

export interface QuickStartDrawerProps extends React.HTMLProps<HTMLDivElement> {
  quickStarts?: QuickStart[];
  children?: React.ReactNode;
  appendTo?: HTMLElement | (() => HTMLElement);
  fullWidth?: boolean;
  onCloseInProgress?: any;
  onCloseNotInProgress?: any;
}

export const QuickStartDrawer: React.FC<QuickStartDrawerProps> = ({
  quickStarts = [],
  children,
  appendTo,
  fullWidth,
  onCloseInProgress,
  onCloseNotInProgress,
  ...props
}) => {
  const {
    activeQuickStartID,
    setActiveQuickStart,
    allQuickStarts = [],
    activeQuickStartState,
    allQuickStartStates,
    setAllQuickStartStates,
  } = React.useContext<QuickStartContextValues>(QuickStartContext);
  const combinedQuickStarts = allQuickStarts.concat(quickStarts);

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    // if there is a quick start param, but the quick start is not active, set it
    // this can happen if a new browser session is opened or an incognito window for example
    const quickStartIdFromParam = params.get(QUICKSTART_ID_FILTER_KEY) || '';
    if (quickStartIdFromParam && !activeQuickStartID) {
      const activeQuickStart = getQuickStartByName(quickStartIdFromParam, combinedQuickStarts);
      // don't try to load a quick start that is actually just an external resource (spec.link)
      if (combinedQuickStarts.length > 0 && activeQuickStart && !activeQuickStart.spec.link) {
        setActiveQuickStart(quickStartIdFromParam);
      }
    }
  }, [activeQuickStartID, combinedQuickStarts, setActiveQuickStart]);

  React.useEffect(() => {
    // If activeQuickStartID was changed through prop from QuickStartContainer, need to init the state if it does not exist yet
    if (activeQuickStartID && !allQuickStartStates[activeQuickStartID]) {
      setAllQuickStartStates({
        ...allQuickStartStates,
        [activeQuickStartID]: getDefaultQuickStartState(),
      });
    }
  }, [activeQuickStartID, allQuickStartStates, setAllQuickStartStates]);

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
      <Drawer isExpanded={!!activeQuickStartID} isInline {...props}>
        {children ? (
          <DrawerContent panelContent={panelContent} {...fullWidthBodyStyle}>
            <DrawerContentBody className="pfext-quick-start-drawer__body">
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
