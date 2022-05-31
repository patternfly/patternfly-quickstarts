import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport471 from '../../../content/design-guidelines/demos/card-view/./img/card-view.png';
import srcImport472 from '../../../content/design-guidelines/demos/card-view/./img/white-background.png';
import srcImport473 from '../../../content/design-guidelines/demos/card-view/./img/gray-background.png';
import srcImport474 from '../../../content/design-guidelines/demos/card-view/./img/mobile-cards.png';
import srcImport475 from '../../../content/design-guidelines/demos/card-view/./img/few-multiple-actions.png';
import srcImport476 from '../../../content/design-guidelines/demos/card-view/./img/multiple-inline.png';
import srcImport477 from '../../../content/design-guidelines/demos/card-view/./img/global-actions.png';
import srcImport478 from '../../../content/design-guidelines/demos/card-view/./img/add-card-empty-state.png';
import srcImport479 from '../../../content/design-guidelines/demos/card-view/./img/card-view-sticky-toolbar.png';
const pageData = {
  "id": "Card view",
  "section": "demos",
  "source": "design-guidelines",
  "slug": "/demos/card-view/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/demos/card-view/card-view.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`card view`}
      </strong>
      {` is a grid of cards in a gallery to facilitate browsing. Card views are typically used to present data set summaries, allowing users to drill down into any card to see more detailed content.`}
    </p>
    <img src={srcImport471} width={srcImport471.width} height={srcImport471.height} {...{"alt":"card view","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Use a card view to:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Display items in a data set that are best identified by a graphic or other visual representation.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Make information easier to visualize and compare.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Summarize a large number of objects at once within the same page.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Never`}
      </strong>
      {` use a card view to make a large amount of text-based content easier to scan. Use a `}
      <PatternflyThemeLink {...{"to":"/components/table"}}>
        {`table`}
      </PatternflyThemeLink>
      {` or `}
      <PatternflyThemeLink {...{"to":"/components/data-list"}}>
        {`list`}
      </PatternflyThemeLink>
      {` view instead.`}
    </p>
    <AutoLinkHeader {...{"id":"background-colors-for-card-views","size":"h3","className":"ws-title ws-h3"}}>
      {`Background colors for card views`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Card views can be placed on a white or a gray background, depending on your use case.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Use a white background`}
      </strong>
      {` if your content view can change, such as when:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`A card that opens an expandable panel on the right.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`A card view that toggles into a table or list view.`}
      </li>
    </ul>
    <img src={srcImport472} width={srcImport472.width} height={srcImport472.height} {...{"alt":"card view with white background","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Use a gray background`}
      </strong>
      {` if the sole purpose of your content view is to display cards.`}
    </p>
    <img src={srcImport473} width={srcImport473.width} height={srcImport473.height} {...{"alt":"card view with gray background","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Note:`}
      </strong>
      {` Use the default border treatment (cards with drop shadows) for cards when placed on a gray background only. Flat cards should be used when placing cards on a white background.`}
    </p>
    <AutoLinkHeader {...{"id":"card-views-on-mobile","size":"h3","className":"ws-title ws-h3"}}>
      {`Card views on mobile`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Cards will size down appropriately based on the built-in CSS responsiveness behaviors. Most of the time, they’ll follow the grid layout, expanding and compressing at certain breakpoints. At the smallest mobile size, they take up almost the entire width of the screen.`}
    </p>
    <img src={srcImport474} height={srcImport474.height * 375 / srcImport474.width} {...{"alt":"mobile card view","width":"375","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"card-view-actions","size":"h3","className":"ws-title ws-h3"}}>
      {`Card view actions`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`You can customize card actions in a few ways. Depending on your use case, consider customizing inline actions, multiple inline actions, global actions, or action cards within your card view.`}
    </p>
    <AutoLinkHeader {...{"id":"inline-actions","size":"h4","className":"ws-title ws-h4"}}>
      {`Inline actions`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`If an action can be performed on one card only, place the action in the card’s body or footer.`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`If you have a few cards with single actions, use the `}
          <PatternflyThemeLink {...{"to":"/components/button#variations"}}>
            {`secondary button style`}
          </PatternflyThemeLink>
          {`.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`If you have many cards with single actions, use a `}
          <PatternflyThemeLink {...{"to":"/components/button#variations"}}>
            {`link button`}
          </PatternflyThemeLink>
          {`.`}
        </p>
      </li>
    </ul>
    <img src={srcImport475} width={srcImport475.width} height={srcImport475.height} {...{"alt":"few cards with multiple actions","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"multiple-inline-actions","size":"h4","className":"ws-title ws-h4"}}>
      {`Multiple inline actions`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`If multiple actions can be performed on a single card, place those actions in a kebab. Position the kebab in the top-right corner of the card header.`}
    </p>
    <img src={srcImport476} width={srcImport476.width} height={srcImport476.height} {...{"alt":"cards with multiple inline actions in a kebab","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"global-actions","size":"h4","className":"ws-title ws-h4"}}>
      {`Global actions`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`If an action can be performed globally on multiple cards, or if it leads to multiple pieces of content at the same time, place the action in a toolbar above the card view. In the top-right corner of your card, add a checkbox so that users can select one or more items.`}
    </p>
    <img src={srcImport477} width={srcImport477.width} height={srcImport477.height} {...{"alt":"card view with global action toolbar","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"action-card","size":"h4","className":"ws-title ws-h4"}}>
      {`Action card`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`You may use an extra-small empty state inside a card to present users with another way to add more cards to the existing card view. We recommend using this feature `}
      <strong>
        {`in addition to`}
      </strong>
      {` a primary button in the toolbar, to ensure that the user is still able to perform the action from any page of the card view. Place the action card where a new card will be added, most likely as the very first or last card in the card view.`}
    </p>
    <img src={srcImport478} width={srcImport478.width} height={srcImport478.height} {...{"alt":"card view with addition card","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"bottom-pagination","size":"h3","className":"ws-title ws-h3"}}>
      {`Bottom pagination`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`If your card view has multiple pages, add a footer with `}
      <PatternflyThemeLink {...{"to":"/components/pagination"}}>
        {`pagination`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <img src={srcImport479} width={srcImport479.width} height={srcImport479.height} {...{"alt":"card view with sticky bottom toolbar","className":"ws-img"}}>
    </img>
  </React.Fragment>
);
Component.displayName = 'DemosCardViewDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
