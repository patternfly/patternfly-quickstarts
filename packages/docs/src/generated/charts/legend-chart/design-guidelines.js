import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Legend chart",
  "section": "charts",
  "source": "design-guidelines",
  "slug": "/charts/legend-chart/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/charts/legend-chart/legend-chart.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`legend chart`}
      </strong>
      {` is a chart with a legend next to it, showing the different data entries or values being represented, often by category. A legend can be added to any chart type.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'ChartsLegendChartDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
