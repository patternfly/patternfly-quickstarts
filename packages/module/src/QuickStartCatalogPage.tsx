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
import {
  EmptyBox,
  LoadingBox,
  history,
  updateQueryArguments,
} from '@console/internal/components/utils';
import QuickStartCatalog from './catalog/QuickStartCatalog';
import QuickStartCatalogFilter from './catalog/Toolbar/QuickStartCatalogFilter';
import { QUICKSTART_SEARCH_FILTER_KEY, QUICKSTART_STATUS_FILTER_KEY } from './utils/const';
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
    allQuickStarts = [],
    setAllQuickStarts,
    allQuickStartStates,
    getResource,
    loading,
    useQueryParams,
  } = React.useContext<QuickStartContextValues>(QuickStartContext);

  React.useEffect(() => {
    // passed through prop, not context
    if (quickStarts && JSON.stringify(quickStarts) !== JSON.stringify(allQuickStarts)) {
      setAllQuickStarts(quickStarts);
    }
  }, [quickStarts, allQuickStarts, setAllQuickStarts]);

  const [keywordFilter, setKeywordFilter] = React.useState<string>(() => {
    if (useQueryParams) {
      const searchParams = new URLSearchParams(location.search);
      return searchParams.get(QUICKSTART_SEARCH_FILTER_KEY) || '';
    }
    return '';
  });
  const [statusFilters, setStatusFilters] = React.useState<string[]>(() => {
    if (useQueryParams) {
      const searchParams = new URLSearchParams(location.search);
      return searchParams.get(QUICKSTART_STATUS_FILTER_KEY)?.split(',') || [];
    }
    return [];
  });

  const clearFilters = React.useCallback(() => {
    if (useQueryParams) {
      updateQueryArguments({
        [QUICKSTART_SEARCH_FILTER_KEY]: '',
        [QUICKSTART_STATUS_FILTER_KEY]: [],
      });
    } else {
      setKeywordFilter('');
      setStatusFilters([]);
    }
  }, [useQueryParams]);

  // Update filters when URL changed, for example a `clear all` action is performed higher up
  React.useEffect(() => {
    if (useQueryParams) {
      return history.listen(() => {
        const searchParams = new URLSearchParams(location.search);
        const urlKeywordFilter = searchParams.get(QUICKSTART_SEARCH_FILTER_KEY) || '';
        const urlStatusFilters = searchParams.get(QUICKSTART_STATUS_FILTER_KEY) || '';
        if (urlKeywordFilter !== keywordFilter) {
          setKeywordFilter(urlKeywordFilter);
        }
        if (urlStatusFilters !== statusFilters.join(',')) {
          setStatusFilters(urlStatusFilters ? urlStatusFilters.split(',') : []);
        }
      });
    }
  }, [useQueryParams, keywordFilter, statusFilters]);

  // Update URL when filters changed
  React.useEffect(() => {
    if (useQueryParams) {
      updateQueryArguments({
        [QUICKSTART_SEARCH_FILTER_KEY]: keywordFilter,
        [QUICKSTART_STATUS_FILTER_KEY]: statusFilters,
      });
    }
  }, [useQueryParams, keywordFilter, statusFilters]);

  // Reactive update of the filtered quick starts
  const filteredQuickStarts = React.useMemo(() => {
    return filterQuickStarts(
      allQuickStarts,
      keywordFilter,
      statusFilters,
      allQuickStartStates,
    ).sort(sortFncCallback);
  }, [allQuickStarts, keywordFilter, statusFilters, allQuickStartStates, sortFncCallback]);

  if (loading) {
    return <LoadingBox />;
  }

  if (!allQuickStarts || allQuickStarts.length === 0) {
    return <EmptyBox label={getResource('Quick Starts')} />;
  }

  return (
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
            keywordFilter={keywordFilter}
            setKeywordFilter={setKeywordFilter}
            statusFilters={statusFilters}
            setStatusFilters={setStatusFilters}
            itemCount={filteredQuickStarts.length}
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
