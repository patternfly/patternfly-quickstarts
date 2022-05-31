import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import KatacodaScript from '../../../content/training/tutorials/react-charts/../katacoda-script';
const pageData = {
  "id": "Line chart",
  "section": "training",
  "source": "training",
  "slug": "/training/line-chart/training",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/training/tutorials/react-charts/line-chart.md",
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
    <KatacodaScript katacodaId="react-charts/line-chart"/>
  </React.Fragment>
);
Component.displayName = 'TrainingLineChartTrainingDocs';
Component.pageData = pageData;

export default Component;
