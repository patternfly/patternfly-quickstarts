import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import KatacodaScript from '../../../content/training/tutorials/html-css/../katacoda-script';
const pageData = {
  "id": "Override and extend variables",
  "section": "training",
  "source": "training",
  "slug": "/training/override-and-extend-variables/training",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/training/tutorials/html-css/override-and-extend-variables.md",
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
    <KatacodaScript katacodaId="html-css/override-extend-variables"/>
  </React.Fragment>
);
Component.displayName = 'TrainingOverrideAndExtendVariablesTrainingDocs';
Component.pageData = pageData;

export default Component;
