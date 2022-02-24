import * as React from 'react';
import {
  Banner,
  Button,
  Form,
  FormGroup,
  PageSection,
  Popover,
  Split,
  SplitItem,
  TextInput,
  Title,
} from '@patternfly/react-core';
import { QuickStartContext, QuickStartContextValues } from '@patternfly/quickstarts';
import HelpIcon from '@patternfly/react-icons/dist/js/icons/help-icon';

export const MockConsole: React.FC = () => {
  const {
    inContextHelpTopics,
    setFilteredHelpTopics,
    filteredHelpTopics,
    setActiveHelpTopicByName,
  } = React.useContext<QuickStartContextValues>(QuickStartContext);

  const [consolePageState, setConsolePageState] = React.useState(1);

  const handleClickNext = () => {
    setActiveHelpTopicByName('');
    if (consolePageState === 3) {
      setConsolePageState(1);
      return;
    }
    setConsolePageState(consolePageState + 1);
  };

  const handleClickBack = () => {
    setActiveHelpTopicByName('');
    if (consolePageState === 1) {
      setConsolePageState(3);
      return;
    }
    setConsolePageState(consolePageState - 1);
  };

  React.useEffect(() => {
    const topics = inContextHelpTopics.filter((topic) => {
      const pageTagNumbers = topic.tags.map((tag: string) => {
        return Number(tag.slice(-1));
      });
      return pageTagNumbers.includes(consolePageState);
    });
    setFilteredHelpTopics(topics);
  }, [consolePageState, inContextHelpTopics, setFilteredHelpTopics]);

  const formGroups = filteredHelpTopics.map((topic) => {
    return (
      <FormGroup
        label={topic.title}
        isRequired
        fieldId={topic.name}
        key={topic.name}
        labelIcon={
          <Popover
            bodyContent={(hide) => (
              <div>
                {topic.title} is quite amaizing{' '}
                <Button
                  variant="link"
                  onClick={() => {
                    setActiveHelpTopicByName(topic.name);
                    hide();
                  }}
                >
                  Learn more
                </Button>
              </div>
            )}
          >
            <Button variant="plain">
              <HelpIcon noVerticalAlign />
            </Button>
          </Popover>
        }
      >
        <TextInput isRequired type="text" id={topic.name} />
      </FormGroup>
    );
  });

  return (
    <>
      <PageSection>
        <Banner variant="info">
          <Title headingLevel="h1">Console page: {consolePageState}</Title>
        </Banner>
      </PageSection>
      <PageSection>
        <Title headingLevel="h2">Create your application</Title>
        <Title headingLevel="h6">Enter an application name</Title>
      </PageSection>
      <PageSection>
        <Form>{formGroups}</Form>
      </PageSection>
      <PageSection>
        <Split hasGutter>
          <SplitItem>
            <Button onClick={handleClickBack} variant="tertiary">
              Previous
            </Button>
          </SplitItem>
          <SplitItem>
            <Button onClick={handleClickNext}>Next</Button>
          </SplitItem>
        </Split>
      </PageSection>
    </>
  );
};
