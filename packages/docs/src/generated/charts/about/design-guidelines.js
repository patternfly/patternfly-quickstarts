import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport10 from '../../../content/design-guidelines/charts/about/./img/axis-labels.png';
import srcImport11 from '../../../content/design-guidelines/charts/about/./img/chart-legend.png';
import srcImport12 from '../../../content/design-guidelines/charts/about/./img/chart-on-a-card.png';
import srcImport13 from '../../../content/design-guidelines/charts/about/./img/sparkline-card.png';
import srcImport14 from '../../../content/design-guidelines/charts/about/./img/brush-and-zoom.png';
import srcImport15 from '../../../content/design-guidelines/charts/about/./img/interaction-legend-hover.png';
import srcImport16 from '../../../content/design-guidelines/charts/about/./img/interaction-legend-hide.png';
const pageData = {
  "id": "About",
  "section": "charts",
  "source": "design-guidelines",
  "slug": "/charts/about/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/charts/about/about.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      <em>
        {`Charts are only available in React`}
      </em>
    </p>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`chart`}
      </strong>
      {` visualizes data in an application. The type of chart you use will depend on your use case and the type of data you need to display.`}
    </p>
    <AutoLinkHeader {...{"id":"elements","size":"h2","className":"ws-title ws-h2"}}>
      {`Elements`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport10} height={srcImport10.height * 713 / srcImport10.width} {...{"alt":"Chart with axis labels","width":"713","className":"ws-img"}}>
      </img>
      {` `}
    </p>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Title:`}
        </strong>
        {` Titles should be left-aligned and appear above your chart.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Axis labels and scale values:`}
        </strong>
        {`  We recommend using tick marks to clearly mark scale values on the y-axis. The text for axis labels and scale values should be 12px font in standard text color. All scale values should be equally distributed across the axis and the axis label should fall outside the scale values, centered with the axis line.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Legends:`}
        </strong>
        {` We recommend using legends when charts include more than one variable and therefore use more than one color. When datasets are overlapping, an `}
        <PatternflyThemeLink {...{"to":"#interactive-chart-legends"}}>
          {`interactive legend`}
        </PatternflyThemeLink>
        {` can be used. If space is not available to display names of horizontal and vertical axes, a legend must be added instead. The legend should list the colors that each variable obtains and the name of the variable. The text on the legend should be 14px size and standard text color. They can either be placed left-aligned to the right of the chart or centered below the chart.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chart tooltip:`}
        </strong>
        {` A tooltip will appear on hover over certain elements of a chart, like bars in a bar chart or segments in a donut chart. `}
        <PatternflyThemeLink {...{"to":"/charts/tooltip-chart"}}>
          {`Chart tooltips`}
        </PatternflyThemeLink>
        {` should display the specific values related to the element the user is hovering over.`}
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"chart-types","size":"h2","className":"ws-title ws-h2"}}>
      {`Chart types`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport11} height={srcImport11.height * 1024 / srcImport11.width} {...{"alt":"Image displaying what chart types to use when","width":"1024","className":"ws-img"}}>
      </img>
      {` `}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/charts/area-chart/design-guidelines"}}>
          {`Area chart`}
        </PatternflyThemeLink>
        {`: Use to show trends over a continuous scale (usually time).`}
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/charts/bar-chart/design-guidelines"}}>
          {`Bar chart`}
        </PatternflyThemeLink>
        {`: Use to show and compare categorical data. Can be plotted vertically or horizontally.`}
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            <PatternflyThemeLink {...{"to":"/charts/stack-chart/design-guidelines"}}>
              {`Stacked bar chart`}
            </PatternflyThemeLink>
            {`: Use to show and compare categorical data of more than one variable. Can be plotted vertically or horizontally.`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/charts/bullet-chart/design-guidelines"}}>
          {`Bullet chart`}
        </PatternflyThemeLink>
        {`: Use as an extension to the bar chart to measure data with thresholds and static ranges.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/charts/donut-chart/design-guidelines"}}>
          {`Donut chart`}
        </PatternflyThemeLink>
        {`: Use to show the relationship of a set of values to a whole, or progress completion as a percentage; best used to display data with a small number of categories (example: 2-5 categories).`}
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            <PatternflyThemeLink {...{"to":"/charts/donut-utilization-chart/design-guidelines"}}>
              {`Donut utilization`}
            </PatternflyThemeLink>
            {`: Use to show utilization for an object as a percentage.`}
          </li>
          <li {...{"className":"ws-li"}}>
            <PatternflyThemeLink {...{"to":"/charts/donut-utilization-chart/design-guidelines#donut-chart---utilization-with-threshold"}}>
              {`Donut utilization with threshold`}
            </PatternflyThemeLink>
            {`: Use to show utilization for an object as a percentage in relation to threshold values.`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/charts/line-chart/design-guidelines"}}>
          {`Line chart`}
        </PatternflyThemeLink>
        {`: Use to compare several data sets, or to show data over a period of time.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/charts/pie-chart/design-guidelines"}}>
          {`Pie chart`}
        </PatternflyThemeLink>
        {`: Use to show percentages or proportional data.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/charts/sparkline-chart/design-guidelines"}}>
          {`Sparkline`}
        </PatternflyThemeLink>
        {`: Use to show how values change over time for multiple sets of data. Useful alternative to the line chart when multiple lines need to be plotted.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"charts-in-cards","size":"h2","className":"ws-title ws-h2"}}>
      {`Charts in cards`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`If a chart lives in a card, the title of that chart will be placed on the header of that card instead of the chart. The rest of the chart guidelines should be followed for the chart itself.`}
    </p>
    <img src={srcImport12} height={srcImport12.height * 416 / srcImport12.width} {...{"alt":"Chart on a card","width":"416","className":"ws-img"}}>
    </img>
    <img src={srcImport13} height={srcImport13.height * 482 / srcImport13.width} {...{"alt":"Sparkline on a card","width":"482","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"brush-and-zoom","size":"h2","className":"ws-title ws-h2"}}>
      {`Brush and zoom`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The brush and zoom properties allow for magnification of an area, bar, line, or stack chart. If desired, more advanced features can be added through `}
      <PatternflyThemeLink {...{"to":"https://formidable.com/open-source/victory/guides/brush-and-zoom/"}}>
        {`Victory`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <AutoLinkHeader {...{"id":"example","size":"h3","className":"ws-title ws-h3"}}>
      {`Example`}
    </AutoLinkHeader>
    <img src={srcImport14} width={srcImport14.width} height={srcImport14.height} {...{"alt":"Brush and zoom","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Window:`}
        </strong>
        {` Click and drag to create a window around the section of the chart that you want to zoom in on.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Magnified chart:`}
        </strong>
        {` The portion selected will appear above the full chart view.`}
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"interactive-chart-legends","size":"h2","className":"ws-title ws-h2"}}>
      {`Interactive chart legends`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`For charts that graph more than one data set, use interactive legends to highlight or isolate certain data sets.  This would work well for `}
      <PatternflyThemeLink {...{"to":"#line-chart"}}>
        {`line`}
      </PatternflyThemeLink>
      {`, `}
      <PatternflyThemeLink {...{"to":"#area-chart"}}>
        {`area`}
      </PatternflyThemeLink>
      {`, or `}
      <PatternflyThemeLink {...{"to":"#stacked-bar-charts"}}>
        {`stacked`}
      </PatternflyThemeLink>
      {` charts, where data sets can overlap.`}
    </p>
    <AutoLinkHeader {...{"id":"example-0","size":"h3","className":"ws-title ws-h3"}}>
      {`Example`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`On hover`}
    </p>
    <img src={srcImport15} width={srcImport15.width} height={srcImport15.height} {...{"alt":"Interactive legend on hover","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Legend:`}
        </strong>
        {` When a user hovers over a legend label, opacity lowers for all other legend labels.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chart:`}
        </strong>
        {` Data corresponding to the hovered legend label is highlighted since opacity lowers for all other data sets, too.`}
      </li>
    </ol>
    <p {...{"className":"ws-p"}}>
      {`On click`}
    </p>
    <img src={srcImport16} width={srcImport16.width} height={srcImport16.height} {...{"alt":"Interactive legend hidden","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Legend:`}
        </strong>
        {` When a user clicks on a legend label, it becomes disabled and the color swatch is replaced with an eye-slashed icon.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chart:`}
        </strong>
        {` Data corresponding to the clicked legend label is hidden from view.`}
      </li>
    </ol>
  </React.Fragment>
);
Component.displayName = 'ChartsAboutDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
