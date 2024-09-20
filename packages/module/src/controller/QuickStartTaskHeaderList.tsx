import * as React from 'react';
import { QuickStartTask, QuickStartTaskStatus } from '../utils/quick-start-types';
import TaskHeader from './QuickStartTaskHeader';

interface QuickStartTaskHeaderListProps {
  tasks: QuickStartTask[];
  allTaskStatuses: QuickStartTaskStatus[];
  onTaskSelect: (selectedTaskNumber: number) => void;
}

const QuickStartTaskHeaderList: React.FC<QuickStartTaskHeaderListProps> = ({
  tasks,
  allTaskStatuses,
  onTaskSelect,
}) =>
  tasks?.length > 0 ? (
    <ul className="pf-v6-c-wizard__nav-list">
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
    </ul>
  ) : null;

export default QuickStartTaskHeaderList;
