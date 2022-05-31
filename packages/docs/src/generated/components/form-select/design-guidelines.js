import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Form select",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/form-select/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/form-select/form-select.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`form select`}
      </strong>
      {` embeds browser native select lists into a form.`}
    </p>
    <AutoLinkHeader {...{"id":"usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`If your use case only calls for simple selects, you may opt to use a form select as an field inside a form. However, if your use case requires more customization and capability, use a PatternFly `}
      <PatternflyThemeLink {...{"to":"/components/select/react"}}>
        {`custom select list`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Note`}
      </strong>
      {`: Use only custom selects or only form selects in the same context. Mixing them together compromises visual consistency in your UI.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'ComponentsFormSelectDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
