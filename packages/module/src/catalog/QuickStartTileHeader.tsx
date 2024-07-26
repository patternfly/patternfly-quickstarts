import * as React from 'react';
import { Button, ButtonProps, Flex, Stack, Label, Title } from '@patternfly/react-core';
import OutlinedClockIcon from '@patternfly/react-icons/dist/js/icons/outlined-clock-icon';
import { StatusIcon } from '@console/shared';
import { QuickStartContext, QuickStartContextValues } from '../utils/quick-start-context';
import { QuickStartStatus, QuickStartType } from '../utils/quick-start-types';
import QuickStartMarkdownView from '../QuickStartMarkdownView';

export interface QuickstartAction {
  /** Screen reader aria label. */
  'aria-label': string;
  /** Icon to be rendered as a plain button, by default Bookmark outlined will be used. */
  icon?: React.ComponentType<unknown>;
  /** Callback with synthetic event parameter. */
  onClick?: (e: React.SyntheticEvent) => void;
  /** Additional button props to be rendered as extra props. */
  buttonProps?: ButtonProps;
}

interface QuickStartTileHeaderProps {
  status: string;
  duration: number;
  name: string;
  type?: QuickStartType;
  quickStartId?: string;
  action?: QuickstartAction;
  onSelect: (e: React.FormEvent<HTMLInputElement> | React.MouseEvent<Element, MouseEvent>) => void;
}

const statusColorMap = {
  [QuickStartStatus.COMPLETE]: 'green',
  [QuickStartStatus.IN_PROGRESS]: 'purple',
  [QuickStartStatus.NOT_STARTED]: 'grey',
};

const QuickStartTileHeader: React.FC<QuickStartTileHeaderProps> = ({
  status,
  duration,
  name,
  type,
  quickStartId,
  onSelect,
}) => {
  const { getResource } = React.useContext<QuickStartContextValues>(QuickStartContext);

  const statusLocaleMap = {
    [QuickStartStatus.COMPLETE]: getResource('Complete'),
    [QuickStartStatus.IN_PROGRESS]: getResource('In progress'),
    [QuickStartStatus.NOT_STARTED]: getResource('Not started'),
  };

  return (
    <Stack hasGutter>
      <Flex flexWrap={{ default: 'nowrap' }}>
        <Title headingLevel="h3" data-test="title" id={quickStartId}>
          <Button variant="link" isInline onClick={onSelect}>
            <QuickStartMarkdownView content={name} />
          </Button>
        </Title>
      </Flex>
      <Flex spaceItems={{ default: 'spaceItemsSm' }}>
        {type && <Label color={type.color}>{type.text}</Label>}
        {duration && (
          <Label variant="outline" data-test="duration" icon={<OutlinedClockIcon />}>
            {getResource('{{duration, number}} minutes', duration).replace(
              '{{duration, number}}',
              duration,
            )}
          </Label>
        )}
        {status !== QuickStartStatus.NOT_STARTED && (
          <Label
            variant="outline"
            color={statusColorMap[status]}
            icon={<StatusIcon status={status} />}
            data-test="status"
          >
            {statusLocaleMap[status]}
          </Label>
        )}
      </Flex>
    </Stack>
  );
};

export default QuickStartTileHeader;
