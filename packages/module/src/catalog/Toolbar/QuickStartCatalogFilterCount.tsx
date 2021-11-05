import * as React from 'react';
import { ToolbarItem } from '@patternfly/react-core';
import { QuickStartContext, QuickStartContextValues } from '../../utils/quick-start-context';

interface QuickStartCatalogFilterCountProps {
  itemCount: number;
}

const QuickStartCatalogFilterCount: React.FC<QuickStartCatalogFilterCountProps> = ({
  itemCount,
}) => {
  const { getResource } = React.useContext<QuickStartContextValues>(QuickStartContext);
  return (
    <ToolbarItem
      className="pfext-quick-start-catalog-filter__count"
      alignment={{ default: 'alignRight' }}
    >
      {getResource('{{count, number}} item', itemCount).replace('{{count, number}}', itemCount)}
    </ToolbarItem>
  );
};

export default QuickStartCatalogFilterCount;
