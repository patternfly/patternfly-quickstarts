# Quick starts

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
```

### Stylesheets if you use an older version of PatternFly
If you use an older version of @patternfly/react-core (older than "4.115.2"), and you can't upgrade yet, you can pull in the necessary PatternFly styles that @patternfly/quickstarts depends upon.

Ideally @patternfly/quickstarts will use the consumer provided PatternFly styles, only use these stylesheets if really needed.

`quickstarts-standalone.min.css` nests the css classes within a **.pfext-quick-start__base** parent, so that they have higher specificity. `patternfly-global.css` includes component styles that we cannot nest with more specificiy (for example Drawer since it can include consumer components that depend on an older PF version).

> Note: Only use these stylesheets if necessary!
```js
// import base from PatternFly to get the font
import '@patternfly/react-core/dist/styles/base.css';
// some global styles and variables that quickstarts uses (Drawer, Popover, Modal, Backdrop, Bullseye)
import '@patternfly/quickstarts/dist/patternfly-global.css';
// PF and quickstarts styles nested within .pfext-quick-start__base
import '@patternfly/quickstarts/dist/quickstarts-standalone.min.css';
```

## Usage example

Note: You can also view this example on [codesandbox](https://codesandbox.io/s/patternfly-quickstarts-finished-cnv53)!

```js
import "./styles.css";

// base styles/variables for PatternFly-react
import "@patternfly/react-core/dist/styles/base.css";
// quick starts styles
import "@patternfly/quickstarts/dist/quickstarts.min.css";

import * as React from "react";
import {
  QuickStartContainer,
  QuickStartCatalogPage,
  QuickStartContext,
  useLocalStorage,
  setQueryArgument,
  removeQueryArgument,
  QUICKSTART_ID_FILTER_KEY
} from "@patternfly/quickstarts";
import { Button } from "@patternfly/react-core";
import jsYaml from "js-yaml";
// quick start files could be yaml files or js files, or really anything,
// as long as they get parsed out to the expexted JSON format
import quickstartOne from "./quick-starts/quickstart-one.yaml";
import quickstartTwo from "./quick-starts/quickstart-two.yaml";
import quickstartThree from "./quick-starts/quickstart-three";

