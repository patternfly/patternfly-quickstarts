import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport41 from '../../../content/design-guidelines/components/alert-group/./img/alert-group-elements.png';
import srcImport42 from '../../../content/design-guidelines/components/alert-group/./img/alert-group-desktop.png';
import srcImport43 from '../../../content/design-guidelines/components/alert-group/./img/alert-group-mobile.png';
import srcImport44 from '../../../content/design-guidelines/components/alert-group/./img/alert-group-with-overflow.png';
const pageData = {
  "id": "Alert group",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/alert-group/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/alert-group/alert-group.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`An `}
      <strong>
        {`alert group`}
      </strong>
      {` stacks and positions 2 or more alerts in a layer over the main content of a page. Alert groups should always rank alerts by age, stacking new alerts on top of old ones as they surface.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Use an alert group when you need to position multiple alerts on the same page, mainly `}
      <PatternflyThemeLink {...{"to":"/components/alert/design-guidelines#elements"}}>
        {`toast alerts`}
      </PatternflyThemeLink>
      {`. Toast alerts continue to stack until a user dismisses them or they reach an automatic timeout (8 seconds is recommended).`}
    </p>
    <AutoLinkHeader {...{"id":"elements","size":"h2","className":"ws-title ws-h2"}}>
      {`Elements`}
    </AutoLinkHeader>
    <img src={srcImport41} width={srcImport41.width} height={srcImport41.height} {...{"alt":"An example of an alert group stacked on a page. Each alert is labeled according to its place in the stack hierarchy: Newest on top, second newest in the middle, and oldest on the bottom.","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Newest notification:`}
        </strong>
        {` Always appears at the top of the alert group.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Second newest notification:`}
        </strong>
        {` Moves down when a newer notification surfaces.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Oldest notification:`}
        </strong>
        {` Continues to move down the stack as newer notifications surface, until a user closes it.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Overflow footer (optional):`}
        </strong>
        {` Use this when you do not want to display more than a specified number of alerts at the same time on the user's screen. See `}
        <PatternflyThemeLink {...{"to":"#managing-overflow"}}>
          {`Managing overflow`}
        </PatternflyThemeLink>
        {` for more information about overflow footer interactions.`}
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"placement","size":"h2","className":"ws-title ws-h2"}}>
      {`Placement`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use 8px of padding between each alert in an alert group. Alert group alignment on a page will depend on your use case.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`For desktop views`}
      </strong>
      {`, right-align alert groups over your page content. Each alert should stack on top of one another with 8px of padding in between.`}
    </p>
    <img src={srcImport42} width={srcImport42.width} height={srcImport42.height} {...{"alt":"An example of a right-aligned alert group over a desktop view.","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`For mobile views`}
      </strong>
      {`, center alert groups over your page content.`}
    </p>
    <img src={srcImport43} height={srcImport43.height * 375 / srcImport43.width} {...{"alt":"An example of a centered alert group over a mobile view.","width":"375","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"managing-overflow","size":"h2","className":"ws-title ws-h2"}}>
      {`Managing overflow`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`If you don't want multiple alerts to stack and fill the screen until the user dismisses them, you may use the overflow footer in an alert group to manage overflow. When applying overflow, you should decide how many alerts to display before showing the footer. A threshold of 3 alerts is recommended. After that, additional alerts added to the screen will cause older alerts to be hidden, and only the most recent 3 alerts are displayed.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`The overflow link should be configured to navigate to a place where the user can view and manage a complete list of incoming alerts. If a `}
      <PatternflyThemeLink {...{"to":"/components/notification-drawer"}}>
        {`notification drawer`}
      </PatternflyThemeLink>
      {` is being used, it should open the drawer. You may customize the text accordingly to reflect the result of clicking the link. However, we recommend displaying the number of new/unread notifications present to give the user feedback about how many additional notifications are remaining to view as in the example below.`}
    </p>
    <img src={srcImport44} height={srcImport44.height * 662 / srcImport44.width} {...{"alt":"An example of an alert group with overflow footer","width":"662","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`See our `}
      <PatternflyThemeLink {...{"to":"/components/alert/design-guidelines/#using-toast-alerts"}}>
        {`alert guidelines`}
      </PatternflyThemeLink>
      {` for more information about using toast alerts.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'ComponentsAlertGroupDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
