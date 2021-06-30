import * as React from 'react';
import {
  Button,
  Popover,
  Text,
  TextList,
  TextListItem,
  TextVariants
} from '@patternfly/react-core';
import { QuickStartContext, QuickStartContextValues } from '../utils/quick-start-context';
import InfoCircleIcon from '@patternfly/react-icons/dist/js/icons/info-circle-icon';
import QuickStartMarkdownView from '../QuickStartMarkdownView';

import './QuickStartTileDescription.scss';

type QuickStartTileDescriptionProps = {
  description: string;
  prerequisites?: string[];
};
const QuickStartTileDescription: React.FC<QuickStartTileDescriptionProps> = ({
  description,
  prerequisites,
}) => {
  const { getResource } = React.useContext<QuickStartContextValues>(QuickStartContext);
  const prereqs = prerequisites?.filter((p) => p);
  return (
    <>
      <QuickStartMarkdownView content={description} className="co-quick-start-tile-description" />
      {prereqs?.length > 0 && (
        <div className="co-quick-start-tile-prerequisites">
          <Text component={TextVariants.h5} className="co-quick-start-tile-prerequisites__text">
            {getResource('Prerequisites ({{totalPrereqs}})').replace('{{totalPrereqs}}', prereqs.length)}{' '}
          </Text>
          <Popover
            aria-label={getResource('Prerequisites')}
            headerContent={getResource('Prerequisites')}
            className="co-quick-start-panel-content"
            bodyContent={
              <TextList
                aria-label={getResource('Prerequisites')}
                className="co-quick-start-tile-prerequisites-list"
              >
                {prereqs.map((prerequisite, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <TextListItem key={index}>
                    <QuickStartMarkdownView content={prerequisite} />
                  </TextListItem>
                ))}
              </TextList>
            }
          >
            <Button
              variant="link"
              isInline
              className="co-quick-start-tile-prerequisites__icon"
              data-testid="qs-card-prereqs"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              aria-label={getResource('Show prerequisites')}
            >
              <InfoCircleIcon />
            </Button>
          </Popover>
        </div>
      )}
    </>
  );
};
export default QuickStartTileDescription;
