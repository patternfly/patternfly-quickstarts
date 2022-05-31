import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "PatternFly's accessibility",
  "section": "accessibility",
  "source": "developer-resources",
  "slug": "/accessibility/patternflys-accessibility/developer-resources",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/developer-resources/patternfly-accessibility.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`As a design system, PatternFly provides accessible building blocks to work with. We do our best to cover all areas that are within our control and take at least some of the accessibility work off your hands.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`With constant enhancements to PatternFly, we maintain this accessibility through a combination of automated and manual testing. We use `}
      <PatternflyThemeLink {...{"to":"https://www.deque.com/axe/"}}>
        {`aXe: The Accessibility Engine`}
      </PatternflyThemeLink>
      {` on our build to ensure that all components pass this accessibility audit before they’re added to PatternFly.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`We regularly audit keyboard accessibility with both manual testing and integration tests. We’re also aiming to provide full support for Voice Over as our main screen reader, but we still test our components through NVDA and JAWS. As part of our manual audit, every component is run through Voice Over to make sure they’ll be as accessible as possible in your products.`}
    </p>
    <AutoLinkHeader {...{"id":"what-patternfly-aims-to-address","size":"h2","className":"ws-title ws-h2"}}>
      {`What PatternFly aims to address`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Our goal is to meet `}
      <PatternflyThemeLink {...{"to":"https://www.w3.org/WAI/WCAG21/quickref/?currentsidebar=%23col_customize&levels=aaa"}}>
        {`level AA in the Web Content Accessibility Guidelines 2.1`}
      </PatternflyThemeLink>
      {`. If you use PatternFly or contribute to PatternFly as a designer or developer, these are the items you can expect to be covered in PatternFly:`}
    </p>
    <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
      <thead>
        <tr {...{"role":"row"}}>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Guideline`}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Link`}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Tested`}
            </div>
          </th>
        </tr>
      </thead>
      <tbody {...{"role":"rowgroup"}}>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Guideline"}}>
            <div>
              {`Semantic HTML structures are used to accurately communicate the purpose and relationship of UI elements.`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Link"}}>
            <div>
              <PatternflyThemeLink {...{"to":"//www.w3.org/WAI/WCAG21/quickref#info-and-relationships"}}>
                {`WCAG 1.3.1`}
              </PatternflyThemeLink>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`design`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`html`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`css`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Tested"}}>
            <div>
              {`Automated testing with axe and manual testing`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Guideline"}}>
            <div>
              {`Color is not the only method of communication. Providing meaning with color is supplementary to providing meaning with text.`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Link"}}>
            <div>
              <PatternflyThemeLink {...{"to":"//www.w3.org/WAI/WCAG21/quickref#use-of-color"}}>
                {`WCAG 1.4.1`}
              </PatternflyThemeLink>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`design`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`html`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`css`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Tested"}}>
            <div>
              {`Manual testing and axe used`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Guideline"}}>
            <div>
              {`Colors used provide sufficient contrast`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Link"}}>
            <div>
              <PatternflyThemeLink {...{"to":"//www.w3.org/WAI/WCAG21/quickref#contrast-minimum"}}>
                {`WCAG 1.4.3`}
              </PatternflyThemeLink>
              {` and `}
              <PatternflyThemeLink {...{"to":"//www.w3.org/WAI/WCAG21/quickref#non-text-contrast"}}>
                {`1.4.11`}
              </PatternflyThemeLink>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`css`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Tested"}}>
            <div>
              {`Automated testing with axe`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Guideline"}}>
            <div>
              {`Font sizes can scale up to 200% without loss of content or functionality, and up to 400% without needing to scroll in more than one direction.`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Link"}}>
            <div>
              <PatternflyThemeLink {...{"to":"//www.w3.org/WAI/WCAG21/quickref#resize-text"}}>
                {`WCAG`}
                {` `}
                {`1.4.4`}
              </PatternflyThemeLink>
              {` and `}
              <PatternflyThemeLink {...{"to":"//www.w3.org/WAI/WCAG21/quickref#reflow"}}>
                {`1.4.10`}
              </PatternflyThemeLink>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`css`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Tested"}}>
            <div>
              {`Manual testing`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Guideline"}}>
            <div>
              {`Styles that affect text spacing (line height, space between paragraphs, letter spacing, and word spacing) can be increased without loss of content or functionality.`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Link"}}>
            <div>
              <PatternflyThemeLink {...{"to":"//www.w3.org/WAI/WCAG21/quickref#text-spacing"}}>
                {`WCAG 1.4.12`}
              </PatternflyThemeLink>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`css`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Tested"}}>
            <div>
              {`Manual testing and axe used`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Guideline"}}>
            <div>
              {`Contents that appear on hover and focus are dismissable, hoverable, and persistent.`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Link"}}>
            <div>
              <PatternflyThemeLink {...{"to":"//www.w3.org/WAI/WCAG21/quickref#content-on-hover-or-focus"}}>
                {`WCAG 1.4.13`}
              </PatternflyThemeLink>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`html`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`css`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`js`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Tested"}}>
            <div>
              {`Manual testing`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Guideline"}}>
            <div>
              {`All functionality is keyboard accessible.`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Link"}}>
            <div>
              <PatternflyThemeLink {...{"to":"//www.w3.org/WAI/WCAG21/quickref#keyboard"}}>
                {`WCAG 2.1.1`}
              </PatternflyThemeLink>
              {` and `}
              <PatternflyThemeLink {...{"to":"//www.w3.org/WAI/WCAG21/quickref#no-keyboard-trap"}}>
                {`2.1.2`}
              </PatternflyThemeLink>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`html`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Tested"}}>
            <div>
              {`Manual testing`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Guideline"}}>
            <div>
              {`Elements in the HTML and in the layout follow a logical order.`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Link"}}>
            <div>
              <PatternflyThemeLink {...{"to":"//www.w3.org/WAI/WCAG21/quickref#meaningful-sequence"}}>
                {`WCAG 1.3.2`}
              </PatternflyThemeLink>
              {` and `}
              <PatternflyThemeLink {...{"to":"//www.w3.org/WAI/WCAG21/quickref#focus-order"}}>
                {`2.4.3`}
              </PatternflyThemeLink>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`design`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`html`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`css`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Tested"}}>
            <div>
              {`Manual testing`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Guideline"}}>
            <div>
              {`Elements with focus are clearly visible.`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Link"}}>
            <div>
              <PatternflyThemeLink {...{"to":"//www.w3.org/WAI/WCAG21/quickref#focus-visible"}}>
                {`WCAG 2.4.7`}
              </PatternflyThemeLink>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`css`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Tested"}}>
            <div>
              {`Manual testing`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Guideline"}}>
            <div>
              {`Flashing content does not flash more than three times in any one-second period, or the flash is below the general flash and red flash thresholds.`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Link"}}>
            <div>
              <PatternflyThemeLink {...{"to":"//www.w3.org/WAI/WCAG21/quickref/?showtechniques=231#three-flashes-or-below-threshold"}}>
                {`WCAG 2.3.1`}
              </PatternflyThemeLink>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`css`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Tested"}}>
            <div>
              {`Manual testing`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Guideline"}}>
            <div>
              {`Functionality that uses complex gestures can also be operated with a single pointer without a path-based gesture.`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Link"}}>
            <div>
              <PatternflyThemeLink {...{"to":"//www.w3.org/WAI/WCAG21/quickref#pointer-gestures"}}>
                {`WCAG 2.5.1`}
              </PatternflyThemeLink>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`design`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Tested"}}>
            <div>
              {`Manual testing`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Guideline"}}>
            <div>
              {`Pointer events can be cancelled.`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Link"}}>
            <div>
              <PatternflyThemeLink {...{"to":"//www.w3.org/WAI/WCAG21/quickref#pointer-cancellation"}}>
                {`WCAG 2.5.2`}
              </PatternflyThemeLink>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`js`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Tested"}}>
            <div>
              {`Manual testing`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Guideline"}}>
            <div>
              {`Visible labels of UI components are either the same as the accessible name or used in the beginning of the accessible name.`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Link"}}>
            <div>
              <PatternflyThemeLink {...{"to":"//www.w3.org/WAI/WCAG21/quickref#label-in-name"}}>
                {`WCAG 2.5.3`}
              </PatternflyThemeLink>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`html`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Tested"}}>
            <div>
              {`Automated testing with axe and manual testing`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Guideline"}}>
            <div>
              {`The target area for clickable elements is at least 44 by 44 `}
              <PatternflyThemeLink {...{"to":"//www.w3.org/TR/WCAG21#dfn-css-pixels"}}>
                {`CSS pixels`}
              </PatternflyThemeLink>
              {`.`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Link"}}>
            <div>
              <PatternflyThemeLink {...{"to":"//www.w3.org/WAI/WCAG21/quickref#target-size"}}>
                {`WCAG 2.5.5 (AAA)`}
              </PatternflyThemeLink>
              {`*`}
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`css`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Tested"}}>
            <div>
              {`Manual testing`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Guideline"}}>
            <div>
              {`An accessible name is provided for all elements.`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Link"}}>
            <div>
              <PatternflyThemeLink {...{"to":"//www.w3.org/WAI/WCAG21/quickref#name-role-value"}}>
                {`WCAG 4.1.2`}
              </PatternflyThemeLink>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`design`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`html`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Tested"}}>
            <div>
              {`Automated testing with axe and manual testing with VO`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Guideline"}}>
            <div>
              {`Status messages can be programmatically determined through role or properties.`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Link"}}>
            <div>
              <PatternflyThemeLink {...{"to":"//www.w3.org/WAI/WCAG21/quickref#status-messages"}}>
                {`WCAG 4.1.3`}
              </PatternflyThemeLink>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`html`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Tested"}}>
            <div>
              {`Manual testing`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <p {...{"className":"ws-p"}}>
      {`*WCAG 2.5.5 is included for reference only. This guideline suggests a size that is larger than what PatternFly requires.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'AccessibilityPatternflysAccessibilityDeveloperResourcesDocs';
Component.pageData = pageData;

export default Component;
