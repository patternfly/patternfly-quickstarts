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

type HandleClose = () => void;

type QuickStartPanelContentProps = {
  quickStarts: QuickStart[];
  activeQuickStartID: string;
  handleClose: HandleClose;
  appendTo?: HTMLElement | (() => HTMLElement);
  isResizable?: boolean;
  showClose?: boolean;
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
  ...props
}) => {
  const { getResource } = React.useContext<QuickStartContextValues>(QuickStartContext);
  const [contentRef, setContentRef] = React.useState<HTMLDivElement>();
  const shadows = useScrollShadows(contentRef);
  const quickStart = quickStarts.find((qs) => qs.metadata.name === activeQuickStartID);
  const { activeQuickStartState } = React.useContext<QuickStartContextValues>(QuickStartContext);
  const taskNumber = activeQuickStartState?.taskNumber;
  useScrollTopOnTaskNumberChange(contentRef, taskNumber as number);
  // Filter nextQuickStart property on current quickStart for quickStarts that are currently available
  const nextQuickStarts: QuickStart[] = quickStarts.filter((qs: QuickStart) => {
    return quickStart?.spec.nextQuickStart?.includes(qs.metadata.name);
  });

  const headerClasses = css('pfext-quick-start-panel-content__header', {
    'pfext-quick-start-panel-content__header__shadow':
      shadows === Shadows.top || shadows === Shadows.both,
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
      className="pfext-quick-start-panel-content"
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
              style={{ marginRight: 'var(--pf-global--spacer--md)' }}
            >
              {quickStart?.spec.displayName}{' '}
              <small className="pfext-quick-start-panel-content__duration text-secondary">
                {getResource(
                  '{{duration, number}} minutes',
                  quickStart?.spec.durationMinutes,
                ).replace('{{duration, number}}', quickStart?.spec.durationMinutes)}
              </small>
            </Title>
          </div>
          {showClose && (
            <DrawerActions>
              <DrawerCloseButton onClick={handleClose} data-testid="qs-drawer-close" />
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
