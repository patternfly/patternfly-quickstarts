import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport21 from '../../../content/design-guidelines/charts/donut-chart/./img/donut-chart.png';
const pageData = {
  "id": "Donut chart",
  "section": "charts",
  "source": "design-guidelines",
  "slug": "/charts/donut-chart/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/charts/donut-chart/donut-chart.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`donut chart`}
      </strong>
      {` represents relative amounts that must add up to 100%.`}
    </p>
    <AutoLinkHeader {...{"id":"usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`In donut charts, you can choose to use percentages or integer values to compare parts to the whole. When deciding which to use, consider the information that is most important to your user and what makes the most sense for your use case. For example, if a user knows they have 123 farm animals and they’re interested in knowing how many of those animals are cows, it probably makes more sense to use an integer value. If that same user is interested in knowing how much storage space they have left in their grain silo, a percentage might be better.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Do not try to represent more than six categories in a donut chart. We recommend using the `}
      <PatternflyThemeLink {...{"to":"/guidelines/colors-for-charts"}}>
        {`colors for charts`}
      </PatternflyThemeLink>
      {` guidelines to represent your data when thresholds are not present.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`The most common use cases for donut charts are:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Showing the relationship of a set of values to a whole.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Showing utilization for an object as a percentage (with or without thresholds).`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`If you need to compare one category to another, consider using a `}
      <PatternflyThemeLink {...{"to":"/charts/bar-chart"}}>
        {`bar chart`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <AutoLinkHeader {...{"id":"example","size":"h3","className":"ws-title ws-h3"}}>
      {`Example`}
    </AutoLinkHeader>
    <img src={srcImport21} height={srcImport21.height * 501 / srcImport21.width} {...{"alt":"Donut chart","width":"501","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Segment fill:`}
        </strong>
        {` We recommend using `}
        <PatternflyThemeLink {...{"to":"/guidelines/colors-for-charts"}}>
          {`colors for charts`}
        </PatternflyThemeLink>
        {` for different items within the donut chart.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Segment padding:`}
        </strong>
        {`  Always provide 3px of padding between segments.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chart tooltip:`}
        </strong>
        {` A tooltip will appear upon hover that states the name of the segment and corresponding value. For example, if the segment represents "Bugs," and the value being represented is 25, your chart tooltip would state, "Bugs: 25."`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Label:`}
        </strong>
        {` When a donut chart is contained within a dashboard card, a label defines what the chart represents. The label may also represent the total value of the data set. If this optional representation is chosen, it should follow the format of `}
        <strong>
          {`[total numeric value]`}
          {` + `}
          {`[data set label]`}
        </strong>
        {` (example: "100 Issues"). The total numeric value should be rounded to two decimal places or less (14 characters max) and should be styled using 24px font in standard text color. The data set label cannot contain more than 24 characters and should be styled using 14px font in secondary text color. Center them within the donut and style as shown. If the label exceeds the max character count, place it outside of the donut and leave the center empty.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Legend:`}
        </strong>
        {` In order to be compliant with accessibility guidelines, a legend is necessary. Each variable on the legend should report their current value.`}
      </li>
    </ol>
  </React.Fragment>
);
Component.displayName = 'ChartsDonutChartDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
