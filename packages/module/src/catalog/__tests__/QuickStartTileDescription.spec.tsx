import { render, screen } from '@testing-library/react';
import { getQuickStarts } from '../../data/test-utils';
import {
  QuickStartContext,
  QuickStartContextDefaults,
} from '../../utils/quick-start-context';
import QuickStartTileDescription from '../QuickStartTileDescription';

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
      <QuickStartTileDescription {...props} />
    </QuickStartContext.Provider>,
  );

describe('QuickStartTileDescription', () => {
  it('should show prerequisites only if provided', () => {
    const quickStart = getQuickStarts()[0].spec;
    renderWithContext({ description: quickStart.description });
    expect(
      screen.queryByRole('button', { name: 'Show prerequisites' }),
    ).not.toBeInTheDocument();
  });

  it('should render prerequisites trigger when prerequisite list is non-empty', () => {
    const quickStart = getQuickStarts()[2].spec;
    renderWithContext({
      description: quickStart.description,
      prerequisites: quickStart.prerequisites,
    });
    expect(screen.getByRole('button', { name: 'Show prerequisites' })).toBeInTheDocument();
  });
});
