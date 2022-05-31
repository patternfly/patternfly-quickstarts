import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Tile",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/tile/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/tile/tile.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`tile`}
      </strong>
      {` is a form of selection that can be used in place of a `}
      <PatternflyThemeLink {...{"to":"/components/radio"}}>
        {`radio button`}
      </PatternflyThemeLink>
      {` and is commonly used in `}
      <PatternflyThemeLink {...{"to":"/components/form"}}>
        {`forms`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <AutoLinkHeader {...{"id":"usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Tiles can be used as a selection method when:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`The selection requires more attention or has high importance.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`The selection options include extensive information like a longer description or icon.`}
      </li>
    </ul>
  </React.Fragment>
);
Component.displayName = 'ComponentsTileDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
