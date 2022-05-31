import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport17 from '../../../content/design-guidelines/charts/area-chart/./img/area-chart.png';
const pageData = {
  "id": "Area chart",
  "section": "charts",
  "source": "design-guidelines",
  "slug": "/charts/area-chart/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/charts/area-chart/area-chart.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`An `}
      <strong>
        {`area chart`}
      </strong>
      {` is used to provide metrics for a single data point. While similar to a line chart in both form and function, it offers an area fill for visual emphasis. The area fill below the line also functions to indicate cumulative data.`}
    </p>
    <AutoLinkHeader {...{"id":"usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The most common use case for area charts is to show trending over a continuous scale (usually time). Use this chart type when you need to provide more visual emphasis than a simple `}
      <PatternflyThemeLink {...{"to":"/charts/line-chart"}}>
        {`line chart`}
      </PatternflyThemeLink>
      {` offers.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`You may stack area charts to compare more than one continuous data sets. Stacking area charts will put more emphasis on the difference between each visualized data set.`}
    </p>
    <AutoLinkHeader {...{"id":"example","size":"h3","className":"ws-title ws-h3"}}>
      {`Example`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport17} height={srcImport17.height * 489 / srcImport17.width} {...{"alt":"Area chart","width":"489","className":"ws-img"}}>
      </img>
      {` `}
    </p>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Data area fill:`}
        </strong>
        {` The area fill is presented below the data line. Data area fills use colors that conform with the `}
        <PatternflyThemeLink {...{"to":"/guidelines/colors-for-charts"}}>
          {`colors for charts`}
        </PatternflyThemeLink>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chart tooltip:`}
        </strong>
        {` Use the chart tooltip to drill into the data related to any data point provided on your area chart.`}
      </li>
    </ol>
  </React.Fragment>
);
Component.displayName = 'ChartsAreaChartDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
