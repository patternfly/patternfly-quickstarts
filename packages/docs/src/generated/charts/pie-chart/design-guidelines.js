import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport28 from '../../../content/design-guidelines/charts/pie-chart/./img/pie-chart.png';
const pageData = {
  "id": "Pie chart",
  "section": "charts",
  "source": "design-guidelines",
  "slug": "/charts/pie-chart/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/charts/pie-chart/pie-chart.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`pie chart`}
      </strong>
      {` is commonly used to show percentages or proportional data.`}
    </p>
    <AutoLinkHeader {...{"id":"usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Choose a pie chart when you need to compare a set of values to a whole. For example, you might choose a pie chart when visualizing the number of sales made by a team of five people; each segment of the chart represents one salesperson’s performance in the context of the rest of the team. The sum of all of the segments of the chart must equal 100%, and the data points should be mutually exclusive. It is recommended that there are no more than six segments per single pie chart.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`A pie chart may be the wrong choice when you need to compare categories to one another, because it can be difficult to distinguish small differences between segments. If you wish to compare values to each other, a `}
      <PatternflyThemeLink {...{"to":"/charts/bar-chart"}}>
        {`bar chart`}
      </PatternflyThemeLink>
      {` may be a more effective pattern.`}
    </p>
    <AutoLinkHeader {...{"id":"example","size":"h3","className":"ws-title ws-h3"}}>
      {`Example`}
    </AutoLinkHeader>
    <img src={srcImport28} height={srcImport28.height * 428 / srcImport28.width} {...{"alt":"Pie chart","width":"428","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Pie chart fill:`}
        </strong>
        {` We recommend fill colors based on the `}
        <PatternflyThemeLink {...{"to":"/guidelines/colors-for-charts"}}>
          {`colors for charts`}
        </PatternflyThemeLink>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Legend:`}
        </strong>
        {` Each variable on the legend should report their current value.`}
      </li>
    </ol>
  </React.Fragment>
);
Component.displayName = 'ChartsPieChartDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
