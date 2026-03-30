import { render, screen } from '@testing-library/react';
import { QuickStartTaskStatus } from '../../utils/quick-start-types';
import { QuickStartContext, QuickStartContextDefaults } from '../../utils/quick-start-context';
import QuickStartTaskHeader from '../QuickStartTaskHeader';

const contextValues = {
  ...QuickStartContextDefaults,
  getResource: (key: string) => key,
};

const defaultProps = {
  title: 'title',
  taskIndex: 1,
  subtitle: 'subtitle',
  taskStatus: QuickStartTaskStatus.INIT,
  size: 'lg' as const,
  isActiveTask: true,
  onTaskSelect: jest.fn(),
};

const renderWithContext = (props = {}) =>
  render(
    <QuickStartContext.Provider value={contextValues}>
      <QuickStartTaskHeader {...defaultProps} {...props} />
    </QuickStartContext.Provider>,
  );

describe('QuickStartTaskHeader', () => {
  it('should render subtitle for active task', () => {
    renderWithContext();
    expect(
      screen.getByRole('button', {
        name: new RegExp(`${defaultProps.title}.*${defaultProps.subtitle}`),
      }),
    ).toBeInTheDocument();
  });

  it('should not render subtitle if task is not active', () => {
    renderWithContext({ isActiveTask: false });
    expect(screen.getByRole('button', { name: defaultProps.title })).toBeInTheDocument();
    expect(screen.queryByText(defaultProps.subtitle)).not.toBeInTheDocument();
  });
});
