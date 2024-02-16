---
# Sidenav top-level section
# should be the same for all markdown files for each extension
section: extensions
# Sidenav secondary level section
# should be the same for all markdown files for each extension
id: Quick starts
# Tab
source: about
sourceLink: https://github.com/patternfly/patternfly-quickstarts/tree/main/packages/module/patternfly-docs/content/extensions/quick-starts/examples/about.md
---
# About
The **@patternfly/quickstarts** extension is made up of two product documentation tools: **quick starts** and **in-app documentation**.

## Full live demo application
To learn more about quick starts and in-app documentation, you may [view examples in a live demo](https://quickstarts.netlify.app/), explore the [demo code](https://github.com/patternfly/patternfly-quickstarts/tree/main/packages/dev), or continue reading below. 

## Quick starts
A quick start is a set of step-by-step instructions and tasks presented in a side panel embedded within a product’s UI. Quick starts can help users get started with a product by providing installation and setup guidance.

A quick start has multiple tasks, each with multiple steps. On completion, a quick start gives users the artifacts or state needed to successfully use a product, specific features, or add-ons.

<img src="./img/side-panel.png" alt="Side panel elements" width="449"/>

For more quick start details and visuals, [view the design guidelines.](/extensions/quick-starts/design-guidelines)

### Quick start format

#### For developers
To learn more about quick starts: 

- [View a breakdown of the quick start code format](https://github.com/patternfly/patternfly-quickstarts/blob/main/packages/module/src/utils/quick-start-types.ts).
- [View a basic example](/extensions/quick-starts/Basic-Quick-Starts).
- [View the live demo](https://quickstarts.netlify.app/) and [view the live demo code](https://github.com/patternfly/patternfly-quickstarts/tree/main/packages/dev).

#### For content authors
Quick starts can be written in `yaml` with markdown support, `asciidoc`, or `json`. To learn more about each of these formats, [view example files](https://github.com/patternfly/patternfly-quickstarts/tree/main/packages/dev/src/quickstarts-data).

### Opening and closing the side panel

#### Custom handler
To open the side panel of a quick start, call the `setActiveQuickStart` or `setActiveQuickstartID` methods. These methods are provided by `QuickStartContext` and can be accessed in your React components:
```typescript
const { setActiveQuickStart } = React.useContext<QuickStartContextValues>(
    QuickStartContext,
  );
```

#### Quick start catalog
To generate a full-page catalog view, add a set of quick starts to a `QuickStartContainer`. Clicking on a catalog card will open its respective quick start in a side panel. 

<img src="./img/catalog.png" alt="Quick start catalog" width="1680"/>

## In-app documentation
In-app documentation defines topics that are relevant to a product. A `HelpTopic` is a single unit of in-app documentation that contains a **content** section, which defines the term or topic, and an optional list of **links** to provide the user with other relevant information.

`HelpTopics` are displayed in a side panel just like quick starts:

<img src="./img/help-topic.png" alt="quick start catalog" width="449"/>

### HelpTopic format

#### For developers
To learn more about `HelpTopic`s:

- [View a breakdown of the HelpTopic code format](https://github.com/patternfly/patternfly-quickstarts/blob/main/packages/module/src/utils/help-topic-types.ts).
- [View a basic example](/extensions/quick-starts/In-App-Documentation).
- [View the live demo](https://quickstarts.netlify.app/in-context-help) and [view the live demo code](https://github.com/patternfly/patternfly-quickstarts/tree/main/packages/dev).

#### For content authors
A `HelpTopic` is written in `yaml` with markdown support. [View an example yaml file](https://github.com/patternfly/patternfly-quickstarts/blob/main/packages/dev/src/quickstarts-data/yaml/in-app-documentation/example-topics.yaml).

### Opening and closing the side panel
To open a side panel, call the `setActiveHelpTopicByName` method(available from `HelpTopicContext`) and include the name of a `HelpTopic`.

```typescript
const { setActiveHelpTopicByName } = React.useContext<HelpTopicContextValues>(HelpTopicContext);
```

To close a side panel, call the `setActiveHelpTopicByName` method and pass in an empty string. 

There is no prebuilt `HelpTopic` catalog: to build one, attach a handler to the appropriate DOM element using the `setActiveHelpTopicByName` method. For more details, see the [basic example](/extensions/quick-starts/In-App-Documentation) or the [live demo code](https://github.com/patternfly/patternfly-quickstarts/tree/main/packages/dev).


