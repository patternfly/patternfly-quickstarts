import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Error messages",
  "section": "UX writing",
  "source": "design-guidelines",
  "slug": "/ux-writing/error-messages/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/content/error-messages.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A user typically sees an error message when they attempt to perform an action but cannot continue because something isn’t right.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Make your error messages brief yet descriptive. A useful pattern to follow is Description, Reason, and Resolution:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Description`}
        </strong>
        {`: What happened? (Example: The user's login failed.)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Reason`}
        </strong>
        {`: Why did it happen? (Example: SSH key isn't allowing auto-login.)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Resolution`}
        </strong>
        {`: How can it be resolved? (Example: Manually log in to the host.)`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Combined, these parts create this error message:`}
    </p>
    <p {...{"className":"ws-p"}}>
      <em>
        <strong>
          {`Login failed`}
        </strong>
      </em>
    </p>
    <p {...{"className":"ws-p"}}>
      <em>
        {`The SSH key for auto-login is either not available, is unauthorized, or is password protected.`}
      </em>
    </p>
    <p {...{"className":"ws-p"}}>
      <em>
        {`To manually log in to the host, click `}
        <strong>
          {`Log in.`}
        </strong>
      </em>
    </p>
    <p {...{"className":"ws-p"}}>
      {`Keep these best practices in mind when crafting error messages:`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Don’t blame users`}
      </strong>
      {`. A user should never feel like the error is their fault. Avoid language like “You did something wrong.” Depending on your message, you may need to use the passive voice instead of the active voice so that you don't assign blame to the user.`}
    </p>
    <div className="ws-content-table">
      <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
        <thead>
          <tr {...{"role":"row"}}>
            <th {...{"align":"center","className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
              <div>
                <strong>
                  {`Before`}
                </strong>
              </div>
            </th>
            <th {...{"align":"center","className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
              <div>
                <strong>
                  {`After`}
                </strong>
              </div>
            </th>
          </tr>
        </thead>
        <tbody {...{"role":"rowgroup"}}>
          <tr {...{"role":"row"}}>
            <td {...{"align":"center","role":"cell","data-label":"Before"}}>
              <div>
                {`You did not provide your authentication credentials.`}
              </div>
            </td>
            <td {...{"align":"center","role":"cell","data-label":"After"}}>
              <div>
                {`Authentication credentials weren't provided.`}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
</div>
    <br/>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Give users a next step`}
      </strong>
      {`: A user should never feel stuck. If they’re hit with an error, give them the information they need to continue with their task.`}
    </p>
    <div className="ws-content-table">
      <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
        <thead>
          <tr {...{"role":"row"}}>
            <th {...{"align":"center","className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
              <div>
                <strong>
                  {`Before`}
                </strong>
              </div>
            </th>
            <th {...{"align":"center","className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
              <div>
                <strong>
                  {`After`}
                </strong>
              </div>
            </th>
          </tr>
        </thead>
        <tbody {...{"role":"rowgroup"}}>
          <tr {...{"role":"row"}}>
            <td {...{"align":"center","role":"cell","data-label":"Before"}}>
              <div>
                {`Your list already has the maximum number of items. You are not able to continue customizing.`}
              </div>
            </td>
            <td {...{"align":"center","role":"cell","data-label":"After"}}>
              <div>
                {`Your list has the maximum number of items. To continue customizing, remove an item.`}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
</div>
    <br/>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Avoid jargon`}
      </strong>
      {`: Error messages are frustrating enough without technical terms that users might not understand. Avoid jargon and use terms that are familiar to your users.`}
    </p>
    <div className="ws-content-table">
      <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
        <thead>
          <tr {...{"role":"row"}}>
            <th {...{"align":"center","className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
              <div>
                <strong>
                  {`Before`}
                </strong>
              </div>
            </th>
            <th {...{"align":"center","className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
              <div>
                <strong>
                  {`After`}
                </strong>
              </div>
            </th>
          </tr>
        </thead>
        <tbody {...{"role":"rowgroup"}}>
          <tr {...{"role":"row"}}>
            <td {...{"align":"center","role":"cell","data-label":"Before"}}>
              <div>
                {`Error code 5959: Outdated version information. Task termination pending.`}
              </div>
            </td>
            <td {...{"align":"center","role":"cell","data-label":"After"}}>
              <div>
                {`Your task is outdated. To keep it active, update its version.`}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
</div>
    <br/>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Include the right amount of description`}
      </strong>
      {`: Tell your user what is wrong. An error without an explanation can add to their frustration and prevent them from finding a solution.`}
    </p>
    <div className="ws-content-table">
      <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
        <thead>
          <tr {...{"role":"row"}}>
            <th {...{"align":"center","className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
              <div>
                <strong>
                  {`Before`}
                </strong>
              </div>
            </th>
            <th {...{"align":"center","className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
              <div>
                <strong>
                  {`After`}
                </strong>
              </div>
            </th>
          </tr>
        </thead>
        <tbody {...{"role":"rowgroup"}}>
          <tr {...{"role":"row"}}>
            <td {...{"align":"center","role":"cell","data-label":"Before"}}>
              <div>
                {`An error occurred. The email cannot be sent.`}
              </div>
            </td>
            <td {...{"align":"center","role":"cell","data-label":"After"}}>
              <div>
                {`To send this email, turn on your email permissions in user settings.`}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
</div>
    <br/>
    <p {...{"className":"ws-p"}}>
      {`However, don’t include too much information. The user doesn’t need to know exactly what is going on behind the scenes. Only give them information about what went wrong and what they can do next.`}
    </p>
    <div className="ws-content-table">
      <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
        <thead>
          <tr {...{"role":"row"}}>
            <th {...{"align":"center","className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
              <div>
                <strong>
                  {`Before`}
                </strong>
              </div>
            </th>
            <th {...{"align":"center","className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
              <div>
                <strong>
                  {`After`}
                </strong>
              </div>
            </th>
          </tr>
        </thead>
        <tbody {...{"role":"rowgroup"}}>
          <tr {...{"role":"row"}}>
            <td {...{"align":"center","role":"cell","data-label":"Before"}}>
              <div>
                {`Your information cannot be saved. Our system is currently designed to accommodate 1 record per user. The system memory is unable to store more at this time.`}
              </div>
            </td>
            <td {...{"align":"center","role":"cell","data-label":"After"}}>
              <div>
                {`Only 1 record can be saved. To continue, remove one of your records.`}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
</div>
    <br/>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Lead with the benefit`}
      </strong>
      {`. When providing users with a resolution, start the sentence with their goal ("the benefit"), followed by what they need to do to continue.`}
    </p>
    <div className="ws-content-table">
      <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
        <thead>
          <tr {...{"role":"row"}}>
            <th {...{"align":"center","className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
              <div>
                <strong>
                  {`Before`}
                </strong>
              </div>
            </th>
            <th {...{"align":"center","className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
              <div>
                <strong>
                  {`After`}
                </strong>
              </div>
            </th>
          </tr>
        </thead>
        <tbody {...{"role":"rowgroup"}}>
          <tr {...{"role":"row"}}>
            <td {...{"align":"center","role":"cell","data-label":"Before"}}>
              <div>
                {`Click `}
                <strong>
                  {`Log in`}
                </strong>
                {` to manually log in.`}
              </div>
            </td>
            <td {...{"align":"center","role":"cell","data-label":"After"}}>
              <div>
                {`To manually log in, click `}
                <strong>
                  {`Log in.`}
                </strong>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
</div>
  </React.Fragment>
);
Component.displayName = 'UxWritingErrorMessagesDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
