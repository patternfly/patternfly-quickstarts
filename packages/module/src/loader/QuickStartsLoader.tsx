import * as React from 'react';
import { QuickStart } from '../utils/quick-start-types';
import QuickStartPermissionChecker from './QuickStartPermissionChecker';
import { QuickStartContext, QuickStartContextValues } from '../utils/quick-start-context';
import { isDisabledQuickStart, getDisabledQuickStarts } from '../utils/quick-start-utils';

type QuickStartsLoaderProps = {
  children: (quickStarts: QuickStart[], loaded: boolean) => React.ReactNode;
  loader?: any;
};

const QuickStartsLoader: React.FC<QuickStartsLoaderProps> = ({ children, loader }) => {
  let [quickStarts, quickStartsLoaded] = [[], false];
  if (loader) {
    [quickStarts, quickStartsLoaded] = loader();
  } else {
    [quickStarts, quickStartsLoaded] = [
      React.useContext<QuickStartContextValues>(QuickStartContext).allQuickStarts,
      true,
    ];
  }
  const enabledQuickstarts = React.useMemo(() => {
    const disabledQuickStarts = getDisabledQuickStarts();
    return disabledQuickStarts?.length > 0
      ? quickStartsLoaded
        ? quickStarts.filter((qs) => !isDisabledQuickStart(qs, disabledQuickStarts))
        : []
      : quickStarts;
  }, [quickStarts, quickStartsLoaded]);

  const [allowedQuickStarts, setAllowedQuickStarts] = React.useState<QuickStart[]>([]);
  const [loaded, setLoaded] = React.useState<boolean>(!(enabledQuickstarts.length > 0));
  const permissionChecks = React.useRef<{ [name: string]: boolean }>({});

  const handlePermissionCheck = React.useCallback(
    (quickStart, hasPermission) => {
      permissionChecks.current[quickStart.metadata.name] = hasPermission;
      if (Object.keys(permissionChecks.current).length === enabledQuickstarts.length) {
        const filteredQuickStarts = enabledQuickstarts.filter(
          (quickstart) => permissionChecks.current[quickstart.metadata.name],
        );
        setAllowedQuickStarts(filteredQuickStarts);
        setLoaded(true);
      }
    },
    [enabledQuickstarts],
  );

  return (
    <>
      {enabledQuickstarts.map((quickstart) => {
        return (
          <QuickStartPermissionChecker
            key={quickstart.metadata.name}
            quickStart={quickstart}
            onPermissionCheck={handlePermissionCheck}
          />
        );
      })}
      {children(allowedQuickStarts, loaded)}
    </>
  );
};

export default QuickStartsLoader;
