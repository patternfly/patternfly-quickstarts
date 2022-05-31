import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Quick starts",
  "section": "extensions",
  "source": "extensions",
  "slug": "/extensions/quick-starts/extensions",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/extensions/quickstarts.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"coming-soon","size":"h2","className":"ws-title ws-h2"}}>
      {`Coming soon`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Quick starts is a project sponsored by UXD. The PatternFly team is currently working on incorporating
documentation for quick starts on the PatternFly website.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Currently, the code is located at
`}
            <a href="https://github.com/patternfly/patternfly-quickstarts" target="_blank" rel="noopener noreferrer">{`github.com/patternfly/patternfly-quickstarts`}</a>
      {`,
in the PatternFly organization on Github. To interact with an existing quick start, view our running
`}
            <a href="https://quickstarts.netlify.app/" target="_blank" rel="noopener noreferrer">{`quick starts demo`}</a>
      {`.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'ExtensionsQuickStartsExtensionsDocs';
Component.pageData = pageData;

export default Component;
