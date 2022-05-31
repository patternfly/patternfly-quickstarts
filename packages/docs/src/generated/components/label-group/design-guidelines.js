import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport254 from '../../../content/design-guidelines/components/label-group/./img/label-group-elements.png';
import srcImport255 from '../../../content/design-guidelines/components/label-group/./img/table-view.png';
import srcImport256 from '../../../content/design-guidelines/components/label-group/./img/table-view-2.png';
import srcImport257 from '../../../content/design-guidelines/components/label-group/./img/description-list.png';
const pageData = {
  "id": "Label group",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/label-group/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/label-group/label-group.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`Use a `}
      <strong>
        {`label group`}
      </strong>
      {` when you have multiple `}
      <PatternflyThemeLink {...{"to":"https://www.patternfly.org/v4/components/label"}}>
        {`labels`}
      </PatternflyThemeLink>
      {` to display at once. Label groups can be oriented either horizontally or vertically and can optionally be named and dismissable.`}
    </p>
    <AutoLinkHeader {...{"id":"elements","size":"h2","className":"ws-title ws-h2"}}>
      {`Elements`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Label groups have a number of components to them.`}
    </p>
    <img src={srcImport254} height={srcImport254.height * 532 / srcImport254.width} {...{"alt":"Elements of a label group","width":"532","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Label group:`}
        </strong>
        {` indicates the group category or name if one exists.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Label:`}
        </strong>
        {` indicates the labels applied.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Overflow:`}
        </strong>
        {` indicates if there are more labels to show.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Group close:`}
        </strong>
        {` deletes the entire label group.`}
      </li>
    </ol>
    <p {...{"className":"ws-p"}}>
      {`Label groups can use various combinations of these features to build custom label groups.`}
    </p>
    <AutoLinkHeader {...{"id":"usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Label groups should be used when there are multiple labels assigned to a component. They can be used almost anywhere in a UI, but are commonly used in table views and description lists.`}
    </p>
    <AutoLinkHeader {...{"id":"label-groups-in-a-table","size":"h3","className":"ws-title ws-h3"}}>
      {`Label groups in a table`}
    </AutoLinkHeader>
    <img src={srcImport255} height={srcImport255.height * 1200 / srcImport255.width} {...{"alt":"Table with labels","width":"1200","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"label-groups-in-a-table-popover","size":"h3","className":"ws-title ws-h3"}}>
      {`Label groups in a table popover`}
    </AutoLinkHeader>
    <img src={srcImport256} height={srcImport256.height * 1200 / srcImport256.width} {...{"alt":"Table with vertical label group in a popover","width":"1200","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"label-groups-in-a-description-list","size":"h3","className":"ws-title ws-h3"}}>
      {`Label groups in a description list`}
    </AutoLinkHeader>
    <img src={srcImport257} height={srcImport257.height * 520 / srcImport257.width} {...{"alt":"Description list with labels","width":"520","className":"ws-img"}}>
    </img>
  </React.Fragment>
);
Component.displayName = 'ComponentsLabelGroupDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
