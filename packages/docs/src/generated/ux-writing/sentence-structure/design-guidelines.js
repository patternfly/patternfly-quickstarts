import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Sentence structure",
  "section": "UX writing",
  "source": "design-guidelines",
  "slug": "/ux-writing/sentence-structure/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/content/sentence-structure.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`Use the second person "you/your" whenever you can. This way, your focus is on the user, and the product interaction feels more like a conversation.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Use the first person "I" when the user is agreeing to something. For example, a user can check a box reading, “I agree to the terms and conditions.”`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Try to avoid using third person "he/she/they/it." Third person sounds formal and disconnected from the user.`}
    </p>
    <div className="ws-content-table">
      <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
        <thead>
          <tr {...{"role":"row"}}>
            <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
              <div>
                <strong>
                  {`Before`}
                </strong>
              </div>
            </th>
            <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
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
            <td {...{"role":"cell","data-label":"Before"}}>
              <div>
                {`Users can simplify their designs with PatternFly.`}
              </div>
            </td>
            <td {...{"role":"cell","data-label":"After"}}>
              <div>
                {`Simplify your designs with PatternFly.`}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
</div>
    <p {...{"className":"ws-p"}}>
      {`Use the active voice whenever possible. The active voice makes a sentence shorter and gets the point across faster.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`The active voice is when the subject of the sentence performs the action. The passive voice is when the subject of the sentence receives the action.`}
    </p>
    <div className="ws-content-table">
      <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
        <thead>
          <tr {...{"role":"row"}}>
            <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
              <div>
                <strong>
                  {`Before`}
                </strong>
              </div>
            </th>
            <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
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
            <td {...{"role":"cell","data-label":"Before"}}>
              <div>
                {`The book is being read by Matt.`}
              </div>
            </td>
            <td {...{"role":"cell","data-label":"After"}}>
              <div>
                {`Matt is reading the book.`}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
</div>
    <p {...{"className":"ws-p"}}>
      {`There are some occasions when the `}
      <PatternflyThemeLink {...{"to":"https://writing.wisc.edu/handbook/style/ccs_activevoice/"}}>
        {`passive voice is appropriate`}
      </PatternflyThemeLink>
      {`, like when you don’t wish to point out a subject or when you want to emphasize an action. Also, use the passive voice to avoid assigning blame to a user, especially in error messages.`}
    </p>
    <div className="ws-content-table">
      <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
        <thead>
          <tr {...{"role":"row"}}>
            <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
              <div>
                <strong>
                  {`Before`}
                </strong>
              </div>
            </th>
            <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
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
            <td {...{"role":"cell","data-label":"Before"}}>
              <div>
                {`You entered the wrong password.`}
              </div>
            </td>
            <td {...{"role":"cell","data-label":"After"}}>
              <div>
                {`The password is incorrect.`}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
</div>
  </React.Fragment>
);
Component.displayName = 'UxWritingSentenceStructureDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
