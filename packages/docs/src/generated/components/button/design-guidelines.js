import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport69 from '../../../content/design-guidelines/components/button/./img/buttons.png';
import srcImport70 from '../../../content/design-guidelines/components/button/./img/danger.png';
import srcImport71 from '../../../content/design-guidelines/components/button/./img/prim_ex_1.png';
import srcImport72 from '../../../content/design-guidelines/components/button/./img/prim_ex_2.png';
import srcImport73 from '../../../content/design-guidelines/components/button/./img/sec_ex.png';
import srcImport74 from '../../../content/design-guidelines/components/button/./img/tert_edit.png';
import srcImport75 from '../../../content/design-guidelines/components/button/./img/link-left.png';
import srcImport76 from '../../../content/design-guidelines/components/button/./img/link-right.png';
import srcImport77 from '../../../content/design-guidelines/components/button/./img/link_modal.png';
import srcImport78 from '../../../content/design-guidelines/components/button/./img/empty_state_links.png';
import srcImport79 from '../../../content/design-guidelines/components/button/./img/icon_button.png';
import srcImport80 from '../../../content/design-guidelines/components/button/./img/CTAs.png';
import srcImport81 from '../../../content/design-guidelines/components/button/./img/progress-button.png';
import srcImport82 from '../../../content/design-guidelines/components/button/./img/wizard.png';
import srcImport83 from '../../../content/design-guidelines/components/button/./img/link_modal.png';
import srcImport84 from '../../../content/design-guidelines/components/button/./img/link_empty.png';
import srcImport85 from '../../../content/design-guidelines/components/button/./img/link_table.png';
import srcImport86 from '../../../content/design-guidelines/components/button/./img/link_alert.png';
import srcImport87 from '../../../content/design-guidelines/components/button/./img/button_16px.png';
import srcImport88 from '../../../content/design-guidelines/components/button/./img/button_stacked.png';
import srcImport89 from '../../../content/design-guidelines/components/button/./img/button_wizard.png';
import srcImport90 from '../../../content/design-guidelines/components/button/./img/button_wizard_stacked.png';
import srcImport91 from '../../../content/design-guidelines/components/button/./img/modal_exception.png';
import srcImport92 from '../../../content/design-guidelines/components/button/./img/toolbar_exception.png';
import srcImport93 from '../../../content/design-guidelines/components/button/./img/button_action_group.png';
import srcImport94 from '../../../content/design-guidelines/components/button/./img/overflow_1.png';
import srcImport95 from '../../../content/design-guidelines/components/button/./img/overflow_2.png';
const pageData = {
  "id": "Button",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/button/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/button/button.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`button`}
      </strong>
      {` is a box area or text that communicates and triggers user actions when clicked or selected. Buttons can be used to communicate and immediately trigger actions a user can take in an application, like submitting a form, canceling a process, or creating a new object. Buttons can also be used to take a user to a new location, like another page inside of a web application, or an external site such as help or documentation.`}
    </p>
    <AutoLinkHeader {...{"id":"button-types","size":"h2","className":"ws-title ws-h2"}}>
      {`Button types`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The following button styles, shown in order of visual hierarchy, can be used in your designs according to your needs.`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"#danger-button"}}>
          {`Danger button`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"#primary-button"}}>
          {`Primary button`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"#secondary-button"}}>
          {`Secondary button`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"#tertiary-button"}}>
          {`Tertiary button`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"#link-button"}}>
          {`Link button`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"#icon-button"}}>
          {`Icon button`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"#call-to-action-button"}}>
          {`Call To Action button`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"#progress-button"}}>
          {`Progress button`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <img src={srcImport69} height={srcImport69.height * 607 / srcImport69.width} {...{"alt":"Images of all button types","width":"607","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`You don't need to use these buttons in the order that their labels imply. For example, you don't always need to use the secondary button as the second button in your designs. The most important thing is to establish a visual hierarchy between any buttons in your designs. There are, however, some best practices to keep in mind.`}
    </p>
    <AutoLinkHeader {...{"id":"danger-button","size":"h3","className":"ws-title ws-h3"}}>
      {`Danger button`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Danger buttons are the most prominent of all the button options. Use danger buttons for actions a user can take that are potentially destructive or difficult/impossible to undo, like deleting or removing user data. These are mostly found in modals to emphasize a destructive action the user is about to take.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <em>
        {`Example of a danger button in a modal`}
      </em>
    </p>
    <img src={srcImport70} height={srcImport70.height * 521 / srcImport70.width} {...{"alt":"Example of danger button used in a modal","width":"521","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"primary-button","size":"h3","className":"ws-title ws-h3"}}>
      {`Primary button`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A primary button is the most prominent button on a page, used for the most important call to action on a page. Try to limit primary buttons to one per page.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <em>
        {`Example of a primary button inside a toolbar`}
      </em>
    </p>
    <img src={srcImport71} width={srcImport71.width} height={srcImport71.height} {...{"alt":"Example of a primary button inside a toolbar","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      <em>
        {`Example of a primary button inside an empty state`}
      </em>
    </p>
    <img src={srcImport72} height={srcImport72.height * 656 / srcImport72.width} {...{"alt":"Example of a primary button inside an empty state","width":"656","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"secondary-button","size":"h3","className":"ws-title ws-h3"}}>
      {`Secondary button`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Secondary buttons are buttons with less visual prominence than primary buttons. Use secondary buttons for general actions on a page, that don’t require as much emphasis as primary button actions. For example, you can use secondary buttons where there are multiple actions, like in toolbars or data lists.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <em>
        {`Example of secondary buttons in data lists`}
      </em>
    </p>
    <img src={srcImport73} width={srcImport73.width} height={srcImport73.height} {...{"alt":"Example of secondary buttons in data lists","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"tertiary-button","size":"h3","className":"ws-title ws-h3"}}>
      {`Tertiary button`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Tertiary buttons are one the least visually prominent buttons and are designed to be less striking than a primary or secondary button, while still retaining a classic button format. Tertiary buttons are flexible and can be used as needed.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`In this example, you can see a tertiary button used to show a possible “Edit” action. This button format highlights the action, while making it clear that it is not the main call to action on the page.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <em>
        {`Example of tertiary button on a page`}
      </em>
    </p>
    <img src={srcImport74} width={srcImport74.width} height={srcImport74.height} {...{"alt":"Example of tertiary button on a page","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"link-button","size":"h3","className":"ws-title ws-h3"}}>
      {`Link button`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Links buttons are labeled buttons with no background or border. Link buttons can be used for actions that:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`May not need as much emphasis.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Navigate users to another page within the same window.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Navigate users to an external page.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`While all link buttons lack borders, they can still vary in appearance. Link buttons that navigate users to another page within the same window should be presented as stand-alone text. Link buttons that navigate users to an external page may include an icon on the left or right of the text to further emphasize the action. For example, you could add an external link icon to show that clicking on it will navigate users externally to another website or application.`}
    </p>
    <img src={srcImport75} height={srcImport75.height * 143 / srcImport75.width} {...{"alt":"Example of link button with icon on the left","width":"143","className":"ws-img"}}>
    </img>
    <img src={srcImport76} height={srcImport76.height * 143 / srcImport76.width} {...{"alt":"Example of link button with icon on the right","width":"143","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`You might use a link button instead of a secondary button format to create greater visual hierarchy between two buttons. Examples include using text buttons as cancel buttons in modals or wizards, as well as for secondary actions in empty states.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <em>
        {`Example of a link button in a modal`}
      </em>
    </p>
    <img src={srcImport77} height={srcImport77.height * 446 / srcImport77.width} {...{"alt":"Example of a link button in a modal","width":"446","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      <em>
        {`Example of link buttons in an empty state`}
      </em>
    </p>
    <img src={srcImport78} height={srcImport78.height * 640 / srcImport78.width} {...{"alt":"Example of link buttons in an empty state","width":"640","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"icon-button","size":"h3","className":"ws-title ws-h3"}}>
      {`Icon button`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Icon buttons are useful in places where space is limited. For example, if you have too many actions within a menu, you could use a kebab icon to indicate more actions, or an export icon for exporting data. You can also use this button type for actions that are commonly associated with icons, like an exit icon to close a window or a hamburger icon to open a menu.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`For example, this toolbar uses an export icon as an action button due to limited space.`}
    </p>
    <img src={srcImport79} width={srcImport79.width} height={srcImport79.height} {...{"alt":"Example of kebab used as an icon button inside a toolbar","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"call-to-action-button","size":"h3","className":"ws-title ws-h3"}}>
      {`Call To Action button`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Call To Action (CTA) buttons and links are used on websites to direct users to complete an action. For example, a product detail page could include a CTA button labeled 'Try it now,' which would guide users to a purchase page.`}
    </p>
    <img src={srcImport80} height={srcImport80.height * 708 / srcImport80.width} {...{"alt":"Images of all CTA types","width":"708","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Call To Actions have similar variants to regular buttons (although they have a larger padding), and follow the same visual hierarchy. However, CTA buttons are used only to indicate a desired next step, whereas other button types may also be used to link to additional information or actions. Call To Actions should be used sparingly (ideally one per page, or a primary and secondary CTA).`}
    </p>
    <AutoLinkHeader {...{"id":"progress-button","size":"h3","className":"ws-title ws-h3"}}>
      {`Progress button`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A progress button can be used to provide the user with feedback that an action is in progress after the button is clicked. To indicate that an action is taking place, a spinner is inserted in front of the button label. You can optionally replace the spinner with a completion icon when the action completes.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Use a progress button when clicking a submit button will not navigate the user to a new page or open a modal. For operations that will take more than a few seconds, use of a modal with a progress bar is recommended to reflect status and indicate time to completion.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <em>
        {`Example of using a progress button`}
      </em>
    </p>
    <img src={srcImport81} height={srcImport81.height * 1435 / srcImport81.width} {...{"alt":"Example of progress button usage","width":"1435","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`The user clicks the submit button.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`A spinner indicates that the operation is in progress.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`When complete, use a success icon (fa-check-circle) and a change in the label text to indicate that the operation was successfully completed.`}
        </p>
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`There are certain cases where specific buttons must be used within your UI.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Follow these guidelines for buttons in wizards:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`The `}
        <strong>
          {`Next`}
        </strong>
        {` button should always be a primary button.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`The `}
        <strong>
          {`Back`}
        </strong>
        {` button should always be a secondary button.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`The `}
        <strong>
          {`Cancel`}
        </strong>
        {` button should always be a text button.`}
      </li>
    </ul>
    <img src={srcImport82} width={srcImport82.width} height={srcImport82.height} {...{"alt":"Example of buttons in a wizard","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Always use link buttons in the following cases:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`For cancel buttons in wizards or modals`}
        </p>
        <img src={srcImport83} height={srcImport83.height * 446 / srcImport83.width} {...{"alt":"Example of link button used in modal","width":"446","className":"ws-img"}}>
        </img>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`For more actions in empty states`}
        </p>
        <img src={srcImport84} height={srcImport84.height * 600 / srcImport84.width} {...{"alt":"Example of a link button in an empty state","width":"600","className":"ws-img"}}>
        </img>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`For action buttons in tables`}
        </p>
        <img src={srcImport85} width={srcImport85.width} height={srcImport85.height} {...{"alt":"Example of link buttons in a table","className":"ws-img"}}>
        </img>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`For action buttons in alerts`}
        </p>
        <img src={srcImport86} height={srcImport86.height * 309 / srcImport86.width} {...{"alt":"Example of link button in an alert","width":"309","className":"ws-img"}}>
        </img>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"button-placement","size":"h2","className":"ws-title ws-h2"}}>
      {`Button placement`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Buttons in forms, modals, or wizards should always be left aligned in the box. This solves for:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Modularity and flexibility:`}
        </strong>
        {` A standard alignment creates consistency in how objects appear across all areas of an app.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Accessibility:`}
        </strong>
        {` The form submit buttons are on the same scan line as the form fields, which benefits users who are sight-limited. Also, users who are blind can more easily navigate left-aligned form submit buttons because the button order is consistent across all contexts.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Responsiveness:`}
        </strong>
        {` The most important actions (i.e., primary buttons) are encountered first when elements are stacked vertically.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"button-spacing-and-action-lists","size":"h2","className":"ws-title ws-h2"}}>
      {`Button spacing and action lists`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The standard spacing between each button is 16px, even for danger buttons. If buttons are stacked vertically, the spacing between each button should be 8px.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <em>
        {`Standard spacing`}
      </em>
    </p>
    <img src={srcImport87} height={srcImport87.height * 214 / srcImport87.width} {...{"alt":"Standard button spacing with spacers","width":"214","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      <em>
        {`Stacked spacing`}
      </em>
    </p>
    <img src={srcImport88} height={srcImport88.height * 222 / srcImport88.width} {...{"alt":"Stacked button spacing with spacers","width":"222","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"exceptions","size":"h3","className":"ws-title ws-h3"}}>
      {`Exceptions`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Exceptions to the standard spacing guidelines are as follows:`}
    </p>
    <AutoLinkHeader {...{"id":"wizards","size":"h4","className":"ws-title ws-h4"}}>
      {`Wizards`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`In wizards, the `}
      <strong>
        {`Cancel`}
      </strong>
      {` button is spaced 48px away from the primary and secondary `}
      <strong>
        {`Next`}
      </strong>
      {` and `}
      <strong>
        {`Back`}
      </strong>
      {` buttons, and 24px away if stacked.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <em>
        {`Wizard spacing`}
      </em>
    </p>
    <img src={srcImport89} height={srcImport89.height * 304 / srcImport89.width} {...{"alt":"Wizard button spacing with spacers","width":"304","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      <em>
        {`Wizard stacked spacing`}
      </em>
    </p>
    <img src={srcImport90} height={srcImport90.height * 121 / srcImport90.width} {...{"alt":"Stacked wizard button spacing with spacers","width":"121","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"modals","size":"h4","className":"ws-title ws-h4"}}>
      {`Modals`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`In modals, the primary button is spaced only 8px away from the secondary button, rather than the standard 16px.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <em>
        {`Modal spacing`}
      </em>
    </p>
    <img src={srcImport91} height={srcImport91.height * 446 / srcImport91.width} {...{"alt":"Modal button spacing with spacers","width":"446","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"toolbars","size":"h4","className":"ws-title ws-h4"}}>
      {`Toolbars`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Button spacing in toolbars depends on the button type. Normal 16px spacing applies between primary and secondary buttons. However, there should only be 8px between icon buttons.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <em>
        {`Toolbar spacing`}
      </em>
    </p>
    <img src={srcImport92} height={srcImport92.height * 312 / srcImport92.width} {...{"alt":"Toolbar button spacing with spacers","width":"312","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`If you have a specific use case where buttons need to be spaced further away from the rest, the button groups action list allows for customization as needed.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <em>
        {`Action group spacing`}
      </em>
    </p>
    <img src={srcImport93} height={srcImport93.height * 416 / srcImport93.width} {...{"alt":"Action group spacing with spacers","width":"416","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"buttons-and-overflow-menus","size":"h2","className":"ws-title ws-h2"}}>
      {`Buttons and overflow menus`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`There are cases where you will have multiple buttons next to each other, like in a toolbar. When the space shrinks (e.g., switching from desktop to mobile view), you can have the buttons collapse into a kebab overflow menu. Additionally, you can choose to make the primary action persist or have all options collapse into the kebab.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <em>
        {`Buttons appear in the toolbar`}
      </em>
    </p>
    <img src={srcImport94} width={srcImport94.width} height={srcImport94.height} {...{"alt":"Pre-over flow menu in toolbar, where all actions appear in the toolbar itself","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      <em>
        {`Buttons placed in overflow menu due to limited space, with primary button persisting`}
      </em>
    </p>
    <img src={srcImport95} width={srcImport95.width} height={srcImport95.height} {...{"alt":"Post-overflow menu in toolbar, where toolbar has become smaller in width, prompting an overflow menu for secondary actions, while primary button persists in the toolbar itself","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"content","size":"h2","className":"ws-title ws-h2"}}>
      {`Content`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Writing button labels`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Be specific and clearly communicate the button's action.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Screen readers may read buttons to users out of context, so button text should be unique and easily understood on its own. Refer to `}
        <PatternflyThemeLink {...{"to":"/developer-resources/accessibility-guide"}}>
          {`PatternFly's accessibility guide`}
        </PatternflyThemeLink>
        {` for more information.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Use simple verbs or verb phrases.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`To avoid wrapping, aim for short labels when possible (1–3 words).`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Avoid using articles (for example, write “Add source” instead of “Add a source”).`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Avoid punctuation on buttons.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`To call a user's attention to a button or to clarify the button's action, you can add an icon to the button.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Do not create icons on buttons using punctuation (for example, "+"). Instead, refer to `}
        <PatternflyThemeLink {...{"to":"/guidelines/icons"}}>
          {`PatternFly's icons page`}
        </PatternflyThemeLink>
        {` for any icons you place on buttons.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Writing link labels`}
      </strong>
    </p>
    <p {...{"className":"ws-p"}}>
      {`Use specific, action-focused labels that match what the user will see when they arrive at their location. For example, if you are sending a user to a dashboard, your link label might read `}
      <em>
        {`View dashboard`}
      </em>
      {`. For a link directing a user to a support forum, the label might read `}
      <em>
        {`Get help in the support forum`}
      </em>
      {`. See `}
      <PatternflyThemeLink {...{"to":"/ux-writing/about"}}>
        {`PatternFly's content guidelines`}
      </PatternflyThemeLink>
      {` for additional guidance.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'ComponentsButtonDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
