import { FC, useCallback, useContext, useEffect, useState } from 'react';
import {
  Button,
  Content,
  Divider,
  EmptyState,
  EmptyStateActions,
  EmptyStateBody,
  EmptyStateFooter,
  PageSection,
  Title,
} from '@patternfly/react-core';
import SearchIcon from '@patternfly/react-icons/dist/js/icons/search-icon';
import { EmptyBox, LoadingBox, clearFilterParams } from '@console/internal/components/utils';
import QuickStartCatalog from './catalog/QuickStartCatalog';
import QuickStartCatalogFilter from './catalog/Toolbar/QuickStartCatalogFilter';
import { QuickStartContext, QuickStartContextValues } from './utils/quick-start-context';
import { QuickStart } from './utils/quick-start-types';
import { filterQuickStarts } from './utils/quick-start-utils';

export interface QuickStartCatalogPageProps {
  quickStarts?: QuickStart[];
  showFilter?: boolean;
  sortFnc?: (q1: QuickStart, q2: QuickStart) => number;
  title?: string;
  hint?: string;
  showTitle?: boolean;
}

export const QuickStartCatalogEmptyState = ({ clearFilters }) => {
  const { getResource } = useContext<QuickStartContextValues>(QuickStartContext);
  return (
    <EmptyState
      headingLevel="h4"
      icon={SearchIcon as any}
      titleText={<>{getResource('No results found')}</>}
    >
      <EmptyStateBody>
        {getResource(
          'No results match the filter criteria. Remove filters or clear all filters to show results.',
        )}
      </EmptyStateBody>

      <EmptyStateFooter>
        <EmptyStateActions>
          <Button variant="link" onClick={clearFilters} data-test="clear-filter button">
            {getResource('Clear all filters')}
          </Button>
        </EmptyStateActions>
      </EmptyStateFooter>
    </EmptyState>
  );
};

export const QuickStartCatalogPage: FC<QuickStartCatalogPageProps> = ({
  quickStarts,
  showFilter,
  sortFnc = (q1, q2) => q1.spec.displayName.localeCompare(q2.spec.displayName),
  title,
  hint,
  showTitle = true,
}) => {
  const sortFncCallback = useCallback(sortFnc, [sortFnc]);
  const {
    allQuickStarts = [],
    setAllQuickStarts,
    allQuickStartStates,
    getResource,
    filter,
    setFilter,
    loading,
  } = useContext<QuickStartContextValues>(QuickStartContext);

  useEffect(() => {
    // passed through prop, not context
    if (quickStarts && JSON.stringify(quickStarts) !== JSON.stringify(allQuickStarts)) {
      setAllQuickStarts(quickStarts);
    }
  }, [quickStarts, allQuickStarts, setAllQuickStarts]);

  const initialFilteredQuickStarts = showFilter
    ? filterQuickStarts(
        allQuickStarts,
        filter.keyword,
        filter.status.statusFilters,
        allQuickStartStates,
      ).sort(sortFncCallback)
    : allQuickStarts;

  const [filteredQuickStarts, setFilteredQuickStarts] = useState(initialFilteredQuickStarts);
  useEffect(() => {
    const filteredQs = showFilter
      ? filterQuickStarts(
          allQuickStarts,
          filter.keyword,
          filter.status.statusFilters,
          allQuickStartStates,
        ).sort(sortFncCallback)
      : allQuickStarts;
    // also needs a check whether the content of the QS changed
    if (
      filteredQs.length !== filteredQuickStarts.length ||
      JSON.stringify(filteredQs) !== JSON.stringify(filteredQuickStarts)
    ) {
      setFilteredQuickStarts(filteredQs);
    }
  }, [
    allQuickStarts,
    allQuickStartStates,
    showFilter,
    filter.keyword,
    filter.status.statusFilters,
    sortFncCallback,
    filteredQuickStarts,
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
    if (searchValue !== filter.keyword) {
      setFilter('keyword', searchValue);
    }
    if (result.length !== filteredQuickStarts.length) {
      setFilteredQuickStarts(result);
    }
  };

  const onStatusChange = (statusList) => {
    const result = filterQuickStarts(
      allQuickStarts,
      filter.keyword,
      statusList,
      allQuickStartStates,
    ).sort((q1, q2) => q1.spec.displayName.localeCompare(q2.spec.displayName));
    if (JSON.stringify(statusList) !== JSON.stringify(filter.status)) {
      setFilter('status', statusList);
    }
    if (result.length !== filteredQuickStarts.length) {
      setFilteredQuickStarts(result);
    }
  };

  if (loading) {
    return <LoadingBox />;
  }

  if (!allQuickStarts || allQuickStarts.length === 0) {
    return <EmptyBox label={getResource('Quick Starts')} />;
  }

  return (
    <>
      {(showTitle || showFilter) && (
        <PageSection hasBodyWrapper={false}>
          {showTitle && (
            <Content isEditorial>
              <Title headingLevel="h1" data-test="page-title">
                {title || getResource('Quick Starts')}
              </Title>
              {hint && <div>{hint}</div>}
            </Content>
          )}
          {showTitle && <Divider component="div" />}
          {showFilter && (
            <>
              <QuickStartCatalogFilter
                quickStartsCount={filteredQuickStarts.length}
                onSearchInputChange={onSearchInputChange}
                onStatusChange={onStatusChange}
              />
            </>
          )}
        </PageSection>
      )}
      <PageSection hasBodyWrapper={false}>
        {filteredQuickStarts.length === 0 ? (
          <QuickStartCatalogEmptyState clearFilters={clearFilters} />
        ) : (
          <QuickStartCatalog quickStarts={filteredQuickStarts} />
        )}
      </PageSection>
    </>
  );
};
