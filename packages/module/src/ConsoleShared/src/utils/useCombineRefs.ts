import { MutableRefObject, Ref, useCallback } from 'react';

export const useCombineRefs = <RefType>(...refs: (Ref<RefType> | undefined)[]) =>
  useCallback(
    (element: RefType | null): void =>
      refs.forEach((ref) => {
        if (ref) {
          if (typeof ref === 'function') {
            ref(element);
          } else {
            (ref as MutableRefObject<any>).current = element;
          }
        }
      }),
    [refs],
  );
