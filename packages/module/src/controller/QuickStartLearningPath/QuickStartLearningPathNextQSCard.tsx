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
};

const QuickStartLearningPathNextQSCard: React.FC<QuickStartLearningPathNextQSCardProps> = ({
  nextQSInPath,
}) => {
  const { setActiveQuickStart, getResource } = React.useContext<QuickStartContextValues>(
    QuickStartContext,
  );
  return (
    <Card>
      <CardBody>
        <Split>
          <SplitItem isFilled>
            {nextQSInPath && (
              <Stack>
                <StackItem className="pf-u-color-400">
                  {getResource('Recommended next Quick Start')}
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
};

export default QuickStartLearningPathNextQSCard;
