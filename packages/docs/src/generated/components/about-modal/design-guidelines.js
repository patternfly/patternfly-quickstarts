import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport33 from '../../../content/design-guidelines/components/about-modal/./img/about-modal.png';
import srcImport34 from '../../../content/design-guidelines/components/about-modal/./img/about-dropdown.png';
const pageData = {
  "id": "About modal",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/about-modal/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/about-modal/about-modal.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`An `}
      <strong>
        {`about modal`}
      </strong>
      {` displays information about an application like product version number(s), as well as any appropriate legal text.`}
    </p>
    <AutoLinkHeader {...{"id":"primary-elements","size":"h2","className":"ws-title ws-h2"}}>
      {`Primary elements`}
    </AutoLinkHeader>
    <img src={srcImport33} width={srcImport33.width} height={srcImport33.height} {...{"alt":"About modal","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Backdrop:`}
        </strong>
        {` Blurs any interface elements in the background to bring the modal content into focus`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Modal`}
        </strong>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Branding:`}
        </strong>
        {` Provides logo and branding for the product. Substitute your own logotype by providing an SVG that can be scaled proportionately to fit the space.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Product title`}
        </strong>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Close button`}
        </strong>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Content:`}
        </strong>
        {` Label and version`}
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`When version and build information are both shown: Version 6.3 (Build 5)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`When version only: Version 6.3`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`When build only: Build 5`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Modal image:`}
        </strong>
        {` The modal image should be the same as the `}
        <PatternflyThemeLink {...{"to":"/components/background-image"}}>
          {`background image`}
        </PatternflyThemeLink>
        {` you use for your application.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Trademark and copyright information:`}
        </strong>
        {` Optionally include legal text. Suggested format for copyright -  Copyright (c) 2018 Company`}
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use an about modal to provide information about a product including the product name, logo, version numbers, and any appropriate legal text.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Accessing the about modal`}
      </strong>
    </p>
    <p {...{"className":"ws-p"}}>
      {`Provide access to an about modal using a help icon in the application masthead. Clicking the help icon will launch a dropdown menu. The help menu should always include an option labeled "About" that launches the about modal.`}
    </p>
    <img src={srcImport34} width={srcImport34.width} height={srcImport34.height} {...{"alt":"About modal dropdown","className":"ws-img"}}>
    </img>
  </React.Fragment>
);
Component.displayName = 'ComponentsAboutModalDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
