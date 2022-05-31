import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport114 from '../../../content/design-guidelines/components/chip-group/./img/chip-group-elements.png';
import srcImport115 from '../../../content/design-guidelines/components/chip-group/./img/chip-group.png';
const pageData = {
  "id": "Chip group",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/chip-group/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/chip-group/chip-group.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`chip group`}
      </strong>
      {` represents an attribute that has been assigned one or more values. An OR relationship is implied between values in the group. Chip groups are useful to express complex filters to a data set, for example.`}
    </p>
    <AutoLinkHeader {...{"id":"elements","size":"h2","className":"ws-title ws-h2"}}>
      {`Elements`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Chip groups contain two elements.`}
    </p>
    <img src={srcImport114} height={srcImport114.height * 148 / srcImport114.width} {...{"alt":"Chip group elements","width":"148","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chip group:`}
        </strong>
        {` indicates the main attribute in which selections were made.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chip:`}
        </strong>
        {` indicates the selections made within the attribute.`}
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Chip groups are typically used in filter and selection use cases to indicate to the user what selections they have made. They separate selections by attribute, for added clarity. Chip groups also give users the ability to either delete an entire chip group at once using the group X, or delete individual chips at a time.`}
    </p>
    <img src={srcImport115} height={srcImport115.height * 990 / srcImport115.width} {...{"alt":"Example of chipgroups from filtering","width":"990","className":"ws-img"}}>
    </img>
  </React.Fragment>
);
Component.displayName = 'ComponentsChipGroupDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
