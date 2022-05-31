import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import KatacodaScript from '../../../content/training/tutorials/html-css/../katacoda-script';
const pageData = {
  "id": "Variable naming principles",
  "section": "training",
  "source": "training",
  "slug": "/training/variable-naming-principles/training",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/training/tutorials/html-css/variable-naming-principles.md",
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
    <KatacodaScript katacodaId="html-css/variable-naming-principles"/>
  </React.Fragment>
);
Component.displayName = 'TrainingVariableNamingPrinciplesTrainingDocs';
Component.pageData = pageData;

export default Component;
