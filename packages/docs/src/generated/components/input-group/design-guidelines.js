import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport248 from '../../../content/design-guidelines/components/input-group/./img/input-group.png';
const pageData = {
  "id": "Input group",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/input-group/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/input-group/input-group.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`An `}
      <strong>
        {`input group`}
      </strong>
      {` includes multiple input types, like a text input and a button, in one control.`}
    </p>
    <AutoLinkHeader {...{"id":"usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Input groups can combine multiple elements. For example you could add buttons to 1 or both sides of a text input, like in a search field or an email input field.`}
    </p>
    <img src={srcImport248} height={srcImport248.height * 496 / srcImport248.width} {...{"alt":"Example of input groups","width":"496","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`View more examples in the input group react tab.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'ComponentsInputGroupDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
