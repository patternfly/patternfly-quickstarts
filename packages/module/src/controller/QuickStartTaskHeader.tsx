import * as React from 'react';
import { Text, Title, WizardNavItem } from '@patternfly/react-core';
import { css } from '@patternfly/react-styles';
import { markdownConvert } from '../ConsoleInternal/components/markdown-view';
import { removeParagraphWrap } from '../QuickStartMarkdownView';
import { QuickStartContext, QuickStartContextValues } from '../utils/quick-start-context';
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
  const classNames = css(
    taskStatus === QuickStartTaskStatus.SUCCESS &&
      ('pfext-quick-start-task-header__title-success' as any),
    taskStatus === (QuickStartTaskStatus.FAILED || QuickStartTaskStatus.VISITED) &&
      ('pfext-quick-start-task-header__title-failed' as any),
  );
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
        <span dangerouslySetInnerHTML={{ __html: removeParagraphWrap(markdownConvert(title)) }} />
        {isActiveTask && subtitle && (
          <span data-test-id="quick-start-task-subtitle">
            {' '}
            <Text
              style={{
                color: 'var(--pf-t--global--text--color--subtle)',
                fontSize: 'var(--pf-t--global--font--size--body--default)',
              }}
            >
              {subtitle}
            </Text>
          </span>
        )}
        {tryAgain}
      </Title>
    </div>
  );

  return (
    <WizardNavItem
      content={content}
      stepIndex={taskIndex}
      onClick={() => onTaskSelect(taskIndex - 1)}
      component="button"
      isCurrent={isActiveTask}
      className={classNames}
    >
      {children}
    </WizardNavItem>
  );
};

export default QuickStartTaskHeader;
