import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport438 from '../../../content/design-guidelines/components/tree-view/./img/tree-view-elements.png';
import srcImport439 from '../../../content/design-guidelines/components/tree-view/./img/Default-tree-view.png';
import srcImport440 from '../../../content/design-guidelines/components/tree-view/./img/with-search-bar.png';
import srcImport441 from '../../../content/design-guidelines/components/tree-view/./img/with-checkboxes.png';
import srcImport442 from '../../../content/design-guidelines/components/tree-view/./img/with-badges.png';
import srcImport443 from '../../../content/design-guidelines/components/tree-view/./img/with-icons.png';
import srcImport444 from '../../../content/design-guidelines/components/tree-view/./img/with-action-items.png';
import srcImport445 from '../../../content/design-guidelines/components/tree-view/./img/tree-view-wizard.png';
import srcImport446 from '../../../content/design-guidelines/components/tree-view/./img/tree-view-primary-detail.png';
import srcImport447 from '../../../content/design-guidelines/components/tree-view/./img/compact-tree.png';
const pageData = {
  "id": "Tree view",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/tree-view/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/tree-view/tree-view.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`tree view`}
      </strong>
      {` is a structure that displays data in a hierarchical view. It can be used in a `}
      <PatternflyThemeLink {...{"to":"/components/dropdown"}}>
        {`dropdown`}
      </PatternflyThemeLink>
      {`, `}
      <PatternflyThemeLink {...{"to":"/components/drawer"}}>
        {`drawer`}
      </PatternflyThemeLink>
      {`, `}
      <PatternflyThemeLink {...{"to":"/demos/primary-detail"}}>
        {`primary-detail`}
      </PatternflyThemeLink>
      {`, `}
      <PatternflyThemeLink {...{"to":"/components/modal"}}>
        {`modal`}
      </PatternflyThemeLink>
      {`, or `}
      <PatternflyThemeLink {...{"to":"/components/wizard"}}>
        {`wizard`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`A default tree view provides a tree structure with items and arrows to expand or collapse child items. Every tree view can be extended with these `}
      <PatternflyThemeLink {...{"to":"#tree-view-capabilities"}}>
        {`optional capabilities`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <AutoLinkHeader {...{"id":"tree-view-elements","size":"h2","className":"ws-title ws-h2"}}>
      {`Tree view elements`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A default tree view consists of 5 elements:`}
    </p>
    <img src={srcImport438} height={srcImport438.height * 332 / srcImport438.width} {...{"width":"332","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Expand/collapse:`}
        </strong>
        {` An option to expand or collapse parent nodes to reveal child nodes.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Parent node:`}
        </strong>
        {` A node that contains other items (for example, a folder that contains multiple documents).`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Child node:`}
        </strong>
        {` A node within the parent node (for example, a document within a folder).`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Leaf node:`}
        </strong>
        {` A node without children.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Truncation indicator:`}
        </strong>
        {` Ellipses indicating truncated text for longer names that don't fit in the node width.`}
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A tree view can be used for:`}
    </p>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        {`Changing the content on a page based on the selected item.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Selecting items or applying filters.`}
      </li>
    </ol>
    <img src={srcImport439} height={srcImport439.height * 1004 / srcImport439.width} {...{"width":"1004","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Use a tree view when:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Selecting is the main use-case.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`You apply filters that need to be structured in a clear hierarchy.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`The data is structured into levels.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`You need to display hierarchies that have more than 2 levels.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Don’t use a tree view when:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`You select 1 item from a small set. Instead, use `}
        <PatternflyThemeLink {...{"to":"/components/simple-list"}}>
          {`simple list`}
        </PatternflyThemeLink>
        {`, `}
        <PatternflyThemeLink {...{"to":"/components/select"}}>
          {`select lists`}
        </PatternflyThemeLink>
        {`, `}
        <PatternflyThemeLink {...{"to":"/components/radio"}}>
          {`radio buttons`}
        </PatternflyThemeLink>
        {`, `}
        <PatternflyThemeLink {...{"to":"/components/checkbox"}}>
          {`checkboxes`}
        </PatternflyThemeLink>
        {`, or a `}
        <PatternflyThemeLink {...{"to":"/components/dropdown"}}>
          {`dropdown`}
        </PatternflyThemeLink>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`You need to see an overview of a large amount of data.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`You need to compare 2 large sets of data. Use `}
        <PatternflyThemeLink {...{"to":"/charts/about"}}>
          {`charts`}
        </PatternflyThemeLink>
        {` for a better view.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`The hierarchy is too deep and includes hundreds of items. Instead, use a `}
        <PatternflyThemeLink {...{"to":"/components/menu#drilldown"}}>
          {`drill-down menu`}
        </PatternflyThemeLink>
        {`.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"tree-view-capabilities","size":"h2","className":"ws-title ws-h2"}}>
      {`Tree view capabilities`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`You can add these functionalities to a tree view:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          <PatternflyThemeLink {...{"to":"#adding-a-search-bar-to-a-tree-view"}}>
            {`Search bar`}
          </PatternflyThemeLink>
        </strong>
        {` for searching items in the tree view.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          <PatternflyThemeLink {...{"to":"#adding-checkboxes-to-a-tree-view"}}>
            {`Checkboxes`}
          </PatternflyThemeLink>
        </strong>
        {` for selecting items in the tree view.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          <PatternflyThemeLink {...{"to":"#adding-badges-to-a-tree-view"}}>
            {`Badges`}
          </PatternflyThemeLink>
        </strong>
        {` for showing the number of child nodes in the tree view.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          <PatternflyThemeLink {...{"to":"#adding-icons-to-a-tree-view"}}>
            {`Icons`}
          </PatternflyThemeLink>
        </strong>
        {` for visually representing the node types in the tree view.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          <PatternflyThemeLink {...{"to":"#adding-action-items-to-a-tree-view"}}>
            {`Action items`}
          </PatternflyThemeLink>
        </strong>
        {` for adding an action to each item in the tree view.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"adding-a-search-bar-to-a-tree-view","size":"h3","className":"ws-title ws-h3"}}>
      {`Adding a search bar to a tree view`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Add a search bar to a tree view if you're including a large amount of data and need to provide users with a quick way to find a single item. If your dataset is small and easy to navigate, then you don't need to add a search bar.`}
    </p>
    <img src={srcImport440} height={srcImport440.height * 940 / srcImport440.width} {...{"width":"940","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"adding-checkboxes-to-a-tree-view","size":"h3","className":"ws-title ws-h3"}}>
      {`Adding checkboxes to a tree view`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Add checkboxes to a tree view if you’re selecting multiple items or applying multiple filters. Selecting should be a primary function of your use-case. If your dataset is small and you select just 1 item, use `}
      <PatternflyThemeLink {...{"to":"/components/select"}}>
        {`select lists`}
      </PatternflyThemeLink>
      {`, `}
      <PatternflyThemeLink {...{"to":"/components/radio"}}>
        {`radio buttons`}
      </PatternflyThemeLink>
      {`, `}
      <PatternflyThemeLink {...{"to":"/components/checkbox"}}>
        {`checkboxes`}
      </PatternflyThemeLink>
      {`, or a `}
      <PatternflyThemeLink {...{"to":"/components/dropdown"}}>
        {`dropdown`}
      </PatternflyThemeLink>
      {` instead.`}
    </p>
    <img src={srcImport441} height={srcImport441.height * 932 / srcImport441.width} {...{"width":"932","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"adding-badges-to-a-tree-view","size":"h3","className":"ws-title ws-h3"}}>
      {`Adding badges to a tree view`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Add badges to a tree view if you want to show the number of items inside. Don’t use it for displaying different information. Items without children can't have badges, as they don't contain anything.`}
    </p>
    <img src={srcImport442} height={srcImport442.height * 332 / srcImport442.width} {...{"width":"332","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"adding-icons-to-a-tree-view","size":"h3","className":"ws-title ws-h3"}}>
      {`Adding icons to a tree view`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Add icons to a tree view if you want to visually representing the type of items in a tree. For example, a folder system. To maintain consistency, if you choose to add icons to a tree view, apply the icons on all items in a tree or leave the items without children iconless. We don’t recommend using icons and checkboxes at the same time due to the large indentation and loss of space it would result in.`}
    </p>
    <img src={srcImport443} height={srcImport443.height * 761 / srcImport443.width} {...{"width":"761","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"adding-action-items-to-a-tree-view","size":"h3","className":"ws-title ws-h3"}}>
      {`Adding action items to a tree view`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Add action items to a tree view if you’re triggering some type of action above the items. These actions appear on hover to avoid overcrowding the tree view. We recommend using 1 type of action across the whole tree and to limit the maximum of actions for 1 item to 1.`}
    </p>
    <img src={srcImport444} height={srcImport444.height * 632 / srcImport444.width} {...{"width":"632","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"tree-view-in-a-page","size":"h2","className":"ws-title ws-h2"}}>
      {`Tree view in a page`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Tree views can be included in pages within these components: `}
      <PatternflyThemeLink {...{"to":"/components/dropdown"}}>
        {`dropdown`}
      </PatternflyThemeLink>
      {`, `}
      <PatternflyThemeLink {...{"to":"/components/drawer"}}>
        {`drawer`}
      </PatternflyThemeLink>
      {`, `}
      <PatternflyThemeLink {...{"to":"/demos/primary-detail"}}>
        {`primary-detail`}
      </PatternflyThemeLink>
      {`, `}
      <PatternflyThemeLink {...{"to":"/components/modal"}}>
        {`modal`}
      </PatternflyThemeLink>
      {`, or `}
      <PatternflyThemeLink {...{"to":"/components/wizard"}}>
        {`wizard`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <AutoLinkHeader {...{"id":"tree-view-in-a-wizard","size":"h3","className":"ws-title ws-h3"}}>
      {`Tree view in a wizard`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A tree view in a wizard allows users to apply multiple filters or select multiple items that are specific to their current step.`}
    </p>
    <img src={srcImport445} height={srcImport445.height * 1500 / srcImport445.width} {...{"width":"1500","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"tree-view-in-a-primary-detail-or-drawer","size":"h3","className":"ws-title ws-h3"}}>
      {`Tree view in a primary-detail or drawer`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A tree view in a `}
      <PatternflyThemeLink {...{"to":"/demos/primary-detail"}}>
        {`primary-detail`}
      </PatternflyThemeLink>
      {` or `}
      <PatternflyThemeLink {...{"to":"/components/drawer"}}>
        {`drawer`}
      </PatternflyThemeLink>
      {` allows users to switch content based on their selection from a tree.`}
    </p>
    <img src={srcImport446} height={srcImport446.height * 1500 / srcImport446.width} {...{"width":"1500","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"compact-tree-view","size":"h2","className":"ws-title ws-h2"}}>
      {`Compact tree view`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Compact tree view is useful when the nodes of a tree view contain more than one paragraph of text, or the content needs to be formatted. Compact tree views include guides that enhance the ability to more easily navigate between individual rows of data in the tree. You can use a compact tree view `}
      <PatternflyThemeLink {...{"to":"/components/tree-view#compact"}}>
        {`with a background`}
      </PatternflyThemeLink>
      {` or `}
      <PatternflyThemeLink {...{"to":"/components/tree-view#compact-no-background"}}>
        {`without background`}
      </PatternflyThemeLink>
      {`, depending on your use case.`}
    </p>
    <img src={srcImport447} height={srcImport447.height * 887 / srcImport447.width} {...{"width":"887","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Guide:`}
        </strong>
        {` Connected lines between nodes in a tree view.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Row:`}
        </strong>
        {` Content with one or multiple lines that can be formatted.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Container:`}
        </strong>
        {` Area that holds the content and visually distinguishes individual rows with a filled or transparent background.`}
      </li>
    </ol>
  </React.Fragment>
);
Component.displayName = 'ComponentsTreeViewDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
