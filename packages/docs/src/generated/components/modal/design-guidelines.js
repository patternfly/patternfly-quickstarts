import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport292 from '../../../content/design-guidelines/components/modal/./img/modal-call-outs.png';
import srcImport293 from '../../../content/design-guidelines/components/modal/./img/modal-basic.png';
import srcImport294 from '../../../content/design-guidelines/components/modal/./img/center-aligned-modal.png';
import srcImport295 from '../../../content/design-guidelines/components/modal/./img/top-aligned-modal.png';
import srcImport296 from '../../../content/design-guidelines/components/modal/./img/non-destructive-confirmation-dialog.png';
import srcImport297 from '../../../content/design-guidelines/components/modal/./img/destructive-confirmation-dialog.png';
import srcImport298 from '../../../content/design-guidelines/components/modal/./img/destructive-confirmation-dialog-steps.png';
import srcImport299 from '../../../content/design-guidelines/components/modal/./img/error-dialog.png';
import srcImport300 from '../../../content/design-guidelines/components/modal/./img/passive-dialog.png';
import srcImport301 from '../../../content/design-guidelines/components/modal/./img/modal-with-help.png';
import CheckIcon from '@patternfly/react-icons/dist/esm/icons/check-icon';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';
const pageData = {
  "id": "Modal",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/modal/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/modal/modal.md"
};
pageData.liveContext = {
  CheckIcon,
  TimesIcon
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`modal`}
      </strong>
      {` displays important information to a user without requiring them to navigate to a new page.`}
    </p>
    <AutoLinkHeader {...{"id":"primary-elements","size":"h2","className":"ws-title ws-h2"}}>
      {`Primary elements`}
    </AutoLinkHeader>
    <img src={srcImport292} height={srcImport292.height * 756 / srcImport292.width} {...{"alt":"An example of a modal in context with call outs to highlight each listed element","width":"756","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Backdrop`}
        </strong>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Modal box`}
        </strong>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Headline`}
        </strong>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Close icon`}
        </strong>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Content area`}
        </strong>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Buttons`}
        </strong>
      </li>
    </ol>
    <p {...{"className":"ws-p"}}>
      {`See the `}
      <PatternflyThemeLink {...{"to":"#content"}}>
        {`Content`}
      </PatternflyThemeLink>
      {` section for information about writing modal copy.`}
    </p>
    <AutoLinkHeader {...{"id":"spacing","size":"h2","className":"ws-title ws-h2"}}>
      {`Spacing`}
    </AutoLinkHeader>
    <img src={srcImport293} height={srcImport293.height * 487 / srcImport293.width} {...{"alt":"A basic modal with 24px spacers between the modal box and content, and 16px spacers between the headline and content area, and between each button","width":"487","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Basic modals use a primary spacing of 24px to separate:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Each edge of the modal box from all modal content.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`The content area from both buttons.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`A 16px spacing separates the modal's headline from the content area. 16px also separates each button.`}
    </p>
    <AutoLinkHeader {...{"id":"placement","size":"h2","className":"ws-title ws-h2"}}>
      {`Placement`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A modal can be aligned at the center or top of a page.`}
    </p>
    <AutoLinkHeader {...{"id":"center-aligned-modal-default","size":"h3","className":"ws-title ws-h3"}}>
      {`Center-aligned modal (default)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <PatternflyThemeLink {...{"to":"/components/modal/html-demos/basic/"}}>
        {`center-aligned modal`}
      </PatternflyThemeLink>
      {` appears horizontally and vertically centered on a page, and should be used by default for most use cases.`}
    </p>
    <img src={srcImport294} width={srcImport294.width} height={srcImport294.height} {...{"alt":"A modal pictured in center alignment on a page","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"top-aligned-modal","size":"h3","className":"ws-title ws-h3"}}>
      {`Top-aligned modal`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <PatternflyThemeLink {...{"to":"/components/modal/html-demos/top-aligned/"}}>
        {`top-aligned modal`}
      </PatternflyThemeLink>
      {` appears horizontally and vertically centered at the top of a page.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Use a top-aligned modal when your modal contains expanding content or when you'd like to keep content behind the modal visible to the user.`}
    </p>
    <img src={srcImport295} width={srcImport295.width} height={srcImport295.height} {...{"alt":"A modal pictured in top alignment on a page","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use a modal to communicate critical information that requires user input or action.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Modals can:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Validate user decisions.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Confirm non-destructive or destructive actions.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Report errors.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Share task results and statuses.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Prompt required user input.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Don’t use a modal unless its information is vital to user success and worth disrupting a user’s task flow.`}
    </p>
    <AutoLinkHeader {...{"id":"types-of-modals","size":"h2","className":"ws-title ws-h2"}}>
      {`Types of modals`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Modals serve several functions in a UI and appear in four main types:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <PatternflyThemeLink {...{"to":"#confirmation-dialogs"}}>
            {`Confirmation dialogs`}
          </PatternflyThemeLink>
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <PatternflyThemeLink {...{"to":"#error-dialogs"}}>
            {`Error dialogs`}
          </PatternflyThemeLink>
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <PatternflyThemeLink {...{"to":"#passive-dialogs"}}>
            {`Passive dialogs`}
          </PatternflyThemeLink>
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <PatternflyThemeLink {...{"to":"#input-dialogs"}}>
            {`Input dialogs`}
          </PatternflyThemeLink>
        </p>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"confirmation-dialogs","size":"h3","className":"ws-title ws-h3"}}>
      {`Confirmation dialogs`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use a confirmation dialog to validate user decisions and communicate their consequences. Confirmation dialogs can confirm non-destructive and destructive actions.`}
    </p>
    <AutoLinkHeader {...{"id":"confirm-a-non-destructive-action","size":"h4","className":"ws-title ws-h4"}}>
      {`Confirm a non-destructive action`}
    </AutoLinkHeader>
    <img src={srcImport296} width={srcImport296.width} height={srcImport296.height} {...{"alt":"A side-by-side comparison of unsuccessful and successful confirmaton dialogs for leaving a page without saving. The successful dialog explains the consequence of this action: All unsaved informaton will be lost","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`When confirming a non-destructive action, provide specific context about what will happen once a user confirms it.`}
    </p>
    <AutoLinkHeader {...{"id":"confirm-a-destructive-action","size":"h4","className":"ws-title ws-h4"}}>
      {`Confirm a destructive action`}
    </AutoLinkHeader>
    <img src={srcImport297} width={srcImport297.width} height={srcImport297.height} {...{"alt":"A side-by-side comparison of unsuccessful and successful destructive confirmaton dialogs for deleting a record. The successful dialog explains the consequence of deleting this record: Record name, location, and notes will be lost","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Use a `}
      <PatternflyThemeLink {...{"to":"/components/button/design-guidelines#primary-button"}}>
        {`primary button`}
      </PatternflyThemeLink>
      {` to confirm a destructive action. If the action carries serious consequences, then use a `}
      <PatternflyThemeLink {...{"to":"/components/button/design-guidelines#danger-button"}}>
        {`danger button`}
      </PatternflyThemeLink>
      {` instead.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`If an action is difficult or impossible to undo, add a warning icon beside the headline.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`If a destructive action has serious consequences, consider adding an additional step before its destructive button becomes active. Additional confirmation measures like `}
      <PatternflyThemeLink {...{"to":"/components/text-input/design-guidelines"}}>
        {`text input`}
      </PatternflyThemeLink>
      {` fields safeguard a user from accidentally completing the action.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`When a text input field is added to a confirmation dialog, the danger button will only become enabled once a user enters the entire word or phrase.`}
    </p>
    <img src={srcImport298} width={srcImport298.width} height={srcImport298.height} {...{"alt":"A multi-step destructive confirmation dialog's button activates only after a user types DELETE into the input field","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"error-dialogs","size":"h3","className":"ws-title ws-h3"}}>
      {`Error dialogs`}
    </AutoLinkHeader>
    <img src={srcImport299} width={srcImport299.width} height={srcImport299.height} {...{"alt":"An example of a successful error dialog, with and without an optional error icon","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Use an error dialog to inform users of problems that interrupt normal or expected behavior. Briefly contextualize the problem and why it happened, then provide actionable steps toward a solution.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Learn more about writing error messages in our `}
      <PatternflyThemeLink {...{"to":"/ux-writing/error-messages"}}>
        {`error message guidelines`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Error dialogs may use an error icon for visual emphasis.`}
    </p>
    <AutoLinkHeader {...{"id":"passive-dialogs","size":"h3","className":"ws-title ws-h3"}}>
      {`Passive dialogs`}
    </AutoLinkHeader>
    <img src={srcImport300} width={srcImport300.width} height={srcImport300.height} {...{"alt":"An example of a successful passive dialog, with and without an optional warning icon","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Use a passive dialog to communicate critical and immediately relevant information like the status of an application or an action’s result. Passive dialog content should require or lead to user action.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Passive dialogs can also notify the user about the status or duration of a critical process, especially if the process may take an unusual amount of time to complete.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Never use a passive dialog for non-critical information. Instead, use an `}
      <PatternflyThemeLink {...{"to":"/components/alert/design-guidelines/#inline-alerts"}}>
        {`inline alert`}
      </PatternflyThemeLink>
      {` or a `}
      <PatternflyThemeLink {...{"to":"/components/alert/design-guidelines/#toast-alerts"}}>
        {`toast alert`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <AutoLinkHeader {...{"id":"input-dialogs","size":"h3","className":"ws-title ws-h3"}}>
      {`Input dialogs`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Users may need to provide additional input to complete an action. To accomplish this, use forms or other elements within the modal, like in a `}
      <PatternflyThemeLink {...{"to":"/components/modal/react#with-wizard"}}>
        {`modal wizard`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <AutoLinkHeader {...{"id":"modals-with-help","size":"h2","className":"ws-title ws-h2"}}>
      {`Modals with help`}
    </AutoLinkHeader>
    <img src={srcImport301} width={srcImport301.width} height={srcImport301.height} {...{"alt":"A modal with help uses a help icon to open a help popover when clicked","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Use a `}
      <PatternflyThemeLink {...{"to":"/components/modal#with-help"}}>
        {`modal with help`}
      </PatternflyThemeLink>
      {` to make complex tasks easier to understand within a modal. If needed, link to further documentation in the help popover.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Help popovers at the modal level explain and provide documentation for an entire task. Only place a help icon at the modal level if its information applies to all content in the modal. If the information you'd like to include in a help popover is specific to a particular input, place the help icon at that input level instead.`}
    </p>
    <AutoLinkHeader {...{"id":"content","size":"h2","className":"ws-title ws-h2"}}>
      {`Content`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`All modal content should be descriptive and specific so that users can scan, understand an action's context, and make a quick decision.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`A modal is comprised of 3 main content sections:`}
    </p>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Headline:`}
          </strong>
          {` A headline introduces a modal’s purpose, usually as a question. Use important key words like “permanently” to contextualize an action and its impact.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Body text:`}
          </strong>
          {` Body text provides additional information about an action’s consequence in three lines or less, typically concerning changes to a user’s workflow or access to information. If a modal’s headline fully communicates an action’s context and consequences, body text isn’t needed.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Buttons:`}
          </strong>
          {` Buttons allow a user to answer the headline prompt or question. Write button labels as action-based verbs to clearly communicate their function and consequence, and keep them to 1–3 words. Often, verbs for buttons can be pulled directly from a modal’s headline to increase scannability. `}
                    <br/>
                    <br/>
          {`
Example headline: `}
          <em>
            {`Permanently delete database?`}
          </em>
                    <br/>
          {`
Example buttons: `}
          <em>
            {`Delete`}
          </em>
          {` and `}
          <em>
            {`Cancel`}
          </em>
          {` `}
                    <br/>
          {`
For more button guidance, see our `}
          <PatternflyThemeLink {...{"to":"/components/button/design-guidelines#content"}}>
            {`button label guidelines`}
          </PatternflyThemeLink>
          {`.`}
        </p>
      </li>
    </ol>
    <p {...{"className":"ws-p"}}>
      {`For general content guidance to help write effective modal dialogs, see our `}
      <PatternflyThemeLink {...{"to":"/ux-writing/about"}}>
        {`UX writing style guide`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <AutoLinkHeader {...{"id":"icon-use-in-modal-dialogs","size":"h4","className":"ws-title ws-h4"}}>
      {`Icon use in modal dialogs`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Icons are optional in modal dialogs. Use or omit them as your use case requires.`}
    </p>
    <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
      <thead>
        <tr {...{"role":"row"}}>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Icon`}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Use case(s)`}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Usage`}
            </div>
          </th>
        </tr>
      </thead>
      <tbody {...{"role":"rowgroup"}}>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Icon"}}>
            <div>
                            <span style={{"color":"rgb(240, 171, 0)"}}>{` `}
                                <i className="fas fa-exclamation-triangle" aria-label="warning"/>
                {` `}</span>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Use case(s)"}}>
            <div>
              <strong>
                {`Warning:`}
              </strong>
              {` Cautions or warns the user of a permanent action, or that information will be deleted upon action completion`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Usage"}}>
            <div>
              {`Add to confirmation dialogs or passive dialogs to indicate a higher level of urgency and importance.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Icon"}}>
            <div>
                            <span style={{"color":"rgb(201, 25, 11)"}}>{` `}
                                <i className="fas fa-exclamation-circle" aria-label="critical warning"/>
                {` `}</span>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Use case(s)"}}>
            <div>
              <strong>
                {`Critical Warning:`}
              </strong>
              {` Indicates that an error has occured`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Usage"}}>
            <div>
              {`Add to error dialogs.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Icon"}}>
            <div>
                            <span style={{"color":"rgb(43, 154, 243)"}}>{` `}
                                <i className="fas fa-info-circle" aria-label="acknowledgement"/>
                {` `}</span>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Use case(s)"}}>
            <div>
              <strong>
                {`Acknowledgement:`}
              </strong>
              {` Informs the user of an action or result`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Usage"}}>
            <div>
              {`Add to confirmation or passive dialogs to indicate a lower level of urgency.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsModalDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
