import * as React from 'react';
import { SearchInput, SearchInputProps, ToolbarItem } from '@patternfly/react-core';
import { QuickStartContext, QuickStartContextValues } from '../../utils/quick-start-context';

interface QuickStartCatalogFilterSearchProps extends SearchInputProps {
  value: string;
  onChange: (newValue: string) => void;
}

const QuickStartCatalogFilterSearch: React.FC<QuickStartCatalogFilterSearchProps> = ({
  value,
  onChange,
  ...props
}) => {
  const { getResource } = React.useContext<QuickStartContextValues>(QuickStartContext);
  return (
    <ToolbarItem className="pfext-quick-start-catalog-filter__input">
      <SearchInput
        placeholder={getResource('Filter by keyword...')}
        value={value}
        onChange={onChange}
        onClear={() => onChange('')}
        {...props}
      />
    </ToolbarItem>
  );
};

export default QuickStartCatalogFilterSearch;
