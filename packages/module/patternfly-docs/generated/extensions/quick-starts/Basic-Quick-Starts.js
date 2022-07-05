import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from '@patternfly/documentation-framework/components';
import { quickStarts as exampleQuickStarts } from '../../../content/extensions/quickstarts/./example-data';
import {
  LoadingBox,
  QuickStartContainer,
  QuickStartCatalogPage,
  useLocalStorage,
} from '@patternfly/quickstarts';
import '@patternfly/quickstarts/dist/quickstarts.css';
import srcImportfullscreenexample from './Basic-Quick-Starts/fullscreen-example.png';
const pageData = {
  "id": "Quick Starts",
  "section": "Extensions",
  "source": "Basic-Quick-Starts",
  "slug": "/extensions/quick-starts/Basic-Quick-Starts",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/module/patternfly-docs/content/extensions/quickstarts/tab--basic-quick-starts.md",
  "propComponents": [
    {
      "name": "QuickStartContainer",
      "description": "",
      "props": [
        {
          "name": "alwaysShowTaskReview",
          "type": "No type info",
          "defaultValue": "true"
        },
        {
          "name": "loading",
          "type": "No type info",
          "defaultValue": "false"
        },
        {
          "name": "useQueryParams",
          "type": "No type info",
          "defaultValue": "true"
        }
      ]
    }
  ],
  "examples": [
    "Catalog Page"
  ],
  "fullscreenExamples": [
    "Fullscreen Example"
  ]
};
pageData.liveContext = {
  exampleQuickStarts,
  LoadingBox,
  QuickStartContainer,
  QuickStartCatalogPage,
  useLocalStorage
};
pageData.examples = {
  'Catalog Page': props => 
    <Example {...pageData} {...props} {...{"code":"import './App.css';\nimport React from 'react';\nimport {\n  LoadingBox,\n  QuickStartContainer,\n  useLocalStorage,\n  QuickStartCatalogPage\n} from '@patternfly/quickstarts';\nimport { quickStarts as exampleQuickStarts } from './example-data';\n\nconst App = ({ showCardFooters }) => {\n  const [activeQuickStartID, setActiveQuickStartID] = useLocalStorage('quickstartId', '');\n  const [allQuickStartStates, setAllQuickStartStates] = useLocalStorage('quickstarts', {});\n  const language = localStorage.getItem('bridge/language') || 'en';\n\n  // eslint-disable-next-line no-console\n  React.useEffect(() => console.log(activeQuickStartID), [activeQuickStartID]);\n  React.useEffect(() => {\n    // callback on state change\n    // eslint-disable-next-line no-console\n    console.log(allQuickStartStates);\n  }, [allQuickStartStates]);\n\n  const [loading, setLoading] = React.useState(true);\n  const [quickStarts, setQuickStarts] = React.useState([]);\n  React.useEffect(() => {\n    const load = async () => {\n      setQuickStarts(exampleQuickStarts);\n      setLoading(false);\n    };\n    setTimeout(() => {\n      load();\n    }, 500);\n  }, []);\n\n  const drawerProps = {\n    quickStarts,\n    activeQuickStartID,\n    allQuickStartStates,\n    setActiveQuickStartID,\n    setAllQuickStartStates,\n    showCardFooters,\n    language,\n    loading,\n    alwaysShowTaskReview: true,\n    markdown: {\n      extensions: [\n        // variable substitution\n        {\n          type: 'output',\n          filter: function(html) {\n            html = html.replace(/\\[APPLICATION\\]/g, 'Mercury');\n            html = html.replace(/\\[PRODUCT\\]/g, 'Lightning');\n\n            return html;\n          },\n        },\n      ],\n    },\n  };\n\n  return (\n    <React.Suspense fallback={<LoadingBox />}>\n      <QuickStartContainer {...drawerProps}>\n        <QuickStartCatalogPage\n          title=\"Quick starts\"\n          hint={'Learn how to create, import, and run applications with step-by-step instructions and tasks.'}\n        />\n      </QuickStartContainer>\n    </React.Suspense>\n  );\n};\n","title":"Catalog Page","lang":"js"}}>
      
    </Example>,
  'Fullscreen Example': props => 
    <Example {...pageData} {...props} thumbnail={srcImportfullscreenexample} {...{"code":"import './App.css';\nimport React from 'react';\nimport {\n  LoadingBox,\n  QuickStartContainer,\n  useLocalStorage,\n  QuickStartCatalogPage\n} from '@patternfly/quickstarts';\nimport { quickStarts as exampleQuickStarts } from './example-data';\n\nconst App = ({ showCardFooters }) => {\n  const [activeQuickStartID, setActiveQuickStartID] = useLocalStorage('quickstartId', '');\n  const [allQuickStartStates, setAllQuickStartStates] = useLocalStorage('quickstarts', {});\n  const language = localStorage.getItem('bridge/language') || 'en';\n\n  // eslint-disable-next-line no-console\n  React.useEffect(() => console.log(activeQuickStartID), [activeQuickStartID]);\n  React.useEffect(() => {\n    // callback on state change\n    // eslint-disable-next-line no-console\n    console.log(allQuickStartStates);\n  }, [allQuickStartStates]);\n\n  const [loading, setLoading] = React.useState(true);\n  const [quickStarts, setQuickStarts] = React.useState([]);\n  React.useEffect(() => {\n    const load = async () => {\n      setQuickStarts(exampleQuickStarts);\n      setLoading(false);\n    };\n    setTimeout(() => {\n      load();\n    }, 500);\n  }, []);\n\n  const drawerProps = {\n    quickStarts,\n    activeQuickStartID,\n    allQuickStartStates,\n    setActiveQuickStartID,\n    setAllQuickStartStates,\n    showCardFooters,\n    language,\n    loading,\n    alwaysShowTaskReview: true,\n    markdown: {\n      extensions: [\n        // variable substitution\n        {\n          type: 'output',\n          filter: function(html) {\n            html = html.replace(/\\[APPLICATION\\]/g, 'Mercury');\n            html = html.replace(/\\[PRODUCT\\]/g, 'Lightning');\n\n            return html;\n          },\n        },\n      ],\n    },\n  };\n\n  return (\n    <React.Suspense fallback={<LoadingBox />}>\n      <QuickStartContainer {...drawerProps}>\n        <QuickStartCatalogPage\n          title=\"Quick starts\"\n          hint={'Learn how to create, import, and run applications with step-by-step instructions and tasks.'}\n        />\n      </QuickStartContainer>\n    </React.Suspense>\n  );\n};\n","title":"Fullscreen Example","lang":"js","isFullscreen":true}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"basic-quick-starts-usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Basic Quick Starts Usage`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Catalog Page"])}
    {React.createElement(pageData.examples["Fullscreen Example"])}
  </React.Fragment>
);
Component.displayName = 'ExtensionsQuickStartsBasicQuickStartsDocs';
Component.pageData = pageData;

export default Component;
