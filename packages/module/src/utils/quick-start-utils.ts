import { AllQuickStartStates, QuickStart, QuickStartStatus } from './quick-start-types';

export const QUICK_START_NAME = 'console.openshift.io/name';

export const getQuickStartByName = (name: string, quickStarts: QuickStart[]): QuickStart =>
  quickStarts.find((quickStart) => quickStart.metadata.name === name);

export const getQuickStartStatus = (
  allQuickStartStates: AllQuickStartStates,
  quickStartID: string,
): QuickStartStatus =>
  (allQuickStartStates?.[quickStartID]?.status as QuickStartStatus) ?? QuickStartStatus.NOT_STARTED;

export const getTaskStatusKey = (taskNumber: number): string => `taskStatus${taskNumber}`;

export const getQuickStartStatusCount = (
  allQuickStartStates: AllQuickStartStates,
  quickStarts: QuickStart[],
): Record<QuickStartStatus, number> => quickStarts.reduce(
    (totals, item) => {
      totals[getQuickStartStatus(allQuickStartStates, item.metadata.name)]++;
      return totals;
    },
    {
      [QuickStartStatus.IN_PROGRESS]: 0,
      [QuickStartStatus.COMPLETE]: 0,
      [QuickStartStatus.NOT_STARTED]: 0,
    },
  );

declare const window: Window & {
  SERVER_FLAGS: {
    quickStarts: any;
  };
};

export const getDisabledQuickStarts = (): string[] => {
  let disabledQuickStarts = [];
  const quickStartServerData = window.SERVER_FLAGS?.quickStarts;
  try {
    if (quickStartServerData) {
      disabledQuickStarts = JSON.parse(quickStartServerData).disabled ?? [];
    }
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('error while parsing SERVER_FLAG.quickStarts', e);
  }
  return disabledQuickStarts;
};

export const isDisabledQuickStart = (
  quickstart: QuickStart,
  disabledQuickStarts: string[],
): boolean => {
  const quickStartName =
    quickstart.metadata.annotations?.[QUICK_START_NAME] ?? quickstart.metadata.name;
  return disabledQuickStarts.includes(quickStartName);
};

export const filterQuickStarts = (
  quickStarts: QuickStart[],
  filterText: string,
  statusFilters: string[],
  allQuickStartStates: AllQuickStartStates,
): QuickStart[] => {
  const searchText = filterText.toLowerCase();
  return quickStarts.filter(
    ({ metadata: { name }, spec: { displayName, prerequisites = [], description } }) => {
      const matchesFilter =
        statusFilters.length > 0
          ? statusFilters.includes(getQuickStartStatus(allQuickStartStates, name))
          : true;
      const matchesText =
        displayName.toLowerCase().includes(searchText) ||
        description.toLowerCase().includes(searchText) ||
        prerequisites.some((text) => text.toLowerCase().includes(searchText));

      return matchesFilter && matchesText;
    },
  );
};

export const camelize = (str: string) => str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
    if (+match === 0) {
      return '';
    } // or if (/\s+/.test(match)) for white spaces
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });
