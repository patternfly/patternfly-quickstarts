import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Banner",
  "section": "components",
  "source": "accessibility",
  "slug": "/components/banner/accessibility",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/accessibility/banner/banner.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`banner`}
      </strong>
      {` is a one-line, full color, full width container that can be used to communicate short snippets of information to users. Banners are un-intrusive, non-dismissible, and only support link buttons.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Keyboard users`}
      </strong>
      {` should not be able to focus on a banner, as it is not an interactive element.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Screen reader users`}
      </strong>
      {` should be able to have a screen reader describe the contents of a banner, but not focus on or interact with a banner otherwise.`}
    </p>
    <AutoLinkHeader {...{"id":"accessibility-application","size":"h2","className":"ws-title ws-h2"}}>
      {`Accessibility application:`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Check the color contrast of a banner and any text on it to make sure they can be read by users with color blindness or other visual impairments.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`No props need to be added or modified for banner accessibility.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'ComponentsBannerAccessibilityDocs';
Component.pageData = pageData;

export default Component;
