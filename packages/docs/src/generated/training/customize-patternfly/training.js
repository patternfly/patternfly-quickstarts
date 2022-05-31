import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import KatacodaScript from '../../../content/training/tutorials/react/../katacoda-script';
const pageData = {
  "id": "Customize PatternFly",
  "section": "training",
  "source": "training",
  "slug": "/training/customize-patternfly/training",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/training/tutorials/react/customize-patternfly.md",
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
    <KatacodaScript katacodaId="react/react-customize"/>
  </React.Fragment>
);
Component.displayName = 'TrainingCustomizePatternflyTrainingDocs';
Component.pageData = pageData;

export default Component;
