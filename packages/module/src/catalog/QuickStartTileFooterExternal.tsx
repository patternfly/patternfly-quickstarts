import { FC } from 'react';
import { Button, Flex, FlexItem } from '@patternfly/react-core';
import RhUiExternalLinkFillIcon from '@patternfly/react-icons/dist/js/icons/rh-ui-external-link-fill-icon';
import { QuickStartExternal } from '../utils/quick-start-types';

interface QuickStartTileFooterProps {
  link: QuickStartExternal;
  quickStartId?: string;
}

const QuickStartTileFooterExternal: FC<QuickStartTileFooterProps> = ({ link, quickStartId }) => {
  const { href, text } = link;

  return (
    <Flex justifyContent={{ default: 'justifyContentSpaceBetween' }}>
      <FlexItem>
        <Button
          component="a"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          variant="link"
          aria-label={`Open documentation in new window`}
          isInline
          icon={<RhUiExternalLinkFillIcon />}
          iconPosition="right"
          id={quickStartId}
          aria-labelledby={`${quickStartId}-external ${quickStartId}`}
        >
          {text || href}
        </Button>
      </FlexItem>
    </Flex>
  );
};

export default QuickStartTileFooterExternal;
