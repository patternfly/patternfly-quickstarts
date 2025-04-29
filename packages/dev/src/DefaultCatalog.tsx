import { QuickStartCatalogPage, QuickStart } from '@patternfly/quickstarts';

export const DefaultCatalog = ({ hint }: { hint?: string }) => {
  const sortFnc = (q1: QuickStart, q2: QuickStart) =>
    q1.spec.displayName.localeCompare(q2.spec.displayName);
  return (
    <>
      <QuickStartCatalogPage
        showFilter
        title="Quick starts"
        hint={
          hint ||
          'Learn how to create, import, and run applications with step-by-step instructions and tasks.'
        }
        sortFnc={sortFnc}
      />
    </>
  );
};
