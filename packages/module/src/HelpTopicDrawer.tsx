import './QuickStartDrawer.scss';
import * as React from 'react';
import { Drawer, DrawerContent, DrawerContentBody } from '@patternfly/react-core';
import HelpTopicPanelContent from './HelpTopicPanelContent';
import {
  HelpTopicContext,
  HelpTopicContextValues,
  useValuesForHelpTopicContext,
} from './utils/help-topic-context';
import { QuickStartContextValues } from './utils/quick-start-context';
import { HelpTopic } from './utils/help-topic-types';

export interface HelpTopicContainerProps extends React.HTMLProps<HTMLDivElement> {
  /* array of HelpTopics */
  helpTopics: HelpTopic[];
  /**
   * show drop down selector of available HelpTopics
   * if false (default) drop down selector will never show
   * not shown if helpTopics length <= 1
   */
  showHelpTopicSelector?: boolean;
  /**
   * if false (default), all helpTopics will be displayed in dropdowndrop down selector
   * if true, filteredHelpTopics (user controlled from context) will be displayed in
   */
  useFilteredSelectorList?: boolean;
  /* text resources object */
  resourceBundle?: any;
  /* language of the current resource bundle */
  language?: string;
  /* if true, will show a loading spinner on the catalog page (default false) */
  loading?: boolean;
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

export const HelpTopicContainer: React.FC<HelpTopicContainerProps> = ({
  helpTopics,
  showHelpTopicSelector = false,
  useFilteredSelectorList = false,
  children,
  resourceBundle,
  language,
  loading = false,
  markdown,
  contextProps,
  ...props
}) => {
  const valuesForHelpTopicContext: HelpTopicContextValues = useValuesForHelpTopicContext({
    helpTopics,
    language,
    resourceBundle: {
      ...resourceBundle,
      // Start: "Let's go!",
      // Continue: 'Resume',
      // Restart: 'Start over',
    },
    loading,
    markdown,
    ...contextProps,
  });

  React.useEffect(() => {
    if (loading !== valuesForHelpTopicContext.loading) {
      valuesForHelpTopicContext.setLoading(loading);
    }
  }, [loading, valuesForHelpTopicContext]);

  React.useEffect(() => {
    if (
      helpTopics &&
      JSON.stringify(helpTopics) !== JSON.stringify(valuesForHelpTopicContext.helpTopics)
    ) {
      valuesForHelpTopicContext.setHelpTopics(helpTopics);
    }
  }, [helpTopics, valuesForHelpTopicContext]);

  const drawerProps = {
    showHelpTopicSelector,
    useFilteredSelectorList,
    ...props,
  };

  return (
    <HelpTopicContext.Provider value={valuesForHelpTopicContext}>
      <HelpTopicDrawer {...drawerProps}>{children}</HelpTopicDrawer>
    </HelpTopicContext.Provider>
  );
};

export interface HelpTopicDrawerProps extends React.HTMLProps<HTMLDivElement> {
  helpTopics?: HelpTopic[];
  showHelpTopicSelector: boolean;
  useFilteredSelectorList: boolean;
  children?: React.ReactNode;
}

export const HelpTopicDrawer: React.FC<HelpTopicDrawerProps> = ({
  children,
  useFilteredSelectorList,
  showHelpTopicSelector,
  ...props
}) => {
  const {
    helpTopics,
    activeHelpTopic,
    filteredHelpTopics,
    setActiveHelpTopicByName,
  } = React.useContext<HelpTopicContextValues>(HelpTopicContext);

  const onClose = () => {
    setActiveHelpTopicByName('');
  };

  const dropDownHelpTopics = useFilteredSelectorList ? filteredHelpTopics : helpTopics;

  const panelContent = (
    <HelpTopicPanelContent
      activeHelpTopic={activeHelpTopic}
      dropDownHelpTopics={showHelpTopicSelector && dropDownHelpTopics}
      onClose={onClose}
    />
  );

  return (
    <>
      <Drawer isExpanded={!!activeHelpTopic} isInline {...props}>
        {children ? (
          <DrawerContent panelContent={panelContent}>
            <DrawerContentBody className="pfext-quick-start-drawer__body">
              {children}
            </DrawerContentBody>
          </DrawerContent>
        ) : (
          <div className="pf-c-drawer__main">{panelContent}</div>
        )}
      </Drawer>
    </>
  );
};
