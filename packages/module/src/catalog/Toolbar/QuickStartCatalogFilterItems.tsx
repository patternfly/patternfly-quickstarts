import * as React from 'react';
import {
  Badge,
  MenuToggle,
  MenuToggleElement,
  SearchInput,
  Select,
  SelectList,
  SelectOption,
  ToolbarItem,
} from '@patternfly/react-core';
import { removeQueryArgument, setQueryArgument } from '@console/internal/components/utils';
import { history } from '../../ConsoleInternal/components/utils/router';
import { QUICKSTART_SEARCH_FILTER_KEY, QUICKSTART_STATUS_FILTER_KEY } from '../../utils/const';
import { QuickStartContext, QuickStartContextValues } from '../../utils/quick-start-context';

export const QuickStartCatalogFilterSearch = ({ searchInputText, handleTextChange, ...props }) => {
  const { getResource } = React.useContext<QuickStartContextValues>(QuickStartContext);
  return (
    <ToolbarItem className="pfext-quick-start-catalog-filter__input">
      <SearchInput
        placeholder={getResource('Filter by keyword...')}
        value={searchInputText}
        onChange={handleTextChange}
        onClear={() => handleTextChange('')}
        {...props}
      />
    </ToolbarItem>
  );
};

export const QuickStartCatalogFilterSelect = ({
  isDropdownOpen,
  setIsDropdownOpen,
  onRowfilterSelect,
  selectedFilters,
  dropdownItems,
  ...props
}) => {
  const { getResource } = React.useContext<QuickStartContextValues>(QuickStartContext);

  const toggle = (toggleRef: React.Ref<MenuToggleElement>) => (
    <MenuToggle
      isFullWidth
      ref={toggleRef}
      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      isExpanded={isDropdownOpen}
    >
      {getResource('Status')}
      {selectedFilters.length > 0 && <Badge isRead>{selectedFilters.length}</Badge>}
    </MenuToggle>
  );

  return (
    <ToolbarItem>
      <Select
        aria-label={getResource('Select filter')}
        isOpen={isDropdownOpen}
        selected={selectedFilters}
        onSelect={onRowfilterSelect}
        onOpenChange={(isOpen) => setIsDropdownOpen(isOpen)}
        toggle={toggle}
        {...props}
      >
        <SelectList>{dropdownItems}</SelectList>
      </Select>
    </ToolbarItem>
  );
};

export const QuickStartCatalogFilterCount = ({ quickStartsCount }) => {
  const { getResource } = React.useContext<QuickStartContextValues>(QuickStartContext);
  return (
    <ToolbarItem
      className="pfext-quick-start-catalog-filter__count"
      align={{ default: 'alignRight' }}
    >
      {getResource('{{count, number}} item', quickStartsCount).replace(
        '{{count, number}}',
        quickStartsCount,
      )}
    </ToolbarItem>
  );
};

interface QuickStartCatalogFilterSearchWrapperProps {
  onSearchInputChange: any;
}
export const QuickStartCatalogFilterSearchWrapper: React.FC<
  QuickStartCatalogFilterSearchWrapperProps
> = ({ onSearchInputChange = () => {} }) => {
  const { useQueryParams, filter, setFilter } =
    React.useContext<QuickStartContextValues>(QuickStartContext);
  React.useEffect(() => {
    //   use this effect to clear the search when a `clear all` action is performed higher up
    const unlisten = history.listen(({ location }) => {
      const searchParams = new URLSearchParams(location.search);
      const searchQuery = searchParams.get(QUICKSTART_SEARCH_FILTER_KEY) || '';
      if (searchQuery === '') {
        setFilter('keyword', '');
        onSearchInputChange('');
      }
    });
    return () => {
      unlisten();
    };
  }, [onSearchInputChange, setFilter]);
  const handleTextChange = (val: string) => {
    if (val.length > 0) {
      useQueryParams && setQueryArgument(QUICKSTART_SEARCH_FILTER_KEY, val);
    } else {
      useQueryParams && removeQueryArgument(QUICKSTART_SEARCH_FILTER_KEY);
    }
    if (filter?.keyword !== val) {
      setFilter('keyword', val);
    }
    onSearchInputChange(val);
  };

  return (
    <QuickStartCatalogFilterSearch
      searchInputText={filter?.keyword}
      handleTextChange={handleTextChange}
    />
  );
};

// compare string/number arrays
export const equalsIgnoreOrder = (a: any[], b: any[]) => {
  if (a.length !== b.length) {
    return false;
  }
  const uniqueValues = new Set([...a, ...b]);
  for (const v of uniqueValues) {
    const aCount = a.filter((e) => e === v).length;
    const bCount = b.filter((e) => e === v).length;
    if (aCount !== bCount) {
      return false;
    }
  }
  return true;
};

interface QuickStartCatalogFilterStatusWrapperProps {
  onStatusChange: any;
}
export const QuickStartCatalogFilterStatusWrapper: React.FC<
  QuickStartCatalogFilterStatusWrapperProps
> = ({ onStatusChange = () => {} }) => {
  const { useQueryParams, filter, setFilter } =
    React.useContext<QuickStartContextValues>(QuickStartContext);
  React.useEffect(() => {
    //   use this effect to clear the status when a `clear all` action is performed higher up
    const unlisten = history.listen(({ location }) => {
      const searchParams = new URLSearchParams(location.search);
      const updatedStatusFilters = searchParams.get(QUICKSTART_STATUS_FILTER_KEY)?.split(',') || [];
      if (updatedStatusFilters.length === 0) {
        setFilter('status', []);
        onStatusChange([]);
      }
    });
    return () => {
      unlisten();
    };
  });
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  const onRowfilterSelect = React.useCallback(
    (e) => {
      setIsDropdownOpen(false);
      const selection = e.target.parentElement.getAttribute('data-key');
      const selectedFiltersList = filter.status.statusFilters.includes(selection)
        ? filter.status.statusFilters.filter((status) => status !== selection)
        : [...filter.status.statusFilters, selection];
      if (!equalsIgnoreOrder(filter.status.statusFilters, selectedFiltersList)) {
        setFilter('status', selectedFiltersList);
      }
      if (selectedFiltersList.length > 0) {
        useQueryParams && setQueryArgument('status', selectedFiltersList.join(','));
      } else {
        useQueryParams && removeQueryArgument(QUICKSTART_STATUS_FILTER_KEY);
      }
      onStatusChange(selectedFiltersList);
    },
    [filter.status.statusFilters, onStatusChange, setFilter, useQueryParams],
  );

  const dropdownItems = Object.entries(filter.status.statusTypes).map(([key, value]) => (
    <SelectOption key={key} data-key={key} value={value}>
      <>{value}</>
    </SelectOption>
  ));

  return (
    <QuickStartCatalogFilterSelect
      isDropdownOpen={isDropdownOpen}
      setIsDropdownOpen={setIsDropdownOpen}
      onRowfilterSelect={onRowfilterSelect}
      selectedFilters={filter.status.statusFilters}
      dropdownItems={dropdownItems}
    />
  );
};

interface QuickStartCatalogFilterCountWrapperProps {
  quickStartsCount: number;
}
export const QuickStartCatalogFilterCountWrapper: React.FC<
  QuickStartCatalogFilterCountWrapperProps
> = ({ quickStartsCount }) => <QuickStartCatalogFilterCount quickStartsCount={quickStartsCount} />;
