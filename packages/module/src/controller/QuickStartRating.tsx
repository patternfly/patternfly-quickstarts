import * as React from 'react';
import { Card, CardBody, Bullseye, Stack, StackItem } from '@patternfly/react-core';
import ThumbsDownIcon from '@patternfly/react-icons/dist/js/icons/thumbs-down-icon';
import ThumbsUpIcon from '@patternfly/react-icons/dist/js/icons/thumbs-up-icon';
import { QuickStartContextValues, QuickStartContext } from '@quickstarts/utils/quick-start-context';

const QuickStartRating: React.FC = () => {
  const { getResource } = React.useContext<QuickStartContextValues>(QuickStartContext);

  return (
    <Card className="pf-u-background-color-200 pf-u-mb-md pf-u-mt-lg">
      <CardBody>
        <Bullseye>
          <Stack hasGutter>
            <StackItem className="pf-u-text-align-center">
              {getResource('You’re all finished! How would you rate this quick start?')}
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
};

export default QuickStartRating;
