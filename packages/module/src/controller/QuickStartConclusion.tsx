import * as React from 'react';
import { Button } from '@patternfly/react-core';
import ArrowRightIcon from '@patternfly/react-icons/dist/js/icons/arrow-right-icon';
import QuickStartMarkdownView from '../QuickStartMarkdownView';
import { QuickStartContext, QuickStartContextValues } from '../utils/quick-start-context';
import { QuickStart, QuickStartTask, QuickStartTaskStatus } from '../utils/quick-start-types';
import LearningPath from './QuickStartLearningPath';
import TaskHeaderList from './QuickStartTaskHeaderList';
import QuickStartRating from './QuickStartRating';

type QuickStartConclusionProps = {
  tasks: QuickStartTask[];
  conclusion: string;
  allTaskStatuses: QuickStartTaskStatus[];
  nextQuickStarts?: QuickStart[];
  onQuickStartChange: (quickStartid: string) => void;
  onTaskSelect: (selectedTaskNumber: number) => void;
};

const QuickStartConclusion: React.FC<QuickStartConclusionProps> = ({
  tasks,
  conclusion,
  allTaskStatuses,
  nextQuickStarts,
  onQuickStartChange,
  onTaskSelect,
}) => {
  const hasFailedTask = allTaskStatuses.includes(QuickStartTaskStatus.FAILED);
  const { getResource, currentLearningPath } = React.useContext<QuickStartContextValues>(
    QuickStartContext,
  );
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
      {!hasFailedTask &&
        !currentLearningPath &&
        nextQuickStarts &&
        nextQuickStarts.length > 0 &&
        nextQuickStarts.map((nextQuickStart, index) => (
          <Button
            variant="link"
            onClick={() => onQuickStartChange(nextQuickStart.metadata.name)}
            isInline
            isBlock
            key={index}
          >
            {getResource('Start {{nextQSDisplayName}} quick start').replace(
              '{{nextQSDisplayName}}',
              nextQuickStart?.spec?.displayName,
            )}{' '}
            <ArrowRightIcon
              style={{ marginLeft: 'var(--pf-global--spacer--xs)', verticalAlign: 'middle' }}
            />
          </Button>
        ))}
      <QuickStartRating />
      {currentLearningPath ? (
        <LearningPath learningPath={currentLearningPath} />
      ) : (
        getResource('No further quickstarts in this path')
      )}
    </>
  );
};
export default QuickStartConclusion;
