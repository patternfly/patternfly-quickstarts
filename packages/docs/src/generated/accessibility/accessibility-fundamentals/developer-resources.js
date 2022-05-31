import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport5 from '../../../content/developer-resources/./PF-a11y.png';
const pageData = {
  "id": "Accessibility fundamentals",
  "section": "accessibility",
  "source": "developer-resources",
  "slug": "/accessibility/accessibility-fundamentals/developer-resources",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/developer-resources/accessibility-guide.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`When it comes to accessibility, there’s always room to improve. That’s why this guide is a work in progress. Your feedback can make it better, so tell us what you think.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Contribute to our `}
      <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-org"}}>
        {`accessibility documentation`}
      </PatternflyThemeLink>
      {` or `}
      <PatternflyThemeLink {...{"to":"https://www.patternfly.org/v4/get-in-touch/"}}>
        {`reach out to us`}
      </PatternflyThemeLink>
      {`—we’d love to hear from you!`}
    </p>
    <p {...{"className":"ws-p"}}>
      <em>
        {`“The power of the Web is in its universality. Access by everyone regardless of disability is an essential aspect.”`}
      </em>
      {` — Tim Berners-Lee, W3C Director and inventor of the World Wide Web`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`When it comes to product experiences, no one should get left behind. That's why accessibility is so important in design and development. The goal of software accessibility is to remove barriers and create inclusive product experiences that work for everyone, regardless of ability.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Accessibility is best achieved when considered early in the design and development process. So if you contribute to PatternFly or use it for your products, familiarize yourself with accessibility first.`}
    </p>
    <AutoLinkHeader {...{"id":"understanding-users-needs","size":"h2","className":"ws-title ws-h2"}}>
      {`Understanding users’ needs`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Great user experiences don’t just happen. They’re designed, tested, and refined with the user in mind. To develop inclusive products, it’s important to understand the varying needs of a wide range of users and consider the assistive tools and methods they use.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`This section provides information to help you better understand and address the needs of these `}
      <PatternflyThemeLink {...{"to":"https://a11yproject.com/posts/myth-accessibility-is-blind-people/"}}>
        {`different user groups`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Note`}
      </strong>
      {`: Some users might fall into multiple groups, and some might use tools created for a different group.
`}
            <br/>
    </p>
    <AutoLinkHeader {...{"id":"motor","size":"h3","className":"ws-title ws-h3"}}>
      {`Motor`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Users with poor motor control can use a range of devices to access contents. **`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Users who rely on a keyboard need elements that are keyboard accessible and highly visible when in focus.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Users who rely on a mouse or touch need target areas that are large enough to be hit easily.
`}
                <br/>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"no-vision","size":"h3","className":"ws-title ws-h3"}}>
      {`No vision`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Users with no vision rely on screen readers to access web sites and applications. Often, screen reader users will navigate a page by browsing specific elements, like headers, links, or form elements.`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tip:`}
        </strong>
        {` Use semantic elements and check that labels are meaningful when pulled out of context.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"low-vision","size":"h3","className":"ws-title ws-h3"}}>
      {`Low vision`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Users with low vision can have different needs depending on the nature of their visual impairment. Users may have difficulty with color differentiation, blurriness, or lack of vision in central or peripheral areas.`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tip:`}
        </strong>
        {` These needs mean that interfaces should not rely on color to communicate information, palettes need to have sufficient contrast, and layouts should be responsive when font sizes are increased.
`}
                <br/>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"cognitive","size":"h3","className":"ws-title ws-h3"}}>
      {`Cognitive`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Users who have difficulty processing information benefit from well-written content.`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Information should be clear, concise, and easy to scan.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Consider visual hierarchy, chunk content into short, related sections, and avoid long paragraphs.
`}
                <br/>
                <br/>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`These are some of the main user groups, but it is not an exhaustive list. Often “the Persona Spectrum”, coined by Microsoft, can be used to understand related mismatches and motivations across a spectrum of permanent, temporary, and situational scenarios.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`While accessibility tends to focus on those with disabilities, everyone benefits from accessible products. For example:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Accessible written content is easier to comprehend for people who aren’t fluent in the language and for people with low literacy levels.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Alternative text (alt text) makes images accessible to users with low bandwidth connections or with older technologies that can’t load the images.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Closed captioning benefits those in crowded areas, those teaching children how to read, or those learning a new language.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`There are plenty more examples we could include. Essentially, accessibility takes `}
      <em>
        {`all users`}
      </em>
      {` into account.`}
    </p>
    <img src={srcImport5} width={srcImport5.width} height={srcImport5.height} {...{"alt":"Accessibility spectrum example","className":"ws-img"}}>
    </img>
    <br/>
    <br/>
    <AutoLinkHeader {...{"id":"experience-parity","size":"h2","className":"ws-title ws-h2"}}>
      {`Experience parity`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The PatternFly community believes all abilities should be treated equally. In other words, there should be parity in the experience of all users—one user group shouldn't be prioritized over the other.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`To help you achieve this, consider these guidelines:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`There should be parity among all input types: touch, mouse, and keyboard.`}
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Don’t optimize the experience for one input type at the expense of another.`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Contents that a user can interact with using a mouse should also be accessible using touch or keyboard.`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Don’t show interactive elements on hover. Interactive elements that can display in a pop-up must display on click/touch/Enter events.`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        {`There should be parity between the screen reader contents and visibly rendered contents (refer to the `}
        <PatternflyThemeLink {...{"to":"https://www.w3.org/TR/wai-aria/#aria-hidden"}}>
          {`first Note for aria-hidden`}
        </PatternflyThemeLink>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`There should be parity between hover and focus events. Any information that’s available on hover for the mouse user should be available on focus for the keyboard-only user. It should also be available to the screen reader user using aria-describedby (refer to `}
        <PatternflyThemeLink {...{"to":"https://inclusive-components.design/tooltips-toggletips/"}}>
          {`Tooltips & Toggletips example from Inclusive Components`}
        </PatternflyThemeLink>
        {`).`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`When building accessible user experiences, solving for one can extend to many. Humans are diverse and unique, and inclusive design takes that into consideration to create truly incredible products.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'AccessibilityAccessibilityFundamentalsDeveloperResourcesDocs';
Component.pageData = pageData;

export default Component;
