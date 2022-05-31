import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport4 from '../../../content/developer-resources/./Popover.png';
import { AccessibilityDatalist } from '../../../content/developer-resources/./accessibility-datalist.js';
const pageData = {
  "id": "Product development guide",
  "section": "accessibility",
  "source": "developer-resources",
  "slug": "/accessibility/product-development-guide/developer-resources",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/developer-resources/accessibility-development.md"
};
pageData.liveContext = {
  AccessibilityDatalist
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"general-questions-to-consider","size":"h2","className":"ws-title ws-h2"}}>
      {`General questions to consider`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`To assess how accessible your applications or products are, consider these questions:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Is it discoverable/perceivable by all users?`}
        </strong>
        {` If you can see or click on it, then it should be discoverable and perceivable by all users. You should determine if you can easily navigate to it by keyboard or by screen reader.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Is it interactable?`}
        </strong>
        {` If you can get to it, it should be easy to actually use once you’ve focused on the element. You should be able to interact with it by keyboard (for example, if it’s a button, can you press `}
        <strong>
          {`Enter`}
        </strong>
        {` to initiate the action?). Also use a screen reader to ensure you can initiate the action.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Is it understandable?`}
        </strong>
        {` If the element can be found and interacted with, it should be clear what this action does. If it’s a button, you should determine if it has visible text that would be clear out of context of the page. If it doesn’t have visible text, you should check if it has an aria-label or accessible name.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"what-products-should-address","size":"h2","className":"ws-title ws-h2"}}>
      {`What products should address`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Keep in mind that while PatternFly provides accessible components, we can't guarantee that your products will be accessible. There are a few items outside the scope of PatternFly, so you should keep these items in mind to ensure accessibility in anything you build:
`}
            <br/>
    </p>
    <AccessibilityDatalist/>
    <br/>
    <AutoLinkHeader {...{"id":"techniques","size":"h2","className":"ws-title ws-h2"}}>
      {`Techniques`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The `}
      <PatternflyThemeLink {...{"to":"https://www.w3.org/TR/WCAG20-TECHS/Overview.html#contents"}}>
        {`WCAG 2.0 techniques`}
      </PatternflyThemeLink>
      {` provide examples on how to meet accessibility guidelines. The techniques listed below are adopted as standard within PatternFly for handling specific patterns.`}
    </p>
    <AutoLinkHeader {...{"id":"labeling-with-aria","size":"h3","className":"ws-title ws-h3"}}>
      {`Labeling with Aria`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`For sighted users, the context and visual appearance of an element can provide sufficient cues to determine the purpose. But in some situations, this isn’t the case. For example, the X often used in the top-right corner of pop-up divs (light boxes) to indicate the control for closing the div might not be clear to those using assistive technology.`}
    </p>
    <img src={srcImport4} width={srcImport4.width} height={srcImport4.height} {...{"alt":"Popover example of close button","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Aria supplements HTML so that interactions and widgets commonly used in applications can be passed to assistive technologies when there is not otherwise a mechanism natively.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Only use labels when necessary to make it accessible. If there is visible text, then there doesn’t need to be an aria-label. Aria is meant to add context (through labeling or description) for screen reader users when there isn’t visible text, not override or reiterate what’s already there. If there is visible text, aria might reiterate or override the visible text, so check that your aria is useful.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`It’s important to understand that aria can only affect the semantics of an element; it has no effect on the behavior of the element. For example, while you can make an element hidden to screen readers with `}
      <code {...{"className":"ws-code"}}>
        {`aria-hidden=”true”`}
      </code>
      {`, that does not change the focus behavior for that element.`}
    </p>
    <AutoLinkHeader {...{"id":"form-fields","size":"h3","className":"ws-title ws-h3"}}>
      {`Form fields`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use `}
      <PatternflyThemeLink {...{"to":"https://www.w3.org/TR/WCAG20-TECHS/H44.html"}}>
        {`explicit linking`}
      </PatternflyThemeLink>
      {` between `}
      <code {...{"className":"ws-code"}}>
        {`label`}
      </code>
      {` and form input elements (e.g. `}
      <code {...{"className":"ws-code"}}>
        {`input`}
      </code>
      {`, `}
      <code {...{"className":"ws-code"}}>
        {`textarea`}
      </code>
      {`, or `}
      <code {...{"className":"ws-code"}}>
        {`select`}
      </code>
      {`) when both elements are present. Aside from providing an accessible name to screen readers, this method also increases the clickable area of the form element by making the label clickable, too. (`}
      <PatternflyThemeLink {...{"to":"//www.w3.org/TR/WCAG20-TECHS/H44.html"}}>
        {`H44`}
      </PatternflyThemeLink>
      {`)`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`When a `}
      <code {...{"className":"ws-code"}}>
        {`label`}
      </code>
      {` element cannot accompany a form input element, provide the label using using `}
      <code {...{"className":"ws-code"}}>
        {`aria-label`}
      </code>
      {` or `}
      <code {...{"className":"ws-code"}}>
        {`aria-labelledby`}
      </code>
      {`. (`}
      <PatternflyThemeLink {...{"to":"//www.w3.org/TR/WCAG20-TECHS/ARIA14.html"}}>
        {`ARIA14`}
      </PatternflyThemeLink>
      {`) In a single-field form, the submit button label can serve as the field label for sighted users (`}
      <PatternflyThemeLink {...{"to":"//www.w3.org/TR/WCAG20-TECHS/general.html#G167"}}>
        {`G167`}
      </PatternflyThemeLink>
      {`) as well as assistive devices when using `}
      <code {...{"className":"ws-code"}}>
        {`aria-labelledby`}
      </code>
    </p>
    <AutoLinkHeader {...{"id":"icons","size":"h3","className":"ws-title ws-h3"}}>
      {`Icons`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Add \`aria-hidden='true' for all icons, either to the icon element or a parent element of the icon. This renders the icon as something that assistive devices can ignore.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`When accessibility is concerned, there are two main categories of icons:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Decorative icons`}
        </strong>
        {` are icons that can be removed without affecting the page's information.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Semantic icons`}
        </strong>
        {` are icons that provide information that isn't present on the page. For example, semantic icons can represent status, indicate an alert message type, or replace text as button labels.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`The meaning of a semantic icon must be provided in alternative ways to the user. Additionally, follow these guidelines for semantic icons:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`Add a label for the icon in tooltip text that displays on hover and on focus for focusable elements.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`For `}
          <strong>
            {`interactive elements`}
          </strong>
          {` like `}
          <code {...{"className":"ws-code"}}>
            {`<a>`}
          </code>
          {` and `}
          <code {...{"className":"ws-code"}}>
            {`<button>`}
          </code>
          {` where an icon is used as the label instead of text, provide the label on the interactive element using aria-label.`}
        </p>
        <p {...{"className":"ws-p"}}>
          {`Example:`}
        </p>
        <Example {...{"code":"<button class=\"...\" aria-label=\"Close Dialog\">\n  <i class=\"...\" aria-hidden=\"true\"></i>\n</button>","lang":"html","noLive":true}}>
        </Example>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`For `}
          <strong>
            {`non-interactive icons`}
          </strong>
          {`, include .pf-screen-reader text near the icon. Depending on the component, the .pf-screen-reader text might not be a direct sibling to the icon element.`}
        </p>
        <p {...{"className":"ws-p"}}>
          {`Example: In the alert component, the icon label text is adjacent to the message. This way, when role="alert" is added to .pf-c-alert__body for dynamically displayed alerts, the type of message is announced along with the message text.`}
        </p>
        <Example {...{"code":"<div class=\"pf-c-alert pf-m-success\" aria-label=\"Success Alert\">\n  <div aria-hidden=\"true\" class=\"pf-c-alert__icon\">\n    <i class=\"fas fa-check-circle\"></i>\n  </div>\n  <div class=\"pf-c-alert__body\">\n    <h4 class=\"pf-c-alert__title\">\n      {{#> screen-reader}}Success:{{/screen-reader}} Success alert title\n    </h4>\n  </div>\n</div>","lang":"html","noLive":true}}>
        </Example>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"images","size":"h3","className":"ws-title ws-h3"}}>
      {`Images`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`All images should have alt text so that assistive technology can provide an image description. This will help your site’s SEO, too. When an image contains words that are important to understanding the content, the alt text should include those words. This allows the alt text to play the same function on the page as the image.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Note`}
      </strong>
      {`: Alt text does not necessarily describe the visual characteristics of the image itself. It just needs to convey the same meaning as the image.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`The exception to this practice is when images are primarily for presentation purposes and are not essential pieces of content. To signify that an image should be skipped by a screen reader, set the value of the alt attribute to an empty string, such as `}
      <strong>
        {`alt=””`}
      </strong>
      {`.`}
    </p>
    <AutoLinkHeader {...{"id":"trapping-focus","size":"h3","className":"ws-title ws-h3"}}>
      {`Trapping focus`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The recommended interaction pattern for the modal components like the modal or popover is to trap focus within the modal element of the component when it becomes visible.`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`For keyboard-only users that use the tab key to navigate the interface, this means that focus cannot be shifted outside of the modal when using the tab key. Instead, when focus leaves the last focusable item, it should be placed on the first focusable item of the modal.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`For screen reader users, the other contents on the page should be hidden from the screen reader.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Based on the `}
      <PatternflyThemeLink {...{"to":"https://www.patternfly.org/v4/get-started/accessibility-guide#testing"}}>
        {`screen reader / browser combinations`}
      </PatternflyThemeLink>
      {` we use for testing, we recommend applying `}
      <code {...{"className":"ws-code"}}>
        {`aria-hidden="true"`}
      </code>
      {` to the parent wrapping element of the page contents. Note that the modal element of the component must not be a descendent of this element with `}
      <code {...{"className":"ws-code"}}>
        {`aria-hidden="true"`}
      </code>
      {` and should be included as a sibling to this element.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'AccessibilityProductDevelopmentGuideDeveloperResourcesDocs';
Component.pageData = pageData;

export default Component;
