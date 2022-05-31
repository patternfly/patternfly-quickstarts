import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport168 from '../../../content/design-guidelines/components/divider/./img/vertical.png';
import srcImport169 from '../../../content/design-guidelines/components/divider/./img/horizontal.png';
import srcImport170 from '../../../content/design-guidelines/components/divider/./img/utilization.png';
const pageData = {
  "id": "Divider",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/divider/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/divider/divider.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`divider`}
      </strong>
      {` is a horizontal or vertical line that is placed between screen elements to create visual divisions and content groupings.`}
    </p>
    <AutoLinkHeader {...{"id":"usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use a divider as a visual cue to help to convey content separations and groupings.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`vertical divider`}
      </strong>
      {` can be used to separate items within a horizontal list, such as a menu or toolbar.`}
    </p>
    <img src={srcImport168} height={srcImport168.height * 492 / srcImport168.width} {...{"alt":"Example of vertical divider in use to seperate actions","width":"492","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`horizontal divider`}
      </strong>
      {` can be used to separate items within a vertical list, such as a dropdown menu.`}
    </p>
    <img src={srcImport169} height={srcImport169.height * 220 / srcImport169.width} {...{"alt":"Example of horizontal divider in use to options in dropdown menu","width":"220","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`A divider can also be used to visually separate content sections, potentially spanning the entire width of the content area.`}
    </p>
    <img src={srcImport170} height={srcImport170.height * 747 / srcImport170.width} {...{"alt":"Example of divider used to seperate a content area into different parts","width":"747","className":"ws-img"}}>
    </img>
  </React.Fragment>
);
Component.displayName = 'ComponentsDividerDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
