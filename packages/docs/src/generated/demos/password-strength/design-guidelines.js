import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport498 from '../../../content/design-guidelines/demos/password-strength/./img/password strength indicator weak.png';
import srcImport499 from '../../../content/design-guidelines/demos/password-strength/./img/password strength indicator medium.png';
import srcImport500 from '../../../content/design-guidelines/demos/password-strength/./img/password strength indicator strong.png';
const pageData = {
  "id": "Password strength",
  "section": "demos",
  "source": "design-guidelines",
  "slug": "/demos/password-strength/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/demos/password-strength/password-strength.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`password strength indicator`}
      </strong>
      {` is displayed to a user after they have entered a password in a field. It allows the user to understand the strength of a password after it has met the password requirements. The strength of the password is determined by a validation algorithm after the specific rules are met.  Using a password strength indicator allows users to create stronger passwords, offering better protection from breaches.`}
    </p>
    <AutoLinkHeader {...{"id":"elements","size":"h2","className":"ws-title ws-h2"}}>
      {`Elements`}
    </AutoLinkHeader>
    <img src={srcImport498} height={srcImport498.height * 780 / srcImport498.width} {...{"alt":"password strength indicator weak","width":"780","className":"ws-img"}}>
    </img>
    <br/>
    <img src={srcImport499} height={srcImport499.height * 780 / srcImport499.width} {...{"alt":"password strength indicator medium","width":"780","className":"ws-img"}}>
    </img>
    <br/>
    <img src={srcImport500} height={srcImport500.height * 780 / srcImport500.width} {...{"alt":"password strength indicator strong","width":"780","className":"ws-img"}}>
    </img>
    <br/>
    <p {...{"className":"ws-p"}}>
      {`The password strength indicator is located on the top right corner of the input field. It displays the following strength types:`}
    </p>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        {`Weak`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Medium`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Strong`}
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"behavior","size":"h2","className":"ws-title ws-h2"}}>
      {`Behavior`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The password strength indicator:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`is displayed after the password has met all password requirements.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`icons and words are not editable after it is dispalyed.`}
      </li>
    </ul>
  </React.Fragment>
);
Component.displayName = 'DemosPasswordStrengthDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
