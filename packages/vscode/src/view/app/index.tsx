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

const vscode = window.acquireVsCodeApi();

const root = createRoot(document.getElementById('root'));

root.render(
  <QuickStartsPreview
    vscode={vscode}
    initialData={window.initialData}
    filePath={window.filePath}
  />,
);
