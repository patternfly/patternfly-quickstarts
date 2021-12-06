import * as React from 'react';
import {
  QuickStart,
  QuickStartCatalog,
  QuickStartCatalogEmptyState,
  QuickStartCatalogFilterCountWrapper,
  QuickStartCatalogFilterSearchWrapper,
  QuickStartCatalogFilterStatusWrapper,
  QuickStartCatalogHeader,
  QuickStartCatalogSection,
  QuickStartCatalogToolbar,
  QuickStartContext,
  QuickStartContextValues,
  QuickStartTile,
  clearFilterParams,
  filterQuickStarts,
  getQuickStartStatus,
} from '@patternfly/quickstarts';
import {
  Divider,
  Gallery,
  GalleryItem,
  Text,
  TextContent,
  ToolbarContent,
} from '@patternfly/react-core';

type CustomCatalogProps = {
  // Pass a custom filter function to only show certain quickstarts regardless of search criteria
  customFilter?: (quickStart: QuickStart) => boolean;
  // Custom header title
  headerTitle?: string;
};

export const CustomCatalog: React.FC<CustomCatalogProps> = ({
  customFilter,
  headerTitle = 'Resources',
}) => {
  const {
    activeQuickStartID,
    allQuickStartStates,
    allQuickStarts,
    filter,
    setFilter,
  } = React.useContext<QuickStartContextValues>(QuickStartContext);

  const sortFnc = (q1: QuickStart, q2: QuickStart) =>
    q1.spec.displayName.localeCompare(q2.spec.displayName);

  const [filteredQuickStarts, setFilteredQuickStarts] = React.useState<QuickStart[]>(
    filterQuickStarts(
      allQuickStarts,
      filter.keyword,
      filter.status.statusFilters,
      allQuickStartStates,
    ).sort(sortFnc),
  );

  React.useEffect(() => {
    // callback on state change
    setFilteredQuickStarts(
      filterQuickStarts(
        allQuickStarts,
        filter.keyword,
        filter.status.statusFilters,
        allQuickStartStates,
      )
        .sort(sortFnc)
        .filter((quickStart) => {
          return customFilter ? customFilter(quickStart) : true;
        }),
    );
  }, [
    allQuickStartStates,
    allQuickStarts,
    customFilter,
    filter.keyword,
    filter.status.statusFilters,
    setFilter,
  ]);

  const onSearchInputChange = (searchValue: string) => {
    const result = filterQuickStarts(
      allQuickStarts,
      searchValue,
      filter.status.statusFilters,
      allQuickStartStates,
    ).sort((q1: QuickStart, q2: QuickStart) =>
      q1.spec.displayName.localeCompare(q2.spec.displayName),
    );
    setFilter('keyword', searchValue);
    setFilteredQuickStarts(result);
  };

  const onStatusChange = (statusList: string[]) => {
    const result = filterQuickStarts(
      allQuickStarts,
      filter.keyword,
      statusList,
      allQuickStartStates,
    ).sort((q1: QuickStart, q2: QuickStart) =>
      q1.spec.displayName.localeCompare(q2.spec.displayName),
    );
    setFilter('status', statusList);
    setFilteredQuickStarts(result);
  };

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

  const clearFilters = () => {
    setFilter('keyword', '');
    setFilter('status', []);
    clearFilterParams();
    setFilteredQuickStarts(
      allQuickStarts.sort((q1: QuickStart, q2: QuickStart) =>
        q1.spec.displayName.localeCompare(q2.spec.displayName),
      ),
    );
  };

  return (
    <>
      <QuickStartCatalogHeader title={headerTitle} />
      <Divider component="div" />
      <QuickStartCatalogToolbar>
        <ToolbarContent>
          <QuickStartCatalogFilterSearchWrapper onSearchInputChange={onSearchInputChange} />
          <QuickStartCatalogFilterStatusWrapper onStatusChange={onStatusChange} />
          <QuickStartCatalogFilterCountWrapper quickStartsCount={filteredQuickStarts.length} />
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
