import * as React from 'react';
import {
  Button,
  Divider,
  DrawerActions,
  DrawerCloseButton,
  DrawerHead,
  DrawerPanelBody,
  DrawerPanelContent,
  OptionsMenu,
  OptionsMenuItem,
  OptionsMenuToggle,
  Stack,
  StackItem,
  Title,
} from '@patternfly/react-core';

import QuickStartMarkdownView from './QuickStartMarkdownView';
import { HelpTopic } from './utils/help-topic-types';
import BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';
import ExternalLinkAltIcon from '@patternfly/react-icons/dist/js/icons/external-link-alt-icon';

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

  const menuItems =
    filteredHelpTopics.length > 0 &&
    filteredHelpTopics.map((topic) => {
      return (
        <OptionsMenuItem key={topic.name} onSelect={onSelectHelpTopic} id={topic.name}>
          {topic.title}
        </OptionsMenuItem>
      );
    });

  const paddingContainer = (children) => <div style={{ padding: '24px' }}>{children}</div>;

  const HelpTopicLink: React.FC<{ href: string; text?: string; newTab?: boolean }> = ({
    href,
    text = '',
    newTab = false,
  }) => {
    const isExternalLink = (url) => {
      const tmp = document.createElement('a');
      tmp.href = url;
      return tmp.host !== window.location.host;
    };

    const isExternal = isExternalLink(href);

    const onClick = (e) => {
      if (!isExternal && !newTab) {
        e.preventDefault();
        window.history.pushState({}, '', href);
      }
    };

    return (
      <Button
        component="a"
        href={href}
        target={isExternal || newTab ? '_blank' : ''}
        rel="noopener noreferrer"
        variant="link"
        isInline
        icon={isExternal && <ExternalLinkAltIcon />}
        iconPosition="right"
        style={{ fontSize: 'inherit' }}
        onClick={onClick}
      >
        {text || href}
      </Button>
    );
  };

  const linkSection = activeHelpTopic?.links && (
    <>
      <Divider />
      {paddingContainer(
        <Stack hasGutter>
          {activeHelpTopic.links.map(({ href, text, newTab }, index) => {
            return (
              <StackItem key={index}>
                <HelpTopicLink href={href} text={text} newTab={newTab} />
              </StackItem>
            );
          })}
        </Stack>,
      )}
    </>
  );

  const panelBodyItems = (
    <>
      {paddingContainer(<QuickStartMarkdownView content={activeHelpTopic?.content} />)}
      {linkSection}
    </>
  );

  const content = (
    <DrawerPanelContent isResizable={isResizable} className="pfext-quick-start__base" {...props}>
      <div>
        <DrawerHead>
          <div className="pfext-quick-start-panel-content__title">
            {menuItems && (
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
            )}

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
