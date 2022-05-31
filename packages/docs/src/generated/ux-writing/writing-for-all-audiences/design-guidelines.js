import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport470 from '../../../content/design-guidelines/content/./img/submit-form.png';
const pageData = {
  "id": "Writing for all audiences",
  "section": "UX writing",
  "source": "design-guidelines",
  "slug": "/ux-writing/writing-for-all-audiences/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/content/writing-for-all-audiences.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`By following accessibility and global writing best practices, you’ll be better equipped to create product experiences for users of all abilities and backgrounds.`}
    </p>
    <AutoLinkHeader {...{"id":"writing-for-all-abilities","size":"h2","className":"ws-title ws-h2"}}>
      {`Writing for all abilities`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`When designing interfaces, consider all users’ abilities, including physical and cognitive. Use words that are clear, concise, and consistent. Refer to the `}
      <PatternflyThemeLink {...{"to":"https://www.w3.org/TR/WCAG21/"}}>
        {`Web Content Accessibility Guidelines (WCAG)`}
      </PatternflyThemeLink>
      {` for accessibility compliance information.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Here are a few best practices for creating accessible content:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`Use plain language and short sentences.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`Use common contractions (for example, "it’s” and "you’re") in areas that sound most natural to you. `}
          <PatternflyThemeLink {...{"to":"https://help.blackboard.com/Accessibility/Write_Accessible_Content"}}>
            {`Contractions help make your UI more accessible`}
          </PatternflyThemeLink>
          {`, and they’re great for maintaining a casual voice and tone.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`Write for responsive design. If your application is accessible by multiple devices, such as a tablet, laptop, television, and smartphone, then consider that on some devices you may slide or tap the screen, while on others you may select options by clicking or pressing.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`Label UI elements (buttons, icons, menus) consistently and descriptively to clearly represent the element’s function.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`Use proper heading levels (H1, H2) to articulate the page content’s organization. Headings are useful in identifying content changes, and machine translation recognizes each heading level as a new segment, which is important with text-laden pages. Headings are ranked hierarchically from H1 through H6, with H1 headings representing the most important idea on a page.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`Consistently `}
          <PatternflyThemeLink {...{"to":"https://www.patternfly.org/v4/accessibility/accessibility-and-patternfly"}}>
            {`describe UI elements`}
          </PatternflyThemeLink>
          {` in tooltips and product documentation. For example:`}
        </p>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Kebab icon tooltip text: More options`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Product documentation: Click `}
            <strong>
              {`More options`}
            </strong>
            {`.`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`Don't identify items by color only. Color identifiers don’t help users who are colorblind Example:`}
          <br>
          </br>
          {`
`}
                    <br/>
          {`
`}
          <img src={srcImport470} height={srcImport470.height * 150 / srcImport470.width} {...{"alt":"blue PatternFly primary button reading Submit form","width":"150","className":"ws-img"}}>
          </img>
        </p>
      </li>
    </ul>
    <div className="ws-content-table">
      <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
        <thead>
          <tr {...{"role":"row"}}>
            <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
              <div>
                <strong>
                  {`Do`}
                </strong>
              </div>
            </th>
            <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
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
            <td {...{"role":"cell","data-label":"Do"}}>
              <div>
                {`Click `}
                <strong>
                  {`Submit form`}
                </strong>
                {`.`}
              </div>
            </td>
            <td {...{"role":"cell","data-label":"Don't"}}>
              <div>
                {`Click the blue button.`}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
</div>
    <br/>
    <AutoLinkHeader {...{"id":"using-accessible-and-global-friendly-graphics","size":"h2","className":"ws-title ws-h2"}}>
      {`Using accessible and global-friendly graphics`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Verify that you have rights to use graphics without infringing on copyrights.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Include alt text for images that provide additional meaning or content to the page. If the image is decorative or if the alt text would be duplicated by adjacent text, then use an empty alt attribute instead, `}
        <code {...{"className":"ws-code"}}>
          {`alt=""`}
        </code>
        {`. An empty alt attribute communicates to screen readers that the image provides no additional content and can be ignored.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Select a text-free image and use callouts to caption the image. When localizing content, graphics containing text may require translation, and translating a static image requires graphic editing. Callouts are easier to localize.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"writing-for-screen-readers","size":"h2","className":"ws-title ws-h2"}}>
      {`Writing for screen readers`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Include text for screen readers. Screen readers are most useful when the words represent what is visually shown on the screen. See the following guidelines when writing text that is visible only to a screen reader, such as an aria-label that describes an icon button:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`Avoid redundancy. Screen readers announce the component or element as well as the associated property and state when the HTML is defined correctly. For example, the Search button is announced as the label and the button: Search button. Label the button as Search, not Search button.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`Make sure that labels for elements like buttons or links make sense when pulled out of context. Use descriptive hyperlinks instead of raw links or vague linked text, such as “Click here.”`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`When you define an aria-label for an element that also has associated visible text in the UI, ensure the aria-label begins with the same text that displays in the UI to avoid confusion with screen reader users who have vision.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`Avoid unnecessary capitalization.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`Avoid leet speak, which uses numbers or special characters in place of letters (for example, "a11y" for accessibility).`}
        </p>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"writing-for-localization-and-translation","size":"h2","className":"ws-title ws-h2"}}>
      {`Writing for localization and translation`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Accessibility is closely related to localization and translation. The more accessible your words are, the easier it is to translate them. Keep these additional tips in mind when writing for global users:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Translated text can be a drastically different length than the source text. Collaborate with UX designers to ensure that the text you use can appear 50% shorter or 50% longer with no negative impact on design.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Character width is affected by double-byte characters.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Avoid describing objects with human characteristics, for example “the computer knows when you log on.”`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Avoid idioms, jargon, or regional metaphors, such as “on the ball.” They don’t make sense in all languages.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Avoid culture-specific or location-specific references and examples. They won’t resonate with all users.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Avoid vague terms like “stuff” or “kind of.” These terms can be translated incorrectly.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Use humor sparingly. It generally doesn’t translate well.`}
      </li>
    </ul>
  </React.Fragment>
);
Component.displayName = 'UxWritingWritingForAllAudiencesDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
