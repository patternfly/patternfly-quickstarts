import { FC } from 'react';
import RhUiSyncIcon from '@patternfly/react-icons/dist/js/icons/rh-ui-sync-icon';
import { DASH } from '../../constants';
import { SuccessStatus } from './statuses';
import StatusIconAndText from './StatusIconAndText';
import { StatusComponentProps } from './types';

export const Status: FC<StatusProps> = ({ status, title, iconOnly, noTooltip, className }) => {
  const statusProps = { title: title || status, iconOnly, noTooltip, className };
  switch (status) {
    case 'In Progress':
      return <StatusIconAndText {...statusProps} icon={<RhUiSyncIcon />} />;

    case 'Complete':
      return <SuccessStatus {...statusProps} />;

    default:
      return <>{status || DASH}</>;
  }
};

export const StatusIcon: FC<StatusIconProps> = ({ status }) => <Status status={status} iconOnly />;

interface StatusIconProps {
  status: string;
}

type StatusProps = StatusComponentProps & {
  status: string;
};
