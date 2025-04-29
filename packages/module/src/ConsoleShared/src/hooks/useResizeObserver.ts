import { useEffect, useMemo } from 'react';

export const useResizeObserver = (
  callback: ResizeObserverCallback,
  targetElement?: HTMLElement | null,
  observerOptions: ResizeObserverOptions = undefined,
): void => {
  const element = useMemo(() => targetElement ?? document.querySelector('body'), [targetElement]);
  useEffect(() => {
    const observer = new ResizeObserver(callback);
    observer.observe(element, observerOptions);
    return () => {
      observer.disconnect();
    };
  }, [callback, observerOptions, element]);
};
