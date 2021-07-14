import * as React from 'react';
import SyncAltIcon from '@patternfly/react-icons/dist/js/icons/sync-alt-icon';
import { DASH } from '../../constants';
import { SuccessStatus } from './statuses';
import StatusIconAndText from './StatusIconAndText';
import { StatusComponentProps } from './types';

export const Status: React.FC<StatusProps> = ({
  status,
  title,
  iconOnly,
  noTooltip,
  className,
}) => {
  const statusProps = { title: title || status, iconOnly, noTooltip, className };
  switch (status) {
    case 'In Progress':
      return <StatusIconAndText {...statusProps} icon={<SyncAltIcon />} />;

    case 'Complete':
      return <SuccessStatus {...statusProps} />;

    default:
      return <>{status || DASH}</>;
  }
};

export const StatusIcon: React.FC<StatusIconProps> = ({ status }) => (
  <Status status={status} iconOnly />
);

type StatusIconProps = {
  status: string;
};

type StatusProps = StatusComponentProps & {
  status: string;
};
