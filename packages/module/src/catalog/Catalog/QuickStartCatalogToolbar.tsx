import * as React from 'react';
import { Toolbar } from '@patternfly/react-core';

export interface QuickStartCatalogToolbarProps {
  children: React.ReactNode;
}

export const QuickStartCatalogToolbar: React.FC<QuickStartCatalogToolbarProps> = ({ children }) => (
  <Toolbar>{children}</Toolbar>
);
