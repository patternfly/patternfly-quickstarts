import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport27 from '../../../content/design-guidelines/charts/line-chart/./img/line-chart.png';
const pageData = {
  "id": "Line chart",
  "section": "charts",
  "source": "design-guidelines",
  "slug": "/charts/line-chart/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/charts/line-chart/line-chart.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`line chart`}
      </strong>
      {` plots a series of discrete data samples to show continuous data and trend information. Sample values on the line can be measured and extracted.`}
    </p>
    <AutoLinkHeader {...{"id":"usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The most common use case for line charts is to compare several data sets over a period of time. They can be used to project trends into the past or future. A best fit line is created and extended in both directions to do so, but the validity of the projection is not certain. If you want to show and compare categorical data, you may consider using a `}
      <PatternflyThemeLink {...{"to":"/charts/bar-chart"}}>
        {`bar chart`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Multiple lines on the same chart allow the user to visualize relationships between varying data sets, such as correlated events, similarities or unexpected differences. We recommend displaying no more than 6 lines on a single graph to avoid confusion.`}
    </p>
    <AutoLinkHeader {...{"id":"example","size":"h3","className":"ws-title ws-h3"}}>
      {`Example`}
    </AutoLinkHeader>
    <img src={srcImport27} width={srcImport27.width} height={srcImport27.height} {...{"alt":"Line chart","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Line charts can optionally represent data points as dots on the line. If so, the same interaction that occurs when hovering over one in an `}
      <PatternflyThemeLink {...{"to":"/charts/area-chart"}}>
        {`area chart`}
      </PatternflyThemeLink>
      {` will occur in line charts. For line colors, we recommend consulting `}
      <PatternflyThemeLink {...{"to":"/guidelines/colors-for-charts"}}>
        {`colors for charts`}
      </PatternflyThemeLink>
      {`.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'ChartsLineChartDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
