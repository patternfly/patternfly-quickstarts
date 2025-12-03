import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { QuickStartsPreview } from './quickstarts';

import './index.css';

declare global {
  interface Window {
    acquireVsCodeApi(): any;
    initialData: string;
    filePath: string;
  }
}

try {
  const vscode = window.acquireVsCodeApi();
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    console.error('Root element not found!');
  } else {
    const root = createRoot(rootElement);
    root.render(
      <QuickStartsPreview
        vscode={vscode}
        initialData={window.initialData}
        filePath={window.filePath}
      />,
    );
  }
} catch (error) {
  console.error('Error in webview:', error);
  document.body.innerHTML = `<div style="padding: 20px; color: red;">
    <h2>Error loading preview</h2>
    <pre>${error instanceof Error ? error.stack : String(error)}</pre>
    <p>initialData: ${window.initialData ? 'present (' + window.initialData.length + ' chars)' : 'missing'}</p>
    <p>filePath: ${window.filePath || 'missing'}</p>
  </div>`;
}
