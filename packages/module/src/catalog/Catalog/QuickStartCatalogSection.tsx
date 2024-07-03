import * as React from 'react';

export interface QuickStartCatalogSectionProps {
  children: React.ReactNode;
}

export const QuickStartCatalogSection: React.FC<QuickStartCatalogSectionProps> = ({ children }) => (
  <div>{children}</div>
);
