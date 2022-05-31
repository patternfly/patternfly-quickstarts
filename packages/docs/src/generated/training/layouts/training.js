import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import KatacodaScript from '../../../content/training/tutorials/html-css/../katacoda-script';
const pageData = {
  "id": "Layouts",
  "section": "training",
  "source": "training",
  "slug": "/training/layouts/training",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/training/tutorials/html-css/layouts.md",
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
    <KatacodaScript katacodaId="html-css/layouts"/>
  </React.Fragment>
);
Component.displayName = 'TrainingLayoutsTrainingDocs';
Component.pageData = pageData;

export default Component;
