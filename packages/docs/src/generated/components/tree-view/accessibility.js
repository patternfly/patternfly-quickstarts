import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Tree view",
  "section": "components",
  "source": "accessibility",
  "slug": "/components/tree-view/accessibility",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/accessibility/tree-view/tree-view.md"
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
      {` is a structure that displays data in a hierarchical view. It can be used in a dropdown, drawer, primary-detail, modal, or wizard. Tree views are often used when grouping similar decisions, action items, or navigation elements together.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`A default tree view provides a tree structure with items and arrows to expand or collapse child items. Every tree view can be extended with these optional capabilities.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Keyboard users`}
      </strong>
      {` should be able to interact with and navigate through the interactive tree view. Initial focus should be set on the first focusable element in the tree view. The user should be able to focus on one element of the tree with `}
      <strong>
        {`Tab`}
      </strong>
      {`. Once focused on a tree item, the user should also be able to move between visible nodes using `}
      <strong>
        {`Up arrow`}
      </strong>
      {` and `}
      <strong>
        {`Down arrow`}
      </strong>
      {`. `}
      <strong>
        {`Left arrow`}
      </strong>
      {` can be used to collapse an expanded node, or move to the parent of an already-collapsed or childless node. `}
      <strong>
        {`Right arrow`}
      </strong>
      {` should expand the focused node if it is collapsed but has child nodes, move to the first child of an already-expanded node, or do nothing on an end node.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Keyboard interactions for tree view:`}
    </p>
    <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
      <thead>
        <tr {...{"role":"row"}}>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
            </div>
          </th>
        </tr>
      </thead>
      <tbody {...{"role":"rowgroup"}}>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell"}}>
            <div>
              {`Tab`}
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
              {`Focus on the first (or previously selected) element of the tree`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell"}}>
            <div>
              {`Up arrow`}
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
              {`Move up through visible nodes`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell"}}>
            <div>
              {`Down arrow`}
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
              {`Move down through visible nodes`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell"}}>
            <div>
              {`Left arrow`}
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
              {`Collapse focused node if expanded, or move to the parent of a collapsed/childless node`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell"}}>
            <div>
              {`Right arrow`}
            </div>
          </td>
          <td {...{"role":"cell"}}>
            <div>
              {`Expand focused node if collapsed, move to first child if already expanded, or do nothing if end node`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Screen reader users`}
      </strong>
      {` should be able to interact with the tree view using their mouse or keyboard. Nodes of a tree view should have descriptive text labels whenever possible. If a tree view node only contains a graphic (such as an icon), it should have alternative text: `}
      <code {...{"className":"ws-code"}}>
        {`aria-label`}
      </code>
      {` is the most common way to add this. A tree view should be identified as such when the screen reader first focuses on it. When users navigate to a new node, indicate its branch level , number of child nodes, and number of sibling nodes.`}
    </p>
    <AutoLinkHeader {...{"id":"to-make-tree-view-accessible","size":"h2","className":"ws-title ws-h2"}}>
      {`To make tree view accessible:`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`For the search variant, use an aria-label describing what the user can search. For example, `}
        <code {...{"className":"ws-code"}}>
          {`searchProps={{ id: 'input-search', name: 'search-input', 'aria-label': 'Search input example' }}`}
        </code>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`For the checkbox variant, each of the checkboxes should have an aria-label or be associated: `}
        <code {...{"className":"ws-code"}}>
          {`checkProps: { 'aria-label': 'app-launcher-check', checked: false }`}
        </code>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`The actions variant should have an aria-label if you are using buttons without visible descriptive text`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`The following props/attributes have been added for you or are customizable in PatternFly:`}
    </p>
    <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
      <thead>
        <tr {...{"role":"row"}}>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`React prop`}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`React component that it should be applied to`}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Which HTML element it appears on in markup`}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Reason used`}
            </div>
          </th>
        </tr>
      </thead>
      <tbody {...{"role":"rowgroup"}}>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"React prop"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`checkProps`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"React component that it should be applied to"}}>
            <div>
              {`TreeViewListItem`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Which HTML element it appears on in markup"}}>
            <div>
              {`checkbox input`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Reason used"}}>
            <div>
              {`Additional properties of the tree view item checkbox; defaulted to `}
              <code {...{"className":"ws-code"}}>
                {`{ checked: false }`}
              </code>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"React prop"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`searchProps`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"React component that it should be applied to"}}>
            <div>
              {`TreeView or TreeViewList`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Which HTML element it appears on in markup"}}>
            <div>
              {`.pf-c-form-control pf-m-search`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Reason used"}}>
            <div>
              {`Additional props for search input`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsTreeViewAccessibilityDocs';
Component.pageData = pageData;

export default Component;
