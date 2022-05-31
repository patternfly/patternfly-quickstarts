import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Themed charts",
  "section": "charts",
  "source": "design-guidelines",
  "slug": "/charts/themed-charts/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/charts/themed-charts/themed-charts.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`themed chart`}
      </strong>
      {` is a chart with different theme and color treatments applied to it. Themed charts can help visually distinguish between different categories and data collection points plotted on the graph.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'ChartsThemedChartsDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
