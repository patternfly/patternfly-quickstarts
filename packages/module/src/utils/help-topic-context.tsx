import React from 'react';
import { InContextHelpTopic } from './quick-start-types';
import { removeQueryArgument, setQueryArgument } from '../ConsoleInternal/components/utils/router';
import { HELP_TOPIC_NAME_KEY } from './const';

export type HelpTopicContextValues = {
  inContextHelpTopics?: InContextHelpTopic[];
  activeHelpTopic?: InContextHelpTopic;
  setActiveHelpTopicByName?: (helpTopicName: string) => void;
  filteredHelpTopics?: InContextHelpTopic[];
  setFilteredHelpTopics?: React.Dispatch<React.SetStateAction<InContextHelpTopic[]>>;
  loading?: boolean;
  setLoading?: any;
};

export const HelpTopicContextDefaults = {
  inContextHelpTopics: [],
  activeHelpTopic: null,
  setActiveHelpTopicByName: () => {},
  filteredHelpTopics: [],
  setFilteredHelpTopics: () => {},
  loading: false,
};

export const HelpTopicContext = React.createContext<HelpTopicContextValues>(
  HelpTopicContextDefaults,
);

export const useValuesForHelpTopicContext = (
  value: HelpTopicContextValues = {},
): HelpTopicContextValues => {
  const combinedValue = {
    ...HelpTopicContextDefaults,
    ...value,
  };

  const [loading, setLoading] = React.useState(combinedValue.loading);

  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const [inContextHelpTopics, setInContextHelpTopics] = React.useState(
    combinedValue.inContextHelpTopics || [],
  );

  const [activeHelpTopic, setActiveHelpTopic] = React.useState(
    combinedValue.activeHelpTopic || null,
  );

  const setActiveHelpTopicByName = React.useCallback(
    (helpTopicName: string) => {
      const topic = inContextHelpTopics.find((t) => {
        return t.name === helpTopicName;
      });
      if (!helpTopicName) {
        removeQueryArgument(HELP_TOPIC_NAME_KEY);
        setActiveHelpTopic(null);
        return;
      }
      setQueryArgument(HELP_TOPIC_NAME_KEY, helpTopicName);
      setActiveHelpTopic(topic);
    },
    [inContextHelpTopics],
  );

  const [filteredHelpTopics, setFilteredHelpTopics] = React.useState(
    combinedValue.filteredHelpTopics || [],
  );

  return {
    inContextHelpTopics,
    activeHelpTopic,
    setActiveHelpTopicByName,
    filteredHelpTopics,
    setFilteredHelpTopics,
    loading,
    setLoading,
  };
};
