import { render, waitFor } from '@testing-library/react';
import { allQuickStarts } from '../../data/quick-start-test-data';
import { QuickStartTaskStatus } from '../../utils/quick-start-types';
import { QuickStartContext, QuickStartContextDefaults } from '../../utils/quick-start-context';
import { getQuickStartByName } from '../../utils/quick-start-utils';
import QuickStartConclusion from '../QuickStartConclusion';

const contextValues = {
  ...QuickStartContextDefaults,
  activeQuickStartID: '',
  startQuickStart: jest.fn(),
  restartQuickStart: jest.fn(),
  getResource: (key: string) => key,
};

const defaultProps = {
  tasks: getQuickStartByName('explore-pipelines', allQuickStarts).spec.tasks,
  allTaskStatuses: [
    QuickStartTaskStatus.SUCCESS,
    QuickStartTaskStatus.SUCCESS,
    QuickStartTaskStatus.SUCCESS,
  ],
  conclusion: 'conclusion',
  onTaskSelect: jest.fn(),
  onQuickStartChange: jest.fn(),
};

const renderWithContext = (props = {}) =>
  render(
    <QuickStartContext.Provider value={contextValues}>
      <QuickStartConclusion {...defaultProps} {...props} />
    </QuickStartContext.Provider>,
  );

describe('QuickStartConclusion', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render conclusion if there are no failed tasks', async () => {
    renderWithContext();
    await waitFor(() => {
      expect(document.body.textContent).toMatch(/conclusion/);
    });
  });

  it('should render link for next quick start if nextQuickStart prop is available and there are no failed tasks', async () => {
    renderWithContext({
      nextQuickStarts: [getQuickStartByName('explore-pipelines', allQuickStarts)],
    });
    await waitFor(() => {
      expect(document.body.textContent).toMatch(
        /Start Installing the Pipelines Operator quick start/,
      );
    });
  });

  it('should not render link for next quick start if nextQuickStart props is not available', async () => {
    renderWithContext();
    await waitFor(() => {
      expect(document.body.textContent).toMatch(/conclusion/);
    });
    expect(document.body.textContent).not.toMatch(/Start .* quick start/);
  });

  it('should not render conclusion and should render message for retrying if there are failed tasks', async () => {
    renderWithContext({
      nextQuickStarts: [getQuickStartByName('explore-pipelines', allQuickStarts)],
      allTaskStatuses: [
        QuickStartTaskStatus.FAILED,
        QuickStartTaskStatus.SUCCESS,
        QuickStartTaskStatus.SUCCESS,
      ],
    });
    await waitFor(() => {
      expect(document.body.textContent).toMatch(/One or more verifications did not pass/);
    });
    expect(document.body.textContent).not.toMatch(/Start .* quick start/);
  });
});
