import * as React from 'react';
import {
  QUICKSTART_SEARCH_FILTER_KEY,
  QUICKSTART_STATUS_FILTER_KEY,
  QuickStart,
  QuickStartCatalog,
  QuickStartCatalogEmptyState,
  QuickStartCatalogFilterCount,
  QuickStartCatalogFilterSearch,
  QuickStartCatalogFilterStatus,
  QuickStartCatalogHeader,
  QuickStartCatalogSection,
  QuickStartCatalogToolbar,
  QuickStartContext,
  QuickStartContextValues,
  QuickStartTile,
  filterQuickStarts,
  getQuickStartStatus,
  history,
  updateQueryArguments,
} from '@patternfly/quickstarts';
import {
  Divider,
  Gallery,
  GalleryItem,
  Text,
  TextContent,
  ToolbarContent,
} from '@patternfly/react-core';

export const CustomCatalog: React.FC = () => {
  const {
    activeQuickStartID,
    allQuickStartStates,
    allQuickStarts,
    useQueryParams,
  } = React.useContext<QuickStartContextValues>(QuickStartContext);

  const sortFnc = React.useCallback(
    (q1: QuickStart, q2: QuickStart) => q1.spec.displayName.localeCompare(q2.spec.displayName),
    [],
  );

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
    ).sort(sortFnc);
  }, [allQuickStarts, keywordFilter, statusFilters, allQuickStartStates, sortFnc]);

  const CatalogWithSections = (
    <>
      <QuickStartCatalogSection>
        <TextContent>
          <Text component="h2">Quick starts</Text>
          <Text component="p" className="catalog-sub">
            Step-by-step instructions and tasks
          </Text>
        </TextContent>
        <Gallery className="pfext-quick-start-catalog__gallery" hasGutter>
          {allQuickStarts
            .filter(
              (quickStart: QuickStart) =>
                !quickStart.spec.type || quickStart.spec.type.text !== 'Documentation',
            )
            .map((quickStart: QuickStart) => {
              const {
                metadata: { name: id },
              } = quickStart;

              return (
                <GalleryItem key={id} className="pfext-quick-start-catalog__gallery-item">
                  <QuickStartTile
                    quickStart={quickStart}
                    isActive={id === activeQuickStartID}
                    status={getQuickStartStatus(allQuickStartStates, id)}
                  />
                </GalleryItem>
              );
            })}
        </Gallery>
      </QuickStartCatalogSection>
      <QuickStartCatalogSection>
        <Divider />
      </QuickStartCatalogSection>
      <QuickStartCatalogSection>
        <TextContent>
          <Text component="h2">Documentation</Text>
          <Text component="p">Technical information for using the service</Text>
        </TextContent>
        <Gallery className="pfext-quick-start-catalog__gallery" hasGutter>
          {allQuickStarts
            .filter((quickStart: QuickStart) => quickStart.spec.type?.text === 'Documentation')
            .map((quickStart: QuickStart) => {
              const {
                metadata: { name: id },
              } = quickStart;

              return (
                <GalleryItem key={id}>
                  <QuickStartTile
                    quickStart={quickStart}
                    isActive={id === activeQuickStartID}
                    status={getQuickStartStatus(allQuickStartStates, id)}
                  />
                </GalleryItem>
              );
            })}
        </Gallery>
      </QuickStartCatalogSection>
    </>
  );

  return (
    <>
      <QuickStartCatalogHeader title="Resources" />
      <Divider component="div" />
      <QuickStartCatalogToolbar>
        <ToolbarContent>
          <QuickStartCatalogFilterSearch value={keywordFilter} onChange={setKeywordFilter} />
          <QuickStartCatalogFilterStatus value={statusFilters} onChange={setStatusFilters} />
          <QuickStartCatalogFilterCount itemCount={filteredQuickStarts.length} />
        </ToolbarContent>
      </QuickStartCatalogToolbar>
      <Divider component="div" />
      {filteredQuickStarts.length === 0 ? (
        <QuickStartCatalogEmptyState clearFilters={clearFilters} />
      ) : filteredQuickStarts.length !== allQuickStarts.length ? (
        <QuickStartCatalog quickStarts={filteredQuickStarts} />
      ) : (
        CatalogWithSections
      )}
    </>
  );
};
