import * as React from 'react';

export type QuickStartCatalogHeaderProps = {
  title: string;
  hint?: string;
};

export const QuickStartCatalogHeader: React.FC<QuickStartCatalogHeaderProps> = ({
  title,
  hint,
}) => (
  <div className="ocs-page-layout__header">
    <h1 data-pf-content="true" className="ocs-page-layout__title">
      {title}
    </h1>
    {hint && <div className="ocs-page-layout__hint">{hint}</div>}
  </div>
);
