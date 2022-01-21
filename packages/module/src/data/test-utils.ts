import { QuickStart } from '@patternfly/quickstarts';
import { allQuickStarts } from './quick-start-test-data';

export const getQuickStarts = (): QuickStart[] => allQuickStarts;

export const contextValues = {
  allQuickStarts,
  activeQuickStartID: '',
  startQuickStart: () => {},
  restartQuickStart: () => {},
};
