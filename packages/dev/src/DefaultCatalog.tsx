import React from 'react';
import {
  QuickStartCatalogPage,
  QuickStartContextValues,
  QuickStartContext,
} from '@patternfly/quickstarts';
import { allQuickStarts as yamlQuickStarts } from './quickstarts-data/quick-start-test-data';
import { loadJSONQuickStarts } from './quickstarts-data/mas-guides/quickstartLoader';

export const DefaultCatalog = () => {
//   const { setAllQuickStarts } = React.useContext<QuickStartContextValues>(QuickStartContext);
//   const load = async () => {
//     const masGuidesQuickstarts = await loadJSONQuickStarts('');
//     setAllQuickStarts(yamlQuickStarts.concat(masGuidesQuickstarts));
//   };

//   const loadQuickStarts = () => {
//     load();
//   };
  return (
    <>
      {/* <button onClick={loadQuickStarts}>Load</button> */}
      <QuickStartCatalogPage
        showFilter
        hint="Learn how to create, import, and run applications with step-by-step instructions and tasks."
      />
    </>
  );
};
