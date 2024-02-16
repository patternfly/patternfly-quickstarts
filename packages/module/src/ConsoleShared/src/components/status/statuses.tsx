import * as React from 'react';

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

export const SuccessStatus: React.FC<StatusComponentProps> = (props) => (
  <GenericStatus {...props} Icon={GreenCheckCircleIcon} title={props.title || 'Healthy'} />
);
SuccessStatus.displayName = 'SuccessStatus';
