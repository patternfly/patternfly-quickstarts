import * as React from 'react';
import { Button } from '@patternfly/react-core';
import ArrowRightIcon from '@patternfly/react-icons/dist/js/icons/arrow-right-icon';
import QuickStartMarkdownView from '../QuickStartMarkdownView';
import { QuickStartContext, QuickStartContextValues } from '../utils/quick-start-context';
import { QuickStart, QuickStartTask, QuickStartTaskStatus } from '../utils/quick-start-types';
import TaskHeaderList from './QuickStartTaskHeaderList';

type QuickStartConclusionProps = {
  tasks: QuickStartTask[];
  conclusion: string;
  allTaskStatuses: QuickStartTaskStatus[];
  nextQuickStart?: QuickStart;
  onQuickStartChange: (quickStartid: string) => void;
  onTaskSelect: (selectedTaskNumber: number) => void;
};

const QuickStartConclusion: React.FC<QuickStartConclusionProps> = ({
  tasks,
  conclusion,
  allTaskStatuses,
  nextQuickStart,
  onQuickStartChange,
  onTaskSelect,
}) => {
  const hasFailedTask = allTaskStatuses.includes(QuickStartTaskStatus.FAILED);
  const nextQSDisplayName = nextQuickStart?.spec?.displayName;
  const { getResource } = React.useContext<QuickStartContextValues>(QuickStartContext);
  return (
    <>
      <TaskHeaderList tasks={tasks} allTaskStatuses={allTaskStatuses} onTaskSelect={onTaskSelect} />
      <QuickStartMarkdownView
        content={
          hasFailedTask
            ? getResource(
                'One or more verifications did not pass during this quick start. Revisit the tasks or the help links, and then try again.',
              )
            : conclusion
        }
      />
      {nextQuickStart && !hasFailedTask && (
        <Button
          variant="link"
          onClick={() => onQuickStartChange(nextQuickStart.metadata.name)}
          isInline
        >
          {getResource('Start {{nextQSDisplayName}} quick start').replace(
            '{{nextQSDisplayName}}',
            nextQSDisplayName,
          )}{' '}
          <ArrowRightIcon
            style={{ marginLeft: 'var(--pf-global--spacer--xs)', verticalAlign: 'middle' }}
          />
        </Button>
      )}
    </>
  );
};
export default QuickStartConclusion;
