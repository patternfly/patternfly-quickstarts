import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport97 from '../../../content/design-guidelines/components/card/./img/card.png';
import srcImport98 from '../../../content/design-guidelines/components/card/./img/card-variants.png';
import srcImport99 from '../../../content/design-guidelines/components/card/./img/card-types.png';
import srcImport100 from '../../../content/design-guidelines/components/card/./img/card-borders.png';
import srcImport101 from '../../../content/design-guidelines/components/card/./img/expandable-card.png';
import srcImport102 from '../../../content/design-guidelines/components/card/./img/selectable-cards.png';
import srcImport103 from '../../../content/design-guidelines/components/card/./img/card-images.png';
import srcImport104 from '../../../content/design-guidelines/components/card/./img/multi-select-cards.png';
import srcImport105 from '../../../content/design-guidelines/components/card/./img/single-select-cards.png';
import srcImport106 from '../../../content/design-guidelines/components/card/./img/dashboard.png';
const pageData = {
  "id": "Card",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/card/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/card/card.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`card`}
      </strong>
      {` is a square or rectangular container that can contain any kind of content. Cards symbolize units of information, and each one acts as an entry point for users to access more details. For example, in dashboards and catalog views, cards function as a preview of a detailed page. Cards may also be used in data displays like card views, or for positioning content on a page.`}
    </p>
    <AutoLinkHeader {...{"id":"elements","size":"h2","className":"ws-title ws-h2"}}>
      {`Elements`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A card usually consists of four parts:`}
    </p>
    <img src={srcImport97} height={srcImport97.height * 394 / srcImport97.width} {...{"alt":"4 parts of a card","width":"394","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Header (optional):`}
          </strong>
          {` When included, defines the contents of a card. Card headers can contain images as well as the title of a card and an actions menu represented by the right-aligned kabob. In most cases, your card should include a header. The only exceptions are when cards being used as a layout element to create a white background behind other content.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Title (optional):`}
          </strong>
          {` Communicates the title of a card if it's not included in the header.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Body:`}
          </strong>
          {` Provides details about the item. A card body can include any combination of static text and/or active content.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Footer (optional):`}
          </strong>
          {` Contains links, actions, or static text at the bottom of a card.`}
        </p>
      </li>
    </ol>
    <p {...{"className":"ws-p"}}>
      {`Cards are flexible and customizable to your use case. Here are some different ways to use a card to represent the same content. Choose a layout that considers the usage context and the space you have to work with.`}
    </p>
    <img src={srcImport98} height={srcImport98.height * 1202 / srcImport98.width} {...{"alt":"three card variants","width":"1202","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`The first version places an image in the header with a separate title. The `}
          <strong>
            {`View details`}
          </strong>
          {` action is located in the footer.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`In the second version, the title is moved to the header area to give a more compact footprint.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`In the third version, the card header contains an image as well as text to define the card title. The title is a link, allowing users to drill into the details of the card. This makes the footprint of the card smaller.`}
        </p>
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"variations","size":"h2","className":"ws-title ws-h2"}}>
      {`Variations`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"content-spacing","size":"h3","className":"ws-title ws-h3"}}>
      {`Content spacing`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`PatternFly supports three types of cards:`}
    </p>
    <img src={srcImport99} height={srcImport99.height * 779 / srcImport99.width} {...{"alt":"compact, standard, and large card types","width":"779","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Compact (recommended):`}
          </strong>
          {` Compact cards use 16px spacing with an 8px spacer between the header and body, and a 16px spacer between the body and footer.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Standard:`}
          </strong>
          {` Standard cards use 24px spacing with a 16px spacer between the header and body and 24px between the body and footer.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Large:`}
          </strong>
          {` Large cards use 32px spacing with a 24px spacer between the header and the body and 32px between the body and footer. Large cards are generally used for presenting marketing content or anyplace where a lower content density is desired.`}
        </p>
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"border-treatments","size":"h3","className":"ws-title ws-h3"}}>
      {`Border treatments`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`PatternFly offers 2 types of border treatments for cards:`}
    </p>
    <img src={srcImport100} height={srcImport100.height * 452 / srcImport100.width} {...{"alt":"cards with default and flat borders ","width":"452","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Default card:`}
          </strong>
          {` By default, cards will have a thin (1px) drop shadow to differentiate them from the background of a page and give them a slightly raised appearance. Use the default appearance when placing cards on a gray background.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Flat card:`}
          </strong>
          {` Flat cards have a 1px gray border. Flat cards are recommended for use against a white background as the solid border will better differentiate a card from the page background.`}
        </p>
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"expandable-cards","size":"h3","className":"ws-title ws-h3"}}>
      {`Expandable cards`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The header element can be made expandable in situations where you want to hide the card content and reduce its footprint. In the collapsed state, only the card title is shown, and the user can click the expansion toggle to view the rest of the card content.`}
    </p>
    <img src={srcImport101} height={srcImport101.height * 1325 / srcImport101.width} {...{"alt":"expandable card","width":"1325","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"selectable-cards","size":"h3","className":"ws-title ws-h3"}}>
      {`Selectable cards`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`It is often useful to make cards selectable. PatternFly supports two types of selectable cards:`}
    </p>
    <img src={srcImport102} height={srcImport102.height * 826 / srcImport102.width} {...{"alt":"multiselect and single selectable cards","width":"826","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Multi-select card:`}
          </strong>
          {` Features a checkbox in the upper righthand corner, which users can select to indicate which cards to include in global actions.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Selectable card:`}
          </strong>
          {` Features a raised appearance and blue border treatment when selected.`}
        </p>
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"images","size":"h3","className":"ws-title ws-h3"}}>
      {`Images`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Only include meaningful images on your cards (don’t add them for decoration). Images should help users identify specific content types.`}
    </p>
    <img src={srcImport103} height={srcImport103.height * 913 / srcImport103.width} {...{"alt":"card view with logo images in each card","width":"913","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`Place smaller images inside the card’s header.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`Place larger images or charts within the card’s body.`}
        </p>
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use cards:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`To visually group content or distinguish information from the rest of a page’s content. Examples include dashboards and catalog views.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`To organize content in layouts with multiple columns or grids.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`To compare separate groups of information.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`To make media easier to scan, such as images or videos.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Never`}
      </strong>
      {` use a card to show a dense amount of repetitive, related content. Use a `}
      <PatternflyThemeLink {...{"to":"/components/data-list"}}>
        {`data list`}
      </PatternflyThemeLink>
      {` or `}
      <PatternflyThemeLink {...{"to":"/components/table"}}>
        {`table`}
      </PatternflyThemeLink>
      {` view instead.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Cards primarily appear in `}
      <PatternflyThemeLink {...{"to":"#cards-in-catalog-views"}}>
        {`catalog views`}
      </PatternflyThemeLink>
      {`, `}
      <PatternflyThemeLink {...{"to":"#cards-in-primary-detail-views"}}>
        {`primary-detail views`}
      </PatternflyThemeLink>
      {`, and `}
      <PatternflyThemeLink {...{"to":"#cards-in-dashboards"}}>
        {`dashboards`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <AutoLinkHeader {...{"id":"cards-in-catalog-views","size":"h3","className":"ws-title ws-h3"}}>
      {`Cards in catalog views`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use cards in a catalog view to present users with a series of selectable items, typically arranged into a grid.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Note that this view uses a multi-select card so that bulk actions can be performed from the toolbar on a group of cards at once. For more information on cards used in a catalog or card view, see the `}
      <PatternflyThemeLink {...{"to":"/demos/card-view/design-guidelines"}}>
        {`card view design guidelines`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <img src={srcImport104} height={srcImport104.height * 1210 / srcImport104.width} {...{"alt":"cards in a catalog view ","width":"1210","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"cards-in-primary-detail-views","size":"h3","className":"ws-title ws-h3"}}>
      {`Cards in primary-detail views`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use selectable cards when you want to present an overview of a set of objects and then examine the details. Here, the details of different projects can be displayed in a side-by-side primary-detail view.`}
    </p>
    <img src={srcImport105} height={srcImport105.height * 1225 / srcImport105.width} {...{"alt":"cards in a side-by-side primary-detail view ","width":"1225","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"cards-in-dashboards","size":"h3","className":"ws-title ws-h3"}}>
      {`Cards in dashboards`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use cards in a dashboard view to visualize information. Each card should display a different and specific piece of information, such as a bar chart, area chart, or other data type.`}
    </p>
    <img src={srcImport106} height={srcImport106.height * 1223 / srcImport106.width} {...{"alt":"card view in a dashboard with charts","width":"1223","className":"ws-img"}}>
    </img>
  </React.Fragment>
);
Component.displayName = 'ComponentsCardDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
