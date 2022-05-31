import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport30 from '../../../content/design-guidelines/charts/stacked-chart/./img/horizontal-stacked-bar-chart.png';
import srcImport31 from '../../../content/design-guidelines/charts/stacked-chart/./img/vertical-stacked-bar-chart.png';
const pageData = {
  "id": "Stack chart",
  "section": "charts",
  "source": "design-guidelines",
  "slug": "/charts/stack-chart/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/charts/stacked-chart/stacked-chart.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`stacked bar chart`}
      </strong>
      {` describes totals while allowing a degree of internal breakdown of its data. Stacked bar charts can be illustrated vertically and horizontally depending on available space and the described data.`}
    </p>
    <AutoLinkHeader {...{"id":"usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`An advantageous feature of stacked bar charts is the ability to reorder the stacked bars without changing the chart's overall total.`}
    </p>
    <AutoLinkHeader {...{"id":"example","size":"h4","className":"ws-title ws-h4"}}>
      {`Example`}
    </AutoLinkHeader>
    <img src={srcImport30} height={srcImport30.height * 690 / srcImport30.width} {...{"alt":"Horizontal stacked bar chart","width":"690","className":"ws-img"}}>
    </img>
    <br/>
    <img src={srcImport31} height={srcImport31.height * 663 / srcImport31.width} {...{"alt":"Vertical stacked bar chart","width":"663","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`The first series name is represented by the topmost stacked bar, and the last series name is represented by the bottommost stacked bar. For recommendations on series colors, see `}
      <PatternflyThemeLink {...{"to":"/guidelines/colors-for-charts"}}>
        {`colors for charts`}
      </PatternflyThemeLink>
      {`.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'ChartsStackChartDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
