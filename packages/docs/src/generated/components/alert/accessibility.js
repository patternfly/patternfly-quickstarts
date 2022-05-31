import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport8 from '../../../content/accessibility/alert/../../design-guidelines/components/alert/img/alert-no-description.png';
import srcImport9 from '../../../content/accessibility/alert/../../design-guidelines/components/alert/img/alert-description.png';
const pageData = {
  "id": "Alert",
  "section": "components",
  "source": "accessibility",
  "slug": "/components/alert/accessibility",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/accessibility/alert/alert.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`An `}
      <strong>
        {`alert`}
      </strong>
      {` is a notification that provides brief information to the user without blocking their workflow. This information should be presented to all users, and special attention is required to ensure alerts are announced to visually impaired users.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Alerts can either be `}
      <strong>
        {`static`}
      </strong>
      {` (appear on the page load and do not change) or `}
      <strong>
        {`dynamic`}
      </strong>
      {` (appear or are updated after page load).`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Typical use cases`}
      </strong>
      {` of alert can be:`}
    </p>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        {`On page load/static alerts`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`In response to a user action`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`An asynchronous event is triggered in the application`}
      </li>
    </ol>
    <br/>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Static alerts`}
      </strong>
      {` don’t need a lot of special accessibility considerations. If it appears inline on the page, it will be read along with the surrounding content. (For toast alerts, use AlertGroup.)`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Dynamic and toast alerts`}
      </strong>
      {`, on the other hand, need something to communicate their contents to a screen reader. Changes to the DOM are not announced to screen reader users by default, and in order to signal to a screen reader that something will change in the DOM, a live region should be included.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Different screen readers handle alerts slightly differently, but in general, to satisfy all screen readers, there should be a container for the alert(s) that exists on page load and this container should be the live region. It is within this region that dynamic alerts (alerts that are injected into the DOM after the main page content has loaded) will trigger an event that causes screen readers to read the content aloud.`}
    </p>
    <br/>
    <ins>
      <strong>
        {`In general, we recommend the following:`}
      </strong>
</ins>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Have a `}
        <strong>
          {`pre-existing container`}
        </strong>
        {` that is a live region in the DOM on page load for the alert. (We recommend using our AlertGroup for this.)`}
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            <strong>
              {`The AlertGroup should always exist in the DOM`}
            </strong>
          </li>
          <li {...{"className":"ws-li"}}>
            <strong>
              {`Conditionally render the alert(s) inside the AlertGroup`}
            </strong>
          </li>
          <li {...{"className":"ws-li"}}>
            <strong>
              {`DO NOT conditionally render the alert by itself without a live region container.`}
            </strong>
            {` This will not be announced to some screen readers such as JAWS and NVDA.`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Add `}
        <code {...{"className":"ws-code"}}>
          {`aria-live=”polite”`}
        </code>
        {` on the AlertGroup for most alerts (use “assertive” if the alert needs immediate attention) -- not necessary if using AlertGroup as the container`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Add aria-atomic or aria-relevant on the AlertGroup if useful for your use case.`}
      </li>
    </ul>
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
    <img src={srcImport8} height={srcImport8.height * 600 / srcImport8.width} {...{"alt":"alert without descriptive text","width":"600px","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`This toast alert is accessible to sighted and non-sighted users because it includes text that explains to the user where to go within the UI to perform the action:`}
    </p>
    <img src={srcImport9} height={srcImport9.height * 600 / srcImport9.width} {...{"alt":"alert with descriptive text","width":"600px","className":"ws-img"}}>
    </img>
    <br/>
    <br/>
    <p {...{"className":"ws-p"}}>
      {`To further customize your alerts' accessibility, you can edit the following:`}
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
      </tbody>
    </table>
    <br/>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`For more specific customization`}
      </strong>
      {`, add any of the following to AlertGroup/the alert’s container:`}
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
          {`
Assertive is used for high priority updates, when the user must be informed about updated information within the live region immediately. The update is provided to the user, interrupting their current task.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Aria-atomic`}
          </strong>
          {`
The aria-atomic=BOOLEAN sets whether or not the screen reader should always present the live region as a whole, even if only part of the region changes. The possible settings are: false or true. The default setting is: false.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Aria-relevant`}
          </strong>
          {`
The aria-relevant=`}
          {`[LIST_OF_CHANGES]`}
          {` sets what types of changes are relevant to a live region and what qualifies as an update to it. The possible settings are one or more of: additions, removals, text, all. The default setting is: additions text.`}
        </p>
      </li>
    </ul>
  </React.Fragment>
);
Component.displayName = 'ComponentsAlertAccessibilityDocs';
Component.pageData = pageData;

export default Component;
