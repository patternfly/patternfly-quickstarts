import * as React from 'react';
import {
  Banner,
  Button,
  Divider,
  Form,
  FormGroup,
  PageSection,
  Popover,
  Split,
  SplitItem,
  Switch,
  TextInput,
  Title,
} from '@patternfly/react-core';
import { HelpTopicContext, HelpTopicContextValues } from '@patternfly/quickstarts';
import HelpIcon from '@patternfly/react-icons/dist/js/icons/help-icon';
import { HelpTopic } from '@patternfly/quickstarts/dist/utils/help-topic-types';

// Example usage of topics, render certain topics depending on the page
// used this case when "consolePageState" below is between 4 - 6
// these HelpTopics with the following names will be rendered
const helpTopicNamesByPage = [
  ['auto-deploy', 'code-sample', 'manual-deployment'],
  ['manual-deployment', 'target-port', 'build-configuration'],
  ['deploy-configuration', 'environment-variables', 'health-checks'],
];

interface FormGroupWithHelpTopicPopoverProps extends React.HTMLProps<HTMLDivElement> {
  topic: HelpTopic;
}

// Example usage of setActiveHelpTopicByName()
// render a popover with a learn more link to open the drawer
const FormGroupWithHelpTopicPopover: React.FC<FormGroupWithHelpTopicPopoverProps> = ({ topic }) => {
  const { setActiveHelpTopicByName } = React.useContext<HelpTopicContextValues>(HelpTopicContext);

  return (
    <FormGroup
      label={topic.title}
      isRequired
      fieldId={topic.name}
      key={topic.name}
      labelIcon={
        <>
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
                  Learn more!
                </Button>
              </div>
            )}
          >
            <Button variant="plain">
              <HelpIcon noVerticalAlign />
            </Button>
          </Popover>
          <Button
            variant="link"
            onClick={() => setActiveHelpTopicByName(topic.name)}
          >{`Learn more about ${topic.title}`}</Button>
        </>
      }
    >
      <TextInput isRequired type="text" id={topic.name} />
    </FormGroup>
  );
};

export const MockConsole: React.FC = () => {
  const {
    helpTopics,
    setFilteredHelpTopics,
    filteredHelpTopics,
    setActiveHelpTopicByName,
  } = React.useContext<HelpTopicContextValues>(HelpTopicContext);

  const [closeDrawerOnPageChange, setCloseDrawerOnPageChange] = React.useState(true);

  // mock console page identifiers: 1 - 6
  // click handlers to change page
  const [consolePageState, setConsolePageState] = React.useState(1);

  const handleClickNext = () => {
    closeDrawerOnPageChange && setActiveHelpTopicByName('');
    if (consolePageState === 6) {
      setConsolePageState(1);
      return;
    }
    setConsolePageState(consolePageState + 1);
  };

  const handleClickBack = () => {
    closeDrawerOnPageChange && setActiveHelpTopicByName('');
    if (consolePageState === 6) {
      setConsolePageState(4);
      return;
    }
    setConsolePageState(consolePageState - 1);
  };
  // Example usage setFilteredHelpTopics()
  // After rendering the console, set the filtered help topics
  React.useEffect(() => {
    // set filtered topics using tags, matching to the consolePageState
    if (consolePageState < 4) {
      const topics = helpTopics.filter((topic: HelpTopic) => {
        const pageTagNumbers = topic.tags.map((tag: string) => {
          return Number(tag.slice(-1));
        });
        return pageTagNumbers.includes(consolePageState);
      });
      setFilteredHelpTopics(topics);
    } else {
      // set filtered topics using the appropriate helpTopicNamesByPage array above
      setFilteredHelpTopics(
        helpTopics.filter((topic) => {
          return helpTopicNamesByPage[consolePageState - 4].includes(topic.name);
        }),
      );
    }
  }, [consolePageState, helpTopics, setFilteredHelpTopics]);

  // Render filteredHelpTopics in a <FormGroupWithHelpTopicPopover />
  const formGroupsFromTags = filteredHelpTopics.map((topic: HelpTopic, index) => {
    return <FormGroupWithHelpTopicPopover topic={topic} key={index} />;
  });

  // From an array of topic names, render all topics in a <FormGroupWithHelpTopicPopover />
  const formGroupsFromTopicNames = (helpTopicNames: string[]) => {
    return helpTopicNames.map((topicName: string, index) => {
      const topicToRender = helpTopics.find((topic) => {
        return topicName === topic.name;
      });

      if (topicToRender) {
        return <FormGroupWithHelpTopicPopover topic={topicToRender} key={index} />;
      }
    });
  };

  return (
    <>
      <PageSection>
        <Banner variant="info">
          <Title headingLevel="h1">Console Page {consolePageState}</Title>
        </Banner>
      </PageSection>
      <PageSection>
        <Title headingLevel="h3">
          Example usage of help topics opened via popover and directly from a link{' '}
          <div>
            <b>
              {consolePageState < 4
                ? 'Using tags that match the Console Page number'
                : 'By defining which help topics should be present on each page'}
            </b>
          </div>
        </Title>
        <Divider style={{ padding: '20px 0px' }} />
        <Form>
          {consolePageState < 4
            ? formGroupsFromTags
            : formGroupsFromTopicNames(helpTopicNamesByPage[consolePageState - 4])}
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
          <SplitItem>
            <Switch
              label="Close drawer on page change"
              labelOff="DON'T close drawer on page change"
              isChecked={closeDrawerOnPageChange}
              onChange={() => setCloseDrawerOnPageChange(!closeDrawerOnPageChange)}
            />
          </SplitItem>
        </Split>
      </PageSection>
    </>
  );
};
