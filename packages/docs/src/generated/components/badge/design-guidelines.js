import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Badge",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/badge/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/badge/badge.md"
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
      {` is used to annotate other information like a label or an object name.`}
    </p>
    <AutoLinkHeader {...{"id":"usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Badges are typically used to reflect counts like number of objects, number of events, or number of unread items. If you need a selectable annotation consider using a `}
      <PatternflyThemeLink {...{"to":"/components/label"}}>
        {`label`}
      </PatternflyThemeLink>
      {` instead.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`They are often found in filter toggles to indicate the number of selections that have been made in a toolbar filter or select list. Please refer to the
`}
      <PatternflyThemeLink {...{"to":"/components/select/design-guidelines#checkbox-select"}}>
        {`select list documentation`}
      </PatternflyThemeLink>
      {` for more examples.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'ComponentsBadgeDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
