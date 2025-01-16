import * as React from 'react';
import { Title, WizardNavItem } from '@patternfly/react-core';
import { QuickStartContext } from '../utils/quick-start-context';
import { QuickStartTaskStatus } from '../utils/quick-start-types';

import './QuickStartTaskHeader.scss';

interface QuickStartTaskHeaderProps {
  title: string;
  taskIndex: number;
  subtitle?: string;
  taskStatus?: QuickStartTaskStatus;
  size?: 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  isActiveTask?: boolean;
  onTaskSelect: (index: number) => void;
  children?: React.ReactNode;
}

const QuickStartTaskHeader: React.FC<QuickStartTaskHeaderProps> = ({
  title,
  taskIndex,
  subtitle,
  taskStatus,
  size,
  isActiveTask,
  onTaskSelect,
  children,
}) => {
  const titleRef = React.useRef(null);
  const { focusOnQuickStart } = React.useContext(QuickStartContext);

  React.useEffect(() => {
    if (focusOnQuickStart && isActiveTask) {
      // Focus the WizardNavItem button element that contains the title
      titleRef.current.parentNode.focus();
    }
  }, [focusOnQuickStart, isActiveTask]);
  const failedReview = taskStatus === QuickStartTaskStatus.FAILED;

  const tryAgain = failedReview && (
    <>
      <div />
      <div className="pfext-quick-start-task-header__tryagain">Try the steps again.</div>
    </>
  );

  const content = (
    <div ref={titleRef}>
      <Title headingLevel="h3" size={size}>
        <span className="pfext-quick-start-task-header__title">{title}</span>
        {isActiveTask && subtitle && (
          <span>
            {' '}
            <span
              data-test-id="quick-start-task-subtitle"
              className="pfext-quick-start-task-header__subtitle"
            >
              {subtitle}
            </span>
          </span>
        )}
        {tryAgain}
      </Title>
    </div>
  );

  let status: 'default' | 'error' | 'success' = 'default';
  if (taskStatus === QuickStartTaskStatus.FAILED) {
    status = 'error';
  } else if (taskStatus === QuickStartTaskStatus.SUCCESS) {
    status = 'success';
  }

  return (
    <WizardNavItem
      content={content}
      stepIndex={taskIndex}
      onClick={() => onTaskSelect(taskIndex - 1)}
      component="button"
      isCurrent={isActiveTask}
      status={status}
      className="pfext-quick-start-task-header"
    >
      {children}
    </WizardNavItem>
  );
};

export default QuickStartTaskHeader;
