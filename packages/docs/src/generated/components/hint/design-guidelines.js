import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport241 from '../../../content/design-guidelines/components/hint/./img/hint-layout.png';
const pageData = {
  "id": "Hint",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/hint/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/hint/hint.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`hint`}
      </strong>
      {` is in-app messaging that provides a one-step reminder, explanation, or call to action for a page or modal.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`For information on other forms of on-screen help, see `}
      <PatternflyThemeLink {...{"to":"/components/tooltip/design-guidelines"}}>
        {`Tooltip`}
      </PatternflyThemeLink>
      {` and `}
      <PatternflyThemeLink {...{"to":"/components/popover/design-guidelines"}}>
        {`Popover`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <AutoLinkHeader {...{"id":"usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use hints to share information about an interaction or prerequisite step that might not be immediately obvious to the user.`}
    </p>
    <img src={srcImport241} height={srcImport241.height * 750 / srcImport241.width} {...{"alt":"blue hint at the top of an application page","width":"750","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"content","size":"h2","className":"ws-title ws-h2"}}>
      {`Content`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use full sentences with punctuation.
Include relevant links to documentation when necessary.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'ComponentsHintDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
