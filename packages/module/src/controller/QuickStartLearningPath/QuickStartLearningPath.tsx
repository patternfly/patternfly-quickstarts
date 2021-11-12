import * as React from 'react';
import {
  Bullseye,
  Button,
  Card,
  CardBody,
  ExpandableSection,
  ExpandableSectionToggle,
  Split,
  SplitItem,
  Stack,
  StackItem,
  Text,
} from '@patternfly/react-core';
import { QuickStart } from '@quickstarts/utils/quick-start-types';
import { QuickStartContext, QuickStartContextValues } from '../../utils/quick-start-context';
import { getQuickStartStatus, getQuickStartStatusCount } from '../../utils/quick-start-utils';
import ArrowRightIcon from '@patternfly/react-icons/dist/js/icons/arrow-right-icon';

type QuickStartLearningPathProps = {
  nextQuickStarts: QuickStart[];
  learningPathName?: string;
};

const QuickStartLearningPath: React.FC<QuickStartLearningPathProps> = ({
  nextQuickStarts,
  learningPathName = '2',
}) => {
  const { getResource, activeQuickStartID, allQuickStarts, setActiveQuickStart, allQuickStartStates } = React.useContext<
    QuickStartContextValues
  >(QuickStartContext);
  const activeQuickStart = allQuickStarts.find((qs) => {
    return qs.metadata.name === activeQuickStartID;
  });
  const [isExpanded, setIsExpanded] = React.useState(false);
  const nextQSInPath = nextQuickStarts[0];
  const completedQuickStarts = getQuickStartStatusCount(allQuickStartStates, [activeQuickStart, ...nextQuickStarts]).Complete;
  const totalQSInPath = [...nextQuickStarts].length + 1;
  const header = (
    <StackItem>
      <Split>
        <SplitItem isFilled>
          <ExpandableSectionToggle
            isExpanded={isExpanded}
            onToggle={() => setIsExpanded(!isExpanded)}
            contentId={'learningpath'}
            direction="down"
          >
            {getResource('Learning Path {{learningPathName}}').replace(
              '{{learningPathName}}',
              learningPathName,
            )}
          </ExpandableSectionToggle>
        </SplitItem>
        <SplitItem>
          <Text>{`${completedQuickStarts} of ${totalQSInPath} completed`}</Text>
        </SplitItem>
      </Split>
    </StackItem>
  );

  const reviewQuickStart = (
    <Card>
      <CardBody style={{backgroundColor: 'lightgray'}}>
        <Bullseye>You're all finished with this quick start!!!!!!!!!!</Bullseye>
        <span>THUMBUP</span>{`    `}<span>THUMBDOWN</span>
      </CardBody>
    </Card>
  );

  const quickStartStatusCard = (qs: QuickStart) => {
    const {displayName} = qs.spec;
    const status = getQuickStartStatus(allQuickStartStates, qs.metadata.name);
    return (
      <Card>
        <CardBody>
          <Split>
            <SplitItem isFilled>
              {displayName}
            </SplitItem>
            <SplitItem>
              {status}
            </SplitItem>
          </Split>
        </CardBody>
      </Card>
    )
  };

  const pathOverview = (
    <Stack hasGutter className="">
      <StackItem>
        {quickStartStatusCard(activeQuickStart)}
      </StackItem>
      {nextQuickStarts.map((qs) => {
        return (
          <StackItem key={qs.spec.displayName} className="">
            {quickStartStatusCard(qs)}
          </StackItem>
        );
      })}
    </Stack>
  );

  const nextCourse = (
    <Card>
      <CardBody>
        <Split>
          <SplitItem isFilled>
            {nextQSInPath && (
              <Stack>
                <StackItem style={{color: 'var(--pf-global--palette--black-500)'}}>Recommended next course</StackItem>
                <StackItem>{nextQSInPath?.spec.displayName}</StackItem>
              </Stack>
            )}
            {!nextQSInPath && `No next QS`}
          </SplitItem>
          {nextQSInPath && (
            <SplitItem>
              <Button
                variant="link"
                onClick={() => setActiveQuickStart(nextQSInPath.metadata.name)}
                isInline
                isBlock
                style={{verticalAlign: 'middle'}}
              >
                <ArrowRightIcon />
              </Button>
            </SplitItem>
          )}
        </Split>
      </CardBody>
    </Card>
  );

  const body = (
    <Stack hasGutter>
      <StackItem>
        <ExpandableSection isExpanded={isExpanded} isDetached contentId={'learningpath'}>
          {pathOverview}
        </ExpandableSection>
      </StackItem>
      {!isExpanded &&
        <StackItem>
          {nextCourse}
        </StackItem>
      }
      <StackItem>
        {reviewQuickStart}
      </StackItem>
    </Stack>
  )

  return (
    <Stack hasGutter style={{ backgroundColor: 'var(--pf-global--palette--black-200)', padding: '10px 20px' }}>
      <StackItem>
        {header}
      </StackItem>
      <StackItem>
        {body}
      </StackItem>
    </Stack>
  );
};
export default QuickStartLearningPath;
