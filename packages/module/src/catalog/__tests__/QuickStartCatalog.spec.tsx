import { render, screen } from '@testing-library/react';
import { getQuickStarts } from '../../data/test-utils';
import { QuickStartContext, QuickStartContextDefaults } from '../../utils/quick-start-context';
import QuickStartCatalog from '../QuickStartCatalog';

const contextValues = {
  ...QuickStartContextDefaults,
  activeQuickStartID: '',
  allQuickStartStates: {},
  getResource: (key: string) => key,
};

const renderWithContext = (props: any) =>
  render(
    <QuickStartContext.Provider value={contextValues}>
      <QuickStartCatalog {...props} />
    </QuickStartContext.Provider>,
  );

describe('QuickStartCatalog', () => {
  it('should render an empty state if no QS exist', () => {
    renderWithContext({ quickStarts: [] });
    // When no quickstarts, the catalog renders no cards
    expect(screen.queryByRole('article')).not.toBeInTheDocument();
  });

  it('should load a gallery if QS exist', () => {
    const quickStarts = getQuickStarts();
    renderWithContext({ quickStarts });
    // Each tile exposes the quick start display name as the title control (link-styled button)
    quickStarts.forEach((qs) => {
      expect(screen.getByRole('button', { name: qs.spec.displayName })).toBeInTheDocument();
    });
  });
});
