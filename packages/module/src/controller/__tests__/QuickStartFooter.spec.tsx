import { render, screen, waitFor } from '@testing-library/react';
import { QuickStartStatus } from '../../utils/quick-start-types';
import { QuickStartContext, QuickStartContextDefaults } from '../../utils/quick-start-context';
import QuickStartFooter from '../QuickStartFooter';

const contextValues = {
  ...QuickStartContextDefaults,
  activeQuickStartID: '',
  startQuickStart: jest.fn(),
  restartQuickStart: jest.fn(),
  getResource: (key: string) => key,
};

const renderWithContext = (props: any) =>
  render(
    <QuickStartContext.Provider value={contextValues}>
      <QuickStartFooter {...props} />
    </QuickStartContext.Provider>,
  );

describe('QuickStartFooter', () => {
  it('should load Start button for not started tours', async () => {
    renderWithContext({
      status: QuickStartStatus.NOT_STARTED,
      footerClass: 'test',
      quickStartId: 'test-quickstart',
      onNext: jest.fn(),
      onBack: jest.fn(),
      totalTasks: 4,
      taskNumber: -1,
    });
    await waitFor(() => {
      expect(screen.getByRole('button', { name: 'Start' })).toBeInTheDocument();
    });
    expect(screen.queryByRole('button', { name: 'Back' })).not.toBeInTheDocument();
  });

  it('should load Continue and Restart buttons for in progress tours at intro page', async () => {
    renderWithContext({
      status: QuickStartStatus.IN_PROGRESS,
      footerClass: 'test',
      quickStartId: 'test-quickstart',
      onNext: jest.fn(),
      onBack: jest.fn(),
      totalTasks: 4,
      taskNumber: -1,
    });
    await waitFor(() => {
      expect(screen.getByRole('button', { name: 'Continue' })).toBeInTheDocument();
    });
    expect(screen.getByRole('button', { name: 'Restart' })).toBeInTheDocument();
  });

  it('should load Next, Back, and Restart buttons for in progress tours in task page', async () => {
    renderWithContext({
      status: QuickStartStatus.IN_PROGRESS,
      footerClass: 'test',
      quickStartId: 'test-quickstart',
      onNext: jest.fn(),
      onBack: jest.fn(),
      totalTasks: 4,
      taskNumber: 2,
    });
    await waitFor(() => {
      expect(screen.getByRole('button', { name: 'Next' })).toBeInTheDocument();
    });
    expect(screen.getByRole('button', { name: 'Back' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Restart' })).toBeInTheDocument();
  });

  it('should load Close, Back and Restart buttons for completed tours in conclusion page', async () => {
    renderWithContext({
      status: QuickStartStatus.COMPLETE,
      footerClass: 'test',
      quickStartId: 'test-quickstart',
      onNext: jest.fn(),
      onBack: jest.fn(),
      totalTasks: 4,
      taskNumber: 4,
    });
    await waitFor(() => {
      expect(screen.getByRole('button', { name: 'Close' })).toBeInTheDocument();
    });
    expect(screen.getByRole('button', { name: 'Back' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Restart' })).toBeInTheDocument();
  });
});
