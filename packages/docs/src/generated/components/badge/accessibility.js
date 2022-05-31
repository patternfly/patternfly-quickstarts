import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Badge",
  "section": "components",
  "source": "accessibility",
  "slug": "/components/badge/accessibility",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/accessibility/badge/badge.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`badge`}
      </strong>
      {` is used to annotate other information like a label or an object name. Badges are typically used to reflect counts, like number of unread notifications. Badges are not interactive.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Keyboard users`}
      </strong>
      {` should not be able to focus on a badge.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Screen reader users`}
      </strong>
      {` should be able to have a screen reader describe the contents of and purpose of a badge when it pops up, but not focus on it otherwise.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`No props need to be added or modified for badge accessibility.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'ComponentsBadgeAccessibilityDocs';
Component.pageData = pageData;

export default Component;
