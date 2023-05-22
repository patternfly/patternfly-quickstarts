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
  /** array of HelpTopics */
  helpTopics: HelpTopic[];
  /** text resources object
   * Add custom strings: https://github.com/patternfly/patternfly-quickstarts/tree/main/packages/module#localization
   */
  resourceBundle?: any;
  /** language of the current resource bundle */
  language?: string;
  /** if true, will show a loading spinner on the catalog page (default false) */
  loading?: boolean;
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
  children?: React.ReactNode;
}

export const HelpTopicContainer: React.FC<HelpTopicContainerProps> = ({
  helpTopics,
  children,
  resourceBundle,
  language,
  loading = false,
  markdown,
  contextProps,
  ...props
}: HelpTopicContainerProps) => {
  const valuesForHelpTopicContext: HelpTopicContextValues = useValuesForHelpTopicContext({
    helpTopics,
    language,
    resourceBundle: {
      ...resourceBundle,
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

  return (
    <HelpTopicContext.Provider value={valuesForHelpTopicContext}>
      <HelpTopicDrawer {...props}>{children}</HelpTopicDrawer>
    </HelpTopicContext.Provider>
  );
};

export interface HelpTopicDrawerProps extends React.HTMLProps<HTMLDivElement> {
  helpTopics?: HelpTopic[];
  children?: React.ReactNode;
}

export const HelpTopicDrawer: React.FC<HelpTopicDrawerProps> = ({ children, ...props }) => {
  const { activeHelpTopic, filteredHelpTopics, setActiveHelpTopicByName } =
    React.useContext<HelpTopicContextValues>(HelpTopicContext);

  const onClose = () => {
    setActiveHelpTopicByName('');
  };

  const panelContent = (
    <HelpTopicPanelContent
      activeHelpTopic={activeHelpTopic}
      filteredHelpTopics={filteredHelpTopics}
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
