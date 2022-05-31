import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Avatar",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/avatar/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/avatar/avatar.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`An `}
      <strong>
        {`avatar`}
      </strong>
      {` is a visual used to represent a user. It may contain an image or a placeholder graphic. Typical usage is to represent the current user in the masthead.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'ComponentsAvatarDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
