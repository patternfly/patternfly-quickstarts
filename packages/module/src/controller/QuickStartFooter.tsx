import * as React from 'react';
import { Button } from '@patternfly/react-core';
import { QuickStartContext, QuickStartContextValues } from '../utils/quick-start-context';
import { QuickStartStatus } from '../utils/quick-start-types';
import { camelize } from '../utils/quick-start-utils';
import { ActionList, ActionListItem, ActionListGroup } from '@patternfly/react-core';

export interface QuickStartFooterProps {
  status: QuickStartStatus;
  taskNumber: number;
  totalTasks: number;
  onNext: () => void;
  onBack: () => void;
  quickStartId: string;
  className?: string;
}

const QuickStartFooter: React.FC<QuickStartFooterProps> = ({
  status,
  taskNumber,
  totalTasks,
  onNext,
  onBack,
  quickStartId,
  className
}) => {
  const { restartQuickStart, getResource } =
    React.useContext<QuickStartContextValues>(QuickStartContext);

  const PrimaryButtonText = React.useMemo(
    () => ({
      START: getResource('Start'),
      CONTINUE: getResource('Continue'),
      NEXT: getResource('Next'),
      CLOSE: getResource('Close'),
    }),
    [getResource],
  );

  const SecondaryButtonText = React.useMemo(
    () => ({
      BACK: getResource('Back'),
      RESTART: getResource('Restart'),
    }),
    [getResource],
  );

  const onRestart = React.useCallback(
    (e: React.SyntheticEvent) => {
      e.preventDefault();
      e.stopPropagation();
      restartQuickStart(quickStartId, totalTasks);
    },
    [quickStartId, restartQuickStart, totalTasks],
  );

  const getPrimaryButtonText = React.useMemo(() => {
    if (status === QuickStartStatus.NOT_STARTED) {
      return PrimaryButtonText.START;
    }

    if (taskNumber === totalTasks) {
      return PrimaryButtonText.CLOSE;
    }

    if (taskNumber > -1 && taskNumber < totalTasks) {
      return PrimaryButtonText.NEXT;
    }

    return PrimaryButtonText.CONTINUE;
  }, [taskNumber, totalTasks, PrimaryButtonText, status]);

  const getPrimaryButton = React.useMemo(
    () => (
      <Button
        variant="primary"
        onClick={onNext}
        data-testid={`qs-drawer-${camelize(getPrimaryButtonText)}`}
        data-test={`${getPrimaryButtonText} button`}
      >
        {getPrimaryButtonText}
      </Button>
    ),
    [getPrimaryButtonText, onNext],
  );

  const getSecondaryButton = React.useMemo(
    () =>
      taskNumber === -1 && status !== QuickStartStatus.NOT_STARTED ? (
        <Button variant="secondary" onClick={onRestart} data-testid="qs-drawer-restart">
          {SecondaryButtonText.RESTART}
        </Button>
      ) : (
        taskNumber > -1 && (
          <Button variant="secondary" onClick={onBack} data-testid="qs-drawer-back">
            {SecondaryButtonText.BACK}
          </Button>
        )
      ),
    [onRestart, onBack, SecondaryButtonText, status, taskNumber],
  );

  const getSideNoteAction = React.useMemo(
    () =>
      taskNumber !== -1 && (
        <Button
          variant="link"
          onClick={onRestart}
          data-testid="qs-drawer-side-note-action"
        >
          {SecondaryButtonText.RESTART}
        </Button>
      ),
    [taskNumber, onRestart, SecondaryButtonText.RESTART],
  );

  return (
    <div className={className}>
      <ActionList>
        <ActionListGroup>
          <ActionListItem>{getPrimaryButton}</ActionListItem>
          <ActionListItem>{getSecondaryButton}</ActionListItem>
        </ActionListGroup>
        <ActionListGroup>
          <ActionListItem>{getSideNoteAction}</ActionListItem>
        </ActionListGroup>
      </ActionList>
    </div>
  );
};

export default QuickStartFooter;
