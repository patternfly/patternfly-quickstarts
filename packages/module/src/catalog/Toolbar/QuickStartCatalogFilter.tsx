import * as React from 'react';
import { Toolbar, ToolbarContent, ToolbarProps } from '@patternfly/react-core';
import QuickStartCatalogFilterSearch from './QuickStartCatalogFilterSearch';
import QuickStartCatalogFilterStatus from './QuickStartCatalogFilterStatus';
import QuickStartCatalogFilterCount from './QuickStartCatalogFilterCount';

import './QuickStartCatalogFilter.scss';

interface QuickStartCatalogFilterProps extends Omit<ToolbarProps, 'ref'> {
  keywordFilter: string;
  setKeywordFilter: (newValue: string) => void;
  statusFilters: string[];
  setStatusFilters: (newValue: string[]) => void;
  itemCount: number;
}

const QuickStartCatalogFilter: React.FC<QuickStartCatalogFilterProps> = ({
  keywordFilter,
  setKeywordFilter,
  statusFilters,
  setStatusFilters,
  itemCount,
  ...props
}) => {
  return (
    <Toolbar usePageInsets className="pfext-quick-start-catalog-filter__flex" {...props}>
      <ToolbarContent>
        <QuickStartCatalogFilterSearch value={keywordFilter} onChange={setKeywordFilter} />
        <QuickStartCatalogFilterStatus value={statusFilters} onChange={setStatusFilters} />
        <QuickStartCatalogFilterCount itemCount={itemCount} />
      </ToolbarContent>
    </Toolbar>
  );
};

export default QuickStartCatalogFilter;
