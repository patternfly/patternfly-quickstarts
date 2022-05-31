import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport378 from '../../../content/design-guidelines/components/switch/./img/switch.png';
import srcImport379 from '../../../content/design-guidelines/components/switch/./img/switch-check-1.png';
import srcImport380 from '../../../content/design-guidelines/components/switch/./img/switch-check-2.png';
import srcImport381 from '../../../content/design-guidelines/components/switch/./img/switch-check-3.png';
const pageData = {
  "id": "Switch",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/switch/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/switch/switch.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`switch`}
      </strong>
      {` toggles the state of a setting (between on and off). Switches and `}
      <PatternflyThemeLink {...{"to":"/components/checkbox"}}>
        {`checkboxes`}
      </PatternflyThemeLink>
      {` can often be used interchangeably, but the switch provides a more explicit, visible representation on a setting.`}
    </p>
    <AutoLinkHeader {...{"id":"usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`It is assumed that when a user toggles a switch, the change will save automatically without the need for additional action (like clicking a "Save" button).`}
    </p>
    <img src={srcImport378} height={srcImport378.height * 792 / srcImport378.width} {...{"alt":"A side-by-side comparison of a basic switch and a switch without a label. The basic switch uses both a form label and a switch label, while the switch without a label uses a form label and replaces the switch label with a checkmark inside the switch itself","width":"792","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Form label:`}
        </strong>
        {` Indicates what the switch turns on or off`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Switch label:`}
        </strong>
        {` Indicates whether the switch itself is turned on or off`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Switch without label:`}
        </strong>
        {` Indicates the state of a switch with a checkmark inside the switch itself, used in place of a switch label`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Switch with label and checkmark:`}
        </strong>
        {` Indicates the state of a switch with a checkmark inside the switch itself and label with additional message`}
      </li>
    </ol>
    <p {...{"className":"ws-p"}}>
      {`All switch types display their state (on or off) through different methods and locations. A basic switch communicates its state with an exterior switch label added to its right, while a switch without a label uses a checkmark to communicate its state from inside the switch itself.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`General guidelines`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Use a basic switch by default unless space is limited, then use a `}
        <PatternflyThemeLink {...{"to":"/components/switch/react#without-label"}}>
          {`switch without a label`}
        </PatternflyThemeLink>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Add a form label in front of your switch to specify what setting a switch turns on or off, such as `}
        <em>
          {`Wi-fi`}
        </em>
        {` or `}
        <em>
          {`Bluetooth`}
        </em>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`If you're using a basic switch, add switch labels to clarify between toggled settings, such as `}
        <em>
          {`On`}
        </em>
        {` and `}
        <em>
          {`Off`}
        </em>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Don't include the state of a switch in a label if you're using a switch with a label and a checkmark.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Don’t use a switch if the options you’re presenting to the user are anything other than “on” or “off.” Instead, use `}
        <PatternflyThemeLink {...{"to":"/components/radio/design-guidelines"}}>
          {`radio buttons`}
        </PatternflyThemeLink>
        {`.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"when-to-use-switches-versus-checkboxes","size":"h3","className":"ws-title ws-h3"}}>
      {`When to use switches versus checkboxes`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A switch changes an option and saves it simultaneously, while checkboxes require a separate action to save the selection, such as pressing a “Submit” or “Save” button.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Follow these guidelines for when to use a switch versus a checkbox:`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`Use checkboxes when options do not save automatically and require the user to perform an additional action to save changes (in this case, pressing the “Save changes” button).`}
        </p>
        <img src={srcImport379} height={srcImport379.height * 661 / srcImport379.width} {...{"alt":"Example 1 of do's and don'ts for using a checkbox vs. a switch","width":"661","className":"ws-img"}}>
        </img>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`Use a switch for situations where you are turning a series of one or more independent options on or off.`}
        </p>
        <img src={srcImport380} height={srcImport380.height * 661 / srcImport380.width} {...{"alt":"Example 2 of do's and don'ts for using a checkbox vs. a switch","width":"661","className":"ws-img"}}>
        </img>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`Use checkboxes when you may have an intermediate state where you can select all, none, or some actions.`}
        </p>
        <img src={srcImport381} height={srcImport381.height * 661 / srcImport381.width} {...{"alt":"Example 3 of do's and don'ts for using a checkbox vs. a switch","width":"661","className":"ws-img"}}>
        </img>
      </li>
    </ul>
  </React.Fragment>
);
Component.displayName = 'ComponentsSwitchDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
