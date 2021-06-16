import * as React from 'react';
import { QuickStartContext, QuickStartContextValues } from '../../utils/quick-start-context';
import {
  SearchInput,
  Select,
  SelectVariant,
  SelectOption,
  ToolbarItem,
} from '@patternfly/react-core';
import { QuickStartStatus } from '../../utils/quick-start-types';
import { QUICKSTART_SEARCH_FILTER_KEY, QUICKSTART_STATUS_FILTER_KEY } from '../../utils/const';
import { removeQueryArgument, setQueryArgument } from '@console/internal/components/utils';
import { history } from '../../ConsoleInternal/components/utils/router';

export const QuickStartCatalogFilterSearch = ({ searchInputText, handleTextChange, ...props }) => {
  const { getResource } = React.useContext<QuickStartContextValues>(QuickStartContext);
  return (
    <ToolbarItem className="co-quick-start-catalog-filter__input">
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
  return (
    <ToolbarItem>
      <Select
        variant={SelectVariant.checkbox}
        aria-label={getResource('Select filter')}
        isOpen={isDropdownOpen}
        onToggle={(isEnabled) => setIsDropdownOpen(isEnabled)}
        placeholderText={getResource('Status')}
        onSelect={onRowfilterSelect}
        selections={selectedFilters}
        {...props}
      >
        {dropdownItems}
      </Select>
    </ToolbarItem>
  );
};

export const QuickStartCatalogFilterCount = ({ quickStartsCount }) => {
  const { getResource } = React.useContext<QuickStartContextValues>(QuickStartContext);
  return (
    <ToolbarItem
      className="co-quick-start-catalog-filter__count"
      alignment={{ default: 'alignRight' }}
    >
      {getResource('{{count, number}} item', quickStartsCount).replace('{{count, number}}', quickStartsCount)}
    </ToolbarItem>
  );
};

interface QuickStartCatalogFilterSearchWrapperProps {
  onSearchInputChange: any;
}
export const QuickStartCatalogFilterSearchWrapper: React.FC<QuickStartCatalogFilterSearchWrapperProps> = ({
  onSearchInputChange = () => {},
}) => {
  const { useQueryParams } = React.useContext<QuickStartContextValues>(QuickStartContext);
  React.useEffect(() => {
    //   use this effect to clear the search when a `clear all` action is performed higher up
    const unlisten = history.listen(({ action, location }) => {
      const searchParams = new URLSearchParams(location.search);
      const searchQuery = searchParams.get(QUICKSTART_SEARCH_FILTER_KEY) || '';
      if (searchQuery === '') {
        setSearchInputText('');
        onSearchInputChange('');
      }
    });
    return () => {
      unlisten();
    };
  });
  const initialSearchParams = new URLSearchParams(window.location.search);
  const initialSearchQuery = initialSearchParams.get(QUICKSTART_SEARCH_FILTER_KEY) || '';
  const [searchInputText, setSearchInputText] = React.useState<string>(initialSearchQuery);
  const handleTextChange = (val: string) => {
    if (useQueryParams) {
      if (val.length > 0) {
        setQueryArgument(QUICKSTART_SEARCH_FILTER_KEY, val);
      } else {
        removeQueryArgument(QUICKSTART_SEARCH_FILTER_KEY);
      }
    }
    if (searchInputText !== val) {
      setSearchInputText(val);
    }
    onSearchInputChange(val);
  };

  return (
    <QuickStartCatalogFilterSearch
      searchInputText={searchInputText}
      handleTextChange={handleTextChange}
    />
  );
};

// compare string/number arrays
export const equalsIgnoreOrder = (a: any[], b: any[]) => {
  if (a.length !== b.length) return false;
  const uniqueValues = new Set([...a, ...b]);
  for (const v of uniqueValues) {
    const aCount = a.filter((e) => e === v).length;
    const bCount = b.filter((e) => e === v).length;
    if (aCount !== bCount) return false;
  }
  return true;
};

interface QuickStartCatalogFilterStatusWrapperProps {
  quickStartStatusCount: Record<QuickStartStatus, number>;
  onStatusChange: any;
}
export const QuickStartCatalogFilterStatusWrapper: React.FC<QuickStartCatalogFilterStatusWrapperProps> = ({
  quickStartStatusCount,
  onStatusChange = () => {},
}) => {
  React.useEffect(() => {
    //   use this effect to clear the status when a `clear all` action is performed higher up
    const unlisten = history.listen(({ action, location }) => {
      const searchParams = new URLSearchParams(location.search);
      const updatedStatusFilters = searchParams.get(QUICKSTART_STATUS_FILTER_KEY)?.split(',') || [];
      if (updatedStatusFilters.length === 0) {
        setStatusFilters([]);
        setSelectedFilters([]);
        onStatusChange([]);
      }
    });
    return () => {
      unlisten();
    };
  });
  const { useQueryParams, getResource } = React.useContext<QuickStartContextValues>(QuickStartContext);
  const statusTypes = {
    [QuickStartStatus.COMPLETE]: getResource('Complete ({{statusCount, number}})').replace('{{statusCount, number}}', quickStartStatusCount[QuickStartStatus.COMPLETE]),
    [QuickStartStatus.IN_PROGRESS]: getResource('In progress ({{statusCount, number}})').replace('{{statusCount, number}}', quickStartStatusCount[QuickStartStatus.IN_PROGRESS]),
    [QuickStartStatus.NOT_STARTED]: getResource('Not started ({{statusCount, number}})').replace('{{statusCount, number}}', quickStartStatusCount[QuickStartStatus.NOT_STARTED]),
  };
  const initialSearchParams = new URLSearchParams(window.location.search);
  const initialStatusFilters =
    initialSearchParams.get(QUICKSTART_STATUS_FILTER_KEY)?.split(',') || [];

  const [statusFilters, setStatusFilters] = React.useState<string[]>(initialStatusFilters);
  const [selectedFilters, setSelectedFilters] = React.useState<string[]>(
    initialStatusFilters.map((filter) => statusTypes[filter]),
  );
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  const onRowfilterSelect = React.useCallback(
    (e, val) => {
      setIsDropdownOpen(false);
      const selection = e.target.parentElement.getAttribute('data-key');
      const selectedFiltersList = statusFilters.includes(selection)
        ? statusFilters.filter((status) => status !== selection)
        : [...statusFilters, selection];
      if (!equalsIgnoreOrder(statusFilters, selectedFiltersList)) {
        setStatusFilters(selectedFiltersList);
        setSelectedFilters(selectedFiltersList.map((filterKey) => statusTypes[filterKey]));
      }
      if (useQueryParams) {
        if (selectedFiltersList.length > 0) {
          setQueryArgument('status', selectedFiltersList.join(','));
        } else {
          removeQueryArgument(QUICKSTART_STATUS_FILTER_KEY);
        }
      }
      onStatusChange(selectedFiltersList);
    },
    [statusFilters, statusTypes],
  );

  const dropdownItems = Object.entries(statusTypes).map(([key, val]) => (
    <SelectOption key={key} data-key={key} value={val} />
  ));

  return (
    <QuickStartCatalogFilterSelect
      isDropdownOpen={isDropdownOpen}
      setIsDropdownOpen={setIsDropdownOpen}
      onRowfilterSelect={onRowfilterSelect}
      selectedFilters={selectedFilters}
      dropdownItems={dropdownItems}
    />
  );
};

interface QuickStartCatalogFilterCountWrapperProps {
  quickStartsCount: number;
}
export const QuickStartCatalogFilterCountWrapper: React.FC<QuickStartCatalogFilterCountWrapperProps> = ({
  quickStartsCount,
}) => {
  return <QuickStartCatalogFilterCount quickStartsCount={quickStartsCount} />;
};
