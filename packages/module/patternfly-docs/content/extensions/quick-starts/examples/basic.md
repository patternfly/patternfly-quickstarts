---
# Sidenav top-level section
# should be the same for all markdown files
section: extensions
# Sidenav secondary level section
# should be the same for all markdown files
id: Quick Starts
# Tab (react | react-demos | html | html-demos | design-guidelines | accessibility)
source: Basic-Quick-Starts
# If you use typescript, the name of the interface to display props for
# These are found through the sourceProps function provided in patternfly-docs.source.js
propComponents: ['QuickStartContainer']
---

import { quickStarts as exampleQuickStarts } from './example-data';
import { LoadingBox, QuickStartContainer, QuickStartCatalogPage, useLocalStorage, } from '@patternfly/quickstarts';
import '@patternfly/quickstarts/dist/quickstarts.css';

## Basic Quick Starts Usage

### With Catalog Page
```js file="./Basic.jsx"
```

### Fullscreen example
```js file="./Basic.jsx" isFullscreen
```
