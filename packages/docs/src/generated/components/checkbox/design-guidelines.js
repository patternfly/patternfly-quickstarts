import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport107 from '../../../content/design-guidelines/components/checkbox/./img/checkbox-horizontal.png';
import srcImport108 from '../../../content/design-guidelines/components/checkbox/./img/one-checkbox.png';
import srcImport109 from '../../../content/design-guidelines/components/checkbox/./img/group-checkbox.png';
import srcImport110 from '../../../content/design-guidelines/components/checkbox/./img/nested-controls-checkbox.png';
import srcImport111 from '../../../content/design-guidelines/components/checkbox/./img/switch-check-1.png';
import srcImport112 from '../../../content/design-guidelines/components/checkbox/./img/switch-check-2.png';
import srcImport113 from '../../../content/design-guidelines/components/checkbox/./img/switch-check-3.png';
const pageData = {
  "id": "Checkbox",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/checkbox/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/checkbox/checkbox.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`checkbox`}
      </strong>
      {` is used to select a single item or multiple items, typically to choose elements to perform an action or to reflect a binary setting.`}
    </p>
    <AutoLinkHeader {...{"id":"usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Checkboxes allow users to choose `}
      <strong>
        {`1 or more items`}
      </strong>
      {` from a list of options.`}
    </p>
    <img src={srcImport107} height={srcImport107.height * 312 / srcImport107.width} {...{"alt":"Example of form question with checkboxes aligned horizontally","width":"312","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`You can also use a single checkbox to allow a user to enable or disable a feature or setting, along with a save button.`}
    </p>
    <img src={srcImport108} height={srcImport108.height * 173 / srcImport108.width} {...{"alt":"Example of single checkbox","width":"173","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"general-guidelines","size":"h4","className":"ws-title ws-h4"}}>
      {`General guidelines`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Use checkboxes if you’re presenting 5 or fewer options to the user. If you’re presenting more than 5 options, use a `}
        <PatternflyThemeLink {...{"to":"/components/select/design-guidelines"}}>
          {`select list`}
        </PatternflyThemeLink>
        {` instead.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Use checkboxes if the user can select multiple options. If the user can only select 1 option, then use radio buttons.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"labeling-and-alignment","size":"h3","className":"ws-title ws-h3"}}>
      {`Labeling and alignment`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Checkbox labels fall to the right of the checkbox control. If placed vertically, all checkbox controls should be aligned with the left edge of other controls or input fields, in the form or on the page.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`You can use headings to label a group of checkboxes. The placement of headings will depend on the layout of other content in the form or on the page you’re designing. For more information on how to arrange checkboxes, see our `}
      <PatternflyThemeLink {...{"to":"/components/form/design-guidelines"}}>
        {`forms documentation`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <img src={srcImport109} height={srcImport109.height * 443 / srcImport109.width} {...{"alt":"Example of a group of checkboxes","width":"443","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`You also have the option to use progressive disclosure by nesting other controls underneath a checkbox. The nested options would be enabled or disabled when the user selects or deselects a checkbox.`}
    </p>
    <img src={srcImport110} height={srcImport110.height * 459 / srcImport110.width} {...{"alt":"Example of nested control checkboxes","width":"459","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"when-to-use-switches-versus-checkboxes","size":"h3","className":"ws-title ws-h3"}}>
      {`When to use switches versus checkboxes`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The main difference between a switch and a checkbox is that a switch changes an option and saves it simultaneously, while checkboxes require a separate action such as pressing a “Submit” or “Save” button to save the selection.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Here are some guidelines for when to use a switch versus a checkbox:`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`Use checkboxes when the options do not save automatically and require the user to perform an additional action to save changes (in this case, pressing the “Save changes” button).`}
        </p>
        <img src={srcImport111} height={srcImport111.height * 661 / srcImport111.width} {...{"alt":"Example 1 of do and don'ts for checkbox vs switch usee ","width":"661","className":"ws-img"}}>
        </img>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`Use a switch for situations where you are turning a series of one or more independent options on or off.`}
        </p>
        <img src={srcImport112} height={srcImport112.height * 661 / srcImport112.width} {...{"alt":"Example 2 of do and don'ts for checkbox vs switch usee ","width":"661","className":"ws-img"}}>
        </img>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`Use checkboxes when you may have an intermediate state where you can select all, none, or some actions.`}
        </p>
        <img src={srcImport113} height={srcImport113.height * 661 / srcImport113.width} {...{"alt":"Example 3 of do and don'ts for checkbox vs switch usee ","width":"661","className":"ws-img"}}>
        </img>
      </li>
    </ul>
  </React.Fragment>
);
Component.displayName = 'ComponentsCheckboxDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
