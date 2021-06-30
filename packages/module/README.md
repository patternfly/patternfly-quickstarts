# Quickstarts

Demo
https://quickstarts.netlify.app/

## Install

```bash
yarn add @patternfly/quickstarts @patternfly/patternfly
or
npm install @patternfly/quickstarts @patternfly/patternfly
```

The package currently has these peer dependencies:

```
"react": ">=16.8.0",
"react-dom": ">=16.8.0",
"@patternfly/patternfly": ">=4.90.5",
"@patternfly/react-core": ">=4.101.3"
"@patternfly/react-catalog-view-extension": ">=4.10.13"
```

In your web-apps entry point, add these stylesheets (these should be imported before modules from @patternfly/quickstarts are imported):

```js
import '@patternfly/patternfly/base/patternfly-shield-inheritable.css';
import '@patternfly/patternfly/patternfly.min.css';
import '@patternfly/patternfly/utilities/Accessibility/accessibility.css';
import '@patternfly/react-catalog-view-extension/dist/css/react-catalog-view-extension.css';
import '@patternfly/quickstarts/dist/quickstarts.css';
```

## Usage

In your main app file wrap your application with the QuickStartContext and the QuickStartDrawer:

```js
import {
  QuickStartDrawer,
  QuickStartContext,
  QuickStartCatalogPage,
  useValuesForQuickStartContext,
  useLocalStorage,
  QuickStartContextValues
} from '@patternfly/quickstarts';
// for how these yaml files should look see below
import quickstartOne from '.yamls/quickstart-one.yaml';
import quickstartTwo from '.yamls/quickstart-two.yaml';

const App = () => {
  const allQuickStarts = [quickstartOne, quickstartTwo];
  // You can use the useLocalStorage hook if you want to store user progress in local storage
  // Otherwise you can use React.useState here or another means (backend) to store the active quick start ID and state
  const [activeQuickStartID, setActiveQuickStartID] = useLocalStorage('quickstartId', '');
  const [allQuickStartStates, setAllQuickStartStates] = useLocalStorage('quickstarts', {});
  const valuesForQuickstartContext = useValuesForQuickStartContext({
    allQuickStarts,
    activeQuickStartID,
    setActiveQuickStartID,
    allQuickStartStates,
    setAllQuickStartStates
  });

  return (
    <QuickStartContext.Provider value={valuesForQuickstartContext}>
      <QuickStartDrawer>
        <div>
          <h1>My app</h1>
          <button onClick={() => valuesForQuickstartContext.setActiveQuickStart('a quickstart id')}>
            Open a quickstart
          </button>
          <QuickStartCatalogPage />
        </div>
        <SomeNestedComponent />
      </QuickStartDrawer>
    </QuickStartContext.Provider>
  );
};

const SomeNestedComponent = () => {
  const qsContext = React.useContext<QuickStartContextValues> QuickStartContext;
  return (
    <button onClick={() => qsContext.setActiveQuickStart('a quickstart id')}>
      Open a quickstart from a nested component
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

## Webpack

You can reduce the size of your CSS bundle by using `clean-css-loader` and `null-loader`:
`yarn add -D clean-css-loader null-loader` or `npm install --save-dev clean-css-loader null-loader`
In the webpack config:

```js
const isProd = argv.mode === 'production';
const cssLoaders = ['style-loader', 'css-loader'];
if (isProd) {
  // push loader for production mode only
  cssLoaders.push('clean-css-loader');
}
```

In the rules array:

```js
{
    test: /\.css$/,
    use: cssLoaders,
},
{
    test: /\.css$/,
    include: stylesheet => stylesheet.includes('@patternfly/react-styles/css/'),
    use: ["null-loader"]
},
```

## yaml

This section will get more info in the future. For now you can view sample yamls here:
https://github.com/patternfly/patternfly-quickstarts/tree/main/packages/dev/src/quickstarts-data/mocks/yamls
