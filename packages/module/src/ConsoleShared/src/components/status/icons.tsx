import * as React from 'react';
import CheckCircleIcon from '@patternfly/react-icons/dist/js/icons/check-circle-icon';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/js/icons/exclamation-circle-icon';
import InfoCircleIcon from '@patternfly/react-icons/dist/js/icons/info-circle-icon';
import { Icon } from '@patternfly/react-core';

export const GreenCheckCircleIcon: React.FC<ColoredIconProps> = ({ className, title, size }) => (
  <Icon size={size} status="success">
    <CheckCircleIcon
      data-test="success-icon"
      className={className}
      title={title}
    />
  </Icon>
);

export const RedExclamationCircleIcon: React.FC<ColoredIconProps> = ({
  className,
  title,
  size,
}) => (
  <Icon size={size} status="danger">
    <ExclamationCircleIcon className={className} title={title} />
  </Icon>
);

export const BlueInfoCircleIcon: React.FC<ColoredIconProps> = ({ className, title }) => (
  <Icon status="info">
    <InfoCircleIcon className={className} title={title} />
  </Icon>
);

export interface ColoredIconProps {
  className?: string;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}
