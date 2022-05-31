import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport393 from '../../../content/design-guidelines/components/tabs/./img/default-tabs.png';
import srcImport394 from '../../../content/design-guidelines/components/tabs/./img/default-vs-filled-tabs.png';
import srcImport395 from '../../../content/design-guidelines/components/tabs/./img/boxed-tabs.png';
import srcImport396 from '../../../content/design-guidelines/components/tabs/./img/vertical-tabs.png';
import srcImport397 from '../../../content/design-guidelines/components/tabs/./img/disabled-tab.png';
import srcImport398 from '../../../content/design-guidelines/components/tabs/./img/primary-tabs.png';
import srcImport399 from '../../../content/design-guidelines/components/tabs/./img/secondary-1-tabs.png';
import srcImport400 from '../../../content/design-guidelines/components/tabs/./img/secondary-2-tabs.png';
const pageData = {
  "id": "Tabs",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/tabs/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/tabs/tabs.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Tabs`}
      </strong>
      {` allow users to navigate between views within the same page or context.`}
    </p>
    <AutoLinkHeader {...{"id":"usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`PatternFly offers a few types of tabs:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"#default-tabs"}}>
          {`Default tabs`}
        </PatternflyThemeLink>
        {` (recommended)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"#boxed-tabs"}}>
          {`Boxed tabs`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"#vertical-tabs"}}>
          {`Vertical tabs`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`You can use as many tabs as you want in a page, although it is recommended you keep the total number of tabs to a minimum for a better user experience. If you have more tabs than fit on the page, you may use a `}
      <PatternflyThemeLink {...{"to":"/components/tabs#default-overflow"}}>
        {`default overflow`}
      </PatternflyThemeLink>
      {` which would allow a user to horizontal scroll through your tabs. The uses of both default and boxed stylings are flexible, so use either according to your needs and preferences.`}
    </p>
    <AutoLinkHeader {...{"id":"default-tabs","size":"h3","className":"ws-title ws-h3"}}>
      {`Default tabs`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Default tabs do not have any borders, other than the bottom line to distinguish between a selected tab, a hovered over tab, and a non-active tab. These tabs are most commonly used as top page header tabs or nested within components.`}
    </p>
    <img src={srcImport393} height={srcImport393.height * 1500 / srcImport393.width} {...{"alt":"Default tabs ex","width":"1500","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Default tabs can be formatted as standard or filled.  Filled tabs stretch to fit the width of the container that they are placed in. They can be used in screens with narrower widths, such as a drawer within a `}
      <PatternflyThemeLink {...{"to":"/demos/primary-detail"}}>
        {`primary detail view`}
      </PatternflyThemeLink>
      {`. When in doubt, stick with the standard styled tabs.`}
    </p>
    <img src={srcImport394} height={srcImport394.height * 1500 / srcImport394.width} {...{"alt":"Standard and filled tabs ex","width":"1500","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        {`Standard styled tabs`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Filled styled tabs`}
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"boxed-tabs","size":"h3","className":"ws-title ws-h3"}}>
      {`Boxed tabs`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Box tabs are functionally the same as default tabs, but they are outlined by a box to emphasize the area that the tab spans. Boxed tabs can be used interchangeably with default tabs, but we recommend using the default tabs over boxed tabs. Boxed tabs can be used in combination with default tabs to create more hierarchy on the page.`}
    </p>
    <img src={srcImport395} height={srcImport395.height * 1500 / srcImport395.width} {...{"alt":"Boxed tabs ex","width":"1500","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"vertical-tabs","size":"h3","className":"ws-title ws-h3"}}>
      {`Vertical tabs`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Vertical tabs are placed on the left hand side of a page or container.`}
    </p>
    <img src={srcImport396} height={srcImport396.height * 1500 / srcImport396.width} {...{"alt":"Vertical tabs ex","width":"1500","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"disabled-tabs","size":"h3","className":"ws-title ws-h3"}}>
      {`Disabled tabs`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`PatternFly supports a disabled tab variation for all tab types. A disabled tab can be used to indicate that a section is unavailable to the user, usually due to a lack of permissions. Information to explain why the tab is disabled may be provided by using a tooltip on the element.`}
    </p>
    <img src={srcImport397} height={srcImport397.height * 986 / srcImport397.width} {...{"alt":"Example of disabled tab with tooltip","width":"986","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"hierarchy","size":"h2","className":"ws-title ws-h2"}}>
      {`Hierarchy`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`When you have more than one tab level in your UI, you can either chose to use a mixture of boxed and default tabs to create hierarchy on a page, or you can chose to use primary and secondary tabs which differ in their font size, with primary tabs using 16pt font, and secondary tabs using 14pt font.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Two tab options provide hierarchy within a page:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"#primary-tabs"}}>
          {`Primary tabs`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"#secondary-tabs"}}>
          {`Secondary tabs`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"primary-tabs","size":"h3","className":"ws-title ws-h3"}}>
      {`Primary tabs`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use primary tabs only for top page header tabs and vertical tabs. Primary tabs use 16px text.`}
    </p>
    <img src={srcImport398} height={srcImport398.height * 1500 / srcImport398.width} {...{"alt":"Primary tabs ex","width":"1500","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"secondary-tabs","size":"h3","className":"ws-title ws-h3"}}>
      {`Secondary tabs`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use secondary tabs when, you have another set of tabs, in addition to a primary level, or when using tabs within a component, for example in a modal. Secondary tabs use 14px text.`}
    </p>
    <img src={srcImport399} height={srcImport399.height * 1500 / srcImport399.width} {...{"alt":"Secondary tabs ex","width":"1500","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        {`Primary tabs`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Secondary tabs`}
      </li>
    </ol>
    <img src={srcImport400} height={srcImport400.height * 1500 / srcImport400.width} {...{"alt":"Secondary tabs ex","width":"1500","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Secondary tabs:`}
        </strong>
        {` These should be used when tabs live within a component, like the modal.`}
      </li>
    </ol>
  </React.Fragment>
);
Component.displayName = 'ComponentsTabsDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
