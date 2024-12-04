import * as React from 'react';
import { Button, Flex } from '@patternfly/react-core';

interface QuickStartTileHeaderProps {
  name: string;
  quickStartId?: string;
  onSelect: (e: React.FormEvent<HTMLInputElement> | React.MouseEvent<Element, MouseEvent>) => void;
}

const QuickStartTileHeader: React.FC<QuickStartTileHeaderProps> = ({
  name,
  quickStartId,
  onSelect,
}) => (
  <Flex flexWrap={{ default: 'nowrap' }}>
    <Button data-test="title" id={quickStartId} variant="link" isInline onClick={onSelect}>
      {name}
    </Button>
  </Flex>
);

export default QuickStartTileHeader;
