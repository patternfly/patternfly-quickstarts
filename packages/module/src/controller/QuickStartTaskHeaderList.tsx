import * as React from 'react';
import { List } from '@patternfly/react-core';
import { QuickStartTask, QuickStartTaskStatus } from '../utils/quick-start-types';
import TaskHeader from './QuickStartTaskHeader';

import './QuickStartTaskHeaderList.scss';

interface QuickStartTaskHeaderListProps {
  tasks: QuickStartTask[];
  allTaskStatuses: QuickStartTaskStatus[];
  onTaskSelect: (selectedTaskNumber: number) => void;
}

const QuickStartTaskHeaderList: React.FC<QuickStartTaskHeaderListProps> = ({
  tasks,
  allTaskStatuses,
  onTaskSelect,
}) => tasks.length > 0 ? (
    <List className="pfext-quick-start-task-header__list">
      {tasks.map((task, index) => (
        <TaskHeader
          key={task.title}
          title={task.title}
          taskIndex={index + 1}
          size="md"
          taskStatus={allTaskStatuses[index]}
          onTaskSelect={onTaskSelect}
        />
      ))}
    </List>
  ) : null;

export default QuickStartTaskHeaderList;
