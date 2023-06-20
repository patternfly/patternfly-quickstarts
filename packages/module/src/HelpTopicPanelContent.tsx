import * as React from 'react';
import {
  Button,
  Divider,
  DrawerActions,
  DrawerCloseButton,
  DrawerHead,
  DrawerPanelBody,
  DrawerPanelContent,
  MenuToggle,
  Select,
  SelectList,
  SelectOption,
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

interface HelpTopicPanelContentProps {
  activeHelpTopic: HelpTopic;
  filteredHelpTopics?: HelpTopic[];
  isResizable?: boolean;
  onClose: () => void;
}

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

  const onSelectHelpTopic = (
    _event?: React.MouseEvent<Element, MouseEvent>,
    value?: string | number,
  ) => {
    const topicName = value;
    setActiveHelpTopicByName(topicName.toString());
    toggleHelpTopicMenu();
  };

  const helpTopicOptions =
    filteredHelpTopics.length > 1 &&
    filteredHelpTopics.map((topic) => (
      <SelectOption key={topic.name} value={topic.name}>
        {topic.title}
      </SelectOption>
    ));

  const paddingContainer = (children) => <div style={{ padding: '24px' }}>{children}</div>;

  const panelBodyItems = (
    <>
      {paddingContainer(<QuickStartMarkdownView content={activeHelpTopic?.content} />)}
      {!!activeHelpTopic?.links?.length && <Divider />}
      {paddingContainer(
        <Stack hasGutter>
          {activeHelpTopic?.links?.map(({ href, text, newTab, isExternal }, index) => (
            <StackItem key={index}>
              <Button
                component="a"
                href={href}
                target={newTab ? '_blank' : ''}
                rel="noopener noreferrer"
                variant="link"
                aria-label={`Open documentation in new window`}
                isInline
                icon={isExternal ? <ExternalLinkAltIcon /> : null}
                iconPosition="right"
                style={{ fontSize: 'inherit' }}
              >
                {text || href}
              </Button>
            </StackItem>
          ))}
        </Stack>,
      )}
    </>
  );

  const content = (
    <DrawerPanelContent isResizable={isResizable} className="pfext-quick-start__base" {...props}>
      <div>
        <DrawerHead>
          <div className="pfext-quick-start-panel-content__title">
            {helpTopicOptions && (
              <Select
                isPlain
                id="help-topics-select"
                selected={activeHelpTopic}
                isOpen={isHelpTopicMenuOpen}
                onSelect={onSelectHelpTopic}
                onOpenChange={(isOpen: boolean) => setIsHelpTopicMenuOpen(isOpen)}
                toggle={(toggleRef) => (
                  <MenuToggle
                    isFullWidth
                    ref={toggleRef}
                    icon={<BarsIcon />}
                    onClick={toggleHelpTopicMenu}
                    isExpanded={isHelpTopicMenuOpen}
                  >
                    {activeHelpTopic?.title}
                  </MenuToggle>
                )}
              >
                <SelectList>{helpTopicOptions}</SelectList>
              </Select>
            )}

            <Title
              headingLevel="h1"
              size="xl"
              className="pfext-quick-start-panel-content__name"
              style={{ marginRight: 'var(--pf-v5-global--spacer--md)' }}
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
