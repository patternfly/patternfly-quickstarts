import * as React from 'react';
import {
  DrawerActions,
  DrawerCloseButton,
  DrawerHead,
  DrawerPanelBody,
  DrawerPanelContent,
  Title,
} from '@patternfly/react-core';
import * as ReactDOM from 'react-dom';
import QuickStartController from './QuickStartController';
import { QuickStartContext, QuickStartContextValues } from './utils/quick-start-context';
import { QuickStart } from './utils/quick-start-types';
import { camelize } from './utils/quick-start-utils';

import './QuickStartPanelContent.scss';

type HandleClose = () => void;

interface QuickStartPanelContentProps {
  quickStarts: QuickStart[];
  activeQuickStartID: string;
  handleClose: HandleClose;
  appendTo?: HTMLElement | (() => HTMLElement);
  isResizable?: boolean;
  showClose?: boolean;
  footerClass?: string;
}

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
  footerClass,
  ...props
}) => {
  const titleRef = React.useRef(null);
  const { getResource, activeQuickStartState, focusOnQuickStart } =
    React.useContext<QuickStartContextValues>(QuickStartContext);
  const [contentRef, setContentRef] = React.useState<HTMLDivElement>();
  const quickStart = quickStarts.find((qs) => qs.metadata.name === activeQuickStartID);
  const taskNumber = activeQuickStartState?.taskNumber;
  useScrollTopOnTaskNumberChange(contentRef, taskNumber as number);
  const nextQuickStarts: QuickStart[] = quickStarts.filter((qs: QuickStart) =>
    quickStart?.spec.nextQuickStart?.includes(qs.metadata.name),
  );

  const getStep = () => {
    const tasks = quickStart.spec.tasks.length;
    if (Number.parseInt(taskNumber as string) === -1) {
      return 'intro';
    }
    if (Number.parseInt(taskNumber as string) === tasks) {
      return 'conclusion';
    }
    return Number.parseInt(taskNumber as string) + 1;
  };

  React.useEffect(() => {
    if (focusOnQuickStart && quickStart) {
      titleRef.current.focus();
    }
  }, [focusOnQuickStart, quickStart]);

  const content = quickStart ? (
    <DrawerPanelContent
      isResizable={isResizable}
      data-testid={`qs-drawer-${camelize(quickStart.spec.displayName)}`}
      data-qs={`qs-step-${getStep()}`}
      data-test="quickstart drawer"
      style={{ '--pf-v6-c-drawer__panel--PaddingBlockStart': '0' } as React.CSSProperties}
      {...props}
    >
      <div className="pfext-quick-start-panel-content">
        <DrawerHead>
          <div tabIndex={-1} ref={titleRef}>
            <Title
              headingLevel="h2"
              size="xl"
              style={{ marginRight: 'var(--pf-t--global--spacer--md)' }}
            >
              <span>{quickStart?.spec.displayName}</span>{' '}
            </Title>
            <span>
              {quickStart?.spec.durationMinutes
                ? getResource(
                    '{{type}} • {{duration, number}} minutes',
                    quickStart?.spec.durationMinutes,
                  )
                    .replace('{{duration, number}}', quickStart?.spec.durationMinutes)
                    .replace('{{type}}', getResource('Type'))
                : getResource('Type')}
            </span>
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
      <DrawerPanelBody className="pfext-quick-start-panel-content__body" data-test="content">
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
