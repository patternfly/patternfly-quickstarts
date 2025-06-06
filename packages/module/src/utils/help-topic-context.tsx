import { createContext, useCallback, useState } from 'react';
import { HelpTopic } from './help-topic-types';

export interface HelpTopicContextValues {
  helpTopics?: HelpTopic[];
  setHelpTopics?: React.Dispatch<React.SetStateAction<HelpTopic[]>>;
  activeHelpTopic?: HelpTopic;
  setActiveHelpTopicByName?: (helpTopicName: string) => void;
  filteredHelpTopics?: HelpTopic[];
  setFilteredHelpTopics?: React.Dispatch<React.SetStateAction<HelpTopic[]>>;
  loading?: boolean;
  setLoading?: any;
}

export const HelpTopicContextDefaults = {
  helpTopics: [],
  setHelpTopics: () => {},
  activeHelpTopic: null,
  setActiveHelpTopicByName: () => {},
  filteredHelpTopics: [],
  setFilteredHelpTopics: () => {},
  loading: false,
};

export const HelpTopicContext = createContext<HelpTopicContextValues>(HelpTopicContextDefaults);

export const useValuesForHelpTopicContext = (
  value: HelpTopicContextValues = {},
): HelpTopicContextValues => {
  const combinedValue = {
    ...HelpTopicContextDefaults,
    ...value,
  };

  const [loading, setLoading] = useState(combinedValue.loading);

  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const [helpTopics, setHelpTopics] = useState<HelpTopic[]>(combinedValue.helpTopics || []);

  const [activeHelpTopic, setActiveHelpTopic] = useState(combinedValue.activeHelpTopic || null);

  const setActiveHelpTopicByName = useCallback(
    (helpTopicName: string) => {
      const topic = helpTopics.find((t) => t.name === helpTopicName);
      if (!helpTopicName) {
        setActiveHelpTopic(null);
        return;
      }
      setActiveHelpTopic(topic);
    },
    [helpTopics],
  );

  const [filteredHelpTopics, setFilteredHelpTopics] = useState(
    combinedValue.filteredHelpTopics || [],
  );

  return {
    helpTopics,
    setHelpTopics,
    activeHelpTopic,
    setActiveHelpTopicByName,
    filteredHelpTopics,
    setFilteredHelpTopics,
    loading,
    setLoading,
  };
};
