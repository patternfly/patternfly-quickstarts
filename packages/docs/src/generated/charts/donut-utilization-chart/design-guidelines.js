import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport22 from '../../../content/design-guidelines/charts/donut-utilization-chart/./img/donut-utilization.png';
import srcImport23 from '../../../content/design-guidelines/charts/donut-utilization-chart/./img/donut-utilization-hover.png';
import srcImport24 from '../../../content/design-guidelines/charts/donut-utilization-chart/./img/donut-utilization-2.png';
import srcImport25 from '../../../content/design-guidelines/charts/donut-utilization-chart/./img/donut-utilization-with-threshold.png';
import srcImport26 from '../../../content/design-guidelines/charts/donut-utilization-chart/./img/donut-utilization-with-threshold-hover.png';
const pageData = {
  "id": "Donut utilization chart",
  "section": "charts",
  "source": "design-guidelines",
  "slug": "/charts/donut-utilization-chart/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/charts/donut-utilization-chart/donut-utilization-chart.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`donut utlization chart`}
      </strong>
      {` is a donut chart used specifically to show utilization metrics.`}
    </p>
    <AutoLinkHeader {...{"id":"usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"donut-chart---utilization","size":"h3","className":"ws-title ws-h3"}}>
      {`Donut chart - Utilization`}
    </AutoLinkHeader>
    <img src={srcImport22} height={srcImport22.height * 404 / srcImport22.width} {...{"alt":"Donut utilization","width":"404","className":"ws-img"}}>
    </img>
    <img src={srcImport23} height={srcImport23.height * 404 / srcImport23.width} {...{"alt":"Donut utilization hover","width":"404","className":"ws-img"}}>
    </img>
    <img src={srcImport24} height={srcImport24.height * 404 / srcImport24.width} {...{"alt":"Donut utilization 2","width":"404","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Unused segment fill:`}
        </strong>
        {` The unused area of the donut chart will always remain at #EDEDED.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Used segment fill:`}
        </strong>
        {` We recommend using #0066cc for the used area of the donut chart. See `}
        <PatternflyThemeLink {...{"to":"/guidelines/colors-for-charts"}}>
          {`colors for charts`}
        </PatternflyThemeLink>
        {` for other recommended color options.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Utilization label:`}
        </strong>
        {` Both percentages and whole numbers can be used to represent the utilization.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chart tooltip:`}
        </strong>
        {` Since this is a utilization donut chart, the tooltip will display the percentage of data utilized. Chart tooltips only appear on hover over the utilization segment of the chart. We recommend stating the segment name and the utilization value being captured. For example, if the user is tracking GBps utilization, the chart tooltip would state "GBps utilization: 75%."`}
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"donut-chart---utilization-with-threshold","size":"h3","className":"ws-title ws-h3"}}>
      {`Donut chart - Utilization with threshold`}
    </AutoLinkHeader>
    <img src={srcImport25} width={srcImport25.width} height={srcImport25.height} {...{"alt":"Donut utilization with threshold","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Threshold segment fill:`}
        </strong>
        {` The outer segments of the chart are static and represent the thresholds for your use case. The example diagrams show utilization thresholds for a database and are used to let users know when they move from a safe zone into a danger zone. For threshold segments, use incremental shades of  grey starting at #EDEDED then to #D2D2D2 then to #BBBBBB. Provide 3px of padding between each segment.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Utilization segment fill:`}
        </strong>
        {` This dynamic chart is a concentric circle within the donut thresholds and will represent the data set. For this chart, we recommend using the following colors:`}
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`#0066cc before the data set has hit a threshold`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`#F0AB00 once the data set has hit the warning threshold`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`#C9190B once the data set has hit the danger threshold`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Legend:`}
        </strong>
        {` The utilization segment color swatch will change in accordance to the chart.`}
      </li>
    </ol>
    <img src={srcImport26} width={srcImport26.width} height={srcImport26.height} {...{"alt":"Donut utilization with threshold hover","className":"ws-img"}}>
    </img>
    <ol {...{"start":4,"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chart tooltip:`}
        </strong>
        {` Chart tooltips appear on hover for both threshold segments and utilization segments. We recommend stating the threshold name, the segment name, and the value being represented. For example, if the threshold being met is "Danger," and the segment represents "Storage capacity," and the value being represented is 92%, your chart tooltip would state, "Danger: Storage capacity: 92%." We recommend stating the threshold name "at" the percentage the threshold begins, so a threshold name might read, "Warning at 60%."`}
      </li>
    </ol>
  </React.Fragment>
);
Component.displayName = 'ChartsDonutUtilizationChartDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
