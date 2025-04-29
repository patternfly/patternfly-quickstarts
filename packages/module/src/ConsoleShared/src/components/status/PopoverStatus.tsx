import { FC, ReactNode } from 'react';
import { Button, Popover, PopoverPosition } from '@patternfly/react-core';

const PopoverStatus: FC<PopoverStatusProps> = ({
  hideHeader,
  children,
  isVisible = null,
  statusBody,
  title,
  onHide,
  onShow,
}) => (
  <Popover
    position={PopoverPosition.right}
    headerContent={hideHeader ? null : title}
    bodyContent={children}
    aria-label={title}
    onHide={onHide}
    onShow={onShow}
    isVisible={isVisible}
  >
    <Button variant="link" isInline>
      {statusBody}
    </Button>
  </Popover>
);

interface PopoverStatusProps {
  children: ReactNode;
  statusBody: ReactNode;
  onHide?: (event: MouseEvent | KeyboardEvent) => void;
  onShow?: (event: MouseEvent | KeyboardEvent) => void;
  title?: string;
  hideHeader?: boolean;
  isVisible?: boolean;
  shouldClose?: (hideFunction: any) => void;
}

export default PopoverStatus;
