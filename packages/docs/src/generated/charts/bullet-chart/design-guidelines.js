import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport20 from '../../../content/design-guidelines/charts/bullet-chart/./img/bullet-chart.png';
const pageData = {
  "id": "Bullet chart",
  "section": "charts",
  "source": "design-guidelines",
  "slug": "/charts/bullet-chart/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/charts/bullet-chart/bullet-chart.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`bullet chart`}
      </strong>
      {` can be thought of as an extension to a bar chart that measures a dynamic value with thresholds and target values. While similar to `}
      <PatternflyThemeLink {...{"to":"/charts/donut-utilization-chart"}}>
        {`donut utilization charts`}
      </PatternflyThemeLink>
      {`, bullet charts can show underages and overages of data (below 0% and above 100%), visualize horizontally or vertically, and pack large amounts of information into a compact space.`}
    </p>
    <AutoLinkHeader {...{"id":"usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Bullet charts are most often used to measure sets of performance data or utilization. They can be used for similar use cases as `}
      <PatternflyThemeLink {...{"to":"/charts/donut-utilization-chart#donut-utilization-threshold-examples"}}>
        {`donut utilization with threshhold charts`}
      </PatternflyThemeLink>
      {`. For example, a user can use a bullet chart to measure values of a set compared to the whole, while also illustrating related thresholds, target values, and underages or overages.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`When deciding which chart to use, consider the type of data you are dealing with and the importance of tracking underages or overages in that data. Also consider the amount of space you have to visualize the data and its surrounding information. Bullet charts consolidate data and therefore take up less space than donut charts. They fit very well within text-dense areas, since they can be horizontally or visually illustrated. Bullet charts can also measure data by percentages or integer values; donut charts cannot.`}
    </p>
    <AutoLinkHeader {...{"id":"example","size":"h3","className":"ws-title ws-h3"}}>
      {`Example`}
    </AutoLinkHeader>
    <img src={srcImport20} height={srcImport20.height * 633 / srcImport20.width} {...{"alt":"Bullet chart","width":"633","className":"ws-img"}}>
    </img>
  </React.Fragment>
);
Component.displayName = 'ChartsBulletChartDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
