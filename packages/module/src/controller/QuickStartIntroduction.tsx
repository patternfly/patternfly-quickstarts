import { ExpandableSection, List, ListItem } from '@patternfly/react-core';
import * as React from 'react';
import QuickStartMarkdownView from '../QuickStartMarkdownView';
import { QuickStartContext, QuickStartContextValues } from '../utils/quick-start-context';
import { QuickStartTask, QuickStartTaskStatus } from '../utils/quick-start-types';
import TaskHeaderList from './QuickStartTaskHeaderList';

import './QuickStartIntroduction.scss';

type QuickStartIntroductionProps = {
  introduction: string;
  tasks: QuickStartTask[];
  allTaskStatuses: QuickStartTaskStatus[];
  prerequisites?: string[];
  onTaskSelect: (selectedTaskNumber: number) => void;
};

const QuickStartIntroduction: React.FC<QuickStartIntroductionProps> = ({
  tasks,
  introduction,
  allTaskStatuses,
  prerequisites,
  onTaskSelect,
}) => {
  const { getResource } = React.useContext<QuickStartContextValues>(QuickStartContext);
  const prereqs = prerequisites?.filter((p) => p);
  const [isPRExpanded, setIsPRExpanded] = React.useState(false);
  const prereqList = prereqs?.length > 0 && (
    <ExpandableSection
      toggleText={`View Prerequisites (${prereqs.length})`}
      onToggle={() => setIsPRExpanded(!isPRExpanded)}
      className="pfext-quick-start-intro__prereq"
    >
      <List className="pfext-quick-start-intro__prereq-list">
        {prereqs.map((pr) => {
          return (
            <ListItem key={pr} className="pfext-quick-start-intro__prereq-list__item">
              <span className="pfext-quick-start-intro__prereq-list__item-content">{pr}</span>
            </ListItem>
          );
        })}
      </List>
    </ExpandableSection>
  );
  return (
    <>
      <QuickStartMarkdownView content={introduction} />
      {prereqList}
      <p style={{ marginBottom: 'var(--pf-global--spacer--md)' }}>
        {getResource(
          'In this quick start, you will complete {{count, number}} task',
          tasks.length,
        ).replace('{{count, number}}', tasks.length)}
        :
      </p>
      <TaskHeaderList tasks={tasks} allTaskStatuses={allTaskStatuses} onTaskSelect={onTaskSelect} />
    </>
  );
};

export default QuickStartIntroduction;
