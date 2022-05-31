import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import KatacodaScript from '../../../content/training/tutorials/react-components/../katacoda-script';
const pageData = {
  "id": "Select component beginner",
  "section": "training",
  "source": "training",
  "slug": "/training/select-component-beginner/training",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/training/tutorials/react-components/select-component-beginner.md",
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
    <KatacodaScript katacodaId="react-components/select"/>
  </React.Fragment>
);
Component.displayName = 'TrainingSelectComponentBeginnerTrainingDocs';
Component.pageData = pageData;

export default Component;
