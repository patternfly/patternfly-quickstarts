import * as React from 'react';
import {
  QuickStart,
  QuickStartCatalog,
  getQuickStartStatus,
  QuickStartContextValues,
  QuickStartContext,
  QuickStartTile,
  getQuickStartStatusCount,
  filterQuickStarts,
  QuickStartCatalogEmptyState,
  QUICKSTART_SEARCH_FILTER_KEY,
  QUICKSTART_STATUS_FILTER_KEY,
  QuickStartCatalogFilterSearchWrapper,
  QuickStartCatalogFilterStatusWrapper,
  QuickStartCatalogFilterCountWrapper,
  clearQuickStartFilters,
  QuickStartCatalogHeader,
  QuickStartCatalogToolbar,
  QuickStartCatalogSection,
} from '@patternfly/quickstarts';
import {
  PageSection,
  PageSectionVariants,
  TextContent,
  Text,
  Divider,
  Gallery,
  GalleryItem,
  Toolbar,
  ToolbarContent,
} from '@patternfly/react-core';

type CustomCatalogProps = {
  quickStarts: QuickStart[];
};

export const CustomCatalog: React.FC<CustomCatalogProps> = ({ quickStarts }) => {
  const { activeQuickStartID, allQuickStartStates } = React.useContext<QuickStartContextValues>(
    QuickStartContext,
  );

  const initialQueryParams = new URLSearchParams(window.location.search);
  const initialSearchQuery = initialQueryParams.get(QUICKSTART_SEARCH_FILTER_KEY) || '';
  const [searchInputText, setSearchInputText] = React.useState<string>(initialSearchQuery);
  const initialStatusFilters =
    initialQueryParams.get(QUICKSTART_STATUS_FILTER_KEY)?.split(',') || [];
  const [statusFilters, setStatusFilters] = React.useState<string[]>(initialStatusFilters);

  const sortFnc = (q1: QuickStart, q2: QuickStart) =>
    q1.spec.displayName.localeCompare(q2.spec.displayName);
  const initialFilteredQuickStarts = filterQuickStarts(
    quickStarts,
    initialSearchQuery,
    initialStatusFilters,
    allQuickStartStates,
  ).sort(sortFnc);
  const [filteredQuickStarts, setFilteredQuickStarts] = React.useState<QuickStart[]>(
    initialFilteredQuickStarts,
  );

  const quickStartStatusCount = React.useMemo(
    () => getQuickStartStatusCount(allQuickStartStates, quickStarts),
    [allQuickStartStates, quickStarts],
  );
  const onSearchInputChange = (searchValue: string) => {
    const result = filterQuickStarts(
      quickStarts,
      searchValue,
      statusFilters,
      allQuickStartStates,
    ).sort((q1, q2) => q1.spec.displayName.localeCompare(q2.spec.displayName));
    setSearchInputText(searchValue);
    setFilteredQuickStarts(result);
  };
  const onStatusChange = (statusList: string[]) => {
    const result = filterQuickStarts(
      quickStarts,
      searchInputText,
      statusList,
      allQuickStartStates,
    ).sort((q1, q2) => q1.spec.displayName.localeCompare(q2.spec.displayName));
    setStatusFilters(statusList);
    setFilteredQuickStarts(result);
  };

  const CatalogWithSections = (
    <>
      <QuickStartCatalogSection>
        <TextContent>
          <Text component="h2">Quick starts</Text>
          <Text component="p">Step-by-step instructions and tasks</Text>
        </TextContent>
        <Gallery className="co-quick-start-catalog__gallery" hasGutter>
          {quickStarts
            .filter(
              (quickStart) =>
                !quickStart.spec.type || quickStart.spec.type.text !== 'Documentation',
            )
            .map((quickStart) => {
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
      <QuickStartCatalogSection>
        <Divider />
      </QuickStartCatalogSection>
      <QuickStartCatalogSection>
        <TextContent>
          <Text component="h2">Documentation</Text>
          <Text component="p">Technical information for using the service</Text>
        </TextContent>
        <Gallery className="co-quick-start-catalog__gallery" hasGutter>
          {quickStarts
            .filter((quickStart) => quickStart.spec.type?.text === 'Documentation')
            .map((quickStart) => {
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
    clearQuickStartFilters();
    setFilteredQuickStarts(
      quickStarts.sort((q1, q2) => q1.spec.displayName.localeCompare(q2.spec.displayName)),
    );
  };

  return (
    <>
      <QuickStartCatalogHeader title="Resources" />
      <Divider component="div" />
      <QuickStartCatalogToolbar>
        <ToolbarContent>
          <QuickStartCatalogFilterSearchWrapper onSearchInputChange={onSearchInputChange} />
          {/* <QuickStartCatalogFilterStatusWrapper
            quickStartStatusCount={quickStartStatusCount}
            onStatusChange={onStatusChange}
          /> */}
          <QuickStartCatalogFilterCountWrapper quickStartsCount={filteredQuickStarts.length} />
        </ToolbarContent>
      </QuickStartCatalogToolbar>
      <Divider component="div" />
      {filteredQuickStarts.length === 0 ? (
        <QuickStartCatalogEmptyState clearFilters={clearFilters} />
      ) : filteredQuickStarts.length !== quickStarts.length ? (
        <QuickStartCatalogSection>
          <QuickStartCatalog quickStarts={filteredQuickStarts} />
        </QuickStartCatalogSection>
      ) : (
        CatalogWithSections
      )}
    </>
  );
};
