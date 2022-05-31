import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Overflow menu",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/overflow-menu/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/overflow-menu/overflow-menu.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`An `}
      <strong>
        {`overflow menu`}
      </strong>
      {` groups a set of actions in a responsive horizontal list. Actions can be set to persist or collapse into a kebab as the viewport shrinks. Overflow menus are useful in toolbars or other places where a group of actions are required.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'ComponentsOverflowMenuDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
