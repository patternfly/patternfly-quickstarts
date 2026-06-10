import { FC } from 'react';
import RhUiCheckCircleFillIcon from '@patternfly/react-icons/dist/js/icons/rh-ui-check-circle-fill-icon';
import RhUiErrorFillIcon from '@patternfly/react-icons/dist/js/icons/rh-ui-error-fill-icon';
import RhUiInformationFillIcon from '@patternfly/react-icons/dist/js/icons/rh-ui-information-fill-icon';
import { Icon } from '@patternfly/react-core';

export const GreenCheckCircleIcon: FC<ColoredIconProps> = ({ className, title, size }) => (
  <Icon size={size} status="success">
    <RhUiCheckCircleFillIcon data-test="success-icon" className={className} title={title} />
  </Icon>
);

export const RedExclamationCircleIcon: FC<ColoredIconProps> = ({ className, title, size }) => (
  <Icon size={size} status="danger">
    <RhUiErrorFillIcon className={className} title={title} />
  </Icon>
);

export const BlueInfoCircleIcon: FC<ColoredIconProps> = ({ className, title }) => (
  <Icon status="info">
    <RhUiInformationFillIcon className={className} title={title} />
  </Icon>
);

export interface ColoredIconProps {
  className?: string;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}
