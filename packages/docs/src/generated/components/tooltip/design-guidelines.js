import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport435 from '../../../content/design-guidelines/components/tooltip/./img/tooltip-kebab-icon.png';
import srcImport436 from '../../../content/design-guidelines/components/tooltip/./img/bar-chart.png';
import srcImport437 from '../../../content/design-guidelines/components/tooltip/./img/tooltip-disabled-button.png';
const pageData = {
  "id": "Tooltip",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/tooltip/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/tooltip/tooltip.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`tooltip`}
      </strong>
      {` is in-app messaging used to identify elements on a page with short, clarifying text.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`For information on other forms of on-screen help, see `}
      <PatternflyThemeLink {...{"to":"/components/popover/design-guidelines"}}>
        {`Popover`}
      </PatternflyThemeLink>
      {` and `}
      <PatternflyThemeLink {...{"to":"/components/hint/design-guidelines"}}>
        {`Hint`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <AutoLinkHeader {...{"id":"usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use tooltips to:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Provide labels for unlabeled icons.`}
      </li>
    </ul>
    <img src={srcImport435} height={srcImport435.height * 1500 / srcImport435.width} {...{"alt":"kebab icon with a “More options” tooltip label","width":"1500","className":"ws-img"}}>
    </img>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Provide additional information on a data point or element in a chart or table.`}
      </li>
    </ul>
    <img src={srcImport436} height={srcImport436.height * 612 / srcImport436.width} {...{"alt":"bar chart with a tooltip for Asia Pacific","width":"612","className":"ws-img"}}>
    </img>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Define new or unfamiliar UI elements that aren’t described directly in the user interface. For example, you can use a tooltip on a disabled button.`}
      </li>
    </ul>
    <img src={srcImport437} height={srcImport437.height * 1500 / srcImport437.width} {...{"alt":"disabled edit button with a tooltip about access","width":"1500","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"tooltip-delay-on-hover","size":"h2","className":"ws-title ws-h2"}}>
      {`Tooltip delay on hover`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`By default, tooltips have a 300ms entry delay when hovering over an object. Although this is the recommended delay time, you may customize it via prop. For example, if you have a tooltip on an icon, and you would like for it to appear immediately on hover, you may set the delay to 0 ms.`}
    </p>
    <AutoLinkHeader {...{"id":"tooltips-versus-popovers","size":"h2","className":"ws-title ws-h2"}}>
      {`Tooltips versus popovers`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Both tooltips and `}
      <PatternflyThemeLink {...{"to":"/components/popover/design-guidelines"}}>
        {`popovers`}
      </PatternflyThemeLink>
      {` provide more information in context for users. However, they’re different in a few ways:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Tooltips are used for identification purposes, while popovers are used for added description or information in context.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Tooltips contain short descriptions or labels, while popovers contain longer descriptions, formatted text, and optional images or links.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Tooltips appear on hover, while popovers appear on click.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"content","size":"h2","className":"ws-title ws-h2"}}>
      {`Content`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Keep your tooltips clear and concise. Use the fewest number of words without sacrificing meaning.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`If the tooltip is a full sentence, include a period at the end. If the tooltip is a fragment, do not include a period at the end.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Use tooltips for additional information. Don’t use tooltips for information critical to a user completing a task, such as password character requirements.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Tooltips should provide new and valuable information. Never use a tooltip to repeat information already available in the UI.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Don’t use tooltips with question-circle icons to present contextual information in forms and other areas. Instead, use a `}
        <PatternflyThemeLink {...{"to":"/components/popover/design-guidelines"}}>
          {`popover`}
        </PatternflyThemeLink>
        {`.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"accessibility","size":"h2","className":"ws-title ws-h2"}}>
      {`Accessibility`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Every time a user with a screen reader tabs into a field with a tooltip, the screen reader reads the tooltip aloud.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'ComponentsTooltipDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
