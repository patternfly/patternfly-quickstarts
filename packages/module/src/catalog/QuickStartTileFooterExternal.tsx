import * as React from 'react';
import { Button, Flex, FlexItem } from '@patternfly/react-core';
import { QuickStartExternal } from '../utils/quick-start-types';
import ExternalLinkAltIcon from '@patternfly/react-icons/dist/js/icons/external-link-alt-icon';

type QuickStartTileFooterProps = {
  link: QuickStartExternal;
};

const QuickStartTileFooterExternal: React.FC<QuickStartTileFooterProps> = ({ link }) => {
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
          icon={<ExternalLinkAltIcon />}
          iconPosition="right"
        >
          {text || href}
        </Button>
      </FlexItem>
    </Flex>
  );
};

export default QuickStartTileFooterExternal;
