import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import KatacodaScript from '../../../content/training/tutorials/react-components/../katacoda-script';
const pageData = {
  "id": "Toolbar component with filter",
  "section": "training",
  "source": "training",
  "slug": "/training/toolbar-component-with-filter/training",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/training/tutorials/react-components/toolbar-component-with-filter.md",
  "katacodaLayout": true,
  "hideNavItem": true
};
pageData.liveContext = {
  KatacodaScript
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <KatacodaScript katacodaId="react-components/toolbar-filter"/>
  </React.Fragment>
);
Component.displayName = 'TrainingToolbarComponentWithFilterTrainingDocs';
Component.pageData = pageData;

export default Component;
