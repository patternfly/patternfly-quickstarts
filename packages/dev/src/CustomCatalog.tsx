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
  LoadingBox,
} from '@patternfly/quickstarts';
import BookmarkIcon from '@patternfly/react-icons/dist/esm/icons/bookmark-icon';
import OutlinedBookmarkIcon from '@patternfly/react-icons/dist/esm/icons/outlined-bookmark-icon';
import {
  Divider,
  Gallery,
  GalleryItem,
  Text,
  TextContent,
  ToolbarContent,
} from '@patternfly/react-core';

export const CustomCatalog: React.FC = () => {
  const { activeQuickStartID, allQuickStartStates, allQuickStarts, filter, setFilter, loading } =
    React.useContext<QuickStartContextValues>(QuickStartContext);

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
      ).sort(sortFnc),
    );
  }, [allQuickStartStates, allQuickStarts, filter.keyword, filter.status.statusFilters]);

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

  const [bookmarked, setBookmarked] = React.useState<string[]>([]);

  const CatalogWithSections = (
      <>
        {bookmarked.length > 0 && (
          <QuickStartCatalogSection>
            <TextContent>
              <Text component="h2">Bookmarked</Text>
              <Text component="p" className="catalog-sub">
                Bookmarked examples
              </Text>
            </TextContent>
            <Gallery className="pfext-quick-start-catalog__gallery" hasGutter>
              {allQuickStarts
                .filter((quickStart: QuickStart) => bookmarked.includes(quickStart.metadata.name))
                .map((quickStart: QuickStart) => {
                  const {
                    metadata: { name: id },
                  } = quickStart;

                  return (
                    <GalleryItem key={id} className="pfext-quick-start-catalog__gallery-item">
                      <QuickStartTile
                        action={{
                          onClick: (e: React.SyntheticEvent) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setBookmarked((prev) => {
                              if (prev.includes(id)) {
                                return prev.filter((bookmark) => bookmark !== id);
                              }

                              return [...prev, id];
                            });
                          },
                          icon: bookmarked.includes(id) ? BookmarkIcon : OutlinedBookmarkIcon,
                          'aria-label': 'bookmark',
                        }}
                        quickStart={quickStart}
                        isActive={id === activeQuickStartID}
                        status={getQuickStartStatus(allQuickStartStates, id)}
                      />
                    </GalleryItem>
                  );
                })}
            </Gallery>
          </QuickStartCatalogSection>
        )}
        <QuickStartCatalogSection>
          <TextContent>
            <Text component="h2">Instructional</Text>
            <Text component="p" className="catalog-sub">
              Instructional examples
            </Text>
          </TextContent>
          <Gallery className="pfext-quick-start-catalog__gallery" hasGutter>
            {allQuickStarts
              .filter((quickStart: QuickStart) => quickStart.metadata.instructional)
              .map((quickStart: QuickStart) => {
                const {
                  metadata: { name: id },
                } = quickStart;

                return (
                  <GalleryItem key={id} className="pfext-quick-start-catalog__gallery-item">
                    <QuickStartTile
                      action={{
                        onClick: (e: React.SyntheticEvent) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setBookmarked((prev) => {
                            if (prev.includes(id)) {
                              return prev.filter((bookmark) => bookmark !== id);
                            }

                            return [...prev, id];
                          });
                        },
                        icon: bookmarked.includes(id) ? BookmarkIcon : OutlinedBookmarkIcon,
                        'aria-label': 'bookmark',
                      }}
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
          <TextContent>
            <Text component="h2">Real-world examples</Text>
            <Text component="p" className="catalog-sub">
              Additional examples
            </Text>
          </TextContent>
          <Gallery className="pfext-quick-start-catalog__gallery" hasGutter>
            {allQuickStarts
              .filter((quickStart: QuickStart) => !quickStart.metadata.instructional)
              .map((quickStart: QuickStart) => {
                const {
                  metadata: { name: id },
                } = quickStart;

                return (
                  <GalleryItem key={id} className="pfext-quick-start-catalog__gallery-item">
                    <QuickStartTile
                      action={{
                        onClick: (e: React.SyntheticEvent) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setBookmarked((prev) => {
                            if (prev.includes(id)) {
                              return prev.filter((bookmark) => bookmark !== id);
                            }

                            return [...prev, id];
                          });
                        },
                        icon: bookmarked.includes(id) ? BookmarkIcon : OutlinedBookmarkIcon,
                        'aria-label': 'bookmark',
                      }}
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
      </>
    );

  const clearFilters = React.useCallback(() => {
    setFilter('keyword', '');
    setFilter('status', []);
    clearFilterParams();
    setFilteredQuickStarts(
      allQuickStarts.sort((q1: QuickStart, q2: QuickStart) =>
        q1.spec.displayName.localeCompare(q2.spec.displayName),
      ),
    );
  }, [allQuickStarts, setFilter]);

  const quickStartCatalog = () => {
    if (filteredQuickStarts.length === 0) {
      return <QuickStartCatalogEmptyState clearFilters={clearFilters} />;
    }

    if (filteredQuickStarts.length !== allQuickStarts.length) {
      return <QuickStartCatalog quickStarts={filteredQuickStarts} />;
    }

    return CatalogWithSections;
  };

  if (loading) {
    return <LoadingBox />;
  }

  return (
    <>
      <QuickStartCatalogHeader title="Resources" />
      <Divider component="div" />
      <QuickStartCatalogToolbar>
        <ToolbarContent>
          <QuickStartCatalogFilterSearchWrapper onSearchInputChange={onSearchInputChange} />
          <QuickStartCatalogFilterStatusWrapper onStatusChange={onStatusChange} />
          <QuickStartCatalogFilterCountWrapper quickStartsCount={filteredQuickStarts.length} />
        </ToolbarContent>
      </QuickStartCatalogToolbar>
      <Divider component="div" />
      {quickStartCatalog()}
    </>
  );
};
