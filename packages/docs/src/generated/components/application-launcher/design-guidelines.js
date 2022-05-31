import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport56 from '../../../content/design-guidelines/components/application-launcher/./img/elements.png';
import srcImport57 from '../../../content/design-guidelines/components/application-launcher/./img/example1.png';
import srcImport58 from '../../../content/design-guidelines/components/application-launcher/./img/example2.png';
const pageData = {
  "id": "Application launcher",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/application-launcher/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/application-launcher/application-launcher.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`An `}
      <strong>
        {`application launcher`}
      </strong>
      {` is an optional utility menu item that allows a user to launch a separate web application in a new browser window.`}
    </p>
    <AutoLinkHeader {...{"id":"elements","size":"h2","className":"ws-title ws-h2"}}>
      {`Elements`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`An application launcher has two main elements.`}
    </p>
    <img src={srcImport56} height={srcImport56.height * 692 / srcImport56.width} {...{"alt":"Elements of the application launcher component","width":"692","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Icon:`}
        </strong>
        {` used to open and close the menu.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Menu:`}
        </strong>
        {` contains a list of links.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Favorites (optional):`}
        </strong>
        {` allows users to pin items to the top of the list.`}
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Application launchers are usually found within the masthead of a UI. They are commonly used when you want to allow users to launch multiple applications from a common location. Use the external link icon to indicate when a link opens a new window. You can also use icons in the list.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`For longer lists, you can optionally add the ability to search the list and favorite items. Favoriting an item using the star icon allows users to pin items to the top of the menu in a separate Favorites section. The item will appear in the list twice: once in the Favorites section and once in its original location.`}
    </p>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Application launcher with external links`}
      </strong>
      {`
`}
      <img src={srcImport57} height={srcImport57.height * 1680 / srcImport57.width} {...{"alt":"Example of the application launcher component","width":"1680","className":"ws-img"}}>
      </img>
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Application launcher with favorites and search`}
      </strong>
      {`
`}
      <img src={srcImport58} height={srcImport58.height * 1680 / srcImport58.width} {...{"alt":"Example of the application launcher component with favorites and search","width":"1680","className":"ws-img"}}>
      </img>
    </p>
  </React.Fragment>
);
Component.displayName = 'ComponentsApplicationLauncherDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