const App = () => {
  const [quickStarts, setQuickStarts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  // You can use the useLocalStorage hook if you want to store user progress in local storage
  // Otherwise you can use React.useState here or another means (backend) to store the active quick start ID and state
  const [activeQuickStartID, setActiveQuickStartID] = useLocalStorage("quickstartId", "");
  const [allQuickStartStates, setAllQuickStartStates] = useLocalStorage("quickstarts", {});
  // or
  // const [activeQuickStartID, setActiveQuickStartID] = React.useState("");
  // const [allQuickStartStates, setAllQuickStartStates] = React.useState({});

  React.useEffect(() => {
    const load = () => {
      const loadedQuickStarts = [
        jsYaml.load(quickstartOne),
        jsYaml.load(quickstartTwo),
        quickstartThree
      ];
      setQuickStarts(loadedQuickStarts);
      setLoading(false);
    };
    setTimeout(() => {
      // simulate loading time to get the quick starts from somewhere
      load();
    }, 500);
  }, []);

  const withQueryParams = true;

  const drawerProps = {
    quickStarts,
    activeQuickStartID,
    allQuickStartStates,
    setActiveQuickStartID,
    setAllQuickStartStates,
    // Set to true to opt-out of default hidden card footers
    showCardFooters: false,
    // Set to true to opt-out of default drawer header colors of blue with white text
    useLegacyHeaderColors: false,
    loading,
    useQueryParams: withQueryParams,
  };

  const toggleQuickStart = (quickStartId: string) => {
    if (activeQuickStartID !== quickStartId) {
      // activate
      setActiveQuickStartID(quickStartId);
      // optionally add the browser URL query param
      withQueryParams && setQueryArgument(QUICKSTART_ID_FILTER_KEY, quickStartId);
    } else {
      // deactivate
      setActiveQuickStartID('');
      // optionally remove the browser URL query param
      withQueryParams && removeQueryArgument(QUICKSTART_ID_FILTER_KEY);
    }
  };

  return (
    <QuickStartContainer {...drawerProps}>
      <Button onClick={() => toggleQuickStart("node-with-s2i")}>
        Toggle quick start through prop
      </Button>
      <SomeNestedComponent />
      <QuickStartCatalogPage
        showFilter
        title="Quick starts"
        hint="Learn how to create, import, and run applications with step-by-step instructions and tasks."
      />
    </QuickStartContainer>
  );
};

const SomeNestedComponent = () => {
  const qsContext = React.useContext(QuickStartContext);
  // the quick start ID is defined in the quick start object's metadata.name field
  return (
    <button onClick={() => qsContext.setActiveQuickStart("monitor-sampleapp")}>
      Toggle quick start through context
    </button>
  );
};

export default App;
```

## Design update, option to opt-out of new drawer header coloring

See above usage of `useLegacyHeaderColors` boolean to opt-out of update. Should only be used if new color scheme clashes with the usage context.

## Quick starts format

Quick starts are parsed as markdown. To write your own quick start, if you use Typescript you can [check out the type definition here](https://github.com/patternfly/patternfly-quickstarts/blob/main/packages/module/src/utils/quick-start-types.ts).

Here's a [yaml template](https://github.com/patternfly/patternfly-quickstarts/blob/main/packages/dev/src/quickstarts-data/yaml/template.yaml) to get you started on writing your own quick starts.

## Writing quick starts

Quick starts are typically written in yaml, but we've also seen projects use asciidoc and json. As long as you can pass in an [array of quick starts](https://github.com/patternfly/patternfly-quickstarts/blob/b086faefb0699e4259ca23d058ed330df1d87f8a/packages/module/src/QuickStartDrawer.tsx#L18) it doesn't really matter in what format your content is sourced.
- We have a [yaml starter template here](https://github.com/patternfly/patternfly-quickstarts/blob/main/packages/dev/src/quickstarts-data/yaml/template.yaml)
- The easiest way to preview the content as you're writing it, is to use Visual Studio code with our [quickstarts-preview extension](https://marketplace.visualstudio.com/items?itemName=PatternFly.quickstarts-preview).
  - Alternatively, you can use [github.dev](https://github.dev/) which is basically VS Code on the web, and install the extension there, then edit your yaml content!
- For guidelines on writing a quick start, the fine folks at OpenShift have created [this guide](https://docs.openshift.com/container-platform/4.9/web_console/creating-quick-start-tutorials.html)

### Highlighting elements

You can highlight an element on the page from within a quick start. The element that should be highlightable needs a data-quickstart-id attribute. Example:
```
<button data-quickstart-id="special-btn">Click me</button>
```

In the quick start task description, you can add this type of markdown to target this element:
```
Highlight [special button]{{highlight special-btn}}
```

### Copyable text

You can have inline or block copyable text.

#### Inline copyable text example
```
`echo "Donec id est ante"`{{copy}}
```

#### Multiline copyable text example
```
    ```
      First line of text.
      Second line of text.
    ```{{copy}}
```

## Markdown extensions
If your source material content is defined in markdown (yaml + markdown / json + markdown), then you can add your own markdown extensions, example:
```
const drawerProps: QuickStartContainerProps = {
  markdown: {
    extensions: [
      // variable substitution example
      // this replaces the strings [APPLICATION] and [PRODUCT]
      {
        type: 'output',
        filter: function(html: string) {
          html = html.replace(/\[APPLICATION\]/g, 'Mercury');
          html = html.replace(/\[PRODUCT\]/g, 'Lightning');

          return html;
        },
      },
    ],
  },
};

return <QuickStartContainer {...drawerProps}>My page content</QuickStartContainer>
```

## Localization
We use English as the default language. You can override the default by providing your own key/value pairs to the `QuickStartContainer` or `QuickStartContextProvider` resourceBundle prop.

Example:
```js
// load my own resource Czech translations resource bundle using i18next
const resourceBundle = i18n.getResourceBundle('cs', 'quickstart');
const resources = {
  ...resourceBundle,
  Start: "Let's go!",
  Continue: 'Resume',
  Restart: 'Start over',
};
return (
  <QuickStartContainer resourceBundle={resources}>
  </QuickStartContainer>
)
```

Use this [file](https://github.com/patternfly/patternfly-quickstarts/blob/main/packages/module/src/locales/en/quickstart.json) as a base for your translations.
Each language is different, especially when it comes to plurals. Try [this utility](https://jsfiddle.net/6bpxsgd4) sourced from [i18next](https://www.i18next.com/translation-function/plurals#how-to-find-the-correct-plural-suffix) to determine the suffixes for the right plural format.

For localizing the content of quick starts files, we provide the option to include `language` and `countryCode` key to your translated file. Based on these keys you can filter out quick starts. We have a demo of this behaviour in our [demo app](https://quickstarts.netlify.app/quickstarts-localized). You can have a look at the code [here](https://github.com/patternfly/patternfly-quickstarts/blob/main/packages/dev/src/AppLocalized.tsx).

## In-App / In Context Help Panel

The quickstarts package is being extended to support a side panel that displays smaller chunks (defined as the `HelpTopic` type) of documentation.

### Help Topic type definition

```ts
type HelpTopicLink = {
  href: string;
  text?: string;
  // open link in new tab
  newTab?: boolean;
  // add PF icon indicating link is external
  isExternal?: boolean;
};

type HelpTopic = {
  name: string;
  title: string;
  tags: string[];
  content: string;
  links: HelpTopicLink[];
};
```

### Example Help Topic in yaml with markdown support for content and links

```yml
- name: auto-deploy
  tags:
    - page-1
  title: Automatic Deployment
  content: |-
    **An Automatic Deployment** is...

    Etiam viverra et tortor et maximus. Aliquam quis scelerisque metus. Proin luctus pretium sodales. Mauris nibh nibh, auctor eu scelerisque et, hendrerit a metus. Vivamus pharetra bibendum finibus. Sed a pulvinar ipsum. Fusce pharetra venenatis porttitor. Praesent justo metus, consectetur quis erat id, congue varius metus. Suspendisse dui est, tempor nec diam quis, facilisis sodales erat. Curabitur viverra convallis ex. Ut egestas condimentum augue, id euismod leo volutpat vitae. Quisque aliquet ac dolor quis pretium. Nunc at nibh quis arcu maximus elementum vel a mi.
  links:
    - text: 'Creating quick starts (external)'
      href: 'https://docs.openshift.com/container-platform/4.9/web_console/creating-quick-start-tutorials.html'
      isExternal: true
    - text: 'Redhat Console (opens in new tab)'
      href: 'https://console.redhat.com'
      newTab: true
```

### Usage Example

See the [HelpTopicDemo](https://github.com/patternfly/patternfly-quickstarts/blob/6b35d3c346b3e92ed0003de955421c8dff58a22b/packages/dev/src/AppHelpTopicDemo.tsx)

- Similar to standard Quickstarts usage
- Load yaml defined `HelpTopic` array
- Pass `HelpTopicContainerProps`, including loaded `HelpTopics` to the `<HelpTopicContainer/>`

```tsx
import './App.css';
import { Page } from '@patternfly/react-core';
import { LoadingBox, HelpTopicContainerProps, HelpTopicContainer } from '@patternfly/quickstarts';
import { helpTopics } from './quickstarts-data/quick-start-test-data';
import React from 'react';
import i18n from './i18n/i18n';
import { AppHeader, AppSidebar } from './common/Page';

type AppProps = {
  children?: React.ReactNode;
  showCardFooters?: boolean;
};

const AppHelpTopicDemo: React.FC<AppProps> = ({ children }) => {
  const language = localStorage.getItem('bridge/language') || 'en';
  const resourceBundle = i18n.getResourceBundle(language, 'quickstart');

  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const load = async () => {
      setLoading(false);
    };
    setTimeout(() => {
      load();
    }, 500);
  }, []);

  const inContextHelpProps: HelpTopicContainerProps = {
    helpTopics,
    resourceBundle,
    language,
    loading,
  };

  return (
    <React.Suspense fallback={<LoadingBox />}>
      <HelpTopicContainer {...inContextHelpProps}>
        <Page header={AppHeader} sidebar={AppSidebar} isManagedSidebar>
          {children}
        </Page>
      </HelpTopicContainer>
    </React.Suspense>
  );
};
```

In the example above `<HelpTopicContainer />` wraps the `<Page/>` element as well as a mock "console" showing how to trigger the side panel and allow navigation to all `HelpTopics` available on each console page:

Live [preview](https://deploy-preview-140--quickstarts.netlify.app/in-context-help) of code below:

```tsx
import * as React from 'react';
import {
  Banner,
  Button,
  Divider,
  Form,
  FormGroup,
  PageSection,
  Popover,
  Split,
  SplitItem,
  TextInput,
  Title,
} from '@patternfly/react-core';
import { HelpTopicContext, HelpTopicContextValues } from '@patternfly/quickstarts';
import HelpIcon from '@patternfly/react-icons/dist/js/icons/help-icon';
import { HelpTopic } from '@patternfly/quickstarts/dist/utils/help-topic-types';

