import { render, screen, waitFor } from '@testing-library/react';
import { allQuickStarts } from '../../data/quick-start-test-data';
import { QuickStartTaskStatus } from '../../utils/quick-start-types';
import { QuickStartContext, QuickStartContextDefaults } from '../../utils/quick-start-context';
import { getQuickStartByName } from '../../utils/quick-start-utils';
import QuickStartTasks from '../QuickStartTasks';

const contextValues = {
  ...QuickStartContextDefaults,
  activeQuickStartID: '',
  startQuickStart: jest.fn(),
  restartQuickStart: jest.fn(),
  getResource: (key: string) => key,
};

const tasks = getQuickStartByName('monitor-sampleapp', allQuickStarts).spec.tasks;

const defaultProps = {
  tasks,
  allTaskStatuses: [
    QuickStartTaskStatus.SUCCESS,
    QuickStartTaskStatus.INIT,
    QuickStartTaskStatus.INIT,
  ],
  taskNumber: 1,
  onTaskReview: jest.fn(),
  onTaskSelect: jest.fn(),
};

const renderWithContext = (props = {}) =>
  render(
    <QuickStartContext.Provider value={contextValues}>
      <QuickStartTasks {...defaultProps} {...props} />
    </QuickStartContext.Provider>,
  );

describe('QuickStartTasks', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correct number of tasks based on currentTaskIndex', async () => {
    renderWithContext();
    await waitFor(() => {
      // Only non-INIT tasks are rendered; first task is SUCCESS so it shows
      const taskHeaders = screen.getAllByRole('listitem');
      expect(taskHeaders).toHaveLength(1);
    });
  });

  it('should render description if a task is active', async () => {
    renderWithContext({
      allTaskStatuses: [
        QuickStartTaskStatus.SUCCESS,
        QuickStartTaskStatus.FAILED,
        QuickStartTaskStatus.VISITED,
      ],
      taskNumber: 2,
    });
    await waitFor(() => {
      // All 3 tasks are non-INIT, so all render
      const taskHeaders = screen.getAllByRole('listitem');
      expect(taskHeaders).toHaveLength(3);
    });
  });

  it('should render review when task is active and in Review state', async () => {
    renderWithContext({
      allTaskStatuses: [
        QuickStartTaskStatus.SUCCESS,
        QuickStartTaskStatus.REVIEW,
        QuickStartTaskStatus.INIT,
      ],
    });
    await waitFor(() => {
      // "Check your work" is the alert title for QuickStartTaskReview
      expect(screen.getByText('Check your work')).toBeInTheDocument();
    });
  });
});
