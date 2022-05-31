import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport29 from '../../../content/design-guidelines/charts/sparkline-chart/./img/sparkline.png';
const pageData = {
  "id": "Sparkline chart",
  "section": "charts",
  "source": "design-guidelines",
  "slug": "/charts/sparkline-chart/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/charts/sparkline-chart/sparkline-chart.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`sparkline`}
      </strong>
      {` is a small chart that helps users analyze data and understand trends and patterns.`}
    </p>
    <AutoLinkHeader {...{"id":"usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Sparklines are commonly used in tables, reports, and dashboards. A common use case is displaying utilization in an environment over time. Sparklines help to show trends in a series of values or to highlight maximum and minimum values. We recommend using sparklines alone without an axis and placing the name of the item being visualized underneath the chart.`}
    </p>
    <AutoLinkHeader {...{"id":"example","size":"h3","className":"ws-title ws-h3"}}>
      {`Example`}
    </AutoLinkHeader>
    <img src={srcImport29} height={srcImport29.height * 628 / srcImport29.width} {...{"alt":"Sparkline","width":"628","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`We recommend showing sparklines without an x or y-axis. Depending on space, a label can be placed underneath or to the left of the sparkline naming its visualized item.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'ChartsSparklineChartDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
