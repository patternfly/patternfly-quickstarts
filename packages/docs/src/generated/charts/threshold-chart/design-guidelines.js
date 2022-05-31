import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Threshold chart",
  "section": "charts",
  "source": "design-guidelines",
  "slug": "/charts/threshold-chart/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/charts/threshold-chart/threshold-chart.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`threshold chart`}
      </strong>
      {` can be used to visually specify a threshold for certain variables on the chart.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'ChartsThresholdChartDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
