import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import KatacodaScript from '../../../content/training/tutorials/react-charts/../katacoda-script';
const pageData = {
  "id": "Pie chart",
  "section": "training",
  "source": "training",
  "slug": "/training/pie-chart/training",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/training/tutorials/react-charts/pie-chart.md",
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
    <KatacodaScript katacodaId="react-charts/pie-chart"/>
  </React.Fragment>
);
Component.displayName = 'TrainingPieChartTrainingDocs';
Component.pageData = pageData;

export default Component;
