import React, { createContext, useCallback } from 'react';
import {
  AllQuickStartStates,
  QuickStart,
  QuickStartState,
  QuickStartStatus,
  QuickStartTaskStatus,
} from './quick-start-types';
import { removeQueryArgument, setQueryArgument } from '../ConsoleInternal/components/utils/router';
import { QUICKSTART_ID_FILTER_KEY, QUICKSTART_TASKS_INITIAL_STATES } from './const';
import { getTaskStatusKey } from './quick-start-utils';
import PluralResolver from './PluralResolver';
import en from '../locales/en/quickstart.json';

const pluralResolver = new PluralResolver({ simplifyPluralSuffix: true });

export type FooterProps = {
  show?: boolean;
  showAllLink?: boolean;
  onShowAllLinkClick?: () => void | null;
};

export type QuickStartContextValues = {
  allQuickStarts?: QuickStart[];
  activeQuickStartID?: string;
  allQuickStartStates?: AllQuickStartStates;
  activeQuickStartState?: QuickStartState;
  setActiveQuickStartID?: React.Dispatch<React.SetStateAction<string>>;
  setAllQuickStartStates?: React.Dispatch<React.SetStateAction<AllQuickStartStates>>;
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
  setResourceBundle?: any;
  getResource?: any;
  lng?: string;
  setLng?: any;
};

export const QuickStartContext = createContext<QuickStartContextValues>({
  activeQuickStartID: '',
  allQuickStartStates: {},
  activeQuickStartState: {},
  setActiveQuickStart: () => {},
  startQuickStart: () => {},
  restartQuickStart: () => {},
  resourceBundle: en,
  getResource: () => {},
  lng: 'en',
});

export const getResource = (resource: string, options: any, resourceBundle: any, lng: string) => {
  if (options && options.count) {
    const suffix = pluralResolver.getSuffix(lng, options.count);
    if (suffix) {
      // needs plural
      return resourceBundle[`${resource}_${suffix}`];
    }
  }
  return resourceBundle[resource];
}

export const QuickStartContextProvider: React.FC<{
  children: React.ReactNode;
  value: QuickStartContextValues;
}> = ({ children, value }) => {
  const [resourceBundle, setResourceBundle] = React.useState({
    ...en,
    ...value.resourceBundle
  });
  const [lng, setLng] = React.useState(value.lng || 'en');
  const changeResourceBundle = (resourceBundle: any) => {
    setResourceBundle({
      ...en,
      ...resourceBundle
    });
  }
  const changeLng = (lng: string) => {
    setLng(lng);
  }
  const findResource = (resource: string, count?: number) => {
    return getResource(resource, count !== undefined ? { count } : null, resourceBundle, lng);
  }
  const { activeQuickStartID, setActiveQuickStartID, setAllQuickStartStates, useQueryParams, allQuickStartStates } = value;
  
  const setActiveQuickStart = useCallback(
    (quickStartId: string, totalTasks?: number) => {
      setActiveQuickStartID((id) => {
        if (!quickStartId || id === quickStartId) {
          useQueryParams && removeQueryArgument(QUICKSTART_ID_FILTER_KEY);
          return '';
        } else {
          useQueryParams && setQueryArgument(QUICKSTART_ID_FILTER_KEY, quickStartId);
          return quickStartId;
        }
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
      if (!activeQuickStartID) return;

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

      if (taskNumber < 0) return qs;

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

  const getQuickStartForId = useCallback(
    (id: string) => allQuickStartStates[id],
    [allQuickStartStates],
  );

  return <QuickStartContext.Provider value={{
    ...value,
    resourceBundle,
    setResourceBundle: changeResourceBundle,
    lng,
    setLng: changeLng,
    getResource: findResource,
    activeQuickStartState,
    setActiveQuickStart,
    startQuickStart,
    restartQuickStart,
    nextStep,
    previousStep,
    setQuickStartTaskNumber,
    setQuickStartTaskStatus,
    getQuickStartForId,
  }}>{children}</QuickStartContext.Provider>;
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

