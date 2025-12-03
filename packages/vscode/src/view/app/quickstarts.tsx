import * as React from 'react';
import '@patternfly/patternfly/patternfly.min.css';
import '@patternfly/quickstarts/dist/quickstarts.css';
import {
  ProcQuickStartParser,
  QuickStartCatalogPage,
  QuickStartContext,
  QuickStartDrawer,
  useLocalStorage,
  useValuesForQuickStartContext,
} from '@patternfly/quickstarts';
import { Base64 } from 'js-base64';

export const QuickStartsPreview = ({ initialData: config, filePath, vscode }) => {
  if (!config) {
    console.error('No initialData provided!');
    return <div style={{ padding: '20px' }}>Error: No data provided to preview</div>;
  }

  try {
    const decodedConfig = Base64.decode(config);
    const allQuickStarts = [];
    if (filePath && filePath.endsWith('.adoc')) {
      const parsedConfig = JSON.parse(decodedConfig);
      allQuickStarts.push(ProcQuickStartParser(parsedConfig));
    } else {
      const parsed = JSON.parse(decodedConfig);
      allQuickStarts.push(parsed);
    }
    
    const [activeQuickStartID, setActiveQuickStartID] = useLocalStorage('quickstartId', '');
    const [allQuickStartStates, setAllQuickStartStates] = useLocalStorage('quickstarts', {});
    const valuesForQuickstartContext = useValuesForQuickStartContext({
      allQuickStarts,
      activeQuickStartID,
      setActiveQuickStartID,
      allQuickStartStates,
      setAllQuickStartStates,
    });
    return (
      <QuickStartContext.Provider value={valuesForQuickstartContext}>
        <QuickStartDrawer>
          <QuickStartCatalogPage />
        </QuickStartDrawer>
      </QuickStartContext.Provider>
    );
  } catch (error) {
    console.error('Error in QuickStartsPreview:', error);
    return (
      <div style={{ padding: '20px', color: 'red' }}>
        <h2>Error rendering Quick Start</h2>
        <pre>{error instanceof Error ? error.stack : String(error)}</pre>
        <p>Config length: {config?.length || 0}</p>
        <p>File path: {filePath || 'missing'}</p>
      </div>
    );
  }
};
