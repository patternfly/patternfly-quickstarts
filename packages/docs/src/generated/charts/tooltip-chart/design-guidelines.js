import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport32 from '../../../content/design-guidelines/charts/tooltip-chart/./img/chart-tooltip.png';
const pageData = {
  "id": "Tooltip chart",
  "section": "charts",
  "source": "design-guidelines",
  "slug": "/charts/tooltip-chart/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/charts/tooltip-chart/tooltip-chart.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`tooltip chart`}
      </strong>
      {` is a chart with tooltips that appear when users hover over items within it.`}
    </p>
    <AutoLinkHeader {...{"id":"usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`For charts that have more than one data set graphed, a complex chart tooltip can be used to give more detail to a specific point in the multiple data series. This works well for `}
      <PatternflyThemeLink {...{"to":"/charts/line-chart"}}>
        {`line`}
      </PatternflyThemeLink>
      {`, `}
      <PatternflyThemeLink {...{"to":"/charts/area-chart"}}>
        {`area`}
      </PatternflyThemeLink>
      {`, or `}
      <PatternflyThemeLink {...{"to":"/charts/stack-chart"}}>
        {`stacked`}
      </PatternflyThemeLink>
      {` charts, where data sets may intersect over a period of time.`}
    </p>
    <AutoLinkHeader {...{"id":"example","size":"h2","className":"ws-title ws-h2"}}>
      {`Example`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`On hover, the tooltip shows all the corresponding data points that match a point along the x-axis. Tooltip content could also include any additional information that might be important to the user.`}
    </p>
    <img src={srcImport32} height={srcImport32.height * 600 / srcImport32.width} {...{"alt":"Example of tooltip in line chart","width":"600","className":"ws-img"}}>
    </img>
  </React.Fragment>
);
Component.displayName = 'ChartsTooltipChartDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