// Example usage of topics, render certain topics depending on the page
// used this case when "consolePageState" below is between 4 - 6
// these HelpTopics with the following names will be rendered
const helpTopicNamesByPage = [
  ['auto-deploy', 'code-sample', 'manual-deployment'],
  ['manual-deployment', 'target-port', 'build-configuration'],
  ['deploy-configuration', 'environment-variables', 'health-checks'],
];

interface FormGroupWithHelpTopicPopoverProps extends React.HTMLProps<HTMLDivElement> {
  topic: HelpTopic;
}

// Example usage of setActiveHelpTopicByName()
// render a popover with a learn more link to open the drawer
const FormGroupWithHelpTopicPopover: React.FC<FormGroupWithHelpTopicPopoverProps> = ({ topic }) => {
  const { setActiveHelpTopicByName } = React.useContext<HelpTopicContextValues>(HelpTopicContext);

  return (
    <FormGroup
      label={topic.title}
      isRequired
      fieldId={topic.name}
      key={topic.name}
      labelIcon={
        <Popover
          bodyContent={(hide) => (
            <div>
              {topic.title} is quite amaizing{' '}
              <Button
                variant="link"
                onClick={() => {
                  setActiveHelpTopicByName(topic.name);
                  hide();
                }}
              >
                Learn more
              </Button>
            </div>
          )}
        >
          <Button variant="plain">
            <HelpIcon noVerticalAlign />
          </Button>
        </Popover>
      }
    >
      <TextInput isRequired type="text" id={topic.name} />
    </FormGroup>
  );
};

