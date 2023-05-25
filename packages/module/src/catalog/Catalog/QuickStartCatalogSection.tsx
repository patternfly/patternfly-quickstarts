import * as React from 'react';

export interface QuickStartCatalogSectionProps {
  children: React.ReactNode;
}

export const QuickStartCatalogSection: React.FC<QuickStartCatalogSectionProps> = ({ children }) => (
  <div className="pfext-page-layout__content">{children}</div>
);
