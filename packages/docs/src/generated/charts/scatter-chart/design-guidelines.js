import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Scatter chart",
  "section": "charts",
  "source": "design-guidelines",
  "slug": "/charts/scatter-chart/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/charts/scatter-chart/scatter-chart.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`scatter chart`}
      </strong>
      {` uses dots to represent values in a chart. These dots can be added to area and line charts to outline specific interactive points along a line.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'ChartsScatterChartDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
