import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport18 from '../../../content/design-guidelines/charts/bar-chart/./img/horizontal-bar-chart.png';
import srcImport19 from '../../../content/design-guidelines/charts/bar-chart/./img/vertical-bar-chart.png';
const pageData = {
  "id": "Bar chart",
  "section": "charts",
  "source": "design-guidelines",
  "slug": "/charts/bar-chart/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/charts/bar-chart/bar-chart.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`bar chart`}
      </strong>
      {` is used to easily display two variables, one on the horizontal x-axis and one on the vertical y-axis. They are helpful to visualize and compare categorical data.`}
    </p>
    <AutoLinkHeader {...{"id":"usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Bar charts are a great way to show and compare categorical data. Unlike donut or pie charts that differentiate by angle area, bar charts differentiate by length. Because of this clearer differentiation, we recommend using bar charts over donut or pie charts in most cases.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`If you want to show continuous data over time, you may consider using a `}
      <PatternflyThemeLink {...{"to":"/charts/line-chart"}}>
        {`line chart`}
      </PatternflyThemeLink>
      {` instead. If you wish to show the percentage utilization ratio between used and available, you should check out the `}
      <PatternflyThemeLink {...{"to":"/charts/donut-utilization-chart"}}>
        {`donut utilization chart`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <AutoLinkHeader {...{"id":"horizontal-vs.-vertical-bar-charts","size":"h2","className":"ws-title ws-h2"}}>
      {`Horizontal vs. vertical bar charts`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The orientation of bar charts is dependent on the data and space at hand. Any bar chart should be able to be displayed in either direction if applicable.`}
    </p>
    <AutoLinkHeader {...{"id":"example","size":"h4","className":"ws-title ws-h4"}}>
      {`Example`}
    </AutoLinkHeader>
    <img src={srcImport18} height={srcImport18.height * 737 / srcImport18.width} {...{"alt":"Horizontal bar chart","width":"737","className":"ws-img"}}>
    </img>
    <br/>
    <img src={srcImport19} height={srcImport19.height * 559 / srcImport19.width} {...{"alt":"Vertical bar chart","width":"559","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`A bar's height represents its value. All bars should be the same width, and the spacing between them should be equal, mimicking the spacing between axis values. For fill color recommendations, see `}
      <PatternflyThemeLink {...{"to":"/guidelines/colors-for-charts"}}>
        {`colors for charts`}
      </PatternflyThemeLink>
      {`.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'ChartsBarChartDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
