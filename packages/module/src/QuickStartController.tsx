import * as React from 'react';
import QuickStartContent from './controller/QuickStartContent';
import QuickStartFooter from './controller/QuickStartFooter';
import {
  getDefaultQuickStartState,
  QuickStartContext,
  QuickStartContextValues,
} from './utils/quick-start-context';
import { QuickStart, QuickStartStatus, QuickStartTaskStatus } from './utils/quick-start-types';

interface QuickStartControllerProps {
  /** The current active quickstart  */
  quickStart: QuickStart;
  /** The next quickstart */
  nextQuickStarts?: QuickStart[];
  /** Additional footer classes */
  footerClass?: string;
  /** Ref for the quickstart content */
  contentRef?: React.Ref<HTMLDivElement>;
}

export const QuickStartController: React.FC<QuickStartControllerProps> = ({
  quickStart, // : propQS, might be able to have default value of current active QS using context?
  nextQuickStarts, // : propNextQS, might be same
  contentRef,
  footerClass,
}) => {
  // Should work?
  // const { allQuickStarts, activeQuickStartID } =
  //   React.useContext<QuickStartContextValues>(QuickStartContext);
  // const quickStart = propQS || allQuickStarts.find((qs) => qs.metadata.name === activeQuickStartID);
  // const nextQuickStarts =
  //   propNextQS ||
  //   allQuickStarts.filter((qs) => quickStart?.spec.nextQuickStart?.includes(qs.metadata.name));

  const {
    metadata: { name },
    spec: { tasks = [] },
  } = quickStart;
  const totalTasks = tasks?.length;
  const {
    activeQuickStartID,
    allQuickStartStates,
    setAllQuickStartStates,
    activeQuickStartState,
    setActiveQuickStart,
    setQuickStartTaskNumber,
    setQuickStartTaskStatus,
    nextStep,
    previousStep,
  } = React.useContext<QuickStartContextValues>(QuickStartContext);
  React.useEffect(() => {
    // If activeQuickStartID was changed through prop from QuickStartContainer, need to init the state if it does not exist yet
    if (activeQuickStartID && !allQuickStartStates[activeQuickStartID]) {
      setAllQuickStartStates({
        ...allQuickStartStates,
        [activeQuickStartID]: getDefaultQuickStartState(),
      });
    }
  }, [activeQuickStartID, allQuickStartStates, setAllQuickStartStates]);

  const status = activeQuickStartState?.status as QuickStartStatus;
  const taskNumber = activeQuickStartState?.taskNumber as number;
  const allTaskStatuses = tasks.map(
    (task, index) => activeQuickStartState[`taskStatus${index}`],
  ) as QuickStartTaskStatus[];

  const handleQuickStartChange = React.useCallback(
    (quickStartId: string) => setActiveQuickStart(quickStartId),
    [setActiveQuickStart],
  );

  const handleTaskStatusChange = React.useCallback(
    (newTaskStatus: QuickStartTaskStatus) => setQuickStartTaskStatus(newTaskStatus),
    [setQuickStartTaskStatus],
  );

  const getQuickStartActiveTask = React.useCallback(() => {
    let activeTaskNumber = 0;
    while (
      activeTaskNumber !== totalTasks &&
      activeQuickStartState[`taskStatus${activeTaskNumber}`] === QuickStartTaskStatus.SUCCESS
    ) {
      activeTaskNumber++;
    }
    return activeTaskNumber;
  }, [totalTasks, activeQuickStartState]);

  const handleQuickStartContinue = React.useCallback(() => {
    const activeTaskNumber = getQuickStartActiveTask();
    setQuickStartTaskNumber(name, activeTaskNumber);
  }, [getQuickStartActiveTask, setQuickStartTaskNumber, name]);

  const handleNext = React.useCallback(() => {
    if (status === QuickStartStatus.COMPLETE && taskNumber === totalTasks) {
      return handleQuickStartChange('');
    }

    if (status !== QuickStartStatus.NOT_STARTED && taskNumber === -1) {
      return handleQuickStartContinue();
    }

    return nextStep(totalTasks);
  }, [handleQuickStartChange, nextStep, status, taskNumber, totalTasks, handleQuickStartContinue]);

  const handleBack = React.useCallback(() => previousStep(), [previousStep]);

  const handleTaskSelect = React.useCallback(
    (selectedTaskNumber: number) => {
      setQuickStartTaskNumber(name, selectedTaskNumber);
    },
    [name, setQuickStartTaskNumber],
  );

  return (
    <>
      <QuickStartContent
        quickStart={quickStart}
        nextQuickStarts={nextQuickStarts}
        taskNumber={taskNumber}
        allTaskStatuses={allTaskStatuses}
        onTaskSelect={handleTaskSelect}
        onTaskReview={handleTaskStatusChange}
        onQuickStartChange={handleQuickStartChange}
        ref={contentRef}
      />
      <QuickStartFooter
        status={status}
        taskNumber={taskNumber}
        totalTasks={totalTasks}
        onNext={handleNext}
        onBack={handleBack}
        className={footerClass}
        quickStartId={quickStart.metadata.name}
      />
    </>
  );
};

export default QuickStartController;
