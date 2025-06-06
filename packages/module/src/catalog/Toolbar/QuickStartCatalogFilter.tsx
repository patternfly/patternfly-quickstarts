import { FC } from 'react';
import { Toolbar, ToolbarContent, ToolbarProps } from '@patternfly/react-core';
import {
  QuickStartCatalogFilterCountWrapper,
  QuickStartCatalogFilterSearchWrapper,
  QuickStartCatalogFilterStatusWrapper,
} from './QuickStartCatalogFilterItems';

interface QuickStartCatalogFilterProps extends Omit<ToolbarProps, 'ref'> {
  quickStartsCount: number;
  onSearchInputChange: any;
  onStatusChange: any;
}

const QuickStartCatalogFilter: FC<QuickStartCatalogFilterProps> = ({
  quickStartsCount,
  onSearchInputChange = () => {},
  onStatusChange = () => {},
  ...props
}) => (
  <Toolbar {...props}>
    <ToolbarContent>
      <QuickStartCatalogFilterSearchWrapper onSearchInputChange={onSearchInputChange} />
      <QuickStartCatalogFilterStatusWrapper onStatusChange={onStatusChange} />
      <QuickStartCatalogFilterCountWrapper quickStartsCount={quickStartsCount} />
    </ToolbarContent>
  </Toolbar>
);

export default QuickStartCatalogFilter;
