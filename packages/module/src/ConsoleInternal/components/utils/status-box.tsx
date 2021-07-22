import * as React from 'react';
import { css } from '@patternfly/react-styles';
import { QuickStartContext, QuickStartContextValues } from '../../../utils/quick-start-context';

export const Box: React.FC<BoxProps> = ({ children, className }) => (
  <div className={css('cos-status-box', className)}>{children}</div>
);

export const Loading: React.FC<LoadingProps> = ({ className }) => (
  <div className={css('pfext-m-loader pfext-an-fade-in-out', className)}>
    <div className="pfext-m-loader-dot__one" />
    <div className="pfext-m-loader-dot__two" />
    <div className="pfext-m-loader-dot__three" />
  </div>
);
Loading.displayName = 'Loading';

export const LoadingBox: React.FC<LoadingBoxProps> = ({ className, message }) => (
  <Box className={css('cos-status-box--loading', className)}>
    <Loading />
    {message && <div className="cos-status-box__loading-message">{message}</div>}
  </Box>
);
LoadingBox.displayName = 'LoadingBox';

export const EmptyBox: React.FC<EmptyBoxProps> = ({ label }) => {
  const { getResource } = React.useContext<QuickStartContextValues>(QuickStartContext);
  return (
    <Box>
      <div data-test="empty-message" className="text-center">
        {label
          ? getResource('No {{label}} found').replace('{{label}}', label)
          : getResource('Not found')}
      </div>
    </Box>
  );
};
EmptyBox.displayName = 'EmptyBox';

type BoxProps = {
  children: React.ReactNode;
  className?: string;
};

type LoadErrorProps = {
  label: string;
  className?: string;
  message?: string;
  canRetry?: boolean;
};

type LoadingProps = {
  className?: string;
};

type LoadingBoxProps = {
  className?: string;
  message?: string;
};

type EmptyBoxProps = {
  label?: string;
};

type MsgBoxProps = {
  title?: string;
  detail?: React.ReactNode;
  className?: string;
};

type AccessDeniedProps = {
  message?: string;
};

type DataProps = {
  NoDataEmptyMsg?: React.ComponentType;
  EmptyMsg?: React.ComponentType;
  label?: string;
  unfilteredData?: any;
  data?: any;
  children?: React.ReactNode;
};

type StatusBoxProps = {
  label?: string;
  loadError?: any;
  loaded?: boolean;
  data?: any;
  unfilteredData?: any;
  skeleton?: React.ReactNode;
  NoDataEmptyMsg?: React.ComponentType;
  EmptyMsg?: React.ComponentType;
  children?: React.ReactNode;
};
