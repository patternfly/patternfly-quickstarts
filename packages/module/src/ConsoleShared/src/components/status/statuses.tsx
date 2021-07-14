import * as React from 'react';
// import HourglassHalfIcon from '@patternfly/react-icons/dist/js/icons/hourglass-half-icon';
// import InProgressIcon from '@patternfly/react-icons/dist/js/icons/in-progress-icon';
import GenericStatus from './GenericStatus';
import { BlueInfoCircleIcon, GreenCheckCircleIcon, RedExclamationCircleIcon } from './icons';
import { StatusComponentProps } from './types';

export const ErrorStatus: React.FC<StatusComponentProps> = (props) => (
  <GenericStatus {...props} Icon={RedExclamationCircleIcon} title={props.title || 'Error'} />
);
ErrorStatus.displayName = 'ErrorStatus';

export const InfoStatus: React.FC<StatusComponentProps> = (props) => (
  <GenericStatus {...props} Icon={BlueInfoCircleIcon} title={props.title || 'Information'} />
);
InfoStatus.displayName = 'InfoStatus';

// export const PendingStatus: React.FC<StatusComponentProps> = (props) => (
//   <GenericStatus {...props} Icon={HourglassHalfIcon} title={props.title || 'Pending'} />
// );
// PendingStatus.displayName = 'PendingStatus';

// export const ProgressStatus: React.FC<StatusComponentProps> = (props) => (
//   <GenericStatus {...props} Icon={InProgressIcon} title={props.title || 'In progress'} />
// );
// ProgressStatus.displayName = 'ProgressStatus';

export const SuccessStatus: React.FC<StatusComponentProps> = (props) => (
  <GenericStatus {...props} Icon={GreenCheckCircleIcon} title={props.title || 'Healthy'} />
);
SuccessStatus.displayName = 'SuccessStatus';

// export const WarningStatus: React.FC<StatusComponentProps> = (props) => (
//   <GenericStatus {...props} Icon={YellowExclamationTriangleIcon} title={props.title || 'Warning'} />
// );
// WarningStatus.displayName = 'WarningStatus';
