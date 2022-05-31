import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport284 from '../../../content/design-guidelines/components/masthead/./img/masthead.png';
const pageData = {
  "id": "Masthead",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/masthead/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/masthead/masthead.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`masthead`}
      </strong>
      {` contains global properties such as logotype, navigation and settings in an organized fashion and it is accessible from all parts of the application. All pages should share a common masthead.`}
    </p>
    <img src={srcImport284} height={srcImport284.height * 832 / srcImport284.width} {...{"alt":"masthead","width":"832","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`1. Show/hide menu:`}
      </strong>
      {`  The `}
      <code {...{"className":"ws-code"}}>
        {`fa-bars`}
      </code>
      {` icon at the left of the masthead provides a way for users to show or hide the vertical navigation. It is not included when horizontal navigation is being used. At large viewport (desktop) sizes, navigation is shown, by default, and the user can click this icon to hide it and expand the content area. Once hidden, the user can click the icon again to reveal it. At small viewport (tablet and phone) sizes, the vertical navigation will be hidden by default and the user must use this control to open the menu.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`2. Logotype:`}
      </strong>
      {` The logotype area should clearly display the application name and the application logo if applicable. It is common to link the logotype to the application’s homepage. It is recommended to have the application name in .svg format for better performance.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`3. Utility items:`}
      </strong>
      {` Place any items in the utility area that you want to have accessible from all pages in the application. Utility items are right aligned and placed to the left of the user menu. The following are common items ordered from left to right. All items are optional depending on the needs of your application.`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Notification badge:`}
          </strong>
          {` Display a `}
          <PatternflyThemeLink {...{"to":"/components/notification-badge"}}>
            {`notification badge`}
          </PatternflyThemeLink>
          {` to alert the user to incoming notifications. Clicking on the badge should open a `}
          <PatternflyThemeLink {...{"to":"/components/notification-drawer"}}>
            {`notification drawer`}
          </PatternflyThemeLink>
          {`, if used, or take the user to another view where they can review recent notifications. If used, the notification badge should always be the leftmost item in the utility area.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Application specific item(s):`}
          </strong>
          {` Applications may include additional utility items in the masthead. These items should expose tasks or information that are meaningful to users at a global level.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Application launcher:`}
          </strong>
          {` When switching between applications is supported, an `}
          <PatternflyThemeLink {...{"to":"/components/application-launcher"}}>
            {`application launcher`}
          </PatternflyThemeLink>
          {` component can be inserted in the masthead to provide that capability.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Settings:`}
          </strong>
          {`  The settings menu contains ways to configure and customize an application. Interacting with settings either takes users to a settings area or reveals a dropdown menu with more options. The settings menu is represented by the `}
          <code {...{"className":"ws-code"}}>
            {`fa-cog`}
          </code>
          {` icon.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Help:`}
          </strong>
          {` The help item reveals a dropdown menu. The menu items may include documentation links available to users, links to customer support resources, and/or instructions on how to get support. If the application has an `}
          <PatternflyThemeLink {...{"to":"/components/about-modal"}}>
            {`about modal`}
          </PatternflyThemeLink>
          {`, it should also be accessed here. The help menu is represented by the `}
          <code {...{"className":"ws-code"}}>
            {`far fa-question-circle`}
          </code>
          {` icon.`}
        </p>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`4. User menu:`}
      </strong>
      {` The user menu is always the right-most item in the masthead. It includes an `}
      <PatternflyThemeLink {...{"to":"/components/avatar"}}>
        {`avatar`}
      </PatternflyThemeLink>
      {` and the username of the currently logged in user. The dropdown items may vary based on user settings and permissions available. Common items to include are: User name, Account ID or Account management. This section should always include a Log out option at the bottom of the dropdown list. If there is a need to allow users to change application display language, it should appear in this dropdown menu as well.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'ComponentsMastheadDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
