import * as React from 'react';
import { QuickStartContext, QuickStartContextValues } from '../utils/quick-start-context';
import { StatusIcon } from '@console/shared';
import { Label, Title } from '@patternfly/react-core';
import { OutlinedClockIcon } from '@patternfly/react-icons';
import { QuickStartStatus, QuickStartType } from '../utils/quick-start-types';
import './QuickStartTileHeader.scss';

type QuickStartTileHeaderProps = {
  status: string;
  duration: number;
  name: string;
  type?: QuickStartType;
};

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
}) => {
  const { text } = React.useContext<QuickStartContextValues>(QuickStartContext);

  const statusLocaleMap = {
    [QuickStartStatus.COMPLETE]: text['Complete'],
    [QuickStartStatus.IN_PROGRESS]: text['In progress'],
    [QuickStartStatus.NOT_STARTED]: text['Not started'],
  };

  return (
    <div className="co-quick-start-tile-header">
      <Title headingLevel="h3">{name}</Title>
      <div className="co-quick-start-tile-header__status">
        {type && (
          <Label className="co-quick-start-tile-header--margin" color={type.color}>
            {type.text}
          </Label>
        )}
        {duration && (
          <Label
            variant="outline"
            icon={<OutlinedClockIcon />}
            className="co-quick-start-tile-header--margin"
          >
            {text['{{duration, number}} minutes'].replace('{{duration, number}}', duration)}
          </Label>
        )}
        {status !== QuickStartStatus.NOT_STARTED && (
          <Label
            variant="outline"
            color={statusColorMap[status]}
            icon={<StatusIcon status={status} />}
          >
            {statusLocaleMap[status]}
          </Label>
        )}
      </div>
    </div>
  );
};

export default QuickStartTileHeader;
