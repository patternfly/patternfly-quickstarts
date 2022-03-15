import './QuickStartPanelContent.scss';
import * as React from 'react';
import {
  DrawerActions,
  DrawerCloseButton,
  DrawerHead,
  DrawerPanelBody,
  DrawerPanelContent,
  Title,
} from '@patternfly/react-core';
// import BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';
import { css } from '@patternfly/react-styles';
import * as ReactDOM from 'react-dom';
import { Shadows, useScrollShadows } from '@console/shared';
import QuickStartController from './QuickStartController';
import { QuickStartContext, QuickStartContextValues } from './utils/quick-start-context';
import { QuickStart } from './utils/quick-start-types';
import { camelize } from './utils/quick-start-utils';
// import QuickStartMarkdownView from './QuickStartMarkdownView';

type HandleClose = () => void;

type QuickStartPanelContentProps = {
  quickStarts: QuickStart[];
  activeQuickStartID: string;
  handleClose: HandleClose;
  appendTo?: HTMLElement | (() => HTMLElement);
  isResizable?: boolean;
  showClose?: boolean;
  headerVariant?: '' | 'blue-white';
};

const getElement = (appendTo: HTMLElement | (() => HTMLElement)) => {
  if (typeof appendTo === 'function') {
    return appendTo();
  }
  return appendTo;
};

