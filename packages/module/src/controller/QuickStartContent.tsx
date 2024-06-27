import * as React from 'react';
import { QuickStart, QuickStartTaskStatus } from '../utils/quick-start-types';
import QuickStartConclusion from './QuickStartConclusion';
import QuickStartIntroduction from './QuickStartIntroduction';
import QuickStartTasks from './QuickStartTasks';
interface QuickStartContentProps {
  quickStart: QuickStart;
  nextQuickStarts?: QuickStart[];
  taskNumber: number;
  allTaskStatuses: QuickStartTaskStatus[];
  onTaskSelect: (selectedTaskNumber: number) => void;
  onTaskReview: (taskStatus: QuickStartTaskStatus) => void;
  onQuickStartChange?: (quickStartId: string) => void;
}

const QuickStartContent = React.forwardRef<HTMLDivElement, QuickStartContentProps>(
  (
    {
      quickStart,
      nextQuickStarts = [],
      taskNumber,
      allTaskStatuses,
      onTaskSelect,
      onTaskReview,
      onQuickStartChange,
    },
    ref,
  ) => {
    const {
      spec: { introduction, tasks, conclusion, prerequisites },
    } = quickStart;
    const totalTasks = tasks.length;

    return (
      <div ref={ref}>
        {taskNumber === -1 && (
          <QuickStartIntroduction
            tasks={tasks}
            allTaskStatuses={allTaskStatuses}
            introduction={introduction}
            prerequisites={prerequisites}
            onTaskSelect={onTaskSelect}
          />
        )}
        {taskNumber > -1 && taskNumber < totalTasks && (
          <QuickStartTasks
            tasks={tasks}
            taskNumber={taskNumber}
            allTaskStatuses={allTaskStatuses}
            onTaskReview={onTaskReview}
            onTaskSelect={onTaskSelect}
          />
        )}
        {taskNumber === totalTasks && (
          <QuickStartConclusion
            tasks={tasks}
            conclusion={conclusion}
            allTaskStatuses={allTaskStatuses}
            nextQuickStarts={nextQuickStarts}
            onQuickStartChange={onQuickStartChange}
            onTaskSelect={onTaskSelect}
          />
        )}
      </div>
    );
  },
);

export default QuickStartContent;
