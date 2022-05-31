import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Testing your accessibility",
  "section": "accessibility",
  "source": "developer-resources",
  "slug": "/accessibility/testing-your-accessibility/developer-resources",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/developer-resources/accessibility-testing.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"general-testing","size":"h2","className":"ws-title ws-h2"}}>
      {`General testing`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Many accessibility issues can be found by doing a few simple checks:`}
    </p>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Validate your HTML.`}
          </strong>
          {` Structural, semantic HTML is the key starting point toward good accessibility practices. When a screen reader (or any sort of assistive device) scans a web page, it gets information about the Document Object Model (DOM), or the HTML structure of the page. No styles or JavaScript will be read by a screen reader.`}
        </p>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            <p {...{"className":"ws-p"}}>
              {`Screen reader software like Voice Over, NVDA, or JAWS doesn’t just turn text into speech. It can use information in the HTML to list all of the headings on a page, give extra navigation controls to data tables, or announce how many items are in a list, among other things. This makes semantic HTML essential.`}
            </p>
          </li>
          <li {...{"className":"ws-li"}}>
            <p {...{"className":"ws-p"}}>
              {`There are many tools you can use to validate your HTML, such as `}
              <PatternflyThemeLink {...{"to":"https://validator.w3.org/"}}>
                {`W3C’s markup validation service`}
              </PatternflyThemeLink>
              {`.`}
            </p>
          </li>
        </ul>
      </li>
    </ol>
    <ol {...{"start":2,"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Use an accessibility audit tool to check for violations.`}
        </strong>
        {` If you are using PatternFly in your project, we recommend using `}
        <PatternflyThemeLink {...{"to":"//www.deque.com/axe/"}}>
          {`aXe: The Accessibility Engine`}
        </PatternflyThemeLink>
        {` to check for accessibility violations locally. To make it even easier for you, we've created the `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-a11y"}}>
          {`patternfly-a11y script`}
        </PatternflyThemeLink>
        {` which reports any axe accessibility violations from a set of pages. A configuration file can be set to customize to specific needs like authentication, waiting for any specific items to finish loading (like a loading spinner), etc. When used as a report, it will give an output `}
        <PatternflyThemeLink {...{"to":"http://a11y-os.surge.sh/"}}>
          {`similar to this example`}
        </PatternflyThemeLink>
        {`. The UI should be built first in the CI workflow and then a job created to run the a11y script against that build. The a11y script assumes that there is a webserver running somewhere that is serving up the pages, i.e. in localhost:8000, that it can reach. If you want to test a step before deployment, you could follow the path of integrating axe with cypress. If you are contributing to PatternFly, refer to our `}
        <PatternflyThemeLink {...{"to":"//github.com/patternfly/patternfly/blob/main/README.md#testing-for-accessibility"}}>
          {`README.md`}
        </PatternflyThemeLink>
        {` on how to run this tool.`}
      </li>
    </ol>
    <ol {...{"start":3,"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Test keyboard accessibility, and check that these requirements are met:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`All functionality is keyboard accessible.`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Elements in the HTML and in the layout follow a logical order.`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Elements with focus are clearly visible.`}
          </li>
        </ul>
      </li>
    </ol>
    <ol {...{"start":4,"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Disable styles`}
        </strong>
        {`, then test the information architecture and presence of adequate text labels. The `}
        <PatternflyThemeLink {...{"to":"//wave.webaim.org/extension/"}}>
          {`WAVE browser extension from WebAIM`}
        </PatternflyThemeLink>
        {` provides this feature if it isn't available in the browser you are using.`}
      </li>
    </ol>
    <ol {...{"start":5,"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Test with any screen reader available in your operating system.`}
        </strong>
        {` We target these screen readers to test PatternFly:`}
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`JAWS with Chrome, Windows (`}
            <PatternflyThemeLink {...{"to":"//dequeuniversity.com/screenreaders/jaws-keyboard-shortcuts"}}>
              {`keyboard shortcuts`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Voiceover with Safari, Mac (`}
            <PatternflyThemeLink {...{"to":"//dequeuniversity.com/screenreaders/voiceover-keyboard-shortcuts"}}>
              {`keyboard shortcuts`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`NVDA with Firefox, Windows (`}
            <PatternflyThemeLink {...{"to":"//dequeuniversity.com/screenreaders/nvda-keyboard-shortcuts"}}>
              {`keyboard shortcuts`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ol>
    <ol {...{"start":6,"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Check color contrast for the following:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Text color against background color (`}
            <PatternflyThemeLink {...{"to":"//www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html"}}>
              {`Understanding WCAG 1.4.3`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Text color against link color (`}
            <PatternflyThemeLink {...{"to":"//www.w3.org/TR/WCAG20-TECHS/G183.html"}}>
              {`Technique G183`}
            </PatternflyThemeLink>
            {`)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Visible boundaries of buttons and form elements against adjacent background color (`}
            <PatternflyThemeLink {...{"to":"//www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html"}}>
              {`Understanding WCAG 1.4.11`}
            </PatternflyThemeLink>
            {`)`}
          </li>
        </ul>
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"screen-readers","size":"h2","className":"ws-title ws-h2"}}>
      {`Screen readers`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Just as front-end developers use their browser to see how their changes look, you should use a screen reader to see how your accessibility looks (we use Voice Over).`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Generally, screen readers access the DOM (Document Object Model), and they use browser APIs (Application Programming Interfaces) to get the information they need. In this way, a screen reader knows what to say when a set of list items begins and ends, and it typically announces, in advance, how many items are in the list. A screen reader can also traverse a page using heading navigation to speak the heading level.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Here are a few aspects that can affect how screen readers communicate information:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Semantic HTML`}
          </strong>
          {`: Semantics refers to the meaning of a piece of code. A semantic element clearly describes its meaning to both the browser and the developer. For example, `}
          <code {...{"className":"ws-code"}}>
            {`<div>`}
          </code>
          {` and `}
          <code {...{"className":"ws-code"}}>
            {`<span>`}
          </code>
          {` are non-semantic elements because they don't describe their contents. Examples of semantic elements include `}
          <code {...{"className":"ws-code"}}>
            {`<form>`}
          </code>
          {` and `}
          <code {...{"className":"ws-code"}}>
            {`<table>`}
          </code>
          {`, which clearly define their contents. Screen readers expect semantic HTML when traversing the DOM, so non-semantic elements that aren't customized to be made accessible are highly likely to be inaccessible. Aria and other accessible attributes are meant to extend the functionality and meaning of native semantics, but at the core, your HTML should be semantic.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Headings`}
          </strong>
          {`: A visual user can scan a page and fairly quickly understand its information architecture. Visually impaired users have other methods of achieving this. One common method is using heading levels to determine the flow of information. Headings that vary in size simply based on design and not functionality will likely confuse these users. A clear flow of sequential heading sizes based on headings and subheadings is significantly clearer to all users.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Accessible names for all elements`}
          </strong>
          {`: When an element doesn't have visual text or when further explanation is necessary, a screen reader will not know what an item is or does. For example, if you have an icon `}
          <code {...{"className":"ws-code"}}>
            {`<button>`}
          </code>
          {`, and it doesn't have a label, the screen reader can only tell that it’s a button—it can't determine what the button does. Add a few more non-labeled buttons, and now all the screen reader sees are vague buttons with no understanding of what they do. For more information, see the labeling section.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Links`}
          </strong>
          {`: Similar to buttons, links should always have a label for clarity. Without the label, users have no idea where the links point to. If you have the same label for multiple links, each link must point to the same URL. Links, buttons, and form controls should make sense out of context. If a user wants to look at all of the links available, they should be able to differentiate the available links. You shouldn’t have multiple “Click here” links.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Landmarks`}
          </strong>
          {`: Landmarks help communicate the structure of a page by identifying regions. There are many types of landmarks, such as banners, navigation, main, and form. When there are more than one of the same role (for example, two navigation regions on the same page), these regions should be differentiated by an `}
          <code {...{"className":"ws-code"}}>
            {`aria-label`}
          </code>
          {`.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Dynamic content`}
          </strong>
          {`: One of the biggest accessibility concerns with dynamic content is the need to notify users that the content has changed. Sighted users benefit from highlighting or drawing visual attention to the changes. Non-sighted users need to be notified in another way, such as loading a new page, sending the focus to the new content, or using ARIA live announcements.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Unrelated notifications`}
          </strong>
          {`: Notifications from the operating system outside of the web app can interrupt a user while interacting with a page (for example, "You received a new chat message."). Consider this possibility when designing and developing for screen readers, and keep any notification messaging concise to limit the interruption.`}
        </p>
      </li>
    </ul>
    <br/>
    <AutoLinkHeader {...{"id":"checklist-for-testing","size":"h3","className":"ws-title ws-h3"}}>
      {`Checklist for testing`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`These are some of the main areas we check for on the PatternFly team. We recommend that you check for these same areas in your applications, too.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`General questions`}
      </strong>
    </p>
    <p {...{"className":"ws-p"}}>
            <input type="checkbox" unchecked/>
      {` VO Rotor Navigation can discover all information. `}
            <br/>
      {`
`}
            <input type="checkbox" unchecked/>
      {` VO Shortcut Navigation can discover all information. `}
            <br/>
      {`
`}
            <input type="checkbox" unchecked/>
      {` VO Cursor Navigation can discover all information (dependent on component and use case- easy way to navigate to component). `}
            <br/>
      {`
`}
            <input type="checkbox" unchecked/>
      {` Tabbed Keyboard Navigation can discover all information.`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`However, if content should be hidden from a screen reader, for instance, if it’s offscreen or just presentational, make sure that content is set to aria-hidden=”true”.  `}
                <br/>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
            <input type="checkbox" unchecked/>
      {` Is it understandable and usable? `}
            <br/>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
                <input type="checkbox" unchecked/>
        {` When you navigate to an item by keyboard or by screen reader, you can easily understand and use the item. `}
                <br/>
      </li>
      <li {...{"className":"ws-li"}}>
                <input type="checkbox" unchecked/>
        {` The flow of information makes sense when navigating. Screen readers navigate the page in DOM order. If you used CSS to visually reposition elements, they might be announced in a nonsensical sequence. Instead, if you need something to appear earlier in the page, try to physically move it earlier in the DOM.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Accessibility points`}
      </strong>
      {` `}
            <br/>
      {`
`}
            <input type="checkbox" unchecked/>
      {` `}
      <strong>
        {`Structure:`}
      </strong>
      {` The visual information architecture should map to the various rotor menus that exist by default. `}
            <br/>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
                <input type="checkbox" unchecked/>
        {` `}
        <strong>
          {`Check rotor:`}
        </strong>
        {` Are there good headings, landmarks, links, form controls, and other elements? Do they make sense, and are they descriptive without overloading information? `}
                <br/>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
                        <input type="checkbox" unchecked/>
            {` Headings: Check that heading levels convey structure/content and do not skip. A common practice is to use a single h1 for the primary headline or logo on a page, h2s for designating major sections, and h3s for supporting sections. `}
                        <br/>
          </li>
          <li {...{"className":"ws-li"}}>
                        <input type="checkbox" unchecked/>
            {` Links `}
                        <br/>
          </li>
          <li {...{"className":"ws-li"}}>
                        <input type="checkbox" unchecked/>
            {` Form controls `}
                        <br/>
          </li>
          <li {...{"className":"ws-li"}}>
                        <input type="checkbox" unchecked/>
            {` Landmarks `}
                        <br/>
          </li>
          <li {...{"className":"ws-li"}}>
                        <input type="checkbox" unchecked/>
            {` Tables `}
                        <br/>
          </li>
        </ul>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
            <input type="checkbox" unchecked/>
      {` `}
      <strong>
        {`Labels:`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
                <input type="checkbox" unchecked/>
        {` `}
        <strong>
          {`Links:`}
        </strong>
        {` Labels should be unique unless they have the same url. They should be descriptive/informative.`}
      </li>
      <li {...{"className":"ws-li"}}>
                <input type="checkbox" unchecked/>
        {` `}
        <strong>
          {`Buttons and form controls:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Go through form controls and check if they all have labels. (Remember that there is a difference between being accessible and having a good, accessible experience. Clear, descriptive labels help create a better experience.)`}
          </li>
          <li {...{"className":"ws-li"}}>
            <strong>
              {`Expandable buttons:`}
            </strong>
            {` There should be some indication that it has the expandable control.`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
                <input type="checkbox" unchecked/>
        {` `}
        <strong>
          {`Form inputs:`}
        </strong>
        {` These inputs should have some label even if it's not visible.`}
      </li>
      <li {...{"className":"ws-li"}}>
                <input type="checkbox" unchecked/>
        {` `}
        <strong>
          {`Icons`}
        </strong>
        {`: Where you don’t visibly see text there should still be some kind of text for screen reader.`}
      </li>
      <li {...{"className":"ws-li"}}>
                <input type="checkbox" unchecked/>
        {` `}
        <strong>
          {`Images`}
        </strong>
        {`: Check all images for proper alt text. The exception to this practice is when images are primarily for presentation purposes and are not essential pieces of content. To signify that an image should be skipped by a screen reader, set the value of the alt attribute to an empty string, e.g., `}
        <code {...{"className":"ws-code"}}>
          {`alt=””`}
        </code>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
                <input type="checkbox" unchecked/>
        {` `}
        <strong>
          {`Landmarks:`}
        </strong>
        {` Landmark regions should have labels when there is more than one type of landmark and they are not the same (navigation, main, form, etc.).
Section element shouldn’t be used unless it has a label.`}
      </li>
      <li {...{"className":"ws-li"}}>
                <input type="checkbox" unchecked/>
        {` `}
        <strong>
          {`Tables`}
        </strong>
        {`: Can you tell what the table is and what’s in it? (`}
        <PatternflyThemeLink {...{"to":"https://webaim.org/techniques/tables/"}}>
          {`https://webaim.org/techniques/tables/`}
        </PatternflyThemeLink>
        {`)`}
      </li>
      <li {...{"className":"ws-li"}}>
                <input type="checkbox" unchecked/>
        {` `}
        <strong>
          {`Aria`}
        </strong>
        {`: If there is visible text then there doesn’t need to be an `}
        <code {...{"className":"ws-code"}}>
          {`aria-label`}
        </code>
        {`. (Aria aids in description to screen reader users. It doesn’t have to reiterate or override what might already be there so you should check that your aria is useful.)`}
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`It’s important to understand that ARIA can only affect the `}
            <em>
              {`semantics`}
            </em>
            {` of an element; it has no effect on the `}
            <em>
              {`behavior`}
            </em>
            {` of the element.`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`For example, while you can make an element hidden to screen readers with `}
            <code {...{"className":"ws-code"}}>
              {`aria-hidden=”true”`}
            </code>
            {`, that does not change the focus behavior for that element.`}
          </li>
        </ul>
      </li>
    </ul>
  </React.Fragment>
);
Component.displayName = 'AccessibilityTestingYourAccessibilityDeveloperResourcesDocs';
Component.pageData = pageData;

export default Component;