const useScrollTopOnTaskNumberChange = (node: HTMLElement, taskNumber: number): void => {
  React.useEffect(() => {
    if (node) {
      node.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [taskNumber, node]);
};

const QuickStartPanelContent: React.FC<QuickStartPanelContentProps> = ({
  quickStarts = [],
  handleClose,
  activeQuickStartID,
  appendTo,
  isResizable = true,
  showClose = true,
  headerVariant = '',
  ...props
}) => {
  const { getResource } = React.useContext<QuickStartContextValues>(QuickStartContext);
  const [contentRef, setContentRef] = React.useState<HTMLDivElement>();
  const shadows = useScrollShadows(contentRef);
  const quickStart = quickStarts.find((qs) => qs.metadata.name === activeQuickStartID);
  const { activeQuickStartState } = React.useContext<QuickStartContextValues>(QuickStartContext);
  const taskNumber = activeQuickStartState?.taskNumber;
  useScrollTopOnTaskNumberChange(contentRef, taskNumber as number);
  const nextQuickStarts: QuickStart[] = quickStarts.filter((qs: QuickStart) =>
    quickStart?.spec.nextQuickStart?.includes(qs.metadata.name),
  );

  const headerClasses = css('pfext-quick-start-panel-content__header', {
    'pfext-quick-start-panel-content__header__shadow':
      shadows === Shadows.top || shadows === Shadows.both,
    'pfext-quick-start-panel-content__header--blue-white': headerVariant === 'blue-white',
  });

  const footerClass = css({
    'pfext-quick-start-panel-content__footer__shadow':
      shadows === Shadows.bottom || shadows === Shadows.both,
  });

  const getStep = () => {
    const tasks = quickStart.spec.tasks.length;
    if (Number.parseInt(taskNumber as string, 10) === -1) {
      return 'intro';
    }
    if (Number.parseInt(taskNumber as string, 10) === tasks) {
      return 'conclusion';
    }
    return Number.parseInt(taskNumber as string, 10) + 1;
  };

  const content = quickStart ? (
    <DrawerPanelContent
      isResizable={isResizable}
      className="pfext-quick-start__base"
      data-testid={`qs-drawer-${camelize(quickStart.spec.displayName)}`}
      data-qs={`qs-step-${getStep()}`}
      data-test="quickstart drawer"
      {...props}
    >
      <div className={headerClasses}>
        <DrawerHead>
          <div className="pfext-quick-start-panel-content__title">
            <Title
              headingLevel="h1"
              size="xl"
              className="pfext-quick-start-panel-content__name"
              style={{ marginRight: 'var(--pf-global--spacer--md)' }}
            >
              {quickStart?.spec.displayName}{' '}
              <small className="pfext-quick-start-panel-content__duration">
                {quickStart?.spec.durationMinutes
                  ? getResource(
                      '{{type}} • {{duration, number}} minutes',
                      quickStart?.spec.durationMinutes,
                    )
                      .replace('{{duration, number}}', quickStart?.spec.durationMinutes)
                      .replace('{{type}}', getResource('Type'))
                  : getResource('Type')}
              </small>
            </Title>
          </div>
          {showClose && (
            <DrawerActions>
              <DrawerCloseButton
                onClick={handleClose}
                className="pfext-quick-start-panel-content__close-button"
                data-testid="qs-drawer-close"
              />
            </DrawerActions>
          )}
        </DrawerHead>
      </div>
      <DrawerPanelBody
        hasNoPadding
        className="pfext-quick-start-panel-content__body"
        data-test="content"
      >
        <QuickStartController
          quickStart={quickStart}
          nextQuickStarts={nextQuickStarts}
          footerClass={footerClass}
          contentRef={setContentRef}
        />
      </DrawerPanelBody>
    </DrawerPanelContent>
  ) : null;

  // const [isHelpTopicMenuOpen, setIsHelpTopicMenuOpen] = React.useState(false);

  // const toggleHelpTopicMenu = () => {
  //   setIsHelpTopicMenuOpen(!isHelpTopicMenuOpen);
  // };

  // const onSelectHelpTopic = (event) => {
  //   const topicName = event.currentTarget.id;
  //   setActiveHelpTopicByName(topicName);
  //   toggleHelpTopicMenu();
  // };

  // const menuItems = filteredHelpTopics.map((topic) => {
  //   return (
  //     <OptionsMenuItem key={topic.name} onSelect={onSelectHelpTopic} id={topic.name}>
  //       {topic.title}
  //     </OptionsMenuItem>
  //   );
  // });

  // const helpTopicContent = (
  //   <DrawerPanelContent isResizable={isResizable} className="pfext-quick-start__base" {...props}>
  //     <div>
  //       <DrawerHead>
  //         <div className="pfext-quick-start-panel-content__title">
  //           <OptionsMenu
  //             id={'helptopics'}
  //             isPlain
  //             isOpen={isHelpTopicMenuOpen}
  //             toggle={
  //               <OptionsMenuToggle onToggle={toggleHelpTopicMenu} toggleTemplate={<BarsIcon />} />
  //             }
  //             menuItems={menuItems}
  //           />

  //           <Title
  //             headingLevel="h1"
  //             size="xl"
  //             className="pfext-quick-start-panel-content__name"
  //             style={{ marginRight: 'var(--pf-global--spacer--md)' }}
  //           >
  //             {activeHelpTopic?.title}
  //           </Title>
  //         </div>
  //         {showClose && (
  //           <DrawerActions>
  //             <DrawerCloseButton
  //               onClick={handleClose}
  //               className="pfext-quick-start-panel-content__close-button"
  //               data-testid="qs-drawer-close"
  //             />
  //           </DrawerActions>
  //         )}
  //       </DrawerHead>
  //       <Divider />
  //       <DrawerPanelBody
  //         hasNoPadding
  //         className="pfext-quick-start-panel-content__body"
  //         data-test="content"
  //       >
  //         <Stack hasGutter>
  //           <StackItem style={{ padding: '20px' }}>
  //             <QuickStartMarkdownView content={activeHelpTopic?.content} />
  //           </StackItem>
  //           <Divider />
  //           <StackItem style={{ padding: '20px' }}>
  //             {activeHelpTopic?.links.map((link) => {
  //               return <QuickStartMarkdownView key={link} content={link} />;
  //             })}
  //           </StackItem>
  //         </Stack>
  //       </DrawerPanelBody>
  //     </div>
  //   </DrawerPanelContent>
  // );

  if (appendTo) {
    return ReactDOM.createPortal(content, getElement(appendTo));
  }
  return content;
};

export default QuickStartPanelContent;
