import * as React from 'react';
import {
  Button,
  Divider,
  EmptyState,
  EmptyStateBody,
  EmptyStateIcon,
  EmptyStatePrimary,
  Text,
  Title,
} from '@patternfly/react-core';
import SearchIcon from '@patternfly/react-icons/dist/js/icons/search-icon';
import { EmptyBox, LoadingBox, clearFilterParams } from '@console/internal/components/utils';
import QuickStartCatalog from './catalog/QuickStartCatalog';
import QuickStartCatalogFilter from './catalog/Toolbar/QuickStartCatalogFilter';
import { QuickStartContext, QuickStartContextValues } from './utils/quick-start-context';
import { QuickStart } from './utils/quick-start-types';
import { filterQuickStarts } from './utils/quick-start-utils';

type QuickStartCatalogPageProps = {
  quickStarts?: QuickStart[];
  showFilter?: boolean;
  sortFnc?: (q1: QuickStart, q2: QuickStart) => number;
  title?: string;
  hint?: string;
  showTitle?: boolean;
};

export const QuickStartCatalogEmptyState = ({ clearFilters }) => {
  const { getResource } = React.useContext<QuickStartContextValues>(QuickStartContext);
  return (
    <EmptyState>
      <EmptyStateIcon icon={SearchIcon} />
      <Title size="lg" headingLevel="h4">
        {getResource('No results found')}
      </Title>
      <EmptyStateBody>
        {getResource(
          'No results match the filter criteria. Remove filters or clear all filters to show results.',
        )}
      </EmptyStateBody>
      <EmptyStatePrimary>
        <Button variant="link" onClick={clearFilters} data-test="clear-filter button">
          {getResource('Clear all filters')}
        </Button>
      </EmptyStatePrimary>
    </EmptyState>
  );
};

export const QuickStartCatalogPage: React.FC<QuickStartCatalogPageProps> = ({
  quickStarts,
  showFilter,
  sortFnc = (q1, q2) => q1.spec.displayName.localeCompare(q2.spec.displayName),
  title,
  hint,
  showTitle = true,
}) => {
  const sortFncCallback = React.useCallback(sortFnc, []);
  const {
    allQuickStarts = quickStarts,
    setAllQuickStarts,
    allQuickStartStates,
    getResource,
    filter,
    setFilter,
  } = React.useContext<QuickStartContextValues>(QuickStartContext);

  React.useEffect(() => {
    if (quickStarts) {
      setAllQuickStarts(quickStarts);
    }
  }, [quickStarts, setAllQuickStarts]);

  const initialFilteredQuickStarts = showFilter
    ? filterQuickStarts(
        allQuickStarts,
        filter.keyword,
        filter.status.statusFilters,
        allQuickStartStates,
      ).sort(sortFncCallback)
    : allQuickStarts;

  const [filteredQuickStarts, setFilteredQuickStarts] = React.useState(initialFilteredQuickStarts);
  React.useEffect(() => {
    const filteredQs = showFilter
      ? filterQuickStarts(
          allQuickStarts,
          filter.keyword,
          filter.status.statusFilters,
          allQuickStartStates,
        ).sort(sortFncCallback)
      : allQuickStarts;
    setFilteredQuickStarts(filteredQs);
  }, [
    allQuickStarts,
    allQuickStartStates,
    showFilter,
    filter.keyword,
    filter.status.statusFilters,
    sortFncCallback,
  ]);

  const clearFilters = () => {
    setFilter('keyword', '');
    setFilter('status', []);
    clearFilterParams();
    setFilteredQuickStarts(
      allQuickStarts.sort((q1, q2) => q1.spec.displayName.localeCompare(q2.spec.displayName)),
    );
  };

  const onSearchInputChange = (searchValue) => {
    const result = filterQuickStarts(
      allQuickStarts,
      searchValue,
      filter.status.statusFilters,
      allQuickStartStates,
    ).sort((q1, q2) => q1.spec.displayName.localeCompare(q2.spec.displayName));
    setFilter('keyword', searchValue);
    setFilteredQuickStarts(result);
  };

  const onStatusChange = (statusList) => {
    const result = filterQuickStarts(
      allQuickStarts,
      filter.keyword,
      statusList,
      allQuickStartStates,
    ).sort((q1, q2) => q1.spec.displayName.localeCompare(q2.spec.displayName));
    setFilter('status', statusList);
    setFilteredQuickStarts(result);
  };

  if (!allQuickStarts) {
    return <LoadingBox />;
  }
  return allQuickStarts.length === 0 ? (
    <EmptyBox label={getResource('Quick Starts')} />
  ) : (
    <>
      {showTitle && (
        <div className="pfext-page-layout__header">
          <Text component="h1" className="pfext-page-layout__title" data-test="page-title">
            {title || getResource('Quick Starts')}
          </Text>
          {hint && <div className="pfext-page-layout__hint">{hint}</div>}
        </div>
      )}
      {showTitle && <Divider component="div" />}
      {showFilter && (
        <>
          <QuickStartCatalogFilter
            quickStartsCount={filteredQuickStarts.length}
            onSearchInputChange={onSearchInputChange}
            onStatusChange={onStatusChange}
          />
          <Divider component="div" />
        </>
      )}
      <>
        {filteredQuickStarts.length === 0 ? (
          <QuickStartCatalogEmptyState clearFilters={clearFilters} />
        ) : (
          <QuickStartCatalog quickStarts={filteredQuickStarts} />
        )}
      </>
    </>
  );
};
