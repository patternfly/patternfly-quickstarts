import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport317 from '../../../content/design-guidelines/components/notification-badge/./img/notification-badge.png';
const pageData = {
  "id": "Notification badge",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/notification-badge/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/notification-badge/notification-badge.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`notification badge`}
      </strong>
      {` is intended to be used with a `}
      <PatternflyThemeLink {...{"to":"/components/notification-drawer"}}>
        {`notification drawer`}
      </PatternflyThemeLink>
      {` as a visible indicator to alert the user about incoming notifications.`}
    </p>
    <AutoLinkHeader {...{"id":"elements","size":"h2","className":"ws-title ws-h2"}}>
      {`Elements`}
    </AutoLinkHeader>
    <img src={srcImport317} height={srcImport317.height * 598 / srcImport317.width} {...{"alt":"basic notification drawer","width":"598","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Icon:`}
          </strong>
          {` The notification badge will be located in the masthead and display the 'fa-bell' icon in it's default state. Clicking the icon (or anywhere within the badge) will toggle the notification drawer open and closed.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Background:`}
          </strong>
          {` In the default state, the background will change color to indicate that the notification drawer is opened. Optionally the background color can also convey status.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Unread status (optional):`}
          </strong>
          {` Setting the background color to blue will indicate that one or more unread notifications are present in the drawer.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Attention status (optional):`}
          </strong>
          {` Setting the background color to red will indicate that one or more notifications are present in the drawer that require immediate attention. In the attention state the icon also changes from 'fa-bell' to 'pf-icon-attention-bell'.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Count (optional):`}
          </strong>
          {` When used, the count field will indicate the number of notifications in the notification drawer.`}
        </p>
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Always use a notification badge when a notification drawer is present. Dependent on the capabilities and needs of your application, best practices for using the badge are as follows:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`Report the **Unread state in the badge only when it's possible to mark notifications as read in the drawer and when arriving notifications are relatively infrequent. If unread notifications will be present most of the time, alerting the user in this way looses its effect and is potentially distracting.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`Reporting a count of notifications is useful in most cases to give the user an indication of the volume of notifications present. This is especially helpful if unread status is not reported as it gives some indication of new arrivals.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`The Attention state will typically be used to report critical errors, in other words notifications with a severity set to 'error'. Again, this should only be used when such conditions are infrequent and truly indicate that immediate attention is required.`}
        </p>
      </li>
    </ul>
  </React.Fragment>
);
Component.displayName = 'ComponentsNotificationBadgeDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
