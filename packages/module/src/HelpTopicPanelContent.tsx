import * as React from 'react';
import {
  Divider,
  DrawerActions,
  DrawerCloseButton,
  // DrawerActions,
  // DrawerCloseButton,
  DrawerHead,
  DrawerPanelBody,
  DrawerPanelContent,
  OptionsMenu,
  OptionsMenuItem,
  OptionsMenuToggle,
  Title,
} from '@patternfly/react-core';
// import { css } from '@patternfly/react-styles';
import QuickStartMarkdownView from './QuickStartMarkdownView';
import { HelpTopic } from './utils/help-topic-types';
import BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';

import './QuickStartPanelContent.scss';
import { HelpTopicContext, HelpTopicContextValues } from './utils/help-topic-context';

type HelpTopicPanelContentProps = {
  activeHelpTopic: HelpTopic;
  filteredHelpTopics?: HelpTopic[];
  isResizable?: boolean;
  onClose: () => void;
};

const HelpTopicPanelContent: React.FC<HelpTopicPanelContentProps> = ({
  activeHelpTopic = null,
  filteredHelpTopics = [],
  isResizable = true,
  onClose,
  ...props
}) => {
  const { setActiveHelpTopicByName } = React.useContext<HelpTopicContextValues>(HelpTopicContext);

  const [isHelpTopicMenuOpen, setIsHelpTopicMenuOpen] = React.useState(false);

  const toggleHelpTopicMenu = () => {
    setIsHelpTopicMenuOpen(!isHelpTopicMenuOpen);
  };

  const onSelectHelpTopic = (event) => {
    const topicName = event.currentTarget.id;
    setActiveHelpTopicByName(topicName);
    toggleHelpTopicMenu();
  };

  const menuItems = filteredHelpTopics.map((topic) => {
    return (
      <OptionsMenuItem key={topic.name} onSelect={onSelectHelpTopic} id={topic.name}>
        {topic.title}
      </OptionsMenuItem>
    );
  });

  const paddingContainer = (children) => <div style={{ padding: '24px' }}>{children}</div>;

  const panelBodyItems = (
    <>
      {paddingContainer(<QuickStartMarkdownView content={activeHelpTopic?.content} />)}
      <Divider />
      {paddingContainer(
        activeHelpTopic?.links.map((link) => {
          return <QuickStartMarkdownView key={link} content={link} />;
        }),
      )}
    </>
  );

  const content = (
    <DrawerPanelContent isResizable={isResizable} className="pfext-quick-start__base" {...props}>
      <div>
        <DrawerHead>
          <div className="pfext-quick-start-panel-content__title">
            <OptionsMenu
              id={'helptopics'}
              isPlain
              isOpen={isHelpTopicMenuOpen}
              toggle={
                <OptionsMenuToggle
                  style={{ paddingLeft: '0px' }}
                  onToggle={toggleHelpTopicMenu}
                  toggleTemplate={<BarsIcon />}
                />
              }
              menuItems={menuItems}
            />

            <Title
              headingLevel="h1"
              size="xl"
              className="pfext-quick-start-panel-content__name"
              style={{ marginRight: 'var(--pf-global--spacer--md)' }}
            >
              {activeHelpTopic?.title}
            </Title>
          </div>
          {
            <DrawerActions>
              <DrawerCloseButton
                onClick={onClose}
                className="pfext-quick-start-panel-content__close-button"
                data-testid="qs-drawer-close"
              />
            </DrawerActions>
          }
        </DrawerHead>
        <Divider />
        <DrawerPanelBody
          hasNoPadding
          className="pfext-quick-start-panel-content__body"
          data-test="content"
        >
          {panelBodyItems}
        </DrawerPanelBody>
      </div>
    </DrawerPanelContent>
  );

  return content;
};

export default HelpTopicPanelContent;
