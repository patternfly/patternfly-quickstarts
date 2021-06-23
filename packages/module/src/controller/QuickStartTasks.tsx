import * as React from 'react';
import { QUICKSTART_TASKS_INITIAL_STATES } from '../utils/const';
import { QuickStartContext, QuickStartContextValues } from '../utils/quick-start-context';
import { QuickStartTask, QuickStartTaskStatus } from '../utils/quick-start-types';
import QuickStartMarkdownView from '../QuickStartMarkdownView';
import QuickStartTaskReview from './QuickStartTaskReview';
import TaskHeader from './QuickStartTaskHeader';

type QuickStartTaskProps = {
  tasks: QuickStartTask[];
  taskNumber: number;
  allTaskStatuses: QuickStartTaskStatus[];
  onTaskReview: (reviewState: QuickStartTaskStatus) => void;
  onTaskSelect: (activeQuickStartId) => void;
};

const QuickStartTasks: React.FC<QuickStartTaskProps> = ({
  tasks,
  taskNumber,
  allTaskStatuses,
  onTaskReview,
  onTaskSelect,
}) => {
  const { getResource } = React.useContext<QuickStartContextValues>(QuickStartContext);
  return (
    <>
      {tasks
        .filter((_, index) => allTaskStatuses[index] !== QuickStartTaskStatus.INIT)
        .map((task, index) => {
          const { title, description, review } = task;
          const isActiveTask = index === taskNumber;
          const taskStatus = allTaskStatuses[index];

          return (
            <React.Fragment key={title}>
              <TaskHeader
                taskIndex={index + 1}
                title={title}
                size="md"
                subtitle={getResource('{{index, number}} of {{tasks, number}}').replace('{{index, number}}', index + 1).replace('{{tasks, number}}', tasks.length)}
                taskStatus={taskStatus}
                isActiveTask={isActiveTask}
                onTaskSelect={onTaskSelect}
              />
              {isActiveTask && (
                <div style={{ marginBottom: 'var(--pf-global--spacer--md)' }}>
                  <QuickStartMarkdownView content={description} />
                  {!QUICKSTART_TASKS_INITIAL_STATES.includes(taskStatus) && review && (
                    <QuickStartTaskReview
                      review={review}
                      taskStatus={taskStatus}
                      onTaskReview={onTaskReview}
                    />
                  )}
                </div>
              )}
            </React.Fragment>
          );
        })}
    </>
  );
};

export default QuickStartTasks;
