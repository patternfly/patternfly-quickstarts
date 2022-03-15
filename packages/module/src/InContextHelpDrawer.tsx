import './QuickStartDrawer.scss';
import * as React from 'react';
import { Drawer, DrawerContent, DrawerContentBody } from '@patternfly/react-core';
// import QuickStartPanelContent from './QuickStartPanelContent';
import {
  HelpTopicContext,
  HelpTopicContextValues,
  useValuesForHelpTopicContext,
} from './utils/help-topic-context';
import { QuickStartContextValues } from './utils/quick-start-context';
import { HELP_TOPIC_NAME_KEY } from './utils/const';
import { InContextHelpTopic } from './utils/quick-start-types';

export interface InContextHelpContainerProps extends React.HTMLProps<HTMLDivElement> {
  /* array of InContextHelpTopics */
  inContextHelpTopics: InContextHelpTopic[];
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

export const InContextHelpContainer: React.FC<InContextHelpContainerProps> = ({
  inContextHelpTopics,
  children,
  resourceBundle,
  language,
  loading = false,
  markdown,
  contextProps,
  ...props
}) => {
  const valuesForHelpTopicContext: HelpTopicContextValues = useValuesForHelpTopicContext({
    inContextHelpTopics,
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

  const drawerProps = {
    //TODO add extras here?
    ...props,
  };

  return (
    <HelpTopicContext.Provider value={valuesForHelpTopicContext}>
      <HelpTopicDrawer {...drawerProps}>{children}</HelpTopicDrawer>
    </HelpTopicContext.Provider>
  );
};

export interface HelpTopicDrawerProps extends React.HTMLProps<HTMLDivElement> {
  inContextHelpTopics?: InContextHelpTopic[];
  children?: React.ReactNode;
}

export const HelpTopicDrawer: React.FC<HelpTopicDrawerProps> = ({
  inContextHelpTopics,
  children,
  ...props
}) => {
  const { setActiveHelpTopicByName, activeHelpTopic } = React.useContext<HelpTopicContextValues>(
    HelpTopicContext,
  );

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    // if there is a quick start param, but the quick start is not active, set it
    // this can happen if a new browser session is opened or an incognito window for example
    const helpTopicNameFromParam = params.get(HELP_TOPIC_NAME_KEY) || '';
    if (helpTopicNameFromParam) {
      setActiveHelpTopicByName(helpTopicNameFromParam);
    }
  }, [inContextHelpTopics, setActiveHelpTopicByName]);

  // TODO: handle full width variable. is it fixed? check req doc

  // const fullWidthPanelStyle = fullWidth
  //   ? {
  //       style: {
  //         flex: 1,
  //       },
  //     }
  //   : {};

  // const fullWidthBodyStyle = fullWidth
  //   ? {
  //       style: {
  //         display: activeQuickStartID ? 'none' : 'flex',
  //       },
  //     }
  //   : {};

  const panelContent = <div>I'm the help topics</div>;

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
