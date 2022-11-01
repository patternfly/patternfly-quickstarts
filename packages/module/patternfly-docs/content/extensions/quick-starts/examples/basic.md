---
# Sidenav top-level section
# should be the same for all markdown files
section: extensions
# Sidenav secondary level section
# should be the same for all markdown files
id: Quick starts
# Tab (react | react-demos | html | html-demos | design-guidelines | accessibility)
source: Basic-quick-starts
# If you use typescript, the name of the interface to display props for
# These are found through the sourceProps function provided in patternfly-docs.source.js
propComponents: ['QuickStartContainer']
---

import { quickStarts as exampleQuickStarts } from './example-data';
import { LoadingBox, QuickStartContainer, QuickStartCatalogPage, useLocalStorage, } from '@patternfly/quickstarts';
import '@patternfly/quickstarts/dist/quickstarts.css';

## Basic quick starts examples 

### Quick starts catalog 
```js file="./Basic.jsx"
```

### Fullscreen catalog page
To view a fullscreen example, click the image below.
```js file="./Basic.jsx" isFullscreen
```
