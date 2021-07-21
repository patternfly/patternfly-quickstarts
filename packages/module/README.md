# Quickstarts

Demo
https://quickstarts.netlify.app/

## Install

```bash
yarn add @patternfly/quickstarts
```

### Peer dependencies

If your project doesn't already have these installed, you'll need:
```bash
yarn add @patternfly/react-core showdown
```

### Stylesheets

In your web-apps entry point, add these stylesheets (these should be imported before modules from @patternfly/quickstarts are imported):

```js
// base styles/variables for PatternFly-react
import '@patternfly/react-core/dist/styles/base.css';
// quick starts styles
import '@patternfly/quickstarts/dist/quickstarts.min.css';
// global bootstrap styles needed for quick starts
import '@patternfly/quickstarts/dist/quickstarts-bootstrap.min.css';
```

## Usage

In your main app file wrap your application with the QuickStartContextProvider and the QuickStartDrawer:

```js
import {
  QuickStartDrawer,
  QuickStartContext,
  QuickStartContextProvider,
  QuickStartCatalogPage,
  useLocalStorage,
} from '@patternfly/quickstarts';
// for how these quick start yaml files should look see below
import quickstartOne from '.yamls/quickstart-one.yaml';
import quickstartTwo from '.yamls/quickstart-two.yaml';

const App = () => {
  const allQuickStarts = [quickstartOne, quickstartTwo];
  // You can use the useLocalStorage hook if you want to store user progress in local storage
  // Otherwise you can use React.useState here or another means (backend) to store the active quick start ID and state
  const [activeQuickStartID, setActiveQuickStartID] = useLocalStorage('quickstartId', '');
  const [allQuickStartStates, setAllQuickStartStates] = useLocalStorage('quickstarts', {});
  const valuesForQuickstartContext = {
    // array of quick starts
    allQuickStarts,
    // the next 4 items tie the quick start state to the main app
    activeQuickStartID,
    setActiveQuickStartID,
    allQuickStartStates,
    setAllQuickStartStates
  };

  return (
    <QuickStartContextProvider value={valuesForQuickstartContext}>
      <QuickStartDrawer>
        <SomeNestedComponent />
        <QuickStartCatalogPage />
      </QuickStartDrawer>
    </QuickStartContextProvider>
  );
};

const SomeNestedComponent = () => {
  const qsContext = React.useContext<QuickStartContextValues>(QuickStartContext);
  // the quick start ID is defined in the quick start object's metadata.name field
  return (
    <button onClick={() => qsContext.setActiveQuickStart('a_quickstart_id')}>
      Toggle quick start
    </button>
  );
};
```

## Features

### Highlighting elements in yaml+markdown

You can highlight an element on the page from the quick start. The element that should be highlightable needs an attribute like this:
`data-quickstart-id="highlight-me"`

In the quickstart .yaml file, you can add this type of markdown text to target this element:
`Highlight [my element]{{highlight highlight-me}}`

### Highlighting elements in asciidoc/adoc

. To highlight items from a quick start, first the target item needs to have a data attribute: **data-quickstart-id="something"**
. Then in asciidoc, the trigger element needs to have the `data-highlight__something` class/role, where the part after `data-highlight__` matches the data-quickstart-id of the target
Here are some examples:

- `link:[Click me to highlight the logo, role="data-highlight__logo"]`
- `link:[Click me to highlight the Home nav item, role="data-highlight__home"]`

## yaml

This section will get more info in the future. For now you can view sample yamls here:
https://github.com/patternfly/patternfly-quickstarts/tree/main/packages/dev/src/quickstarts-data/mocks/yamls
