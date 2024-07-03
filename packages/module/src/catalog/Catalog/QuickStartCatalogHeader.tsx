import * as React from 'react';
import { Title } from '@patternfly/react-core';

export interface QuickStartCatalogHeaderProps {
  title: string;
  hint?: string;
}

export const QuickStartCatalogHeader: React.FC<QuickStartCatalogHeaderProps> = ({
  title,
  hint,
}) => (
  <div>
    <Title headingLevel='h1' data-pf-content="true">
      {title}
    </Title>
    {hint && <div>{hint}</div>}
  </div>
);
