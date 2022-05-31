import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Background image",
  "section": "components",
  "source": "accessibility",
  "slug": "/components/background-image/accessibility",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/accessibility/background-image/background-image.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`background image`}
      </strong>
      {` allows you to place an image in the background of your page or area of a page.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Keyboard users`}
      </strong>
      {` should not be able to interact with or navigate to the background image, as it is not an interactive element.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Screen reader users`}
      </strong>
      {` do not need to be able to interact with the background image. However, using alternative text for the screen reader to be able to describe the background image when the user navigates to a page is beneficial.`}
    </p>
    <AutoLinkHeader {...{"id":"accessibility-application","size":"h2","className":"ws-title ws-h2"}}>
      {`Accessibility application:`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Check that there is sufficient color contrast between different parts of the background image and any text that will be on the image. Automated testing tools don't often pick up background image colors, so they may not be able to tell you if contrast is sufficient for users with visual disabilities.`}
      </li>
    </ul>
  </React.Fragment>
);
Component.displayName = 'ComponentsBackgroundImageAccessibilityDocs';
Component.pageData = pageData;

export default Component;
