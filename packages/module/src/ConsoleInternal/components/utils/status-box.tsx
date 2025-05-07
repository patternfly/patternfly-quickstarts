import { FC, useContext } from 'react';
import { css } from '@patternfly/react-styles';
import { QuickStartContext, QuickStartContextValues } from '../../../utils/quick-start-context';

export const Box: React.FC<BoxProps> = ({ children, className }) => (
  <div className={css('pfext-status-box', className)}>{children}</div>
);

export const Loading: FC<LoadingProps> = ({ className }) => (
  <div className={css('pfext-m-loader', className)}>
    <div className="pfext-m-loader-dot__one" />
    <div className="pfext-m-loader-dot__two" />
    <div className="pfext-m-loader-dot__three" />
  </div>
);
Loading.displayName = 'Loading';

export const LoadingBox: FC<LoadingBoxProps> = ({ className, message }) => (
  <Box className={css('pfext-status-box--loading', className)}>
    <Loading />
    {message && <div className="pfext-status-box__loading-message">{message}</div>}
  </Box>
);
LoadingBox.displayName = 'LoadingBox';

export const EmptyBox: React.FC<EmptyBoxProps> = ({ label }) => {
  const { getResource } = useContext<QuickStartContextValues>(QuickStartContext);
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

interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

interface LoadingProps {
  className?: string;
}

interface LoadingBoxProps {
  className?: string;
  message?: string;
}

interface EmptyBoxProps {
  label?: string;
}
