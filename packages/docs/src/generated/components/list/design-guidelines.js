import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport269 from '../../../content/design-guidelines/components/list/./img/unordered.png';
import srcImport270 from '../../../content/design-guidelines/components/list/./img/unordered_horizontal.png';
import srcImport271 from '../../../content/design-guidelines/components/list/./img/ordered.png';
import srcImport272 from '../../../content/design-guidelines/components/list/./img/icons.png';
const pageData = {
  "id": "List",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/list/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/list/list.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`list`}
      </strong>
      {` component embeds a formatted list (bulleted or numbered list) into page content.`}
    </p>
    <AutoLinkHeader {...{"id":"usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use lists to organize information in a digestible format. Lists can be very useful when you have a lot of text on a page.`}
    </p>
    <AutoLinkHeader {...{"id":"variations","size":"h2","className":"ws-title ws-h2"}}>
      {`Variations`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`There are many different types of lists, including `}
      <PatternflyThemeLink {...{"to":"#unordered"}}>
        {`unordered`}
      </PatternflyThemeLink>
      {`, `}
      <PatternflyThemeLink {...{"to":"#ordered"}}>
        {`ordered`}
      </PatternflyThemeLink>
      {`, and `}
      <PatternflyThemeLink {...{"to":"#with-icons"}}>
        {`with icons`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <AutoLinkHeader {...{"id":"unordered","size":"h3","className":"ws-title ws-h3"}}>
      {`Unordered`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`By default, you should use bullets when displaying an unordered list. Use an unordered list when you want to break up related content, but list items are not sequential. You may also choose to present an unordered list without the bullets, or with horizontal rules between each list item.`}
    </p>
    <img src={srcImport269} height={srcImport269.height * 561 / srcImport269.width} {...{"alt":"Example of an unordered, bulleted list","width":"561","className":"ws-img"}}>
    </img>
    <img src={srcImport270} height={srcImport270.height * 732 / srcImport270.width} {...{"alt":"Example of an unordered horizontal list","width":"732","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"ordered","size":"h3","className":"ws-title ws-h3"}}>
      {`Ordered`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use ordered lists to convey a sequence of events or steps in a process. An example of an ordered list is a numbered list.`}
    </p>
    <img src={srcImport271} width={srcImport271.width} height={srcImport271.height} {...{"alt":"Example of an ordered, numbered list","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"with-icons","size":"h3","className":"ws-title ws-h3"}}>
      {`With icons`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use icons to call out useful information about list elements. In the example below, each list item is a condition with a respective status icon. The object's overall status is an aggregation of the list items' statuses. Lists with icons can use small icons or big icons.`}
    </p>
    <img src={srcImport272} width={srcImport272.width} height={srcImport272.height} {...{"alt":"Example of a list with icons","className":"ws-img"}}>
    </img>
  </React.Fragment>
);
Component.displayName = 'ComponentsListDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
