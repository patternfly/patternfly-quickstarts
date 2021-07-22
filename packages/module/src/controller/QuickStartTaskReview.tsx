import * as React from 'react';
import { Alert, Radio } from '@patternfly/react-core';
import { css } from '@patternfly/react-styles';
import QuickStartMarkdownView from '../QuickStartMarkdownView';
import { QuickStartContext, QuickStartContextValues } from '../utils/quick-start-context';
import {
  QuickStartTaskReview as QuickStartTaskReviewType,
  QuickStartTaskStatus,
} from '../utils/quick-start-types';

import './QuickStartTaskReview.scss';

type QuickStartTaskReviewProps = {
  review: QuickStartTaskReviewType;
  taskStatus: QuickStartTaskStatus;
  onTaskReview: (status: QuickStartTaskStatus) => void;
};

const getAlertVariant = (status) => {
  switch (status) {
    case QuickStartTaskStatus.SUCCESS:
      return 'success';
    case QuickStartTaskStatus.FAILED:
      return 'danger';
    default:
      return 'info';
  }
};

const QuickStartTaskReview: React.FC<QuickStartTaskReviewProps> = ({
  review,
  taskStatus,
  onTaskReview,
}) => {
  const { instructions, failedTaskHelp: taskHelp } = review;
  const { getResource } = React.useContext<QuickStartContextValues>(QuickStartContext);

  const alertClassNames = css('pfe-quick-start-task-review', {
    'pfe-quick-start-task-review--success': taskStatus === QuickStartTaskStatus.SUCCESS,
    'pfe-quick-start-task-review--failed': taskStatus === QuickStartTaskStatus.FAILED,
  });

  const title = <span className={alertClassNames}>{getResource('Check your work')}</span>;

  return (
    <Alert variant={getAlertVariant(taskStatus)} title={title} isInline>
      <QuickStartMarkdownView content={instructions} />
      <span className="pfe-quick-start-task-review__actions">
        <Radio
          id="review-success"
          name="review-success"
          data-testid="qs-drawer-check-yes"
          label={getResource('Yes')}
          className="pfe-quick-start-task-review__radio"
          isChecked={taskStatus === QuickStartTaskStatus.SUCCESS}
          onChange={() => onTaskReview(QuickStartTaskStatus.SUCCESS)}
        />
        <Radio
          id="review-failed"
          name="review-failed"
          data-testid="qs-drawer-check-no"
          label={getResource('No')}
          className="pfe-quick-start-task-review__radio"
          isChecked={taskStatus === QuickStartTaskStatus.FAILED}
          onChange={() => onTaskReview(QuickStartTaskStatus.FAILED)}
        />
      </span>
      {taskStatus === QuickStartTaskStatus.FAILED && taskHelp && (
        <QuickStartMarkdownView content={taskHelp} exactHeight />
      )}
    </Alert>
  );
};

export default QuickStartTaskReview;
