import * as React from 'react';
import {
  Bullseye,
  Split,
  SplitItem,
  Stack,
  StackItem,
  Text,
  Flex,
  FlexItem,
  Button,
} from '@patternfly/react-core';
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
    return learningPathIDs.includes(id);
  });

  const activeQuickStartPositionInLearningPath = learningPath.quickStarts.indexOf(
    activeQuickStartID,
  );

  const nextQSInPath = learningPathQuickStarts.find((quickStart) => {
    const {
      metadata: { name: id },
    } = quickStart;
    return id === learningPath.quickStarts[activeQuickStartPositionInLearningPath + 1];
  });

  const completedQuickStarts = getQuickStartStatusCount(
    allQuickStartStates,
    learningPathQuickStarts,
  ).Complete;

  const header = (
    <Split className="pfext-quick-start-learning-path__header-content">
      <SplitItem isFilled className="pf-u-font-weight-bold">
        {learningPath.displayName || getResource('Learning Path')}
      </SplitItem>
      <SplitItem>
        <Text className="pf-u-color-200">
          {getResource('{{completedQuickStarts, number}} of {{totalQSInPath, number}} completed')
            .replace('{{completedQuickStarts, number}}', completedQuickStarts)
            .replace('{{totalQSInPath, number}}', learningPathQuickStarts.length)}
        </Text>
      </SplitItem>
    </Split>
  );

  const pathOverview = (
    <Stack className="pfext-quick-start-learning-path__overview">
      {learningPathQuickStarts.map((quickStart, index) => {
        const {
          metadata: { name: id },
        } = quickStart;
        const isActiveQuickStart = id === activeQuickStartID;
        const isNextQuickStartInLearningPath = activeQuickStartPositionInLearningPath + 1 === index;
        return (
          <StackItem className="pf-u-mb-sm" key={quickStart.spec.displayName}>
            <StatusCard
              quickStart={quickStart}
              isActiveQuickStart={isActiveQuickStart}
              isNextQuickStartInLearningPath={isNextQuickStartInLearningPath}
            />
          </StackItem>
        );
      })}
    </Stack>
  );

  const body = (
    <Stack hasGutter>
      <StackItem>
        {isExpanded && pathOverview}
        {!isExpanded && (
          <NextQSCard nextQSInPath={nextQSInPath} learningPathName={learningPath.displayName} />
        )}
      </StackItem>
      <StackItem onClick={() => setIsExpanded(!isExpanded)} className="pf-u-mb-sm">
        <Bullseye>
          <Button variant="link" isInline>
            {isExpanded ? getResource('Show less') : getResource('Show all')}
          </Button>
        </Bullseye>
      </StackItem>
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
