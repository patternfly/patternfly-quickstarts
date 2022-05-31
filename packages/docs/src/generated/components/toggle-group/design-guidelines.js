import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport412 from '../../../content/design-guidelines/components/toggle-group/./img/elements-items.png';
import srcImport413 from '../../../content/design-guidelines/components/toggle-group/./img/form-view.png';
import srcImport414 from '../../../content/design-guidelines/components/toggle-group/./img/topology-actions-2.png';
import srcImport415 from '../../../content/design-guidelines/components/toggle-group/./img/multi-select.png';
import srcImport416 from '../../../content/design-guidelines/components/toggle-group/./img/topology-actions.png';
const pageData = {
  "id": "Toggle group",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/toggle-group/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/toggle-group/toggle-group.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`toggle group`}
      </strong>
      {` is a group of controls that can be used to quickly switch between actions or states.`}
    </p>
    <AutoLinkHeader {...{"id":"elements","size":"h2","className":"ws-title ws-h2"}}>
      {`Elements`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Toggle items can consist of icons, text, or both. Styling of toggles is dependent on the background color.`}
    </p>
    <img src={srcImport412} height={srcImport412.height * 1536 / srcImport412.width} {...{"alt":"Toggle group elements","width":"1536","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"toggle-group-types","size":"h2","className":"ws-title ws-h2"}}>
      {`Toggle group types`}
    </AutoLinkHeader>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"#single-select-toggle-group"}}>
          {`Single select toggle group`}
        </PatternflyThemeLink>
        {`: Use to toggle between multiple items`}
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"#multi-select-toggle-group"}}>
          {`Multi select toggle group`}
        </PatternflyThemeLink>
        {`: Use to select multiple attributes`}
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"#toggle-items"}}>
          {`Toggle items`}
        </PatternflyThemeLink>
        {`: Use to select a single action`}
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"single-select-toggle-group","size":"h3","className":"ws-title ws-h3"}}>
      {`Single select toggle group`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"usage","size":"h4","className":"ws-title ws-h4"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use single select toggle groups when you want to toggle between multiple items. There are many use cases where this can apply, such as:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Selecting a single action within a group of actions`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Toggling between multiple views`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Filtering by a specific value within a filter group`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`No matter the use case, toggle groups with or without icons can be used.`}
    </p>
    <AutoLinkHeader {...{"id":"examples","size":"h4","className":"ws-title ws-h4"}}>
      {`Examples`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Single select toggle groups are commonly used to switch between views including:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`a form view and a YAML view`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`a card view and a table view`}
      </li>
    </ul>
    <img src={srcImport413} height={srcImport413.height * 1500 / srcImport413.width} {...{"alt":"Single select toggle group ex","width":"1500","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Another common use case is to select one action from a group of actions. This could be useful for topology or similar canvas views.`}
    </p>
    <img src={srcImport414} height={srcImport414.height * 1500 / srcImport414.width} {...{"alt":"Single select toggle group ex2","width":"1500","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Zoom in`}
        </strong>
        {`: By selecting this action, the view would zoom in by one increment.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Fit to screen`}
        </strong>
        {`: This action will fit the topology view to screen. After selection, the item will return to its default state, with a white background.`}
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"multi-select-toggle-group","size":"h3","className":"ws-title ws-h3"}}>
      {`Multi select toggle group`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"usage-0","size":"h4","className":"ws-title ws-h4"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use single multi select toggle groups when you want to select multiple attributes from a group. This is most commonly used for filtering a content view when there is a lot of space available.`}
    </p>
    <AutoLinkHeader {...{"id":"examples-0","size":"h4","className":"ws-title ws-h4"}}>
      {`Examples`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Selecting an attribute will apply that filter to the table. In this case, only nodes that are “ready” are shown.`}
    </p>
    <img src={srcImport415} height={srcImport415.height * 1500 / srcImport415.width} {...{"alt":"Multi select toggle group ex","width":"1500","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"toggle-items","size":"h3","className":"ws-title ws-h3"}}>
      {`Toggle items`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"usage-1","size":"h4","className":"ws-title ws-h4"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use toggle items when you want to select a single action from a group. We recommend using toggle items when you want to switch the user into a specific “mode”. They look and act similarly to `}
      <PatternflyThemeLink {...{"to":"/components/button"}}>
        {`buttons`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <AutoLinkHeader {...{"id":"examples-1","size":"h4","className":"ws-title ws-h4"}}>
      {`Examples`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Toggle items are most commonly used in canvas views, such as topology. Selecting a toggle item will switch the user into that “mode” or allow them to take that action.`}
    </p>
    <img src={srcImport416} height={srcImport416.height * 1500 / srcImport416.width} {...{"alt":"Toggle items ex","width":"1500","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Zoom in`}
        </strong>
        {`: This item changes the cursor into a zoom icon and allows the user to zoom, as long as that toggle is selected.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Zoom cursor`}
        </strong>
        {`: The cursor changes into a zoom icon and the user may exit that mode by selecting the “move” hand toggle item.`}
      </li>
    </ol>
  </React.Fragment>
);
Component.displayName = 'ComponentsToggleGroupDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
