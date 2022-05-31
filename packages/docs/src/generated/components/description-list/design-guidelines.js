import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport162 from '../../../content/design-guidelines/components/description-list/./img/definitionlist.png';
import srcImport163 from '../../../content/design-guidelines/components/description-list/./img/default.png';
import srcImport164 from '../../../content/design-guidelines/components/description-list/./img/horizontal.png';
import srcImport165 from '../../../content/design-guidelines/components/description-list/./img/default2column.png';
import srcImport166 from '../../../content/design-guidelines/components/description-list/./img/horizontal2column.png';
import srcImport167 from '../../../content/design-guidelines/components/description-list/./img/termhelptext.png';
const pageData = {
  "id": "Description list",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/description-list/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/description-list/description-list.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`description list`}
      </strong>
      {` contains terms and their corresponding descriptions.`}
    </p>
    <AutoLinkHeader {...{"id":"usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use a description list when you have a set of terms and definitions related to a single item. The content within the definitions is not limited to only plain text. This component can be extremely useful in context of Detail pages for a certain resource or item.`}
    </p>
    <img src={srcImport162} height={srcImport162.height * 1440 / srcImport162.width} {...{"alt":"Definition list","width":"1440","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"types-of-description-lists","size":"h2","className":"ws-title ws-h2"}}>
      {`Types of description lists`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"default","size":"h3","className":"ws-title ws-h3"}}>
      {`Default`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`By default, the description list will be formatted so that the term stacks vertically above the description.`}
    </p>
    <img src={srcImport163} height={srcImport163.height * 600 / srcImport163.width} {...{"alt":"Default","width":"600","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"horizontal","size":"h3","className":"ws-title ws-h3"}}>
      {`Horizontal`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Description lists can also be horizontally formatted so that the term and description sit inline and the term comes before the description.`}
    </p>
    <img src={srcImport164} height={srcImport164.height * 600 / srcImport164.width} {...{"alt":"Horizontal","width":"600","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"additional-features","size":"h2","className":"ws-title ws-h2"}}>
      {`Additional features`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"columns","size":"h3","className":"ws-title ws-h3"}}>
      {`Columns`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Columns can be applied in both vertical and horizontal formats. By default, there will be 24px gutters within the column grid.`}
    </p>
    <img src={srcImport165} height={srcImport165.height * 600 / srcImport165.width} {...{"alt":"Default with 2 columns","width":"600","className":"ws-img"}}>
    </img>
    <img src={srcImport166} height={srcImport166.height * 600 / srcImport166.width} {...{"alt":"Horizontal with 2 columns","width":"600","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"term-help-text","size":"h3","className":"ws-title ws-h3"}}>
      {`Term help text`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`To provide help text about a term in the description list, you may add popovers indicated by a dotted underline on the label. This is recommended in detailed lists where you have many popovers and using a blue link or icon would clutter the page.`}
    </p>
    <img src={srcImport167} height={srcImport167.height * 600 / srcImport167.width} {...{"alt":"Term help text","width":"600","className":"ws-img"}}>
    </img>
  </React.Fragment>
);
Component.displayName = 'ComponentsDescriptionListDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
