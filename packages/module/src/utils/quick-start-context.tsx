import React, { createContext, useCallback } from 'react';
import { removeQueryArgument, setQueryArgument } from '../ConsoleInternal/components/utils/router';
import en from '../locales/en/quickstart.json';
import {
  QUICKSTART_ID_FILTER_KEY,
  QUICKSTART_SEARCH_FILTER_KEY,
  QUICKSTART_STATUS_FILTER_KEY,
  QUICKSTART_TASKS_INITIAL_STATES,
} from './const';
import PluralResolver from './PluralResolver';
import {
  AllQuickStartStates,
  QuickStart,
  QuickStartState,
  QuickStartStatus,
  QuickStartTaskStatus,
} from './quick-start-types';
import { getQuickStartStatusCount, getTaskStatusKey } from './quick-start-utils';

const pluralResolver = new PluralResolver({ simplifyPluralSuffix: true });

export type FooterProps = {
  show?: boolean;
};

export const getDefaultQuickStartState = (
  totalTasks?: number,
  initialStatus?: QuickStartStatus,
) => {
  const defaultQuickStartState = {
    status: initialStatus || QuickStartStatus.NOT_STARTED,
    taskNumber: -1,
  };
  if (totalTasks) {
    for (let i = 0; i < totalTasks; i++) {
      defaultQuickStartState[getTaskStatusKey(i)] = QuickStartTaskStatus.INIT;
    }
  }
  return defaultQuickStartState;
};

export type QuickStartContextValues = {
  allQuickStarts?: QuickStart[];
  setAllQuickStarts?: React.Dispatch<React.SetStateAction<QuickStart[]>>;
  activeQuickStartID?: string;
  setActiveQuickStartID?: React.Dispatch<React.SetStateAction<string>>;
  allQuickStartStates?: AllQuickStartStates;
  setAllQuickStartStates?: React.Dispatch<React.SetStateAction<AllQuickStartStates>>;
  activeQuickStartState?: QuickStartState;
  setActiveQuickStart?: (quickStartId: string, totalTasks?: number) => void;
  startQuickStart?: (quickStartId: string, totalTasks?: number) => void;
  restartQuickStart?: (quickStartId: string, totalTasks: number) => void;
  nextStep?: (totalTasks: number) => void;
  previousStep?: () => void;
  setQuickStartTaskNumber?: (quickStartId: string, taskNumber: number) => void;
  setQuickStartTaskStatus?: (taskStatus: QuickStartTaskStatus) => void;
  getQuickStartForId?: (id: string) => QuickStartState;
  footer?: FooterProps;
  useQueryParams?: boolean;
  markdown?: {
    extensions?: any[];
    renderExtension?: (docContext: HTMLDocument, rootSelector: string) => React.ReactNode;
  };
  resourceBundle?: any;
  getResource?: any;
  setResourceBundle?: any;
  language?: string;
  setLanguage?: any;
  filter?: {
    keyword?: string;
    status?: {
      statusTypes?: any;
      statusFilters?: any;
    };
  };
  setFilter?: any;
  loading?: boolean;
  setLoading?: any;
};

export const QuickStartContextDefaults = {
  allQuickStarts: [],
  activeQuickStartID: '',
  allQuickStartStates: {},
  activeQuickStartState: {},
  setAllQuickStarts: () => {},
  resourceBundle: en,
  getResource: () => '',
  language: 'en',
  useQueryParams: true,
  filter: {
    keyword: '',
    status: {
      statusTypes: {},
      statusFilters: [],
    },
  },
  setFilter: () => {},
  footer: null,
  markdown: null,
  loading: false,
};
export const QuickStartContext = createContext<QuickStartContextValues>(QuickStartContextDefaults);

export const getResource = (resource: string, options: any, resourceBundle: any, lng: string) => {
  if (options && !isNaN(options.count)) {
    const suffix = pluralResolver.getSuffix(lng, options.count);
    if (suffix && resourceBundle[`${resource}_${suffix}`]) {
      // needs plural
      return resourceBundle[`${resource}_${suffix}`];
    }
  }
  return (resourceBundle && resourceBundle[resource]) || '';
};

