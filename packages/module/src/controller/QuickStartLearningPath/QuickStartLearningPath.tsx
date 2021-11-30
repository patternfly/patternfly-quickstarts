import * as React from 'react';
import {
  Bullseye,
  Card,
  CardBody,
  ExpandableSection,
  ExpandableSectionToggle,
  Split,
  SplitItem,
  Stack,
  StackItem,
  Text,
  Flex,
  FlexItem,
} from '@patternfly/react-core';
import ThumbsUpIcon from '@patternfly/react-icons/dist/js/icons/thumbs-up-icon';
import ThumbsDownIcon from '@patternfly/react-icons/dist/js/icons/thumbs-down-icon';
import { QuickStart, QuickStartLearningPath } from '@quickstarts/utils/quick-start-types';
import { QuickStartContext, QuickStartContextValues } from '../../utils/quick-start-context';
import { getQuickStartStatusCount } from '../../utils/quick-start-utils';
import NextQSCard from './QuickStartLearningPathNextQSCard';
import StatusCard from './QuickStartLearningPathStatusCard';

import './QuickStartLearningPath.scss';

type QuickStartLearningPathProps = {
  learningPath: QuickStartLearningPath;
};

const QuickStartLearningPathComponent: React.FC<QuickStartLearningPathProps> = ({
  learningPath,
}) => {
  const { getResource, allQuickStarts, allQuickStartStates, activeQuickStartID } = React.useContext<
    QuickStartContextValues
  >(QuickStartContext);
  // Expanded state of <ExpandableSection />
  const [isExpanded, setIsExpanded] = React.useState(true);

  const learningPathQuickStarts: QuickStart[] = allQuickStarts.filter((quickStart) => {
    const { quickStarts: learningPathIDs } = learningPath;
    const {
      metadata: { name: id },
    } = quickStart;
    return Object.values(learningPathIDs).includes(id);
  });
  const activeQuickStartPositionInLearningPath = Object.keys(learningPath.quickStarts).find(
    (key) => learningPath.quickStarts[key] === activeQuickStartID,
  );
  const nextQSInPath = learningPathQuickStarts.find((quickStart) => {
    const {
      metadata: { name: id },
    } = quickStart;
    return id === learningPath.quickStarts[Number(activeQuickStartPositionInLearningPath) + 1];
  });
  const completedQuickStarts = getQuickStartStatusCount(
    allQuickStartStates,
    learningPathQuickStarts,
  ).Complete;

  const header = (
    <Split className="pfext-quick-start-learning-path__header-content">
      <SplitItem isFilled>
        <ExpandableSectionToggle
          isExpanded={isExpanded}
          onToggle={() => setIsExpanded(!isExpanded)}
          contentId={'overview'}
          direction="down"
        >
          {learningPath.displayName || getResource('Learning Path')}
        </ExpandableSectionToggle>
      </SplitItem>
      <SplitItem>
        <Text className="pf-u-color-200">
          {completedQuickStarts}
          {getResource(' of {{totalQSInPath}} completed').replace(
            '{{totalQSInPath}}',
            learningPathQuickStarts.length,
          )}
        </Text>
      </SplitItem>
    </Split>
  );

  const rating = (
    <Card className="pfext-quick-start-learning-path__rating">
      <CardBody>
        <Bullseye>
          <Stack hasGutter>
            <StackItem className="pf-u-text-align-center">
              You’re all finished! How would you rate this quick start?
            </StackItem>
            <StackItem>
              <Bullseye>
                <ThumbsUpIcon
                  color="var(--pf-global--active-color--100)"
                  size="md"
                  className="pf-u-mr-md"
                />
                <ThumbsDownIcon size="md" />
              </Bullseye>
            </StackItem>
          </Stack>
        </Bullseye>
      </CardBody>
    </Card>
  );

  const pathOverview = (
    <Stack hasGutter>
      {learningPathQuickStarts.map((quickStart) => {
        return (
          <StackItem key={quickStart.spec.displayName}>
            <StatusCard quickStart={quickStart} />
          </StackItem>
        );
      })}
    </Stack>
  );

  const body = (
    <Stack hasGutter>
      <StackItem>
        <ExpandableSection isExpanded={isExpanded} isDetached contentId={'overview'}>
          {pathOverview}
        </ExpandableSection>
        {!isExpanded &&
          (nextQSInPath ? (
            <NextQSCard nextQSInPath={nextQSInPath} />
          ) : (
            getResource("You've completed {{learningPathName}}").replace(
              '{{learningPathName}}',
              learningPath.displayName,
            )
          ))}
      </StackItem>
      <StackItem>{rating}</StackItem>
    </Stack>
  );

  return (
    <Flex
      className="pfext-quick-start-learning-path pf-u-background-color-200"
      direction={{ default: 'column' }}
    >
      <FlexItem className="pfext-quick-start-learning-path__header">{header}</FlexItem>
      <FlexItem className="pfext-quick-start-learning-path__body">{body}</FlexItem>
    </Flex>
  );
};
export default QuickStartLearningPathComponent;
