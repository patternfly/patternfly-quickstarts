import React from 'react';
import { QuickStart } from '@quickstarts/utils/quick-start-types';
import { QuickStartContext, QuickStartContextValues } from '../../utils/quick-start-context';
import {
  Bullseye,
  Button,
  Card,
  CardBody,
  Split,
  SplitItem,
  Stack,
  StackItem,
} from '@patternfly/react-core';
import ArrowRightIcon from '@patternfly/react-icons/dist/js/icons/arrow-right-icon';

type QuickStartLearningPathNextQSCardProps = {
  nextQSInPath: QuickStart;
  learningPathName: string;
};

const QuickStartLearningPathNextQSCard: React.FC<QuickStartLearningPathNextQSCardProps> = ({
  nextQSInPath,
  learningPathName,
}) => {
  const { setActiveQuickStart, getResource } = React.useContext<QuickStartContextValues>(
    QuickStartContext,
  );

  const handleClick = () => {
    if (nextQSInPath) {
      setActiveQuickStart(nextQSInPath.metadata.name);
    }
  };

  const hasNextQSInPath = nextQSInPath !== undefined;

  return (
    <Card onClick={handleClick} isHoverable={hasNextQSInPath} isSelectable={hasNextQSInPath}>
      <CardBody>
        <Split>
          <SplitItem isFilled>
            {hasNextQSInPath ? (
              <Stack>
                <StackItem className="pf-u-color-400">
                  {getResource('Recommended next course')}
                </StackItem>
                <StackItem>{nextQSInPath?.spec.displayName}</StackItem>
              </Stack>
            ) : (
              getResource("You've completed {{learningPathName}}").replace(
                '{{learningPathName}}',
                learningPathName,
              )
            )}
          </SplitItem>
          {nextQSInPath && (
            <SplitItem>
              <Bullseye>
                <Button variant="link">
                  <ArrowRightIcon size="sm" />
                </Button>
              </Bullseye>
            </SplitItem>
          )}
        </Split>
      </CardBody>
    </Card>
  );
};

export default QuickStartLearningPathNextQSCard;
