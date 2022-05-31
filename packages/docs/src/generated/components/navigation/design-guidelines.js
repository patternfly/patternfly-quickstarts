import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport302 from '../../../content/design-guidelines/components/navigation/./img/nav-elements.png';
import srcImport303 from '../../../content/design-guidelines/components/navigation/./img/single-level.png';
import srcImport304 from '../../../content/design-guidelines/components/navigation/./img/single-level.png';
import srcImport305 from '../../../content/design-guidelines/components/navigation/./img/two-level.png';
import srcImport306 from '../../../content/design-guidelines/components/navigation/./img/expandable-nav.png';
import srcImport307 from '../../../content/design-guidelines/components/navigation/./img/expandable-nav-tertiary.png';
import srcImport308 from '../../../content/design-guidelines/components/navigation/./img/fly-out.png';
import srcImport309 from '../../../content/design-guidelines/components/navigation/./img/drill-down.png';
import srcImport310 from '../../../content/design-guidelines/components/navigation/./img/flyout-to-drill-down.png';
import srcImport311 from '../../../content/design-guidelines/components/navigation/./img/expansion-to-drill-down.png';
import srcImport312 from '../../../content/design-guidelines/components/navigation/./img/drill-down-to-expansion.png';
import srcImport313 from '../../../content/design-guidelines/components/navigation/./img/horizontal-nav.png';
import srcImport314 from '../../../content/design-guidelines/components/navigation/./img/secondary-horizontal-nav.png';
import srcImport315 from '../../../content/design-guidelines/components/navigation/./img/horizontal-primary.png';
import srcImport316 from '../../../content/design-guidelines/components/navigation/./img/sec-nav-mobile.png';
const pageData = {
  "id": "Navigation",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/navigation/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/navigation/navigation.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`navigation`}
      </strong>
      {` organizes an application’s structure and content, making it easy to find information and accomplish tasks. Navigation communicates relationships, context, and actions a user can take within an application.`}
    </p>
    <AutoLinkHeader {...{"id":"elements","size":"h2","className":"ws-title ws-h2"}}>
      {`Elements`}
    </AutoLinkHeader>
    <img src={srcImport302} height={srcImport302.height * 990 / srcImport302.width} {...{"alt":"Examples of different navigations offered by PatternFly","width":"990","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Masthead`}
        </strong>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"#horizontal-navigation"}}>
          <strong>
            {`Horizontal navigation`}
          </strong>
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Menu icon button:`}
        </strong>
        {` Provides a way for users to toggle vertical navigation`}
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"#vertical-navigation"}}>
          <strong>
            {`Vertical navigation`}
          </strong>
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"#secondary-horizontal-navigation"}}>
          <strong>
            {`Secondary horizontal navigation`}
          </strong>
        </PatternflyThemeLink>
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"vertical-navigation-usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Vertical navigation usage`}
    </AutoLinkHeader>
    <img src={srcImport303} height={srcImport303.height * 634 / srcImport303.width} {...{"alt":"Example of simple vertical navigation","width":"634","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Vertical navigation is hierarchical global navigation that displays navigation options from top to bottom on the left side of a screen. PatternFly vertical navigation can be collapsed to provide additional screen real estate by using a menu icon button at the top left.`}
    </p>
    <AutoLinkHeader {...{"id":"when-to-use","size":"h4","className":"ws-title ws-h4"}}>
      {`When to use`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`You have 5 or more primary navigation items`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`You have secondary navigation items (even if you have less than five primary navigation items)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`You expect your application to be used on mobile devices`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Patternfly vertical navigation system includes several variants as described below.`}
    </p>
    <AutoLinkHeader {...{"id":"simple-vertical-navigation","size":"h3","className":"ws-title ws-h3"}}>
      {`Simple vertical navigation`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`When you only have one level of navigation to display, use a simple, single-level vertical navigation.`}
    </p>
    <img src={srcImport304} height={srcImport304.height * 634 / srcImport304.width} {...{"alt":"Example of simple vertical navigation","width":"634","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"grouped-navigation","size":"h3","className":"ws-title ws-h3"}}>
      {`Grouped navigation`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`When you have a small amount of secondary navigation items, you can group your items and display them persistently beneath the primary navigation items.`}
    </p>
    <img src={srcImport305} height={srcImport305.height * 634 / srcImport305.width} {...{"alt":"Example of grouped vertical navigation","width":"634","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"expandable-two-level-navigation","size":"h3","className":"ws-title ws-h3"}}>
      {`Expandable two-level navigation`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`When you have a large number of secondary navigation items, you can use an expandable navigation to collapse and expand options as needed.`}
    </p>
    <img src={srcImport306} height={srcImport306.height * 634 / srcImport306.width} {...{"alt":"Example of expandable vertical navigation","width":"634","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"expandable-three-level-navigation","size":"h3","className":"ws-title ws-h3"}}>
      {`Expandable three-level navigation`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`When you have three levels of navigation items, you can use a three-level expandable navigation to expose tertiary navigation items. Expansion works well when there are small numbers of items at the current level and the entire page hierarchy can be visualized at the same time.`}
    </p>
    <img src={srcImport307} height={srcImport307.height * 634 / srcImport307.width} {...{"alt":"Example of expandable tertiary vertical navigation","width":"634","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"fly-out-navigation","size":"h3","className":"ws-title ws-h3"}}>
      {`Fly-out navigation`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Fly-out navigation exposes navigation items nested within a parent node in an overlay panel that appears to the right of the parent item on hover or click. Fly-out menus can be used to expose secondary or tertiary levels of navigation. While fly-out menus can be cascaded to display two or more levels of hierarchy below the parent page, this is not recommended as the mouse interaction required to navigate a multi-tiered flyout menu can be difficult for some users.`}
    </p>
    <img src={srcImport308} height={srcImport308.height * 917 / srcImport308.width} {...{"alt":"Example of fly-out navigation","width":"917","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`The advantage of fly-out menus is that they allow a user to easily scan through secondary menu items. When using fly-out menus, keep in mind that the page in view may not be exposed as a selected menu item at the top level. Therefore, when using fly-outs, we strongly recommend use of `}
      <PatternflyThemeLink {...{"to":"/components/breadcrumb"}}>
        {`breadcrumbs`}
      </PatternflyThemeLink>
      {` to help users understand where they are currently working within the site hierarchy.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Also, consider how likely it is that your application will be used on a mobile phone. Fly-outs are not mobile friendly and may require substitution a different menu pattern across platforms (mobile vs desktop).`}
    </p>
    <AutoLinkHeader {...{"id":"drill-down-navigation","size":"h3","className":"ws-title ws-h3"}}>
      {`Drill-down navigation`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Drill-down menus replace the current navigation menu with the next set of child items in the page hierarchy when the user clicks on a parent item to drill down. A back link is provided at the top of the menu to return to the parent level.`}
    </p>
    <img src={srcImport309} height={srcImport309.height * 916 / srcImport309.width} {...{"alt":"Example of drill-down navigation","width":"916","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Using drill-down navigation, only the navigation items for the current page and its siblings will be visible at any given time. This pattern is very mobile-friendly as it minimizes the need for scrolling to see the entire menu. However, it should be avoided if you expect users to frequently move between levels.`}
    </p>
    <AutoLinkHeader {...{"id":"combining-vertical-navigation-patterns","size":"h3","className":"ws-title ws-h3"}}>
      {`Combining vertical navigation patterns`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`PatternFly's vertical menus are designed to be composable. This means that you can combine different patterns within the same navigation system to address the needs of users working at different levels in the page hierarchy.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`When combining different types of menus:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`Use a consistent approach to represent items at the same level in the page hierarchy. For example, if drill-down is used from level 1 - 2, all items with children at that level should display the same behavior. Don’t mix fly-outs, drill-downs, and expansion at the same level.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`Consider how important or likely it is for users to move between levels and/or across to items at the same level but in different branches of the hierarchy. Drill-downs are most effective when users will spend most of their time moving between pages with the same parent node. Therefore, drilling into a lower level in the page hierarchy and then employing expansions or fly-outs to navigate between pages at that level can be an effective approach.`}
        </p>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Here are some examples of hybrid navigation patterns that you may find useful.`}
    </p>
    <AutoLinkHeader {...{"id":"fly-outs-with-tertiary-drill-down","size":"h4","className":"ws-title ws-h4"}}>
      {`Fly-outs with tertiary drill-down`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`By using fly-outs to expose secondary navigation items and then drilling into third level items, you can keep the current page and its siblings visible as the user works. This is a good pattern to use when you expect users to spend most of their time working within the same section of the application.`}
    </p>
    <img src={srcImport310} height={srcImport310.height * 1143 / srcImport310.width} {...{"alt":"Example of composable navigation with fly-out and drill-down menus","width":"1143","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"two-level-expansion-with-drill-downs","size":"h4","className":"ws-title ws-h4"}}>
      {`Two-level expansion with drill-downs`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`You can use expanded menus to expose the first two or three levels of page hierarchy and then drill-down to the lowest level. This pattern is preferred to using fly-outs with a drill-down when there are fewer secondary level items and/or you require a mobile friendly solution.`}
    </p>
    <img src={srcImport311} height={srcImport311.height * 928 / srcImport311.width} {...{"alt":"Example of composable navigation with expansion and drill-down menus","width":"928","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"drill-down-with-tertiary-expansion","size":"h4","className":"ws-title ws-h4"}}>
      {`Drill-down with tertiary expansion`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Consider using a drill-down menu at the primary level and expansion to expose levels two and three when you want to make it easy for users to move between items at levels two and three without the need to frequently move back to the primary level to explore other branches.`}
    </p>
    <img src={srcImport312} height={srcImport312.height * 916 / srcImport312.width} {...{"alt":"Example of composable navigation with drill-down and expansion menus","width":"916","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"horizontal-navigation-usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Horizontal navigation usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Horizontal navigation is global navigation that displays navigation items from left to right in the application's masthead.`}
    </p>
    <img src={srcImport313} height={srcImport313.height * 990 / srcImport313.width} {...{"alt":"Example of horizontal navigation","width":"990","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"when-to-use-0","size":"h4","className":"ws-title ws-h4"}}>
      {`When to use`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`You have less than 5 primary navigation items`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`You have only 1 level of navigation and no secondary navigation items`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"secondary-horizontal-navigation","size":"h3","className":"ws-title ws-h3"}}>
      {`Secondary horizontal navigation`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use secondary horizontal navigation when you want to provide more granular navigation specific to a particular page or window in your application. This differs from `}
      <PatternflyThemeLink {...{"to":"/components/tabs"}}>
        {`tabs`}
      </PatternflyThemeLink>
      {`, since tabs would allow you to switch perspective on the same page, while each secondary horizontal navigation item would be sending you to a distinct URL. For example, a user might use global navigation to get to a settings page, and then use local navigation to access privacy and general user settings.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Secondary horizontal navigation can be paired with vertical or horizontal navigation. It provides deeper nesting to the vertical navigation, which may help prevent the navigation from becoming too long.`}
    </p>
    <img src={srcImport314} height={srcImport314.height * 880 / srcImport314.width} {...{"alt":"Example of secondary horizontal navigation","width":"880","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Selected nav item:`}
      </strong>
      {` The title of the page should reflect the selected horizontal navigation item. You can provide further nested information by using tabs.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`We recommend either using horizontal navigation OR vertical navigation as your primary. The secondary horizontal navigation can be added to either and contains similar styling to the primary navigation either way.`}
    </p>
    <img src={srcImport315} height={srcImport315.height * 880 / srcImport315.width} {...{"alt":"Example of secondary horizontal navigation as primary navigation","width":"880","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Secondary horizontal navigation follows a similar responsive design as our other horizontal navigation types.
Overflow items can be navigated to by using horizontal scroll or the arrows.`}
    </p>
    <img src={srcImport316} height={srcImport316.height * 320 / srcImport316.width} {...{"alt":"Example of secondary navigation mobile responsiveness","width":"320","className":"ws-img"}}>
    </img>
  </React.Fragment>
);
Component.displayName = 'ComponentsNavigationDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
