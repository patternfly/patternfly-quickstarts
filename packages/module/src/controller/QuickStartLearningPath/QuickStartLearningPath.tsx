import * as React from 'react';
import {
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
import ArrowRightIcon from '@patternfly/react-icons/dist/js/icons/arrow-right-icon';

type QuickStartLearningPathProps = {
  nextQuickStarts: QuickStart[];
  learningPathName?: string;
};

const QuickStartLearningPath: React.FC<QuickStartLearningPathProps> = ({
  nextQuickStarts,
  learningPathName = '2',
}) => {
  const { getResource, activeQuickStartID, allQuickStarts, setActiveQuickStart } = React.useContext<
    QuickStartContextValues
  >(QuickStartContext);
  const activeQuickStart = allQuickStarts.find((qs) => {
    return qs.metadata.name === activeQuickStartID;
  });
  const [isExpanded, setIsExpanded] = React.useState(false);
  const nextQSInPath = nextQuickStarts[0];
  return (
    <Stack hasGutter style={{ backgroundColor: 'var(--pf-global--palette--black-200)', padding: '10px 20px' }}>
      <StackItem>
        <Split>
          <SplitItem isFilled>
            <ExpandableSectionToggle
              isExpanded={isExpanded}
              onToggle={() => setIsExpanded(!isExpanded)}
              contentId={'learingpath'}
              direction="down"
            >
              {getResource('Learning Path {{learningPathName}}').replace(
                '{{learningPathName}}',
                learningPathName,
              )}
            </ExpandableSectionToggle>
          </SplitItem>
          <SplitItem>
            <Text>2 of 5 completed</Text>
          </SplitItem>
        </Split>
      </StackItem>
      <StackItem>
        <ExpandableSection isExpanded={isExpanded} isDetached contentId={'learingpath'}>
          <Stack hasGutter className="">
            <StackItem>
              <Card>
                <CardBody>{activeQuickStart.spec.displayName}</CardBody>
              </Card>
            </StackItem>
            {nextQuickStarts.map((qs) => {
              return (
                <StackItem key={qs.spec.displayName} className="">
                  <Card>
                    <CardBody>{qs.spec.displayName}</CardBody>
                  </Card>
                </StackItem>
              );
            })}
            <StackItem>
              <Card>
                <CardBody>Some cool review widget</CardBody>
              </Card>
            </StackItem>
          </Stack>
        </ExpandableSection>
        {!isExpanded && (
          // display next course in learning path
          // right now it will just be the first member in nextQuickStart array from the spec
          <>
          <Stack hasGutter>
            <StackItem>
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
            </StackItem>
            <StackItem>
              <Card>
                <CardBody>Some cool review widget</CardBody>
              </Card>
            </StackItem>
          </Stack>
          </>
        )}
      </StackItem>
    </Stack>
  );
};
export default QuickStartLearningPath;