export const useValuesForQuickStartContext = (
  value: QuickStartContextValues = {},
): QuickStartContextValues => {
  const combinedValue = {
    ...QuickStartContextDefaults,
    ...value,
  };
  const {
    activeQuickStartID,
    setActiveQuickStartID,
    setAllQuickStartStates,
    useQueryParams,
    allQuickStartStates,
    allQuickStarts = [],
    footer,
    markdown,
  } = combinedValue;
  const [quickStarts, setQuickStarts] = React.useState(combinedValue.allQuickStarts || []);
  const [resourceBundle, setResourceBundle] = React.useState({
    ...en,
    ...combinedValue.resourceBundle,
  });
  const [language, setLanguage] = React.useState(combinedValue.language);
  const changeResourceBundle = (bundle: any, lng?: string) => {
    lng && setLanguage(lng);
    setResourceBundle({
      ...en,
      ...bundle,
    });
  };
  const findResource = useCallback(
    (resource: string, count?: number) => {
      return getResource(
        resource,
        count !== undefined ? { count } : null,
        resourceBundle,
        language,
      );
    },
    [resourceBundle, language],
  );
  const [loading, setLoading] = React.useState(combinedValue.loading);

  const initialSearchParams = new URLSearchParams(window.location.search);
  const initialSearchQuery = initialSearchParams.get(QUICKSTART_SEARCH_FILTER_KEY) || '';
  const initialStatusFilters =
    initialSearchParams.get(QUICKSTART_STATUS_FILTER_KEY)?.split(',') || [];

  const quickStartStatusCount = getQuickStartStatusCount(allQuickStartStates, allQuickStarts);
  const [statusTypes, setStatusTypes] = React.useState({
    [QuickStartStatus.COMPLETE]: findResource('Complete ({{statusCount, number}})').replace(
      '{{statusCount, number}}',
      quickStartStatusCount[QuickStartStatus.COMPLETE],
    ),
    [QuickStartStatus.IN_PROGRESS]: findResource('In progress ({{statusCount, number}})').replace(
      '{{statusCount, number}}',
      quickStartStatusCount[QuickStartStatus.IN_PROGRESS],
    ),
    [QuickStartStatus.NOT_STARTED]: findResource('Not started ({{statusCount, number}})').replace(
      '{{statusCount, number}}',
      quickStartStatusCount[QuickStartStatus.NOT_STARTED],
    ),
  });
  const [statusFilters, setStatusFilters] = React.useState<string[]>(initialStatusFilters);

  const [filterKeyword, setFilterKeyword] = React.useState(initialSearchQuery);

  const setFilter = (type: 'keyword' | 'status', val: any) => {
    if (type === 'keyword') {
      setFilterKeyword(val);
    } else if (type === 'status') {
      setStatusFilters(val);
    }
  };

  React.useEffect(() => {
    const updatedQuickStartStatusCount = getQuickStartStatusCount(allQuickStartStates, quickStarts);
    setStatusTypes({
      [QuickStartStatus.COMPLETE]: findResource('Complete ({{statusCount, number}})').replace(
        '{{statusCount, number}}',
        updatedQuickStartStatusCount[QuickStartStatus.COMPLETE],
      ),
      [QuickStartStatus.IN_PROGRESS]: findResource('In progress ({{statusCount, number}})').replace(
        '{{statusCount, number}}',
        updatedQuickStartStatusCount[QuickStartStatus.IN_PROGRESS],
      ),
      [QuickStartStatus.NOT_STARTED]: findResource('Not started ({{statusCount, number}})').replace(
        '{{statusCount, number}}',
        updatedQuickStartStatusCount[QuickStartStatus.NOT_STARTED],
      ),
    });
  }, [allQuickStartStates, findResource, quickStarts]);

  const updateAllQuickStarts = (qs: QuickStart[]) => {
    setQuickStarts(qs);
  };

  const setActiveQuickStart = useCallback(
    (quickStartId: string, totalTasks?: number) => {
      setActiveQuickStartID((id) => {
        if (!quickStartId || id === quickStartId) {
          useQueryParams && removeQueryArgument(QUICKSTART_ID_FILTER_KEY);
          return '';
        }
        useQueryParams && setQueryArgument(QUICKSTART_ID_FILTER_KEY, quickStartId);
        return quickStartId;
      });
      setAllQuickStartStates((qs) =>
        !quickStartId || qs[quickStartId]
          ? qs
          : { ...qs, [quickStartId]: getDefaultQuickStartState(totalTasks) },
      );
    },
    [setActiveQuickStartID, setAllQuickStartStates, useQueryParams],
  );

  const startQuickStart = useCallback(
    (quickStartId: string, totalTasks?: number) => {
      setActiveQuickStartID((id) => {
        if (!id || id !== quickStartId) {
          useQueryParams && setQueryArgument(QUICKSTART_ID_FILTER_KEY, quickStartId);
          return quickStartId;
        }
        useQueryParams && setQueryArgument(QUICKSTART_ID_FILTER_KEY, id);
        return id;
      });
      setAllQuickStartStates((qs) => {
        if (qs.hasOwnProperty(quickStartId)) {
          return {
            ...qs,
            [quickStartId]: {
              ...qs[quickStartId],
              status: QuickStartStatus.IN_PROGRESS,
            },
          };
        }
        return {
          ...qs,
          [quickStartId]: getDefaultQuickStartState(totalTasks, QuickStartStatus.IN_PROGRESS),
        };
      });
    },
    [setActiveQuickStartID, setAllQuickStartStates, useQueryParams],
  );

  const restartQuickStart = useCallback(
    (quickStartId: string, totalTasks: number) => {
      setActiveQuickStartID((id) => {
        if (!id || id !== quickStartId) {
          useQueryParams && setQueryArgument(QUICKSTART_ID_FILTER_KEY, quickStartId);
          return quickStartId;
        }
        useQueryParams && setQueryArgument(QUICKSTART_ID_FILTER_KEY, id);
        return id;
      });
      setAllQuickStartStates((qs) => ({
        ...qs,
        [quickStartId]: getDefaultQuickStartState(totalTasks, QuickStartStatus.IN_PROGRESS),
      }));
    },
    [setActiveQuickStartID, setAllQuickStartStates, useQueryParams],
  );

  const nextStep = useCallback(
    (totalTasks: number) => {
      if (!activeQuickStartID) {
        return;
      }

      setAllQuickStartStates((qs) => {
        const quickStart = qs[activeQuickStartID];
        const status = quickStart?.status;
        const taskNumber = quickStart?.taskNumber as number;
        const taskStatus = quickStart[getTaskStatusKey(taskNumber)];

        let updatedStatus;
        let updatedTaskNumber;
        let updatedTaskStatus;

        if (status === QuickStartStatus.NOT_STARTED) {
          updatedStatus = QuickStartStatus.IN_PROGRESS;
        } else if (
          status === QuickStartStatus.IN_PROGRESS &&
          !QUICKSTART_TASKS_INITIAL_STATES.includes(taskStatus as any) &&
          taskNumber === totalTasks - 1
        ) {
          updatedStatus = QuickStartStatus.COMPLETE;
        }

        if (taskStatus === QuickStartTaskStatus.VISITED) {
          updatedTaskStatus = QuickStartTaskStatus.REVIEW;
        }

        if (taskNumber < totalTasks && !updatedTaskStatus) {
          updatedTaskNumber = taskNumber + 1;
        }
        const markInitialStepVisited =
          updatedTaskNumber > -1 &&
          quickStart[getTaskStatusKey(updatedTaskNumber)] === QuickStartTaskStatus.INIT
            ? QuickStartTaskStatus.VISITED
            : quickStart[getTaskStatusKey(updatedTaskNumber)];
        const newState = {
          ...qs,
          [activeQuickStartID]: {
            ...quickStart,
            ...(updatedStatus ? { status: updatedStatus } : {}),
            ...(updatedTaskNumber > -1
              ? {
                  taskNumber: updatedTaskNumber,
                  [getTaskStatusKey(updatedTaskNumber)]: markInitialStepVisited,
                }
              : {}),
            ...(updatedTaskStatus ? { [getTaskStatusKey(taskNumber)]: updatedTaskStatus } : {}),
          },
        };
        return newState;
      });
    },
    [activeQuickStartID, setAllQuickStartStates],
  );

  const previousStep = useCallback(() => {
    setAllQuickStartStates((qs) => {
      const quickStart = qs[activeQuickStartID];
      const taskNumber = quickStart?.taskNumber as number;

      if (taskNumber < 0) {
        return qs;
      }

      return {
        ...qs,
        [activeQuickStartID]: {
          ...quickStart,
          taskNumber: taskNumber - 1,
        },
      };
    });
  }, [activeQuickStartID, setAllQuickStartStates]);

  const setQuickStartTaskNumber = useCallback(
    (quickStartId: string, taskNumber: number) => {
      setAllQuickStartStates((qs) => {
        const quickStart = qs[quickStartId];
        const status = quickStart?.status;
        let updatedStatus;
        if (taskNumber > -1 && status === QuickStartStatus.NOT_STARTED) {
          updatedStatus = QuickStartStatus.IN_PROGRESS;
        }

        let updatedTaskStatus = {};
        for (let taskIndex = 0; taskIndex <= taskNumber; taskIndex++) {
          const taskStatus = quickStart[getTaskStatusKey(taskIndex)];
          const newTaskStatus =
            taskStatus === QuickStartTaskStatus.INIT ? QuickStartTaskStatus.VISITED : undefined;
          if (newTaskStatus) {
            updatedTaskStatus = {
              ...updatedTaskStatus,
              [getTaskStatusKey(taskIndex)]: newTaskStatus,
            };
          }
        }
        const updatedQuickStart = {
          ...quickStart,
          ...(updatedStatus ? { status: updatedStatus } : {}),
          taskNumber,
          ...updatedTaskStatus,
        };
        return { ...qs, [quickStartId]: updatedQuickStart };
      });
    },
    [setAllQuickStartStates],
  );

  const setQuickStartTaskStatus = useCallback(
    (taskStatus: QuickStartTaskStatus) => {
      const quickStart = allQuickStartStates[activeQuickStartID];
      const { taskNumber } = quickStart;
      const updatedQuickStart = {
        ...quickStart,
        [getTaskStatusKey(taskNumber as any)]: taskStatus,
      };
      setAllQuickStartStates((qs) => ({
        ...qs,
        [activeQuickStartID]: updatedQuickStart,
      }));
    },
    [allQuickStartStates, activeQuickStartID, setAllQuickStartStates],
  );

  const activeQuickStartState = allQuickStartStates?.[activeQuickStartID] ?? {};

  const getQuickStartForId = useCallback((id: string) => allQuickStartStates[id], [
    allQuickStartStates,
  ]);

  return {
    allQuickStarts: quickStarts,
    setAllQuickStarts: updateAllQuickStarts, // revisit if this should be in public context API
    activeQuickStartID,
    setActiveQuickStartID,
    allQuickStartStates,
    setAllQuickStartStates,
    activeQuickStartState,
    setActiveQuickStart: value.setActiveQuickStart || setActiveQuickStart,
    startQuickStart: value.startQuickStart || startQuickStart,
    restartQuickStart: value.restartQuickStart || restartQuickStart,
    nextStep: value.nextStep || nextStep,
    previousStep: value.previousStep || previousStep,
    setQuickStartTaskNumber, // revisit if this should be in public context API
    setQuickStartTaskStatus, // revisit if this should be in public context API
    getQuickStartForId,
    footer,
    useQueryParams,
    markdown,
    resourceBundle,
    getResource: findResource, // revisit if this should be in public context API
    setResourceBundle: changeResourceBundle,
    language,
    setLanguage,
    // revisit if this should be in public context API
    filter: {
      keyword: filterKeyword,
      status: {
        statusTypes,
        statusFilters,
      },
    },
    setFilter, // revisit if this should be in public context API
    loading,
    setLoading,
  };
};

export const QuickStartContextProvider: React.FC<{
  children: React.ReactNode;
  value: QuickStartContextValues;
}> = ({ children, value }) => {
  return (
    <QuickStartContext.Provider value={useValuesForQuickStartContext(value)}>
      {children}
    </QuickStartContext.Provider>
  );
};
