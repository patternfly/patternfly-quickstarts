import { FC, useContext } from 'react';
import QuickStartPanelContent from './QuickStartPanelContent';
import { QuickStartContext, QuickStartContextValues } from './utils/quick-start-context';
import { QuickStart } from './utils/quick-start-types';

export interface QuickStartDrawerContentProps extends React.HTMLProps<HTMLDivElement> {
  quickStarts?: QuickStart[];
  appendTo?: HTMLElement | (() => HTMLElement);
  fullWidth?: boolean;
  onCloseInProgress?: any;
  onCloseNotInProgress?: any;
  handleDrawerClose?: (quickStartStatus: string | number) => void;
}

export const QuickStartDrawerContent: FC<QuickStartDrawerContentProps> = ({
  quickStarts = [],
  appendTo,
  fullWidth,
  handleDrawerClose,
  ...props
}) => {
  const {
    activeQuickStartID,
    allQuickStarts = [],
    activeQuickStartState,
  } = useContext<QuickStartContextValues>(QuickStartContext);
  const combinedQuickStarts = [
    ...allQuickStarts,
    ...quickStarts,
  ].filter(
    (qs, idx, arr) => arr.findIndex(q => q.metadata.name === qs.metadata.name) === idx
  );

  const handleClose = () => {
    handleDrawerClose && handleDrawerClose(activeQuickStartState?.status);
  };

  const fullWidthPanelStyle = fullWidth
    ? {
        style: {
          flex: 1,
        },
      }
    : {};

  return (
    <QuickStartPanelContent
      quickStarts={combinedQuickStarts}
      handleClose={handleClose}
      activeQuickStartID={activeQuickStartID}
      appendTo={appendTo}
      isResizable={!fullWidth}
      {...fullWidthPanelStyle}
      {...props}
    />
  );
};

export default QuickStartDrawerContent;
