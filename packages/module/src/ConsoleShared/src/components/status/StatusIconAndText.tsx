import * as React from 'react';
import { css } from '@patternfly/react-styles';
import { CamelCaseWrap } from '@console/internal/components/utils';
import { DASH } from '../../constants';
import { StatusComponentProps } from './types';

type StatusIconAndTextProps = StatusComponentProps & {
  icon?: React.ReactElement;
  spin?: boolean;
};

const StatusIconAndText: React.FC<StatusIconAndTextProps> = ({
  icon,
  title,
  spin,
  iconOnly,
  noTooltip,
  className,
}) => {
  if (!title) {
    return <>{DASH}</>;
  }

  return (
    <span
      className={css('pfext-icon-and-text', className)}
      title={iconOnly && !noTooltip ? title : undefined}
    >
      {icon &&
        React.cloneElement(icon, {
          className: css(
            spin && 'fa-spin',
            icon.props.className,
            !iconOnly && 'pfext-icon-and-text__icon pfext-icon-flex-child',
          ),
        })}
      {!iconOnly && <CamelCaseWrap value={title} dataTest="status-text" />}
    </span>
  );
};

export default StatusIconAndText;
