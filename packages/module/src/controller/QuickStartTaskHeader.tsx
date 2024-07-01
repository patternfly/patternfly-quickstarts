import * as React from 'react';
import {Text, TextVariants, Title, WizardNavItem } from '@patternfly/react-core';
// import CheckCircleIcon from '@patternfly/react-icons/dist/js/icons/check-circle-icon';
// import ExclamationCircleIcon from '@patternfly/react-icons/dist/js/icons/exclamation-circle-icon';
// import { css } from '@patternfly/react-styles';
import { markdownConvert } from '../ConsoleInternal/components/markdown-view';
import { removeParagraphWrap } from '../QuickStartMarkdownView';
import { QuickStartContext} from '../utils/quick-start-context';
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

// const TaskIcon: React.FC<{
//   taskIndex: number;
//   taskStatus: QuickStartTaskStatus;
// }> = ({ taskIndex, taskStatus }) => {
//   const { getResource } = React.useContext<QuickStartContextValues>(QuickStartContext);
//   const success = taskStatus === QuickStartTaskStatus.SUCCESS;
//   const failed = taskStatus === QuickStartTaskStatus.FAILED;

//   const classNames = css('pfext-icon-and-text__icon', {
//     'pfext-quick-start-task-header__task-icon-init': !failed && !success,
//   });
//   let content: React.ReactNode;

//   if (success) {
//     content = (
//       <Icon size="md">
//         <CheckCircleIcon className="pfext-quick-start-task-header__task-icon-success" />{' '}
//       </Icon>
//     );
//   } else if (failed) {
//     content = (
//       <Icon size="md">
//         <ExclamationCircleIcon className="pfext-quick-start-task-header__task-icon-failed" />
//       </Icon>
//     );
//   } else {
//     content = getResource('{{taskIndex, number}}', taskIndex).replace(
//       '{{taskIndex, number}}',
//       taskIndex,
//     );
//   }
//   return <span className={classNames}>{content}</span>;
// };

const QuickStartTaskHeader: React.FC<QuickStartTaskHeaderProps> = ({
  title,
  taskIndex,
  subtitle,
  taskStatus,
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
  // const classNames = css('pfext-quick-start-task-header__title', {
  //   'pfext-quick-start-task-header__title-success': taskStatus === QuickStartTaskStatus.SUCCESS,
  //   'pfext-quick-start-task-header__title-failed':
  //     taskStatus === (QuickStartTaskStatus.FAILED || QuickStartTaskStatus.VISITED),
  // });
  // const notCompleted = taskStatus === QuickStartTaskStatus.VISITED;
  // const skippedReview = taskStatus === QuickStartTaskStatus.REVIEW;
  const failedReview = taskStatus === QuickStartTaskStatus.FAILED;

  // TODO: toned down when this is shown, investigate further when we should display it
  // related: https://github.com/patternfly/patternfly-quickstarts/issues/104
  const tryAgain = failedReview && (
    <>
      <div />
      <div className="pfext-quick-start-task-header__tryagain">Try the steps again.</div>
    </>
  );

  const content = (
    <div ref={titleRef}>
        <Title headingLevel="h3">
          <span dangerouslySetInnerHTML={{ __html: removeParagraphWrap(markdownConvert(title)) }} />
          {isActiveTask && subtitle && (
            <span
              data-test-id="quick-start-task-subtitle"
            >
              {' '}
              <Text component={TextVariants.small}>
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
    >
      {children}
    </WizardNavItem>
  );
};

export default QuickStartTaskHeader;
