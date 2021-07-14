import { QuickStartTaskStatus } from './quick-start-types';

export const QUICKSTART_SEARCH_FILTER_KEY = 'keyword';
export const QUICKSTART_STATUS_FILTER_KEY = 'status';
export const QUICKSTART_ID_FILTER_KEY = 'quickstart';
export const QUICKSTART_TASKS_INITIAL_STATES = [
  QuickStartTaskStatus.INIT,
  QuickStartTaskStatus.VISITED,
];
