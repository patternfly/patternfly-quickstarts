import React from 'react';
import { HelpTopic } from './help-topic-types';

export type HelpTopicContextValues = {
  helpTopics?: HelpTopic[];
  activeHelpTopic?: HelpTopic;
  setActiveHelpTopicByName?: (helpTopicName: string) => void;
  filteredHelpTopics?: HelpTopic[];
  setFilteredHelpTopics?: React.Dispatch<React.SetStateAction<HelpTopic[]>>;
  loading?: boolean;
  setLoading?: any;
};

export const HelpTopicContextDefaults = {
  helpTopics: [],
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
  const [helpTopics, setHelpTopics] = React.useState(combinedValue.helpTopics || []);

  const [activeHelpTopic, setActiveHelpTopic] = React.useState(
    combinedValue.activeHelpTopic || null,
  );

  const setActiveHelpTopicByName = React.useCallback(
    (helpTopicName: string) => {
      const topic = helpTopics.find((t) => {
        return t.name === helpTopicName;
      });
      if (!helpTopicName) {
        setActiveHelpTopic(null);
        return;
      }
      setActiveHelpTopic(topic);
    },
    [helpTopics],
  );

  const [filteredHelpTopics, setFilteredHelpTopics] = React.useState(
    combinedValue.filteredHelpTopics || [],
  );

  return {
    helpTopics,
    activeHelpTopic,
    setActiveHelpTopicByName,
    filteredHelpTopics,
    setFilteredHelpTopics,
    loading,
    setLoading,
  };
};
