import { render, screen, waitFor } from '@testing-library/react';
import { allQuickStarts } from '../../data/quick-start-test-data';
import { QuickStartTaskStatus } from '../../utils/quick-start-types';
import { QuickStartContext, QuickStartContextDefaults } from '../../utils/quick-start-context';
import { getQuickStartByName } from '../../utils/quick-start-utils';
import QuickStartTaskReview from '../QuickStartTaskReview';

const contextValues = {
  ...QuickStartContextDefaults,
  getResource: (key: string) => key,
};

const review = getQuickStartByName('explore-serverless', allQuickStarts).spec.tasks[0].review;

const defaultProps = {
  review,
  taskStatus: QuickStartTaskStatus.REVIEW,
  onTaskReview: jest.fn(),
};

const renderWithContext = (props = {}) =>
  render(
    <QuickStartContext.Provider value={contextValues}>
      <QuickStartTaskReview {...defaultProps} {...props} />
    </QuickStartContext.Provider>,
  );

describe('QuickStartTaskReview', () => {
  it('should render review prompt with yes/no while task is in review', async () => {
    renderWithContext();
    await waitFor(() => {
      expect(screen.getByRole('alert')).toBeInTheDocument();
    });
    expect(screen.getByText('Check your work')).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: 'Yes' })).not.toBeChecked();
    expect(screen.getByRole('radio', { name: 'No' })).not.toBeChecked();
  });

  it('should mark Yes selected when task status is success', async () => {
    renderWithContext({ taskStatus: QuickStartTaskStatus.SUCCESS });
    await waitFor(() => {
      expect(screen.getByRole('radio', { name: 'Yes' })).toBeChecked();
    });
    expect(screen.getByRole('radio', { name: 'No' })).not.toBeChecked();
  });

  it('should mark No selected and show failed-task help when task status is failed', async () => {
    renderWithContext({ taskStatus: QuickStartTaskStatus.FAILED });
    await waitFor(() => {
      expect(screen.getByRole('radio', { name: 'No' })).toBeChecked();
    });
    expect(screen.getByRole('radio', { name: 'Yes' })).not.toBeChecked();
    await waitFor(() => {
      expect(document.body.textContent).toMatch(/This task is incomplete/);
    });
  });
});