export const MockConsole: React.FC = () => {
  const { helpTopics, setFilteredHelpTopics, filteredHelpTopics, setActiveHelpTopicByName } =
    React.useContext<HelpTopicContextValues>(HelpTopicContext);

  // mock console page identifiers: 1 - 6
  // click handlers to change page
  const [consolePageState, setConsolePageState] = React.useState(1);

  const handleClickNext = () => {
    setActiveHelpTopicByName('');
    if (consolePageState === 6) {
      setConsolePageState(1);
      return;
    }
    setConsolePageState(consolePageState + 1);
  };

  const handleClickBack = () => {
    setActiveHelpTopicByName('');
    if (consolePageState === 6) {
      setConsolePageState(4);
      return;
    }
    setConsolePageState(consolePageState - 1);
  };

  // Example usage setFilteredHelpTopics()
  // After rendering the console, set the filtered help topics
  React.useEffect(() => {
    // set filtered topics using tags, matching to the consolePageState
    if (consolePageState < 4) {
      const topics = helpTopics.filter((topic: HelpTopic) => {
        const pageTagNumbers = topic.tags.map((tag: string) => {
          return Number(tag.slice(-1));
        });
        return pageTagNumbers.includes(consolePageState);
      });
      setFilteredHelpTopics(topics);
    } else {
      // set filtered topics using the appropriate helpTopicNamesByPage array above
      setFilteredHelpTopics(
        helpTopics.filter((topic) => {
          return helpTopicNamesByPage[consolePageState - 4].includes(topic.name);
        }),
      );
    }
  }, [consolePageState, helpTopics, setFilteredHelpTopics]);

  // Render filteredHelpTopics in a <FormGroupWithHelpTopicPopover />
  const formGroupsFromTags = filteredHelpTopics.map((topic: HelpTopic, index) => {
    return <FormGroupWithHelpTopicPopover topic={topic} key={index} />;
  });

  // From an array of topic names, render all topics in a <FormGroupWithHelpTopicPopover />
  const formGroupsFromTopicNames = (helpTopicNames: string[]) => {
    return helpTopicNames.map((topicName: string, index) => {
      const topicToRender = helpTopics.find((topic) => {
        return topicName === topic.name;
      });

      if (topicToRender) {
        return <FormGroupWithHelpTopicPopover topic={topicToRender} key={index} />;
      }
    });
  };

  return (
    <>
      <PageSection>
        <Banner variant="info">
          <Title headingLevel="h1">Console Page {consolePageState}</Title>
        </Banner>
      </PageSection>
      <PageSection>
        <Title headingLevel="h3">
          Example usage of help topics opened via popover{' '}
          <b>
            {consolePageState < 4
              ? 'using tags that match the Console Page number'
              : 'by defining which help topics should be present on each page'}
          </b>
        </Title>
        <Divider />
        <Form>
          {consolePageState < 4
            ? formGroupsFromTags
            : formGroupsFromTopicNames(helpTopicNamesByPage[consolePageState - 4])}
        </Form>
      </PageSection>
      <PageSection>
        <Split hasGutter>
          <SplitItem>
            <Button onClick={handleClickBack} variant="tertiary">
              Previous
            </Button>
          </SplitItem>
          <SplitItem>
            <Button onClick={handleClickNext}>Next</Button>
          </SplitItem>
        </Split>
      </PageSection>
    </>
  );
};
```
