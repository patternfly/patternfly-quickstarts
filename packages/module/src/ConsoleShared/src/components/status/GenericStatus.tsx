import { Children, ComponentType, FC, ReactNode } from 'react';
import PopoverStatus from './PopoverStatus';
import StatusIconAndText from './StatusIconAndText';
import { StatusComponentProps } from './types';

const GenericStatus: FC<GenericStatusProps> = (props) => {
  const { Icon, children, popoverTitle, title, noTooltip, iconOnly, ...restProps } = props;
  const renderIcon = iconOnly && !noTooltip ? <Icon title={title} /> : <Icon />;
  const statusBody = (
    <StatusIconAndText
      {...restProps}
      noTooltip={noTooltip}
      title={title}
      iconOnly={iconOnly}
      icon={renderIcon}
    />
  );
  return Children.toArray(children).length ? (
    <PopoverStatus title={popoverTitle || title} {...restProps} statusBody={statusBody}>
      {children}
    </PopoverStatus>
  ) : (
    statusBody
  );
};

type GenericStatusProps = StatusComponentProps & {
  Icon: ComponentType<{ title?: string }>;
  children?: ReactNode;
  popoverTitle?: string;
  noTooltip?: boolean;
};

export default GenericStatus;
