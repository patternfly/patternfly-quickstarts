import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import KatacodaScript from '../../../content/training/tutorials/html-css/../katacoda-script';
const pageData = {
  "id": "Modifiers and utilities",
  "section": "training",
  "source": "training",
  "slug": "/training/modifiers-and-utilities/training",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/training/tutorials/html-css/modifier-and-utilities.md",
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
    <KatacodaScript katacodaId="html-css/modifier-utilities"/>
  </React.Fragment>
);
Component.displayName = 'TrainingModifiersAndUtilitiesTrainingDocs';
Component.pageData = pageData;

export default Component;
