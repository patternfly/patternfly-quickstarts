import { FC } from 'react';
import GenericStatus from './GenericStatus';
import { BlueInfoCircleIcon, GreenCheckCircleIcon, RedExclamationCircleIcon } from './icons';
import { StatusComponentProps } from './types';

export const ErrorStatus: FC<StatusComponentProps> = (props) => (
  <GenericStatus {...props} Icon={RedExclamationCircleIcon} title={props.title || 'Error'} />
);
ErrorStatus.displayName = 'ErrorStatus';

export const InfoStatus: FC<StatusComponentProps> = (props) => (
  <GenericStatus {...props} Icon={BlueInfoCircleIcon} title={props.title || 'Information'} />
);
InfoStatus.displayName = 'InfoStatus';

export const SuccessStatus: FC<StatusComponentProps> = (props) => (
  <GenericStatus {...props} Icon={GreenCheckCircleIcon} title={props.title || 'Healthy'} />
);
SuccessStatus.displayName = 'SuccessStatus';
