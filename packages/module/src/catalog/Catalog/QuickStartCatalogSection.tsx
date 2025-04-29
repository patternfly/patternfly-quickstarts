import { FC } from 'react';

export interface QuickStartCatalogSectionProps {
  children: React.ReactNode;
}

export const QuickStartCatalogSection: FC<QuickStartCatalogSectionProps> = ({ children }) => (
  <div>{children}</div>
);
