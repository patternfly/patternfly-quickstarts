import * as React from 'react';
import { ExpandableSection, List, ListItem, Stack } from '@patternfly/react-core';
import QuickStartMarkdownView from '../QuickStartMarkdownView';
import { QuickStartContext, QuickStartContextValues } from '../utils/quick-start-context';
import { QuickStartTask, QuickStartTaskStatus } from '../utils/quick-start-types';
import TaskHeaderList from './QuickStartTaskHeaderList';

interface QuickStartIntroductionProps {
  introduction: string;
  tasks: QuickStartTask[];
  allTaskStatuses: QuickStartTaskStatus[];
  prerequisites?: string[];
  onTaskSelect: (selectedTaskNumber: number) => void;
}

const QuickStartIntroduction: React.FC<QuickStartIntroductionProps> = ({
  tasks,
  introduction,
  allTaskStatuses,
  prerequisites,
  onTaskSelect,
}) => {
  const { getResource } = React.useContext<QuickStartContextValues>(QuickStartContext);
  const prereqs = prerequisites?.filter((p) => p);
  const [isPrereqsExpanded, setIsPrereqsExpanded] = React.useState(false);
  const prereqList = prereqs?.length > 0 && (
    <ExpandableSection
      toggleText={getResource('View Prerequisites ({{totalPrereqs}})').replace(
        '{{totalPrereqs}}',
        prereqs.length,
      )}
      onToggle={() => setIsPrereqsExpanded(!isPrereqsExpanded)}
      className="pfext-quick-start-intro__prereq"
    >
      <List className="pfext-quick-start-intro__prereq-list">
        {prereqs.map((pr) => (
          <ListItem key={pr} className="pfext-quick-start-intro__prereq-list__item">
            <span className="pfext-quick-start-intro__prereq-list__item-content">
              <QuickStartMarkdownView content={pr} />
            </span>
          </ListItem>
        ))}
      </List>
    </ExpandableSection>
  );
  return (
    <Stack hasGutter>
      <QuickStartMarkdownView content={introduction} />
      {prereqList}
      <p>
        {getResource(
          'In this quick start, you will complete {{count, number}} task',
          tasks.length,
        ).replace('{{count, number}}', tasks.length)}
        :
      </p>
      <TaskHeaderList tasks={tasks} allTaskStatuses={allTaskStatuses} onTaskSelect={onTaskSelect} />
    </Stack>
  );
};

export default QuickStartIntroduction;
