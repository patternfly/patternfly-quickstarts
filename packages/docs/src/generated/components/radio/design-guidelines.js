import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport349 from '../../../content/design-guidelines/components/radio/./img/radio.png';
import srcImport350 from '../../../content/design-guidelines/components/radio/./img/nested-controls-radio.png';
const pageData = {
  "id": "Radio",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/radio/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/radio/radio.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`radio button`}
      </strong>
      {` is used to present the user with mutually exclusive choices. Always present radio buttons in groups of 2 or more.`}
    </p>
    <AutoLinkHeader {...{"id":"usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Radio buttons allow users to select `}
      <strong>
        {`1 item`}
      </strong>
      {` from a list of options.`}
    </p>
    <img src={srcImport349} height={srcImport349.height * 187 / srcImport349.width} {...{"alt":"Example of radio button options","width":"187","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`General guidelines`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`Use radio buttons when a user needs to make 1 mutually exclusive choice, and only one option can be selected at a time.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`A default option should always be selected for the user. If the user selects a different option, the default option should be automatically deselected.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`To enable the user to select a null option, provide a radio button with the label “None.”`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`Use radio buttons if you’re presenting 5 or fewer options to the user. If you’re presenting more than 5 options, use a `}
          <PatternflyThemeLink {...{"to":"/components/select/design-guidelines#single-select"}}>
            {`single select list`}
          </PatternflyThemeLink>
          {`.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`If space is limited, you can also use progressive disclosure by nesting other controls underneath a radio button.`}
        </p>
        <img src={srcImport350} height={srcImport350.height * 465 / srcImport350.width} {...{"alt":"Example of nested control with radio buttons","width":"465","className":"ws-img"}}>
        </img>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"labeling-and-alignment","size":"h3","className":"ws-title ws-h3"}}>
      {`Labeling and alignment`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Radio button labels fall to the right of the radio button control. You can use headings to label a group of radio buttons. The placement of headings will depend on the layout of other content in the form or on the page you’re designing. For more information on how to arrange radio buttons, see the `}
      <PatternflyThemeLink {...{"to":"/components/form/design-guidelines#data-input-arrangement"}}>
        {`forms design guidelines`}
      </PatternflyThemeLink>
      {`.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'ComponentsRadioDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
