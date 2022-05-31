import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import theSystem from '../../../content/design-guidelines/styles/colors-for-charts/./thesystem.gif';
import oneFamily from '../../../content/design-guidelines/styles/colors-for-charts/./onefamily.gif';
import fewVariables from '../../../content/design-guidelines/styles/colors-for-charts/./fewvariables.png';
import manyVariables from '../../../content/design-guidelines/styles/colors-for-charts/./manyvariables.png';
import nestedVariables from '../../../content/design-guidelines/styles/colors-for-charts/./nestedvariables.png';
import { Alert, Grid, GridItem, Divider } from '@patternfly/react-core';
import ColorsGrid from '../../../content/design-guidelines/styles/colors-for-charts/./colors-grid.js';
import '../../../content/design-guidelines/styles/colors-for-charts/./colors-for-charts.css';
const pageData = {
  "id": "Colors for charts",
  "section": "charts",
  "source": "design-guidelines",
  "slug": "/charts/colors-for-charts/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/styles/colors-for-charts/colors-for-charts.md"
};
pageData.liveContext = {
  theSystem,
  oneFamily,
  fewVariables,
  manyVariables,
  nestedVariables,
  Alert,
  Grid,
  GridItem,
  Divider,
  ColorsGrid
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"chart-colors","size":"h2","className":"ws-title ws-h2"}}>
      {`Chart colors`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Colors for charts includes a recommended set of colors proposed for bar charts, donut charts and pie charts. There are six base colors (blue to orange) that the system is built on. Each base color has its own color family, which includes lighter and darker hues of the base. These families use a monochromatic color order. They are organized in a way that increases contrast while still looking extremely visually appealing. The variation of colors will depend on the type and amount of data at hand.`}
    </p>
    <ColorsGrid/>
    <Divider className="ws-chart-colors-divider"/>
    <AutoLinkHeader {...{"id":"the-system","size":"h2","className":"ws-title ws-h2"}}>
      {`The system`}
    </AutoLinkHeader>
    <Grid hasGutter>
      <GridItem
  xl={6}
  lg={12}
  className="ws-chart-colors-gridtext"
>
        <AutoLinkHeader {...{"id":"how-it-works","size":"h3","className":"ws-title ws-h3"}}>
          {`How it works`}
        </AutoLinkHeader>
        <p {...{"className":"ws-p"}}>
          {`Although the system may seem complex, it is completely customizable. The idea is that you can put together your desired colors and amount of colors and the system will still sort them correctly. Here’s how the system works:
`}
                    <br/>
          {`
In this instance, there are only four base colors, therefore four color families. The order begins by going through each base color. Next, it alternates between the lightest and darkest values of each family. Finally, if you still need more colors, it alternates between the second lightest and second darkest colors of each family. In variable-terms: #1a-d base colors, #2a-d `}
          {`[color]`}
          {`-100/`}
          {`[color]`}
          {`-500 alternating, #3a-d `}
          {`[color]`}
          {`-500/`}
          {`[color]`}
          {`-100 alternating, #4a-d `}
          {`[color]`}
          {`-200/`}
          {`[color]`}
          {`-400 alternating, and #5a-d `}
          {`[color]`}
          {`-400/`}
          {`[color]`}
          {`-200 alternating. No matter the colors inputted, the process will remain the same.`}
        </p>
</GridItem>
            <GridItem
  xl={6}
  lg={12}
>
        <img
  width="480px"
  src={theSystem}
  alt="Chart color system example"
/>
</GridItem>
</Grid>
    <Divider className="ws-chart-colors-divider"/>
    <AutoLinkHeader {...{"id":"use-cases","size":"h2","className":"ws-title ws-h2"}}>
      {`Use cases`}
    </AutoLinkHeader>
    <Grid hasGutter>
      <GridItem
  xl={6}
  lg={12}
  className="ws-chart-colors-gridtext"
>
        <AutoLinkHeader {...{"id":"chart-with-few-variables-1-7","size":"h3","className":"ws-title ws-h3"}}>
          {`Chart with few variables (1-7)`}
        </AutoLinkHeader>
        <p {...{"className":"ws-p"}}>
          {`If you are dealing with data that includes six or less variables, we recommend using the base colors to represent each. For example, if you collected data on how many sales were made per product at your organization during one period of time, it could look like this if plotted using a bar chart.`}
        </p>
</GridItem>
            <GridItem
  xl={6}
  lg={12}
>
        <img
  width="480px"
  src={fewVariables}
  alt="Few variables examples"
/>
</GridItem>
</Grid>
    <br/>
    <Grid hasGutter>
      <GridItem
  xl={6}
  lg={12}
  className="ws-chart-colors-gridtext"
>
        <AutoLinkHeader {...{"id":"chart-with-nested-grouped-variables","size":"h3","className":"ws-title ws-h3"}}>
          {`Chart with nested (grouped) variables`}
        </AutoLinkHeader>
        <p {...{"className":"ws-p"}}>
          {`If you have a set of data that includes grouped variables, we recommend using the color families to represent each. Grouped variables would include a set of parents and children variables. Each group would use a color family that would be represented in the same order as the base colors are listed. So, depending on the amount of nested variables you have, the first color family would be blue, then green, cyan, etc. The colors would start over if there are more than 6 groups, returning back to the blue family. An example of this type of data would be quarterly sales broken down by geographical locations.`}
        </p>
</GridItem>
            <GridItem
  xl={6}
  lg={12}
>
        <img
  width="480px"
  src={nestedVariables}
  alt="Nested variables example"
/>
</GridItem>
</Grid>
    <br/>
    <Grid hasGutter>
      <GridItem
  xl={6}
  lg={12}
  className="ws-chart-colors-gridtext"
>
        <AutoLinkHeader {...{"id":"chart-with-many-variables-7","size":"h3","className":"ws-title ws-h3"}}>
          {`Chart with many variables (>7)`}
        </AutoLinkHeader>
        <p {...{"className":"ws-p"}}>
          {`If the set of data includes more than six variables, we recommend applying the multichromatic order system, which uses all of the colors in the color system, to the data. This includes a mix of base colors and colors from their family. An example of this type of data would be the cost of living expenses during a period of time.`}
        </p>
</GridItem>
            <GridItem
  xl={6}
  lg={12}
>
        <img
  width="480px"
  src={manyVariables}
  alt="Many variables example"
/>
</GridItem>
</Grid>
    <Divider className="ws-chart-colors-divider"/>
    <AutoLinkHeader {...{"id":"using-the-system-with-one-color-family","size":"h2","className":"ws-title ws-h2"}}>
      {`Using the system with one color family`}
    </AutoLinkHeader>
    <Grid hasGutter>
      <GridItem
  xl={6}
  lg={12}
  className="ws-chart-colors-gridtext"
>
{`You can also use the color order system with one color family. This creates a monochromatic effect. It works using the same logic and order. We recommend using this system for charts with nested variables. The order begins by going through each base color, then lightest, darkest, second lightest, and ending with second darkest. In variable-terms: #1 `}
        {`[color]`}
        {`-300 (base color), #2 `}
        {`[color]`}
        {`-100, #3 `}
        {`[color]`}
        {`-500, #4 `}
        {`[color]`}
        {`-200, #5 `}
        {`[color]`}
        {`-400. The hues will always follow this order.`}
</GridItem>
            <GridItem
  xl={6}
  lg={12}
>
        <img
  width="480px"
  src={oneFamily}
  alt="Monochromatic chart color system example"
/>
</GridItem>
</Grid>
  </React.Fragment>
);
Component.displayName = 'ChartsColorsForChartsDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
