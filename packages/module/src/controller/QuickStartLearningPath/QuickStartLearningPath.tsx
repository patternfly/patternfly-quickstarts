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
  Flex,
  FlexItem,
} from '@patternfly/react-core';
import { QuickStart, QuickStartStatus } from '@quickstarts/utils/quick-start-types';
import { QuickStartContext, QuickStartContextValues } from '../../utils/quick-start-context';
import { getQuickStartStatus, getQuickStartStatusCount } from '../../utils/quick-start-utils';
import ArrowRightIcon from '@patternfly/react-icons/dist/js/icons/arrow-right-icon';
import CheckCircleIcon from '@patternfly/react-icons/dist/js/icons/check-circle-icon';
import EllipsisHIcon from '@patternfly/react-icons/dist/js/icons/ellipsis-h-icon';

type QuickStartLearningPathProps = {
  nextQuickStarts: QuickStart[];
  learningPathName?: string;
};

const QuickStartLearningPath: React.FC<QuickStartLearningPathProps> = ({
  nextQuickStarts,
  learningPathName = '2',
}) => {
  const {
    getResource,
    activeQuickStartID,
    allQuickStarts,
    setActiveQuickStart,
    allQuickStartStates,
  } = React.useContext<QuickStartContextValues>(QuickStartContext);
  const activeQuickStart = allQuickStarts.find((qs) => {
    return qs.metadata.name === activeQuickStartID;
  });
  const [isExpanded, setIsExpanded] = React.useState(true);
  const nextQSInPath = nextQuickStarts[0];
  const completedQuickStarts = getQuickStartStatusCount(allQuickStartStates, [
    activeQuickStart,
    ...nextQuickStarts,
  ]).Complete;
  const totalQSInPath = [...nextQuickStarts].length + 1;
  const header = (
    <StackItem style={{ fontSize: '16px' }}>
      <Split style={{ alignItems: 'center' }}>
        <SplitItem isFilled>
          <ExpandableSectionToggle
            isExpanded={isExpanded}
            onToggle={() => setIsExpanded(!isExpanded)}
            contentId={'learningpath'}
            direction="down"
            // this will need scss reaching into PF component tree
            style={{ color: 'black', fontWeight: 600 }}
          >
            {getResource('Learning Path {{learningPathName}}').replace(
              '{{learningPathName}}',
              learningPathName,
            )}
          </ExpandableSectionToggle>
        </SplitItem>
        <SplitItem>
          {/* TODO: add to resource bundle */}
          <Text
            style={{ color: 'var(--pf-global--Color--400)' }}
          >{`${completedQuickStarts} of ${totalQSInPath} completed`}</Text>
        </SplitItem>
      </Split>
    </StackItem>
  );

  const reviewQuickStart = (
    <Card>
      <CardBody style={{ backgroundColor: 'lightgray' }}>
        <Bullseye>You're all finished with this quick start!!!!!!!!!!</Bullseye>
        <span>THUMBUP</span>
        {`    `}
        <span>THUMBDOWN</span>
      </CardBody>
    </Card>
  );

  const quickStartStatusCard = (qs: QuickStart) => {
    const { displayName } = qs.spec;
    const status = getQuickStartStatus(allQuickStartStates, qs.metadata.name);
    const taskIndex = allQuickStartStates?.[qs.metadata.name]?.taskNumber as number;
    const totalTasks = qs.spec.tasks?.length;
    const statusIconAndTextMap = {
      [QuickStartStatus.COMPLETE]: {
        text: getResource('Complete'),
        textColor: 'var(--pf-global--success-color--100)',
        icon: <CheckCircleIcon color="var(--pf-global--success-color--100)" size="sm" />,
      },
      [QuickStartStatus.IN_PROGRESS]: {
        text: getResource('In progress'),
        textColor: 'var(--pf-global--active-color--100)',
        icon: <EllipsisHIcon color="var(--pf-global--active-color--100)" size="sm" />,
      },
      [QuickStartStatus.NOT_STARTED]: {
        text: getResource('Not started'),
        textColor: 'var(--pf-global--Color--400)',
        icon: <ArrowRightIcon color="var(--pf-global--active-color--100)" size="sm" />,
      },
    };
    const { text, textColor, icon } = statusIconAndTextMap[status];
    return (
      <Card>
        <CardBody style={{ fontSize: '14px' }}>
          <Split>
            <SplitItem isFilled style={{ marginRight: '16px' }}>
              {displayName}
            </SplitItem>
            <SplitItem>
              <Split>
                <SplitItem style={{ color: textColor, marginRight: '10px', whiteSpace: 'nowrap' }}>
                  {text}
                  {status === QuickStartStatus.IN_PROGRESS &&
                    ` (${taskIndex + 1} of ${totalTasks})`}
                </SplitItem>
                <SplitItem>
                  <Bullseye>{icon}</Bullseye>
                </SplitItem>
              </Split>
            </SplitItem>
          </Split>
        </CardBody>
      </Card>
    );
  };

  const pathOverview = (
    <Stack hasGutter className="">
      <StackItem>{quickStartStatusCard(activeQuickStart)}</StackItem>
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
                <StackItem style={{ color: 'var(--pf-global--palette--black-500)' }}>
                  Recommended next course
                </StackItem>
                <StackItem>{nextQSInPath?.spec.displayName}</StackItem>
              </Stack>
            )}
            {!nextQSInPath && `No next QS`}
          </SplitItem>
          {nextQSInPath && (
            <SplitItem>
              <Bullseye>
                <Button
                  variant="link"
                  onClick={() => setActiveQuickStart(nextQSInPath.metadata.name)}
                >
                  <ArrowRightIcon size="sm" />
                </Button>
              </Bullseye>
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
      {!isExpanded && <StackItem>{nextCourse}</StackItem>}
      <StackItem>{reviewQuickStart}</StackItem>
    </Stack>
  );

  return (
    <Flex
      direction={{ default: 'column' }}
      style={{
        backgroundColor: 'var(--pf-global--palette--black-200)',
        padding: '10px 20px',
      }}
    >
      <FlexItem>{header}</FlexItem>
      <FlexItem>{body}</FlexItem>
    </Flex>
  );
};
export default QuickStartLearningPath;
