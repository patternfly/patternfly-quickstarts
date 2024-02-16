import * as React from 'react';

export const useCombineRefs = <RefType>(...refs: (React.Ref<RefType> | undefined)[]) =>
  React.useCallback(
    (element: RefType | null): void =>
      refs.forEach((ref) => {
        if (ref) {
          if (typeof ref === 'function') {
            ref(element);
          } else {
            (ref as React.MutableRefObject<any>).current = element;
          }
        }
      }),
    [refs],
  );
