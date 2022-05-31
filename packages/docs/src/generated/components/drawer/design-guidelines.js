import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport171 from '../../../content/design-guidelines/components/drawer/./img/splitter-drawer.png';
const pageData = {
  "id": "Drawer",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/drawer/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/drawer/drawer.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`drawer`}
      </strong>
      {` is a sliding panel that enters from the right edge of the viewport. It can be configured to either overlay content on a page or create a sidebar by pushing that content to the left.`}
    </p>
    <AutoLinkHeader {...{"id":"usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Drawers can be used to store and show more information than immediately presented on a page. A drawer with more information is usually prompted by a user click. Upon the click, the drawer comes out and shows more information, which is usually relevant to a whole page.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Drawers appear as a sliding panel that can be attached to the bottom or right edge of a window. They’re commonly used in a `}
      <PatternflyThemeLink {...{"to":"/demos/primary-detail"}}>
        {`primary-detail`}
      </PatternflyThemeLink>
      {`, which is a layout that uses a drawer for details and spans the height of the primary content. The primary content can be placed in any container, and the details drawer will span the height of that container. The drawer component is used for the details because it's common for the "detail" in primary-detail to be toggled open/close, while the primary content should always be present on the screen. For a primary-detail in a card, the details section is still built with a drawer component even when it's not collapsible.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`In addition to primary-details, the drawer component is frequently used in `}
      <PatternflyThemeLink {...{"to":"/components/notification-drawer"}}>
        {`notification drawers`}
      </PatternflyThemeLink>
      {` or terminal windows.`}
    </p>
    <AutoLinkHeader {...{"id":"splitter-in-a-drawer","size":"h3","className":"ws-title ws-h3"}}>
      {`Splitter in a drawer`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`splitter`}
      </strong>
      {` allows you to create a layout with resizable panes. The orientation of a splitter can be set to `}
      <strong>
        {`vertical`}
      </strong>
      {` or `}
      <strong>
        {`horizontal`}
      </strong>
      {`.`}
    </p>
    <AutoLinkHeader {...{"id":"usage-0","size":"h3","className":"ws-title ws-h3"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Add a splitter to a drawer if you need to resize the width or height of a panel to give content more space. If data shown in a drawer has enough space, then you don’t need to use a splitter.`}
    </p>
    <img src={srcImport171} height={srcImport171.height * 1500 / srcImport171.width} {...{"width":"1500","className":"ws-img"}}>
    </img>
  </React.Fragment>
);
Component.displayName = 'ComponentsDrawerDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
