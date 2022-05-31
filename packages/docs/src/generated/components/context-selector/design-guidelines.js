import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport134 from '../../../content/design-guidelines/components/context-selector/./img/application-wide.png';
import srcImport135 from '../../../content/design-guidelines/components/context-selector/./img/navigation-level.png';
import srcImport136 from '../../../content/design-guidelines/components/context-selector/./img/tertiary-lower.png';
import srcImport137 from '../../../content/design-guidelines/components/context-selector/./img/search.png';
import srcImport138 from '../../../content/design-guidelines/components/context-selector/./img/actions.png';
const pageData = {
  "id": "Context selector",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/context-selector/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/context-selector/context-selector.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`context selector`}
      </strong>
      {` can be used in addition to global navigation when the data or resources you show in the interface need to change depending on the user’s context.`}
    </p>
    <AutoLinkHeader {...{"id":"usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Context selectors enable a user to switch between different application contexts. They can be placed at many levels of an application’s information architecture and may have different behavior expectations based on the level it is placed in. They can be placed in a page masthead, at the top of vertical navigations, or at the top of a page, depending on your website or product's navigation and preference.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Context selectors differ from filters in that a filter takes an overall set of content and reduces it to a subset of content.  In comparison, a context selector takes a set of content and changes it to a different set of content.`}
    </p>
    <AutoLinkHeader {...{"id":"application-wide-impact","size":"h2","className":"ws-title ws-h2"}}>
      {`Application-wide impact`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`When a context selector has an application-wide impact the user is expected to choose a context that will set the content of the entire application.  The list of choices inside the selector's menu can be dynamic and long, but the navigation for any of those choices should not change.`}
    </p>
    <AutoLinkHeader {...{"id":"use-cases","size":"h3","className":"ws-title ws-h3"}}>
      {`Use cases`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Some common use cases for using a context selector with an application-wide impact include:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Switching between applications or tools that are part of a product suite where the list of choices is known, and is not dynamic.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Setting the content scope of the entire application, and all navigation areas within the application now following the content scope.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"recommended-placement","size":"h3","className":"ws-title ws-h3"}}>
      {`Recommended placement`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`It is recommended that a context selector that has an application-wide impact be placed in the masthead, above the main navigation. This creates an effect that the entire application is changing, rather than just changing the views or navigation within an application.`}
    </p>
    <img src={srcImport134} height={srcImport134.height * 990 / srcImport134.width} {...{"alt":"Example of a context selector with application wide impact, placed in the masthead","width":"990","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"navigation-level-impact","size":"h2","className":"ws-title ws-h2"}}>
      {`Navigation-level impact`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`When a context selector has a navigation-level impact, the user is expected to use the main navigation to get to the area of the overall application that they expect to work with, and then choose a context for that working area. The list of choices can be dynamic and long, but the navigation affected for any of those choices should not change.`}
    </p>
    <AutoLinkHeader {...{"id":"use-cases-0","size":"h3","className":"ws-title ws-h3"}}>
      {`Use cases`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Some common use cases for using context selectors with a navigation-wide impact include:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`To change the set of navigation items seen by the user, based on the context selected (for example, switching between an administrator and user view).`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`To set the content scope of certain parts of the navigation.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`To set the context of the pages across all navigation items.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"recommended-placement-0","size":"h3","className":"ws-title ws-h3"}}>
      {`Recommended placement`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`It is recommended that a context selector with navigation-level impact, be placed at the top of navigation if it affects all navigation options so that it is tightly coupled with the navigation to show change/effect.`}
    </p>
    <img src={srcImport135} height={srcImport135.height * 990 / srcImport135.width} {...{"alt":"Example of a context selector with navigation level impact, placed at the top of the navigation","width":"990","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"page-level-impact","size":"h2","className":"ws-title ws-h2"}}>
      {`Page-level impact`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`In this case, the user is expected to choose a context that will set the content of the entire page.  The list of choices can be static or dynamic. If it is static and below about 8 options, tabs or another tertiary navigation pattern should be considered.`}
    </p>
    <AutoLinkHeader {...{"id":"use-cases-1","size":"h3","className":"ws-title ws-h3"}}>
      {`Use cases`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A common use case for using a page-level context selector is as a means for users to view the same information from different angles. For example, if you have a page of “Projects”, having a context selector would allow users to view different project types within the same page, without changing where they are in the main navigation.`}
    </p>
    <AutoLinkHeader {...{"id":"recommended-placement-1","size":"h3","className":"ws-title ws-h3"}}>
      {`Recommended placement`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`It is recommended that a page-level context selector be placed at the top of the page or page section that the context selector controls.`}
    </p>
    <img src={srcImport136} height={srcImport136.height * 990 / srcImport136.width} {...{"alt":"Example of a context selector with page impact, placed at the top of a page","width":"990","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"actions-in-a-context-selector","size":"h2","className":"ws-title ws-h2"}}>
      {`Actions in a context selector`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`If your context selector has a lot of options, you may opt to add a search bar at the top of the menu, divided by a separator.`}
    </p>
    <img src={srcImport137} height={srcImport137.height * 312 / srcImport137.width} {...{"alt":"Example of a context selector with a search bar at the top","width":"312","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"footer-in-context-selector","size":"h2","className":"ws-title ws-h2"}}>
      {`Footer in context selector`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`If you have more actions you would like to add to a context selector, you may add a footer with actions at the bottom of the menu. The menu list inside it will be scrollable, while the footer will remain fixed so that the action is always visible. For the actions inside the footer, you may use a secondary or link button.`}
    </p>
    <img src={srcImport138} height={srcImport138.height * 624 / srcImport138.width} {...{"alt":"Example of a context selector with an action footer at the bottom of the menu list","width":"624","className":"ws-img"}}>
    </img>
  </React.Fragment>
);
Component.displayName = 'ComponentsContextSelectorDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
