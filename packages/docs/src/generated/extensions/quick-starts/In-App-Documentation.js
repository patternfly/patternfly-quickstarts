import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from '@breakaway/theme-patternfly-org/components';
import { LoadingBox, HelpTopicContainer, HelpTopicContext } from '@patternfly/quickstarts';
import { helpTopics as exampleHelpTopics } from '../../../content/extensions/quickstarts/./example-data';
import '@patternfly/quickstarts/dist/quickstarts.css';
const pageData = {
  "id": "Quick Starts",
  "section": "Extensions",
  "source": "In-App-Documentation",
  "slug": "/extensions/quick-starts/In-App-Documentation",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/extensions/quickstarts/tab--in-app-documentation.md",
  "fullscreenExamples": [
    "Basic Example"
  ]
};
pageData.liveContext = {
  LoadingBox,
  HelpTopicContainer,
  HelpTopicContext,
  exampleHelpTopics
};
pageData.examples = {
  'Basic Example': props => 
    <Example {...pageData} {...props} {...{"code":"import './App.css';\nimport React from 'react';\nimport { LoadingBox, HelpTopicContainer, HelpTopicContext } from '@patternfly/quickstarts';\nimport { helpTopics as exampleHelpTopics } from './example-data'\n\nconst TinyMockConsole = () => {\n  const { setActiveHelpTopicByName, helpTopics } = React.useContext(HelpTopicContext);\n\n  const handleSetTopic = (name) => {\n    setActiveHelpTopicByName(name);\n  }\n\n  return (\n    <Stack hasGutter>\n      {helpTopics.map(topic => {\n        return (\n          <StackItem key={topic.name}>\n            <a onClick={() => handleSetTopic(topic.name)}>Open Help {topic.title}</a>\n          </StackItem>\n        )\n      })}\n    </Stack>\n  )\n}\n\nconst AppHelpTopicDemo = () => {\n  const language = localStorage.getItem('bridge/language') || 'en';\n\n  const [loading, setLoading] = React.useState(true);\n\n  React.useEffect(() => {\n    const load = async () => {\n      setLoading(false);\n    };\n    setTimeout(() => {\n      load();\n    }, 500);\n  }, []);\n\n  const inContextHelpProps = {\n    helpTopics: exampleHelpTopics,\n    language,\n    loading,\n  };\n\n  return (\n    <React.Suspense fallback={<LoadingBox />}>\n      <HelpTopicContainer {...inContextHelpProps}>\n        <TinyMockConsole />\n      </HelpTopicContainer>\n    </React.Suspense>\n  );\n};\n","title":"Basic Example","lang":"js","isFullscreen":true}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"in-app-documentation","size":"h2","className":"ws-title ws-h2"}}>
      {`In App Documentation`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic Example"])}
  </React.Fragment>
);
Component.displayName = 'ExtensionsQuickStartsInAppDocumentationDocs';
Component.pageData = pageData;

export default Component;
