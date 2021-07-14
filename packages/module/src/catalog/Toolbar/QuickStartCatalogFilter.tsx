import * as React from 'react';
import { Toolbar, ToolbarContent, ToolbarProps } from '@patternfly/react-core';
import {
  QuickStartCatalogFilterCountWrapper,
  QuickStartCatalogFilterSearchWrapper,
  QuickStartCatalogFilterStatusWrapper,
} from './QuickStartCatalogFilterItems';

import './QuickStartCatalogFilter.scss';

interface QuickStartCatalogFilterProps extends Omit<ToolbarProps, 'ref'> {
  quickStartsCount: number;
  onSearchInputChange: any;
  onStatusChange: any;
}

const QuickStartCatalogFilter: React.FC<QuickStartCatalogFilterProps> = ({
  quickStartsCount,
  onSearchInputChange = () => {},
  onStatusChange = () => {},
  ...props
}) => {
  return (
    <div className="co-quick-start-panel-content">
      <Toolbar usePageInsets className="co-quick-start-catalog-filter__flex" {...props}>
        <ToolbarContent>
          <QuickStartCatalogFilterSearchWrapper onSearchInputChange={onSearchInputChange} />
          <QuickStartCatalogFilterStatusWrapper onStatusChange={onStatusChange} />
          <QuickStartCatalogFilterCountWrapper quickStartsCount={quickStartsCount} />
        </ToolbarContent>
      </Toolbar>
    </div>
  );
};

export default QuickStartCatalogFilter;
