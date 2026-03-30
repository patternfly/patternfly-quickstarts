import { render, screen, waitFor } from '@testing-library/react';
import { allQuickStarts } from '../../data/quick-start-test-data';
import { QuickStartTaskStatus } from '../../utils/quick-start-types';
import {
  QuickStartContext,
  QuickStartContextDefaults,
} from '../../utils/quick-start-context';
import { getQuickStartByName } from '../../utils/quick-start-utils';
import QuickStartContent from '../QuickStartContent';

const contextValues = {
  ...QuickStartContextDefaults,
  getResource: (key: string) => key,
};

const quickStart = getQuickStartByName('explore-serverless', allQuickStarts);
const totalTasks = quickStart.spec.tasks.length;

const defaultProps = {
  quickStart,
  allTaskStatuses: [
    QuickStartTaskStatus.INIT,
    QuickStartTaskStatus.INIT,
  ],
  taskNumber: -1,
  onTaskReview: jest.fn(),
  onTaskSelect: jest.fn(),
  onQuickStartChange: jest.fn(),
};

const renderWithContext = (props = {}) =>
  render(
    <QuickStartContext.Provider value={contextValues}>
      <QuickStartContent {...defaultProps} {...props} />
    </QuickStartContext.Provider>,
  );

describe('QuickStartContent', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render QuickStartIntroduction when the tour status is Not Started', async () => {
    renderWithContext();
    await waitFor(() => {
      expect(document.body.textContent).toMatch(
        new RegExp(`In this quick start, you will complete ${totalTasks} task`),
      );
    });
    expect(document.body.textContent).not.toMatch(/Your Serverless Operator is ready/);
  });

  it('should render QuickStartTasks when the tour is In Progress', async () => {
    // taskNumber is 0-based index into spec.tasks; first task visible and active when non-INIT
    renderWithContext({
      taskNumber: 0,
      allTaskStatuses: [QuickStartTaskStatus.VISITED, QuickStartTaskStatus.INIT],
    });
    await waitFor(() => {
      expect(document.body.textContent).toMatch(/Install the OpenShift Serverless Operator/);
    });
    expect(document.body.textContent).not.toMatch(
      new RegExp(`In this quick start, you will complete ${totalTasks} task`),
    );
  });

  it('should render QuickStartConclusion when the tour is Complete', async () => {
    renderWithContext({ taskNumber: totalTasks });
    await waitFor(() => {
      expect(document.body.textContent).toMatch(/Your Serverless Operator is ready/);
    });
    // Conclusion still lists task headers; intro copy is not shown
    expect(document.body.textContent).not.toMatch(
      /In this quick start, you will complete \d+ task/,
    );
  });
});
