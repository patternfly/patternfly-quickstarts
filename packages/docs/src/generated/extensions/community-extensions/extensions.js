import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import {ExtensionsDataList} from '../../../content/extensions/./extensions-data-list';
import {communityExtensions} from '../../../content/extensions/./extensions-data';
import '../../../content/extensions/./extensions.css';
const pageData = {
  "id": "Community extensions",
  "section": "extensions",
  "source": "extensions",
  "slug": "/extensions/community-extensions/extensions",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/extensions/community-extensions.md"
};
pageData.liveContext = {
  ExtensionsDataList,
  communityExtensions
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`Community extensions are developed and maintained by members of the PatternFly community. They are often more
solution-based than core PatternFly components, may be subject to change, or be experimental in nature. Anything
worthy of being shared across projects may be contributed as a community extension. Occasionally a community
extension may be promoted as an officially supported extension if and when usage is proven across multiple
projects and it can be abstracted from any project-specific use cases.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Community extension components do not undergo the same rigorous design or coding review process as core PatternFly components
and are not supported directly by the PatternFly team. The community extensions are also not audited for accessibility compliance
by the PatternFly team. For support, open issues in the project Github repositories
and join the PatternFly `}
            <a href="//slack.patternfly.org/" target="_blank" rel="noopener noreferrer">{`Slack`}</a>
      {` workspace.`}
    </p>
    <AutoLinkHeader {...{"id":"contributing-extensions","size":"h2","className":"ws-title ws-h2"}}>
      {`Contributing extensions`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Anyone can add assets to the community component index. To request a new community extension, submit  a pull
request against the patternfly-org repo and add your component to `}
      <code {...{"className":"ws-code"}}>
        {`extensions-data.js`}
      </code>
      {`. Requests will be reviewed and
approved by the PatternFly team.`}
    </p>
    <AutoLinkHeader {...{"id":"available-components","size":"h2","className":"ws-title ws-h2"}}>
      {`Available components`}
    </AutoLinkHeader>
    <ExtensionsDataList data={communityExtensions}/>
  </React.Fragment>
);
Component.displayName = 'ExtensionsCommunityExtensionsExtensionsDocs';
Component.pageData = pageData;

export default Component;
