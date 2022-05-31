import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport172 from '../../../content/design-guidelines/components/dropdown/./img/basic-dropdown.png';
import srcImport173 from '../../../content/design-guidelines/components/dropdown/./img/dropdown-variants.png';
import srcImport174 from '../../../content/design-guidelines/components/dropdown/./img/split-buttons.png';
const pageData = {
  "id": "Dropdown",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/dropdown/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/dropdown/dropdown.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`dropdown`}
      </strong>
      {` presents a menu of actions or links in a constrained space that will trigger a process or navigate to a new location. See `}
      <PatternflyThemeLink {...{"to":"/components/select/"}}>
        {`select component guidelines`}
      </PatternflyThemeLink>
      {` for more information about making one or more selections from a list of items in a value list.`}
    </p>
    <AutoLinkHeader {...{"id":"elements-and-variations","size":"h2","className":"ws-title ws-h2"}}>
      {`Elements and variations`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"basic-dropdown","size":"h3","className":"ws-title ws-h3"}}>
      {`Basic dropdown`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A basic dropdown consists of a toggle control to open and close a menu of actions or links.`}
    </p>
    <img src={srcImport172} height={srcImport172.height * 303 / srcImport172.width} {...{"alt":"basic dropdown","width":"303","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Toggle:`}
          </strong>
          {` The toggle is used to open and close the menu. It takes on all of the behaviors of a button. The toggle label is used to name the menu and should be descriptive of the actions that it contains. If no more descriptive name makes sense, use “Actions” as a default name.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Menu:`}
          </strong>
          {` The menu contains a list of actions or links. Menus should optimally contain seven (7) or less items for easy scanning by the user. For longer menus, items may be grouped. See the `}
          <PatternflyThemeLink {...{"to":"/components/menu/design-guidelines"}}>
            {`menu component guidelines`}
          </PatternflyThemeLink>
          {` for more information about supported options, including use of icons, grouping, and descriptions. The Dropdown component includes many common built-in menu variants. It’s also possible to attach a custom menu by using the `}
          <PatternflyThemeLink {...{"to":"/components/dropdown/react#basic-panel"}}>
            {`basic panel variant`}
          </PatternflyThemeLink>
          {`.`}
        </p>
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"dropdown-variations","size":"h3","className":"ws-title ws-h3"}}>
      {`Dropdown variations`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`In addition to the basic dropdown shown above, you may apply the following variants to the dropdown toggle element.`}
    </p>
    <img src={srcImport173} height={srcImport173.height * 772 / srcImport173.width} {...{"alt":"dropdown variantions","width":"772","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"primary-toggle","size":"h4","className":"ws-title ws-h4"}}>
      {`Primary toggle`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The primary toggle should be used in the same way as you would use a primary button. If you want to draw the user’s attention to a dropdown menu as the primary place to take action on a page, consider using a dropdown with primary styling.`}
    </p>
    <AutoLinkHeader {...{"id":"plain-toggle","size":"h4","className":"ws-title ws-h4"}}>
      {`Plain toggle`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Plain styling removes the border treatment from a dropdown toggle. This is useful in places where the default border treatment might make your layout feel visually cluttered or crowded.`}
    </p>
    <AutoLinkHeader {...{"id":"icon-toggle","size":"h4","className":"ws-title ws-h4"}}>
      {`Icon toggle`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`When there is not enough space for a labeled button, an icon can be used instead. Icon toggles are best used when you can use a common icon that has a well understood meaning or when you are working with limited space. A common default is to use the vertical ellipses (kebab) icon to generally indicate that it is connected with a menu as shown above.`}
    </p>
    <AutoLinkHeader {...{"id":"split-button","size":"h3","className":"ws-title ws-h3"}}>
      {`Split button`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A split button can be used when you want to combine an action button or other control with a dropdown menu. Here are some examples of split buttons.`}
    </p>
    <img src={srcImport174} height={srcImport174.height * 772 / srcImport174.width} {...{"alt":"split button","width":"772","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`A split button with a checkbox can be used in bulk selection use cases for a list, table, or card grid. Here, the checkbox provides immediate access to bulk selection, and the user can also open the dropdown menu to expose other actions. Text can also be added within the toggle to reflect current state.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`A split button with actions is useful when you want to expose a default action with a single click, but also allow access to other actions via the dropdown menu. This can be thought of as providing a shortcut to the most recent or frequently used item in the menu. A split button with actions can contain a labeled action as shown above or an icon in place of the label for use when there is limited space.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'ComponentsDropdownDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
