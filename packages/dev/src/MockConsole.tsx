import * as React from 'react';
import {
  Banner,
  Button,
  Form,
  FormGroup,
  PageSection,
  Split,
  SplitItem,
  TextInput,
  Title,
} from '@patternfly/react-core';
import { QuickStartContext, QuickStartContextValues } from '@patternfly/quickstarts';

export const MockConsole: React.FC = () => {
  const { inContextHelpTopics, setFilteredHelpTopics } = React.useContext<QuickStartContextValues>(
    QuickStartContext,
  );

  const [consolePageState, setConsolePageState] = React.useState(1);

  const handleClickNext = () => {
    if (consolePageState === 3) {
      setConsolePageState(1);
      return;
    }
    setConsolePageState(consolePageState + 1);
  };

  const handleClickBack = () => {
    if (consolePageState === 1) {
      setConsolePageState(3);
      return;
    }
    setConsolePageState(consolePageState - 1);
  };

  React.useEffect(() => {
    const topics = inContextHelpTopics.filter((topic) => {
      const pageTagNumbers = topic.tags.map((tag) => {
        return Number(tag.slice(-1));
      });
      return pageTagNumbers.includes(consolePageState);
    });
    setFilteredHelpTopics(topics);
  }, [consolePageState, inContextHelpTopics, setFilteredHelpTopics]);

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
        <Form>
          <FormGroup label="Workspace" isRequired fieldId="ws">
            <TextInput isRequired type="text" />
          </FormGroup>
          <FormGroup label="Application Name" isRequired fieldId="appName">
            <TextInput isRequired type="text" />
          </FormGroup>
        </Form>
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
