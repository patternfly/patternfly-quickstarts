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
import { QuickStart } from '@quickstarts/utils/quick-start-types';
import { QuickStartContext, QuickStartContextValues } from '../../utils/quick-start-context';
import { getQuickStartStatusCount } from '../../utils/quick-start-utils';
import NextQSCard from './QuickStartLearningPathNextQSCard';
import StatusCard from './QuickStartLearningPathStatusCard';

import './QuickStartLearningPath.scss';

type QuickStartLearningPathProps = {
  nextQuickStarts: QuickStart[];
  learningPathName?: string;
};

const QuickStartLearningPath: React.FC<QuickStartLearningPathProps> = ({
  nextQuickStarts,
  learningPathName = '2',
}) => {
  const { getResource, activeQuickStartID, allQuickStarts, allQuickStartStates } = React.useContext<
    QuickStartContextValues
  >(QuickStartContext);
  const activeQuickStart = allQuickStarts.find((qs) => {
    return qs.metadata.name === activeQuickStartID;
  });
  const [isExpanded, setIsExpanded] = React.useState(true);
  const nextQSInPath = nextQuickStarts[0];
  const completedQuickStarts = getQuickStartStatusCount(allQuickStartStates, [
    activeQuickStart,
    ...nextQuickStarts,
  ]).Complete;
  // add one to include activeQuickStart
  const totalQSInPath = [...nextQuickStarts].length + 1;

  const header = (
    <Split className="pfext-quick-start-learning-path__header-content">
      <SplitItem isFilled>
        <ExpandableSectionToggle
          isExpanded={isExpanded}
          onToggle={() => setIsExpanded(!isExpanded)}
          contentId={'overview'}
          direction="down"
        >
          {getResource('Learning Path {{learningPathName}}').replace(
            '{{learningPathName}}',
            learningPathName,
          )}
        </ExpandableSectionToggle>
      </SplitItem>
      <SplitItem>
        {/* TODO: add to resource bundle */}
        <Text className="pf-u-color-200">{`${completedQuickStarts} of ${totalQSInPath} completed`}</Text>
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
      <StackItem>
        <StatusCard quickStart={activeQuickStart} />
      </StackItem>
      {nextQuickStarts.map((quickStart) => {
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
        {!isExpanded && <NextQSCard nextQSInPath={nextQSInPath} />}
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
export default QuickStartLearningPath;
