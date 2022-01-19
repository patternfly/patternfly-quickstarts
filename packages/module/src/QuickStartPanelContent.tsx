import './QuickStartPanelContent.scss';
import * as React from 'react';
import {
  Divider,
  DrawerActions,
  DrawerCloseButton,
  DrawerHead,
  DrawerPanelBody,
  DrawerPanelContent,
  Stack,
  StackItem,
  Text,
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

  const simpleContent = (
    <DrawerPanelContent
      isResizable={isResizable}
      className="pfext-quick-start__base"
      data-test="quickstart drawer"
      {...props}
    >
      <div>
        <Title headingLevel="h3" style={{ padding: '30px' }}>
          Connect to Github
        </Title>
        <Divider />
        <Text style={{ padding: '20px' }}>
          Deploy your source code from a Github repository. Fusce gravida diam vitae ex condimentum
          placerat id in quam. In consectetur maximus justo, ut aliquam ex ullamcorper quis. Etiam
          lobortis viverra ex nec pharetra. Mauris quis blandit mi. In sed augue at augue commodo
          hendrerit vel ac turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; In luctus erat at urna consectetur molestie. Fusce hendrerit odio
          et scelerisque congue. Nullam eget lectus id velit eleifend faucibus sed laoreet ipsum.
          Etiam consectetur volutpat maxi
        </Text>
        <Divider />
        <Text style={{ padding: '20px' }}>
          <Stack>
            <StackItem>
              <a>Learn More</a>
            </StackItem>
            <StackItem>
              <a>Code based service</a>
            </StackItem>
            <StackItem>
              <a>Creating an app runner service</a>
            </StackItem>
            <StackItem>
              <a>Other link</a>
            </StackItem>
          </Stack>
        </Text>
      </div>
    </DrawerPanelContent>
  );

  const showSimpleContent = true;

  const content =
    quickStart && !showSimpleContent ? (
      <DrawerPanelContent
        isResizable={isResizable}
        className="pfext-quick-start__base"
        data-testid={`qs-drawer-${camelize(quickStart?.spec.displayName)}`}
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
                  {getResource(
                    'Quick start • {{duration, number}} minutes',
                    quickStart?.spec.durationMinutes,
                  ).replace('{{duration, number}}', quickStart?.spec.durationMinutes)}
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
    ) : (
      simpleContent
    );

  if (appendTo) {
    return ReactDOM.createPortal(content, getElement(appendTo));
  }
  return content;
};

export default QuickStartPanelContent;
