import * as React from 'react';
import { Button, Flex, Title } from '@patternfly/react-core';

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
    <Title headingLevel="h3" data-test="title" id={quickStartId}>
      <Button variant="link" isInline onClick={onSelect}>
        {name}
      </Button>
    </Title>
  </Flex>
);

export default QuickStartTileHeader;
