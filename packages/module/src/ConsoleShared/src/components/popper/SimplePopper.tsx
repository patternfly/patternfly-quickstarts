import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import Portal from './Portal';

interface SimplePopperProps {
  children: ReactNode;
}

const SimplePopper = ({ children }: SimplePopperProps) => {
  const openProp = true;
  const nodeRef = useRef<Element>(null);
  const popperRef = useRef(null);
  const [isOpen, setOpenState] = useState(openProp);

  const setOpen = useCallback((newOpen: boolean) => {
    setOpenState(newOpen);
  }, []);

  useEffect(() => {
    setOpen(openProp);
  }, [openProp, setOpen]);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.keyCode === 27) {
        setOpen(false);
      }
    },
    [setOpen],
  );

  const onClickOutside = useCallback(
    (e: MouseEvent) => {
      if (!nodeRef.current || (e.target instanceof Node && !nodeRef.current.contains(e.target))) {
        setOpen(false);
      }
    },
    [setOpen],
  );

  const destroy = useCallback(() => {
    if (popperRef.current) {
      popperRef.current.destroy();
      document.removeEventListener('keydown', onKeyDown, true);
      document.removeEventListener('mousedown', onClickOutside, true);
      document.removeEventListener('touchstart', onClickOutside, true);
    }
  }, [onClickOutside, onKeyDown]);

  const initialize = useCallback(() => {
    if (!nodeRef.current || !isOpen) {
      return;
    }

    destroy();
  }, [isOpen, destroy]);

  const nodeRefCallback = useCallback(
    (node) => {
      nodeRef.current = node;
      initialize();
    },
    [initialize],
  );

  useEffect(() => {
    initialize();
  }, [initialize]);

  useEffect(
    () => () => {
      destroy();
    },
    [destroy],
  );

  useEffect(() => {
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
