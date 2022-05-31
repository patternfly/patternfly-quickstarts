import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import KatacodaScript from '../../../content/training/tutorials/html-css/../katacoda-script';
const pageData = {
  "id": "The building blocks of PatternFly",
  "section": "training",
  "source": "training",
  "slug": "/training/the-building-blocks-of-patternfly/training",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/training/tutorials/html-css/the-building-blocks-of-patternfly.md",
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
    <KatacodaScript katacodaId="html-css/building-blocks"/>
  </React.Fragment>
);
Component.displayName = 'TrainingTheBuildingBlocksOfPatternflyTrainingDocs';
Component.pageData = pageData;

export default Component;
