import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport45 from '../../../content/design-guidelines/components/alert/./img/inline-notification.png';
import srcImport46 from '../../../content/design-guidelines/components/alert/./img/toast-notification.png';
import srcImport47 from '../../../content/design-guidelines/components/alert/./img/alert-types.png';
import srcImport48 from '../../../content/design-guidelines/components/alert/./img/alert-status.png';
import srcImport49 from '../../../content/design-guidelines/components/alert/./img/Inline-alert-page-level.png';
import srcImport50 from '../../../content/design-guidelines/components/alert/./img/Inline-alert-specific-context.png';
import srcImport51 from '../../../content/design-guidelines/components/alert/./img/option-alert.png';
import srcImport52 from '../../../content/design-guidelines/components/alert/./img/toast-notification-multiple.png';
import srcImport53 from '../../../content/design-guidelines/components/alert/./img/Toast-alerts-desktop.png';
import srcImport54 from '../../../content/design-guidelines/components/alert/./img/alert-no-description.png';
import srcImport55 from '../../../content/design-guidelines/components/alert/./img/alert-description.png';
const pageData = {
  "id": "Alert",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/alert/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/alert/alert.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`An `}
      <strong>
        {`alert`}
      </strong>
      {` is a notification that provides brief information to the user without blocking their workflow.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`There are 2 main types of alerts:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Inline alerts`}
        </strong>
        {`: Inline alerts communicate information about a specific user action on a page. An inline alert appears within the content area and disappears when the user closes it or navigates away from the page.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport45} width={srcImport45.width} height={srcImport45.height} {...{"alt":"inline notification placement","className":"ws-img"}}>
      </img>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Toast alerts`}
        </strong>
        {`: Toast alerts communicate information about an update, confirmation, or other activity. A toast alert overlays content in the upper-right corner of the page and disappears when it times out or when the user dismisses it.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport46} width={srcImport46.width} height={srcImport46.height} {...{"alt":"toast notification placement","className":"ws-img"}}>
      </img>
    </p>
    <AutoLinkHeader {...{"id":"elements","size":"h2","className":"ws-title ws-h2"}}>
      {`Elements`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Toast alerts are always dismissible, and inline alerts can be both dismissable and non-dismissible. Other elements are consistent between both alert types.`}
    </p>
    <img src={srcImport47} height={srcImport47.height * 868 / srcImport47.width} {...{"alt":"Alert types","width":"868","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Status area`}
        </strong>
        {`: The status area indicates the severity of the alert with a specific icon and color.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Alert title`}
        </strong>
        {`: The alert title concisely communicates the alert’s main message. Its text color is coded to match the alert type.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Close button`}
        </strong>
        {`: The close button is used to dismiss the alert. It’s required for toast alerts and optional for inline alerts.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Actions (optional)`}
        </strong>
        {`: The actions area enables the user to take a specific action in relation to the alert. 1 or more actions can be placed inside of an alert.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Description (optional)`}
        </strong>
        {`: The description field communicates additional information to the user. It can also include a navigation link as an alternative to an action.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Expandable alert (optional)`}
        </strong>
        {`: The expansion reveals additional information.`}
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"communicating-severity","size":"h2","className":"ws-title ws-h2"}}>
      {`Communicating severity`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The status icon, background, and alert title are coded to communicate the severity of an alert.`}
    </p>
    <img src={srcImport48} height={srcImport48.height * 700 / srcImport48.width} {...{"alt":"alert styles","width":"700","className":"ws-img"}}>
    </img>
    <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
      <thead>
        <tr {...{"role":"row"}}>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Type    `}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Icon   `}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Usage     `}
            </div>
          </th>
        </tr>
      </thead>
      <tbody {...{"role":"rowgroup"}}>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Type    "}}>
            <div>
              {`Default `}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Icon   "}}>
            <div>
              {`fa-bell`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Usage     "}}>
            <div>
              {`Use for generic messages with no associated severity`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Type    "}}>
            <div>
              {`Information    `}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Icon   "}}>
            <div>
              {`fa-info-circle`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Usage     "}}>
            <div>
              {`Use for general informational messages`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Type    "}}>
            <div>
              {`Warning `}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Icon   "}}>
            <div>
              {`fa-exclamation-triangle`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Usage     "}}>
            <div>
              {`Use to indicate that a non-critical error has occurred`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Type    "}}>
            <div>
              {`Critical`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Icon   "}}>
            <div>
              {`fa-exclamation-circle`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Usage     "}}>
            <div>
              {`Use to indicate that a critical or blocking error has occurred`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Type    "}}>
            <div>
              {`Success `}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Icon   "}}>
            <div>
              {`fa-check-circle`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Usage     "}}>
            <div>
              {`Use to indicate that a task or process has completed successfully`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <p {...{"className":"ws-p"}}>
      {`For more information about what colors to use for status and severity, visit the `}
      <PatternflyThemeLink {...{"to":"/guidelines/colors/#status-and-state-colors"}}>
        {`Colors page`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <AutoLinkHeader {...{"id":"using-inline-alerts","size":"h2","className":"ws-title ws-h2"}}>
      {`Using inline alerts`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use inline alerts to return feedback as the result of a user action within a page without blocking the user’s workflow. Common uses for inline alerts include form validation and warning messages.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`If an alert message applies globally to the content on a page, place the alert in the page header area just below the title.`}
    </p>
    <img src={srcImport49} width={srcImport49.width} height={srcImport49.height} {...{"alt":"global inline alert in a page","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`If the alert applies only to specific content, place it inline with the page content to call attention to the error.`}
    </p>
    <img src={srcImport50} width={srcImport50.width} height={srcImport50.height} {...{"alt":"inline alert inline with content","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`The user can dismiss information alerts by clicking the alert’s close button. Error-related alerts (warning and critical severity) should disappear only when the user addresses the issue that caused the alert. However, if the issue cannot be corrected on the current page and the user must take action to address a situation before proceeding, use a `}
      <PatternflyThemeLink {...{"to":"/components/modal"}}>
        {`modal`}
      </PatternflyThemeLink>
      {` instead of an inline alert.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`In addition to static message content and links, you have the option of including interactive elements in the body of an inline alert to ask the user for further input or feedback.`}
    </p>
    <img src={srcImport51} height={srcImport51.height * 439 / srcImport51.width} {...{"alt":"alert with radio button options","width":"439px","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Inline alerts are commonly used in the following situations:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Informing the user that the information they entered into a form field isn’t valid`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Informing the user of something that needs their attention`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Informing the user that they need to set something up`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Informing the user that a feature is temporarily unavailable`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"using-toast-alerts","size":"h2","className":"ws-title ws-h2"}}>
      {`Using toast alerts`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use toast alerts to communicate an update, confirmation, or other activity to the user without blocking their workflow. For example, you can use a toast alert to inform the user that their message was sent. You can include links in a toast alert for a user to take action on the event that surfaced the alert, but the links should only be a shortcut for the user. A toast alert should never be used as the only means for taking actions on an alert event.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Toast alerts stack in the upper-right corner of a page. To properly position and stack a set of alerts, use an `}
      <PatternflyThemeLink {...{"to":"/components/alert-group"}}>
        {`alert group`}
      </PatternflyThemeLink>
      {` component. When alerts stack, the most recent alert appears at the top, and others move down as more alerts come in. When alerts are deleted, the remaining alerts move up.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport52} width={srcImport52.width} height={srcImport52.height} {...{"alt":"alert group","className":"ws-img"}}>
      </img>
    </p>
    <p {...{"className":"ws-p"}}>
      {`Toast alerts should always have a close button so that the user can dismiss them. If you include an automatic timeout for your toast alert, 8 seconds is recommended. Toast alerts should not disappear while the user is hovering over them.`}
    </p>
    <img src={srcImport53} width={srcImport53.width} height={srcImport53.height} {...{"alt":"toast alerts in a page","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Toast alerts are commonly used in the following situations:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Confirming that a message sent`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Confirming that an update was made`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Informing the user that their action was completed successfully`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Informing the user that their action was completed with errors`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"customizing-alerts","size":"h2","className":"ws-title ws-h2"}}>
      {`Customizing alerts`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`If your use case falls outside of PatternFly's standard alert variations, use `}
      <PatternflyThemeLink {...{"to":"/guidelines/icons"}}>
        {`icons`}
      </PatternflyThemeLink>
      {` and `}
      <PatternflyThemeLink {...{"to":"/guidelines/colors"}}>
        {`colors`}
      </PatternflyThemeLink>
      {` to create custom alerts that meet your needs.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`View custom alerts in action in our `}
      <PatternflyThemeLink {...{"to":"https://www.patternfly.org/v4/components/alert#custom-icons"}}>
        {`custom alert examples`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <AutoLinkHeader {...{"id":"content","size":"h2","className":"ws-title ws-h2"}}>
      {`Content`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`In inline alerts and toast alerts, avoid using “success” and “successfully.” They’re extraneous.`}
      </li>
    </ul>
    <div className="ws-content-table">
      <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
        <thead>
          <tr {...{"role":"row"}}>
            <th {...{"align":"center","className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
              <div>
                {` `}
                <strong>
                  {`Do`}
                </strong>
                {` `}
              </div>
            </th>
            <th {...{"align":"center","className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
              <div>
                {` `}
                <strong>
                  {`Don’t`}
                </strong>
                {` `}
              </div>
            </th>
          </tr>
        </thead>
        <tbody {...{"role":"rowgroup"}}>
          <tr {...{"role":"row"}}>
            <td {...{"align":"center","role":"cell","data-label":" Do "}}>
              <div>
                {`Account created`}
              </div>
            </td>
            <td {...{"align":"center","role":"cell","data-label":" Don’t "}}>
              <div>
                {`Your account was successfully created.`}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
</div>
    <br/>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Be concise. In one-line toast alerts, use fragments instead of sentences if possible.`}
      </li>
    </ul>
    <div className="ws-content-table">
      <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
        <thead>
          <tr {...{"role":"row"}}>
            <th {...{"align":"center","className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
              <div>
                {` `}
                <strong>
                  {`Do`}
                </strong>
                {` `}
              </div>
            </th>
            <th {...{"align":"center","className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
              <div>
                {` `}
                <strong>
                  {`Don’t`}
                </strong>
                {` `}
              </div>
            </th>
          </tr>
        </thead>
        <tbody {...{"role":"rowgroup"}}>
          <tr {...{"role":"row"}}>
            <td {...{"align":"center","role":"cell","data-label":" Do "}}>
              <div>
                {`Message sent`}
              </div>
            </td>
            <td {...{"align":"center","role":"cell","data-label":" Don’t "}}>
              <div>
                {`Your message has been sent.`}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
</div>
    <br/>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`In toast alerts containing links, describe how the user can navigate through the UI to perform the action. Learn more about how descriptive text supports accessibility in the next section.`}
      </li>
    </ul>
    <div className="ws-content-table">
      <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
        <thead>
          <tr {...{"role":"row"}}>
            <th {...{"align":"center","className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
              <div>
                {` `}
                <strong>
                  {`Do`}
                </strong>
                {` `}
              </div>
            </th>
            <th {...{"align":"center","className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
              <div>
                {` `}
                <strong>
                  {`Don’t`}
                </strong>
                {` `}
              </div>
            </th>
          </tr>
        </thead>
        <tbody {...{"role":"rowgroup"}}>
          <tr {...{"role":"row"}}>
            <td {...{"align":"center","role":"cell","data-label":" Do "}}>
              <div>
                {`From the `}
                <strong>
                  {`Settings`}
                </strong>
                {` tab, click `}
                <strong>
                  {`View logs.`}
                </strong>
              </div>
            </td>
            <td {...{"align":"center","role":"cell","data-label":" Don’t "}}>
              <div>
                <strong>
                  {`View logs`}
                </strong>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
</div>
    <br/>
    <AutoLinkHeader {...{"id":"accessibility-considerations","size":"h2","className":"ws-title ws-h2"}}>
      {`Accessibility considerations`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Toast alerts present special challenges for accessibility. Screen readers announce the arrival and message content of an incoming toast alert, but user focus will not be placed there. This makes it difficult for these users to directly act on the alert itself.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`In any toast alert containing links for further user action, include text that describes how the user can navigate through the UI to perform the action.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`For example, this toast alert is not accessible because it does not include text that explains to the user where to go within the UI to perform the action:`}
    </p>
    <img src={srcImport54} height={srcImport54.height * 600 / srcImport54.width} {...{"alt":"alert without descriptive text","width":"600px","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`This toast alert is accessible to sighted and non-sighted users because it includes text that explains to the user where to go within the UI to perform the action:`}
    </p>
    <img src={srcImport55} height={srcImport55.height * 600 / srcImport55.width} {...{"alt":"alert with descriptive text","width":"600px","className":"ws-img"}}>
    </img>
  </React.Fragment>
);
Component.displayName = 'ComponentsAlertDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
