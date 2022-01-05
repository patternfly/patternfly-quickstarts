import * as React from 'react';
import Portal from './Portal';

const SimplePopper: React.FC = ({ children }) => {
  const openProp = true;
  const nodeRef = React.useRef<Element>();
  const popperRef = React.useRef(null);
  const [isOpen, setOpenState] = React.useState(openProp);

  const setOpen = React.useCallback((newOpen: boolean) => {
    setOpenState(newOpen);
  }, []);

  React.useEffect(() => {
    setOpen(openProp);
  }, [openProp, setOpen]);

  const onKeyDown = React.useCallback(
    (e: KeyboardEvent) => {
      if (e.keyCode === 27) {
        setOpen(false);
      }
    },
    [setOpen],
  );

  const onClickOutside = React.useCallback(
    (e: MouseEvent) => {
      if (!nodeRef.current || (e.target instanceof Node && !nodeRef.current.contains(e.target))) {
        setOpen(false);
      }
    },
    [setOpen],
  );

  const destroy = React.useCallback(() => {
    if (popperRef.current) {
      popperRef.current.destroy();
      document.removeEventListener('keydown', onKeyDown, true);
      document.removeEventListener('mousedown', onClickOutside, true);
      document.removeEventListener('touchstart', onClickOutside, true);
    }
  }, [onClickOutside, onKeyDown]);

  const initialize = React.useCallback(() => {
    if (!nodeRef.current || !isOpen) {
      return;
    }

    destroy();
  }, [isOpen, destroy]);

  const nodeRefCallback = React.useCallback(
    (node) => {
      nodeRef.current = node;
      initialize();
    },
    [initialize],
  );

  React.useEffect(() => {
    initialize();
  }, [initialize]);

  React.useEffect(() => {
    return () => {
      destroy();
    };
  }, [destroy]);

  React.useEffect(() => {
    if (!isOpen) {
      destroy();
    }
  }, [destroy, isOpen]);

  return isOpen ? (
    <Portal>
      <div
        ref={nodeRefCallback}
        style={{ zIndex: 9999, position: 'absolute', top: 0, left: 0 }}
        className="pfext-quick-start__base"
      >
        {children}
      </div>
    </Portal>
  ) : null;
};

export default SimplePopper;
