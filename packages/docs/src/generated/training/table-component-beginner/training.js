import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import KatacodaScript from '../../../content/training/tutorials/react-components/../katacoda-script';
const pageData = {
  "id": "Table component beginner",
  "section": "training",
  "source": "training",
  "slug": "/training/table-component-beginner/training",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/training/tutorials/react-components/table-component-beginner.md",
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
    <KatacodaScript katacodaId="react-components/table-intro"/>
  </React.Fragment>
);
Component.displayName = 'TrainingTableComponentBeginnerTrainingDocs';
Component.pageData = pageData;

export default Component;
