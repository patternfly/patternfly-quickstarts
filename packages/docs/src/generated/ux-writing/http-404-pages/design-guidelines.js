import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport463 from '../../../content/design-guidelines/content/./img/404-page.png';
const pageData = {
  "id": "HTTP 404 pages",
  "section": "UX writing",
  "source": "design-guidelines",
  "slug": "/ux-writing/http-404-pages/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/content/HTTP-404-pages.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A 404 page is an error page that a user lands on when their requested content doesn’t exist or can’t be found. 404 pages are named after the type of error they communicate: “Error 404: Not found.”`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Write 404 pages with `}
      <PatternflyThemeLink {...{"to":"/ux-writing/error-messages"}}>
        {`error message best practices`}
      </PatternflyThemeLink>
      {` in mind: Explain what a 404 error is, define how users can proceed, and provide the tools they need to get there.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Effective 404 pages combine several elements to regroup, redirect, and empower lost users to reach their desired destination or find a new one.`}
    </p>
    <img src={srcImport463} width={srcImport463.width} height={srcImport463.height} {...{"alt":"The PatternFly 404 page with added call outs to mark four main elements: Heading, next steps, suggested content, and a link to the home page.","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Heading:`}
          </strong>
          {` Communicates what a 404 error is in plain language that users can understand. Avoid including “404” or “404 error” unless it’s clearly defined after: “404: That page no longer exists.” Write 404 headings without end punctuation (no period), unless punctuated page headings align with your brand or product.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Next steps:`}
          </strong>
          {` Define how users can proceed, typically by inviting them to search the site, explore suggested content, or both. Always write next steps in full sentences and punctuate accordingly.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Suggested content (optional):`}
          </strong>
          {` Points users toward relevant pages such as onboarding information, reference guides, or FAQs.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Link to home page:`}
          </strong>
          {` Provides a quick and easy way for users to navigate back to your site’s home page.`}
        </p>
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"writing-404-page-content","size":"h2","className":"ws-title ws-h2"}}>
      {`Writing 404 page content`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Consider your 404 page as a flight path instead of a dead end. Use clear, informative microcopy to point users in the right direction.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Use understandable language.`}
      </strong>
      {` Skip technical jargon by writing your 404 heading in plain and specific terms.`}
    </p>
    <div className="ws-content-table">
      <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
        <thead>
          <tr {...{"role":"row"}}>
            <th {...{"align":"center","className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
              <div>
                <strong>
                  {`Do`}
                </strong>
              </div>
            </th>
            <th {...{"align":"center","className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
              <div>
                <strong>
                  {`Don't`}
                </strong>
              </div>
            </th>
          </tr>
        </thead>
        <tbody {...{"role":"rowgroup"}}>
          <tr {...{"role":"row"}}>
            <td {...{"align":"center","role":"cell","data-label":"Do"}}>
              <div>
                {`404: That page no longer exists`}
              </div>
            </td>
            <td {...{"align":"center","role":"cell","data-label":"Don't"}}>
              <div>
                {`Error 404: Not found`}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
</div>
    <br/>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Avoid exclamations, colloquialisms, and excessive humor.`}
      </strong>
      {` Write 404 headings to be informative and repeatable. When users land on a page more than once, jokes grow stale. Steer clear of extraneous words like “Uh oh!” or “Oops!”.`}
    </p>
    <div className="ws-content-table">
      <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
        <thead>
          <tr {...{"role":"row"}}>
            <th {...{"align":"center","className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
              <div>
                <strong>
                  {`Do`}
                </strong>
              </div>
            </th>
            <th {...{"align":"center","className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
              <div>
                <strong>
                  {`Don't`}
                </strong>
              </div>
            </th>
          </tr>
        </thead>
        <tbody {...{"role":"rowgroup"}}>
          <tr {...{"role":"row"}}>
            <td {...{"align":"center","role":"cell","data-label":"Do"}}>
              <div>
                {`We lost that page`}
              </div>
            </td>
            <td {...{"align":"center","role":"cell","data-label":"Don't"}}>
              <div>
                {`Uh oh, spaghetti-o! We lost that one`}
              </div>
            </td>
          </tr>
          <tr {...{"role":"row"}}>
            <td {...{"align":"center","role":"cell","data-label":"Do"}}>
              <div>
                {`We couldn't find that page`}
              </div>
            </td>
            <td {...{"align":"center","role":"cell","data-label":"Don't"}}>
              <div>
                {`Oops! We dropped the ball`}
              </div>
            </td>
          </tr>
          <tr {...{"role":"row"}}>
            <td {...{"align":"center","role":"cell","data-label":"Do"}}>
              <div>
                {`That page no longer exists`}
              </div>
            </td>
            <td {...{"align":"center","role":"cell","data-label":"Don't"}}>
              <div>
                {`Huh, that's odd...`}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
</div>
    <br/>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Avoid assigning blame to the user.`}
      </strong>
      {` If your brand doesn’t use first-person plural (“we”) pronouns, use “that page” or “this page” as your heading's subject instead.`}
    </p>
    <div className="ws-content-table">
      <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
        <thead>
          <tr {...{"role":"row"}}>
            <th {...{"align":"center","className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
              <div>
                <strong>
                  {`Do`}
                </strong>
              </div>
            </th>
            <th {...{"align":"center","className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
              <div>
                <strong>
                  {`Don't`}
                </strong>
              </div>
            </th>
          </tr>
        </thead>
        <tbody {...{"role":"rowgroup"}}>
          <tr {...{"role":"row"}}>
            <td {...{"align":"center","role":"cell","data-label":"Do"}}>
              <div>
                {`We can't find that page`}
              </div>
            </td>
            <td {...{"align":"center","role":"cell","data-label":"Don't"}}>
              <div>
                {`Your search came up empty`}
              </div>
            </td>
          </tr>
          <tr {...{"role":"row"}}>
            <td {...{"align":"center","role":"cell","data-label":"Do"}}>
              <div>
                {`That page no longer exists`}
              </div>
            </td>
            <td {...{"align":"center","role":"cell","data-label":"Don't"}}>
              <div>
                {`The page you're trying to reach doesn't exist`}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
</div>
    <br/>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Turn error into opportunity.`}
      </strong>
      {` Always provide a link back to your site’s home page, and include supplemental next steps below your heading to encourage users to explore options beyond just going back to where they came from.`}
    </p>
    <div className="ws-content-table">
      <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
        <thead>
          <tr {...{"role":"row"}}>
            <th {...{"align":"center","className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
              <div>
                <strong>
                  {`Do`}
                </strong>
              </div>
            </th>
            <th {...{"align":"center","className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
              <div>
                <strong>
                  {`Don't`}
                </strong>
              </div>
            </th>
          </tr>
        </thead>
        <tbody {...{"role":"rowgroup"}}>
          <tr {...{"role":"row"}}>
            <td {...{"align":"center","role":"cell","data-label":"Do"}}>
              <div>
                {`Another page might have what you need, so try searching PatternFly.`}
              </div>
            </td>
            <td {...{"align":"center","role":"cell","data-label":"Don't"}}>
              <div>
                {`That page doesn't exist.`}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
</div>
    <br/>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Channel your brand voice.`}
      </strong>
      {` Bland, impersonal error messages can be frustrating. Infuse your 404 page content with brand personality to support a more inviting site experience.`}
    </p>
    <div className="ws-content-table">
      <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
        <thead>
          <tr {...{"role":"row"}}>
            <th {...{"align":"center","className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
              <div>
                <strong>
                  {`Do`}
                </strong>
              </div>
            </th>
            <th {...{"align":"center","className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
              <div>
                <strong>
                  {`Don't`}
                </strong>
              </div>
            </th>
          </tr>
        </thead>
        <tbody {...{"role":"rowgroup"}}>
          <tr {...{"role":"row"}}>
            <td {...{"align":"center","role":"cell","data-label":"Do"}}>
              <div>
                <strong>
                  {`404: We couldn't find that page`}
                </strong>
                                <br/>
                {`Another page might have what you need, so try searching PatternFly.`}
              </div>
            </td>
            <td {...{"align":"center","role":"cell","data-label":"Don't"}}>
              <div>
                <strong>
                  {`Error 404: Not found`}
                </strong>
                                <br/>
                {`Requested URL not found on this server. Please try again.`}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
</div>
    <br/>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Write for all audiences.`}
      </strong>
      {` Be mindful of localization. Puns, wordplay, and cultural references may not localize for all users. Prioritize clarity over cleverness.`}
    </p>
    <div className="ws-content-table">
      <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
        <thead>
          <tr {...{"role":"row"}}>
            <th {...{"align":"center","className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
              <div>
                <strong>
                  {`Do`}
                </strong>
              </div>
            </th>
            <th {...{"align":"center","className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
              <div>
                <strong>
                  {`Don't`}
                </strong>
              </div>
            </th>
          </tr>
        </thead>
        <tbody {...{"role":"rowgroup"}}>
          <tr {...{"role":"row"}}>
            <td {...{"align":"center","role":"cell","data-label":"Do"}}>
              <div>
                <strong>
                  {`404: We lost that page`}
                </strong>
                                <br/>
                {`Let's find you a better one. Try a new search or return home.`}
              </div>
            </td>
            <td {...{"align":"center","role":"cell","data-label":"Don't"}}>
              <div>
                <strong>
                  {`404: Not all who wander are lost...`}
                </strong>
                                <br/>
                {`But this page is. Search again or find your way back home.`}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
</div>
    <br/>
    <p {...{"className":"ws-p"}}>
      {`To see an example, visit `}
      <PatternflyThemeLink {...{"to":"/404/"}}>
        {`PatternFly’s 404 page`}
      </PatternflyThemeLink>
      {`.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'UxWritingHttp404PagesDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
