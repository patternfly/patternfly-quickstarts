import * as React from 'react';

export type QuickStartCatalogSectionProps = {
  children: React.ReactNode;
};

export const QuickStartCatalogSection: React.FC<QuickStartCatalogSectionProps> = ({ children }) => (
  <div className="ocs-page-layout__content is-dark">{children}</div>
);
