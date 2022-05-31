import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport6 from '../../../content/accessibility/alert-group/../../design-guidelines/components/alert/img/alert-no-description.png';
import srcImport7 from '../../../content/accessibility/alert-group/../../design-guidelines/components/alert/img/alert-description.png';
const pageData = {
  "id": "Alert group",
  "section": "components",
  "source": "accessibility",
  "slug": "/components/alert-group/accessibility",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/accessibility/alert-group/alert-group.md"
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
      {` positions one or multiple alerts in a layer over the main content of a page. Use an alert group as a pre-existing container for dynamic alerts or when you need to position multiple alerts on the same page, mainly `}
      <PatternflyThemeLink {...{"to":"https://www.patternfly.org/v4/components/alert/design-guidelines/#elements"}}>
        {`toast alerts`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Static inline alert groups`}
      </strong>
      {` don’t need additional accessibility attributes. If it appears inline on the page, it will be read along with the surrounding content.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Dynamic and toast alerts`}
      </strong>
      {` are injected into the DOM after page load and require additional measures to ensure that these content changes are announced to screen reader users. This is the use case that requires/warrants turning an alert group into a live region. Discoverability is also different in this case because the alert content is often not near the primary markup/content for the page. The AlertGroup/Alerts are often rendered at a more global level within the DOM, like toward the end of the body tag so that the content can persist across page changes.`}
    </p>
    <br/>
    <ins>
      <strong>
        {`To make dynamic alert groups accessible:`}
      </strong>
</ins>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Add `}
        <code {...{"className":"ws-code"}}>
          {`isLiveRegion`}
        </code>
        {` to make the AlertGroup a live region that alerts can be conditionally rendered inside of.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`AlertGroup should always exist in the DOM on page load and dynamic alerts should be rendered inside the AlertGroup.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`For more specific customization`}
      </strong>
      {`, add any of the following to AlertGroup:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`aria-live="polite"`}
          </strong>
          {`- This politeness level is used when the user is not doing anything or when the user is waiting for the update to happen. If the user is busy with other tasks on the page, the screen reader shouldn’t interrupt to provide the updated live region content.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`aria-live="assertive"`}
          </strong>
          {`- Assertive is used for high priority updates, when the user must be informed about updated information within the live region immediately. The update is provided to the user, interrupting their current task.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Aria-atomic`}
          </strong>
          {`- Setting aria-atomic to true causes the entire live region contents to be presented/announced when a change in any of the content is detected. Basically, "re-announce everything on change". This is significantly more verbose and should only be used in appropriate cases. One example of a fair use would be a dedicated live region for housing a countdown timer. Defaults to false.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Aria-relevant`}
          </strong>
          {`- The aria-relevant=`}
          {`[LIST_OF_CHANGES]`}
          {` sets what types of changes are relevant to a live region and what qualifies as an update to it. The possible settings are one or more of: additions, removals, text, all. The default setting is: additions text.`}
        </p>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`To further customize your alert group's accessibility, you can edit the following:`}
    </p>
    <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
      <thead>
        <tr {...{"role":"row"}}>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`React component`}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Prop or attribute`}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Which HTML element it appears on in markup`}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Explanation`}
            </div>
          </th>
        </tr>
      </thead>
      <tbody {...{"role":"rowgroup"}}>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"React component"}}>
            <div>
              {`Alert`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Prop or attribute"}}>
            <div>
              {`aria-label`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Which HTML element it appears on in markup"}}>
            <div>
              {`.pf-c-alert`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Explanation"}}>
            <div>
              {`Adds accessible text to the Alert`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"React component"}}>
            <div>
              {`Alert`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Prop or attribute"}}>
            <div>
              {`variantLabel`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Which HTML element it appears on in markup"}}>
            <div>
              {`Anywhere variant label is used, for example in close button`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Explanation"}}>
            <div>
              {`Variant label text for screen readers`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"React component"}}>
            <div>
              {`AlertActionCloseButton`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Prop or attribute"}}>
            <div>
              {`aria-label`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Which HTML element it appears on in markup"}}>
            <div>
              {`.pf-c-button`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Explanation"}}>
            <div>
              {`Label for the close button, defaults to "Close `}
              {`[alert variant]`}
              {`: alert: `}
              {`[alert title]`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"React component"}}>
            <div>
              {`AlertGroup`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Prop or attribute"}}>
            <div>
              {`isLiveRegion`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Which HTML element it appears on in markup"}}>
            <div>
              {`.pf-c-alert-group`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Explanation"}}>
            <div>
              {`Turns the container into a live region so that changes to content within the AlertGroup, such as appending an Alert, are reliably announced to assistive technology.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <br/>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Toast alerts:`}
      </strong>
    </p>
    <p {...{"className":"ws-p"}}>
      {`Toast alerts present special challenges for accessibility. Screen readers announce the arrival and message content of an incoming toast alert, but user focus will not be placed there, making it difficult for users to directly act on the alert itself. In any toast alert containing links for further user action, include text that describes how the user can navigate through the UI to perform the action.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`For example, this toast alert is not accessible because it does not include text that explains to the user where to go within the UI to perform the action:`}
    </p>
    <img src={srcImport6} height={srcImport6.height * 600 / srcImport6.width} {...{"alt":"alert without descriptive text","width":"600px","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`This toast alert is accessible to sighted and non-sighted users because it includes text that explains to the user where to go within the UI to perform the action:`}
    </p>
    <img src={srcImport7} height={srcImport7.height * 600 / srcImport7.width} {...{"alt":"alert with descriptive text","width":"600px","className":"ws-img"}}>
    </img>
    <br/>
    <br/>
    <p {...{"className":"ws-p"}}>
      {`See our `}
      <PatternflyThemeLink {...{"to":"https://www.patternfly.org/v4/components/alert/design-guidelines/#using-toast-alerts"}}>
        {`alert guidelines`}
      </PatternflyThemeLink>
      {` for more information about using alerts.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'ComponentsAlertGroupAccessibilityDocs';
Component.pageData = pageData;

export default Component;
