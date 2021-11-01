import * as React from 'react';
import { Flex, FlexItem, Title, WizardNavItem } from '@patternfly/react-core';
import CheckCircleIcon from '@patternfly/react-icons/dist/js/icons/check-circle-icon';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/js/icons/exclamation-circle-icon';
import { css } from '@patternfly/react-styles';
import { markdownConvert } from '../ConsoleInternal/components/markdown-view';
import { removeParagraphWrap } from '../QuickStartMarkdownView';
import { QuickStartContext, QuickStartContextValues } from '../utils/quick-start-context';
import { QuickStartTaskStatus } from '../utils/quick-start-types';

import './QuickStartTaskHeader.scss';

type QuickStartTaskHeaderProps = {
  title: string;
  taskIndex: number;
  subtitle?: string;
  taskStatus?: QuickStartTaskStatus;
  size?: 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  isActiveTask?: boolean;
  onTaskSelect: (index: number) => void;
};

const TaskIcon: React.FC<{
  taskIndex: number;
  taskStatus: QuickStartTaskStatus;
}> = ({ taskIndex, taskStatus }) => {
  const { getResource } = React.useContext<QuickStartContextValues>(QuickStartContext);
  const success = taskStatus === QuickStartTaskStatus.SUCCESS;
  const failed = taskStatus === QuickStartTaskStatus.FAILED;

  const classNames = css('pfext-icon-and-text__icon', {
    'pfext-quick-start-task-header__task-icon-init': !failed && !success,
  });
  let content: {};
  if (success) {
    content = (
      <CheckCircleIcon size="md" className="pfext-quick-start-task-header__task-icon-success" />
    );
  } else if (failed) {
    content = (
      <ExclamationCircleIcon
        size="md"
        className="pfext-quick-start-task-header__task-icon-failed"
      />
    );
  } else {
    content = getResource('{{taskIndex, number}}', taskIndex).replace(
      '{{taskIndex, number}}',
      taskIndex,
    );
  }
  return <span className={classNames}>{content}</span>;
};

const QuickStartTaskHeader: React.FC<QuickStartTaskHeaderProps> = ({
  title,
  taskIndex,
  subtitle,
  taskStatus,
  size,
  isActiveTask,
  onTaskSelect,
}) => {
  const classNames = css('pfext-quick-start-task-header__title', {
    'pfext-quick-start-task-header__title-success': taskStatus === QuickStartTaskStatus.SUCCESS,
    'pfext-quick-start-task-header__title-failed':
      taskStatus === (QuickStartTaskStatus.FAILED || QuickStartTaskStatus.VISITED),
  });
  const notCompleted = taskStatus === QuickStartTaskStatus.VISITED;
  const skippedReviewOrFailed =
    taskStatus === QuickStartTaskStatus.REVIEW || taskStatus === QuickStartTaskStatus.FAILED;
  const tryAgain = !isActiveTask && (skippedReviewOrFailed || notCompleted) && (
    <FlexItem>
      <Title headingLevel="h4" className="pfext-quick-start-task-header__tryagain">
        Try the steps again.
      </Title>
    </FlexItem>
  );

  const content = (
    <Flex
      className="pfext-quick-start-task-header"
      direction={{ default: 'column' }}
      spaceItems={{ default: 'spaceItemsXs' }}
    >
      <FlexItem>
        <Title headingLevel="h3" size={size} className={classNames}>
          <TaskIcon taskIndex={taskIndex} taskStatus={taskStatus} />
          <span dangerouslySetInnerHTML={{ __html: removeParagraphWrap(markdownConvert(title)) }} />
          {isActiveTask && subtitle && (
            <>
              {' '}
              <span
                className="pfext-quick-start-task-header__subtitle"
                data-test-id="quick-start-task-subtitle"
              >
                {subtitle}
              </span>
            </>
          )}
        </Title>
      </FlexItem>
      {tryAgain}
    </Flex>
  );

  return (
    <WizardNavItem
      content={content}
      step={taskIndex}
      onNavItemClick={() => onTaskSelect(taskIndex - 1)}
      navItemComponent="button"
      isCurrent={isActiveTask}
    />
  );
};

export default QuickStartTaskHeader;
