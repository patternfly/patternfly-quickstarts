import * as React from 'react';
import CheckCircleIcon from '@patternfly/react-icons/dist/js/icons/check-circle-icon';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/js/icons/exclamation-circle-icon';
import InfoCircleIcon from '@patternfly/react-icons/dist/js/icons/info-circle-icon';
import dangerColor from '@patternfly/react-tokens/dist/esm/global_danger_color_100';
import blueInfoColor from '@patternfly/react-tokens/dist/esm/global_palette_blue_300';
import okColor from '@patternfly/react-tokens/dist/esm/global_palette_green_500';
import { Icon } from '@patternfly/react-core';

export const GreenCheckCircleIcon: React.FC<ColoredIconProps> = ({ className, title, size }) => (
  <Icon size={size}>
    <CheckCircleIcon
      data-test="success-icon"
      color={okColor.value}
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
  <Icon size={size}>
    <ExclamationCircleIcon color={dangerColor.value} className={className} title={title} />
  </Icon>
);

export const BlueInfoCircleIcon: React.FC<ColoredIconProps> = ({ className, title }) => (
  <InfoCircleIcon color={blueInfoColor.value} className={className} title={title} />
);

export interface ColoredIconProps {
  className?: string;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}
