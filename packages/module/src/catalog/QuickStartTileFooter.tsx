import * as React from 'react';
import { Button, Flex, FlexItem } from '@patternfly/react-core';
import { QuickStartContext, QuickStartContextValues } from '../utils/quick-start-context';
import { QuickStartStatus } from '../utils/quick-start-types';

interface QuickStartTileFooterProps {
  quickStartId: string;
  status: string;
  totalTasks?: number;
}

const QuickStartTileFooter: React.FC<QuickStartTileFooterProps> = ({
  quickStartId,
  status,
  totalTasks,
}) => {
  const { getResource } = React.useContext<QuickStartContextValues>(QuickStartContext);
  const { activeQuickStartID, startQuickStart, restartQuickStart } = React.useContext<
    QuickStartContextValues
  >(QuickStartContext);

  const start = React.useCallback(
    (e: React.SyntheticEvent) => {
      e.preventDefault();
      e.stopPropagation();
      startQuickStart(quickStartId, totalTasks);
    },
    [quickStartId, startQuickStart, totalTasks],
  );

  const restart = React.useCallback(
    (e: React.SyntheticEvent) => {
      e.preventDefault();
      e.stopPropagation();
      restartQuickStart(quickStartId, totalTasks);
    },
    [quickStartId, restartQuickStart, totalTasks],
  );

  return (
    <Flex justifyContent={{ default: 'justifyContentSpaceBetween' }}>
      {status === QuickStartStatus.NOT_STARTED && (
        <FlexItem>
          <Button
            onClick={start}
            variant="link"
            isInline
            data-testid="qs-card-notStarted-start"
            id={`${quickStartId}-start`}
            aria-labelledby={`${quickStartId}-start ${quickStartId}`}
          >
            {getResource('Start')}
          </Button>
        </FlexItem>
      )}
      {status === QuickStartStatus.IN_PROGRESS && activeQuickStartID !== quickStartId && (
        <FlexItem>
          <Button
            variant="link"
            isInline
            data-testid="qs-card-inProgress-resume"
            id={`${quickStartId}-continue`}
            aria-labelledby={`${quickStartId}-continue ${quickStartId}`}
          >
            {getResource('Continue')}
          </Button>
        </FlexItem>
      )}
      {status === QuickStartStatus.COMPLETE && (
        <FlexItem>
          <Button
            onClick={restart}
            variant="link"
            isInline
            data-testid="qs-card-complete-restart"
            id={`${quickStartId}-restart`}
            aria-labelledby={`${quickStartId}-restart ${quickStartId}`}
          >
            {getResource('Restart')}
          </Button>
        </FlexItem>
      )}
      {status === QuickStartStatus.IN_PROGRESS && (
        <FlexItem>
          <Button
            onClick={restart}
            variant="link"
            isInline
            data-testid="qs-card-inProgress-restart"
            id={`${quickStartId}-restart`}
            aria-labelledby={`${quickStartId}-restart ${quickStartId}`}
          >
            {getResource('Restart')}
          </Button>
        </FlexItem>
      )}
    </Flex>
  );
};

export default QuickStartTileFooter;
