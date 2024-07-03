import * as React from 'react';
import {
  Button,
  Flex,
  Popover,
  Stack,
  Text,
  TextList,
  TextListItem,
  TextVariants,
} from '@patternfly/react-core';
import InfoCircleIcon from '@patternfly/react-icons/dist/js/icons/info-circle-icon';
import QuickStartMarkdownView from '../QuickStartMarkdownView';
import { QuickStartContext, QuickStartContextValues } from '../utils/quick-start-context';

interface QuickStartTileDescriptionProps {
  description: string;
  prerequisites?: string[];
}
const QuickStartTileDescription: React.FC<QuickStartTileDescriptionProps> = ({
  description,
  prerequisites,
}) => {
  const { getResource } = React.useContext<QuickStartContextValues>(QuickStartContext);
  const prereqs = prerequisites?.filter((p) => p);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  return (
    <Stack hasGutter>
      <QuickStartMarkdownView
        content={description}
      />
      {prereqs?.length > 0 && (
        <Flex spaceItems={{ default: 'spaceItemsSm'}}>
          <h5>
            {getResource('Prerequisites ({{totalPrereqs}})').replace(
              '{{totalPrereqs}}',
              prereqs.length,
            )}{' '}
          </h5>
          <Button
            variant="link"
            isInline
            data-testid="qs-card-prereqs"
            ref={buttonRef}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            aria-label={getResource('Show prerequisites')}
          >
            <InfoCircleIcon />
          </Button>
          <Popover
            aria-label={getResource('Prerequisites')}
            headerContent={getResource('Prerequisites')}
            triggerRef={buttonRef}
            bodyContent={
              <div>
                <ul
                  aria-label={getResource('Prerequisites')}
                >
                  {prereqs.map((prerequisite, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <li key={index}>
                      <QuickStartMarkdownView content={prerequisite} />
                    </li>
                  ))}
                </ul>
              </div>
            }
          />
        </Flex>
      )}
    </Stack>
  );
};
export default QuickStartTileDescription;
