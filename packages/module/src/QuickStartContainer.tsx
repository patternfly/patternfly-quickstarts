import * as React from 'react';
import {
  QuickStartContext,
  QuickStartContextValues,
  useValuesForQuickStartContext,
} from './utils/quick-start-context';
import QuickStartDrawer from './QuickStartDrawer';
import { QuickStart, AllQuickStartStates } from './utils/quick-start-types';

export interface QuickStartContainerProps extends React.HTMLProps<HTMLDivElement> {
  /** array of quick starts */
  quickStarts: QuickStart[];
  /** id of the currently active quick start */
  activeQuickStartID: string;
  /** setter for the active quick starts */
  setActiveQuickStartID: React.Dispatch<React.SetStateAction<string>>;
  /** quick starts state object */
  allQuickStartStates: AllQuickStartStates;
  /** setter for the quick starts state object */
  setAllQuickStartStates: React.Dispatch<React.SetStateAction<AllQuickStartStates>>;
  /** content to render within the container */
  children?: React.ReactNode;
  /** element to render the drawer panel into */
  appendTo?: HTMLElement | (() => HTMLElement);
  /** if true, the panel will take up the full browser width */
  fullWidth?: boolean;
  /** callback when an in-progress quick start is closed */
  onCloseInProgress?: any;
  /** callback when a not-in-progress quick start is closed */
  onCloseNotInProgress?: any;
  /** true to show footer buttons in the catalog tiles (default true) */
  showCardFooters?: boolean;
  /** true to use legacy drawer header variant colors */
  useLegacyHeaderColors?: boolean;
  /** text resources object */
  resourceBundle?: any;
  /** language of the current resource bundle
   * Add custom strings: https://github.com/patternfly/patternfly-quickstarts/tree/main/packages/module#localization
   */
  language?: string;
  /** if true, will show a loading spinner on the catalog page (default false) */
  loading?: boolean;
  /** if true, will update the browser URL with ?quickstart={ID} (default true) */
  useQueryParams?: boolean;
  /** if true, the TaskReview component, aka "Check your work", will be shown regardless of task status */
  alwaysShowTaskReview?: boolean;
  /**
   * Additional markdown extensions and renderers to use
   * Example usage: https://github.com/patternfly/patternfly-quickstarts/tree/main/packages/module#markdown-extensions
   */
  markdown?: {
    extensions?: any[];
    renderExtension?: (docContext: Document, rootSelector: string) => React.ReactNode;
  };
  /** additional quick start context props */
  contextProps?: QuickStartContextValues;
  /** Indicates that QuickStart should create and maintain its own drawer. If false, a QuickStartDrawerContent component should be present within the children, replacing the custom Drawer's DrawerContent. */
  isManagedDrawer?: boolean;
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
  useLegacyHeaderColors,
  language,
  loading = false,
  useQueryParams = true,
  markdown,
  contextProps,
  alwaysShowTaskReview = true,
  isManagedDrawer = true,
  ...props
}: QuickStartContainerProps) => {
  const valuesForQuickstartContext: QuickStartContextValues = useValuesForQuickStartContext({
    allQuickStarts: quickStarts,
    activeQuickStartID,
    setActiveQuickStartID,
    allQuickStartStates,
    setAllQuickStartStates,
    footer: {
      show: showCardFooters,
    },
    useLegacyHeaderColors,
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
    alwaysShowTaskReview,
    ...contextProps,
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
      {isManagedDrawer ? (
        <QuickStartDrawer {...drawerProps}>{children}</QuickStartDrawer>
      ) : (
        children
      )}
    </QuickStartContext.Provider>
  );
};

export default QuickStartContainer;
