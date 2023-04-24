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
import { css } from '@patternfly/react-styles';
import * as ReactDOM from 'react-dom';
import { Shadows, useScrollShadows } from '@console/shared';
import QuickStartController from './QuickStartController';
import { QuickStartContext, QuickStartContextValues } from './utils/quick-start-context';
import { QuickStart } from './utils/quick-start-types';
import { camelize } from './utils/quick-start-utils';
import { removeParagraphWrap } from './QuickStartMarkdownView';
import { markdownConvert } from './ConsoleInternal/components/markdown-view';

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
  const titleRef = React.useRef(null);
  const { getResource, activeQuickStartState } = React.useContext<QuickStartContextValues>(
    QuickStartContext,
  );
  const [contentRef, setContentRef] = React.useState<HTMLDivElement>();
  const shadows = useScrollShadows(contentRef);
  const quickStart = quickStarts.find((qs) => qs.metadata.name === activeQuickStartID);
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

  React.useEffect(() => {
    if (quickStart) {
      titleRef.current.focus();
    }
  }, [quickStart]);

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
          <div className="pfext-quick-start-panel-content__title" tabIndex={-1} ref={titleRef}>
            <Title
              headingLevel="h2"
              size="xl"
              className="pfext-quick-start-panel-content__name"
              style={{ marginRight: 'var(--pf-global--spacer--md)' }}
            >
              <span
                dangerouslySetInnerHTML={{
                  __html: removeParagraphWrap(markdownConvert(quickStart?.spec.displayName)),
                }}
              />{' '}
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

  if (appendTo) {
    return ReactDOM.createPortal(content, getElement(appendTo));
  }
  return content;
};

export default QuickStartPanelContent;
