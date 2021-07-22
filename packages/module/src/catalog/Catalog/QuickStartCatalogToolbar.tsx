import * as React from 'react';
import { Toolbar } from '@patternfly/react-core';

export type QuickStartCatalogToolbarProps = {
  children: React.ReactNode;
};

export const QuickStartCatalogToolbar: React.FC<QuickStartCatalogToolbarProps> = ({ children }) => (
  <Toolbar usePageInsets className="pfe-quick-start-catalog-filter__flex">
    {children}
  </Toolbar>
);
