import { render, screen } from '@testing-library/react';
import { getQuickStarts } from '../../data/test-utils';
import { QuickStartStatus } from '../../utils/quick-start-types';
import { QuickStartContext, QuickStartContextDefaults } from '../../utils/quick-start-context';
import QuickStartTile from '../QuickStartTile';

const contextValues = {
  ...QuickStartContextDefaults,
  activeQuickStartID: '',
  setActiveQuickStart: jest.fn(),
  getResource: (key: string) => key,
};

const quickstarts = getQuickStarts();

const renderWithContext = (props: any) =>
  render(
    <QuickStartContext.Provider value={contextValues}>
      <QuickStartTile {...props} />
    </QuickStartContext.Provider>,
  );

describe('QuickStartTile', () => {
  it('should load proper catalog tile without featured property', () => {
    const quickStart = quickstarts[0];
    renderWithContext({
      quickStart,
      status: QuickStartStatus.NOT_STARTED,
      onClick: jest.fn(),
      isActive: false,
    });
    expect(screen.getByRole('button', { name: quickStart.spec.displayName })).toBeInTheDocument();
    // Status label is omitted for not-started tiles
    expect(screen.queryByText('In progress')).not.toBeInTheDocument();
  });

  it('should load proper catalog tile with featured property', () => {
    const quickStart = quickstarts[1];
    renderWithContext({
      quickStart,
      status: QuickStartStatus.IN_PROGRESS,
      onClick: jest.fn(),
      isActive: true,
    });
    expect(screen.getByRole('button', { name: quickStart.spec.displayName })).toBeInTheDocument();
    expect(screen.getByText('In progress')).toBeInTheDocument();
  });
});
