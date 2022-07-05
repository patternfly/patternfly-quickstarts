import './App.css';
import React from 'react';
import { LoadingBox, HelpTopicContainer, HelpTopicContext } from '@patternfly/quickstarts';
import { helpTopics as exampleHelpTopics } from './example-data'

const TinyMockConsole = () => {
  const { setActiveHelpTopicByName, helpTopics } = React.useContext(HelpTopicContext);

  const handleSetTopic = (name) => {
    setActiveHelpTopicByName(name);
  }

  return (
    <Stack hasGutter>
      {helpTopics.map(topic => {
        return (
          <StackItem key={topic.name}>
            <a onClick={() => handleSetTopic(topic.name)}>Open Help {topic.title}</a>
          </StackItem>
        )
      })}
    </Stack>
  )
}

const AppHelpTopicDemo = () => {
  const language = localStorage.getItem('bridge/language') || 'en';

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const load = async () => {
      setLoading(false);
    };
    setTimeout(() => {
      load();
    }, 500);
  }, []);

  const inContextHelpProps = {
    helpTopics: exampleHelpTopics,
    language,
    loading,
  };

  return (
    <React.Suspense fallback={<LoadingBox />}>
      <HelpTopicContainer {...inContextHelpProps}>
        <TinyMockConsole />
      </HelpTopicContainer>
    </React.Suspense>
  );
};
