import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import KatacodaScript from '../../../content/training/tutorials/react/../katacoda-script';
const pageData = {
  "id": "PatternFly React basics",
  "section": "training",
  "source": "training",
  "slug": "/training/patternfly-react-basics/training",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/training/tutorials/react/patternfly-react-basics.md",
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
    <KatacodaScript katacodaId="react/react-basics"/>
  </React.Fragment>
);
Component.displayName = 'TrainingPatternflyReactBasicsTrainingDocs';
Component.pageData = pageData;

export default Component;
