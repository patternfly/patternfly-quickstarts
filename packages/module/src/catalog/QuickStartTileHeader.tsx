import './QuickStartTileHeader.scss';
import * as React from 'react';
import { Button, ButtonProps, Flex, Label, Title } from '@patternfly/react-core';
import OutlinedClockIcon from '@patternfly/react-icons/dist/js/icons/outlined-clock-icon';
import OutlinedBookmarkIcon from '@patternfly/react-icons/dist/js/icons/outlined-bookmark-icon';
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
  action,
}) => {
  const { getResource } = React.useContext<QuickStartContextValues>(QuickStartContext);

  const statusLocaleMap = {
    [QuickStartStatus.COMPLETE]: getResource('Complete'),
    [QuickStartStatus.IN_PROGRESS]: getResource('In progress'),
    [QuickStartStatus.NOT_STARTED]: getResource('Not started'),
  };

  const ActionIcon = action.icon || OutlinedBookmarkIcon;

  return (
    <div className="pfext-quick-start-tile-header">
      <Flex justifyContent={{ default: 'justifyContentCenter' }}>
       <Title headingLevel="h3" data-test="title" id={quickStartId}>
          <QuickStartMarkdownView content={name} />
        </Title>
        <Button
          aria-label={action['aria-label']}
          icon={<ActionIcon />}
          variant='plain'
          onClick={action.onClick}
          {...action.buttonProps}
        />
      </Flex>
      <div className="pfext-quick-start-tile-header__status">
        {type && (
          <Label className="pfext-quick-start-tile-header--margin" color={type.color}>
            {type.text}
          </Label>
        )}
        {duration && (
          <Label
            variant="outline"
            data-test="duration"
            icon={<OutlinedClockIcon />}
            className="pfext-quick-start-tile-header--margin"
          >
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
      </div>
    </div>
  );
};

export default QuickStartTileHeader;
