import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport258 from '../../../content/design-guidelines/components/label/./img/label-features-type.png';
import srcImport259 from '../../../content/design-guidelines/components/label/./img/filled-labels.png';
import srcImport260 from '../../../content/design-guidelines/components/label/./img/label-features.png';
import srcImport261 from '../../../content/design-guidelines/components/label/./img/unfilled-labels.png';
import srcImport262 from '../../../content/design-guidelines/components/label/./img/filled-labels.png';
import srcImport263 from '../../../content/design-guidelines/components/label/./img/edit-labels.png';
import srcImport264 from '../../../content/design-guidelines/components/label/./img/labels-with-icons.png';
import srcImport265 from '../../../content/design-guidelines/components/label/./img/clickable-label.png';
import srcImport266 from '../../../content/design-guidelines/components/label/./img/editable-label-feature.png';
import srcImport267 from '../../../content/design-guidelines/components/label/./img/table-view.png';
import srcImport268 from '../../../content/design-guidelines/components/label/./img/catalog-view.png';
const pageData = {
  "id": "Label",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/label/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/label/label.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`Use a `}
      <strong>
        {`label`}
      </strong>
      {` when you want to highlight an element on a page to draw attention to it or make it more searchable. Labels can also be used to tag items of the same category. If you want to show a count, use a `}
      <PatternflyThemeLink {...{"to":"https://www.patternfly.org/v4/components/badge"}}>
        {`badge`}
      </PatternflyThemeLink>
      {` instead.`}
    </p>
    <AutoLinkHeader {...{"id":"usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`There are 2 label types:`}
    </p>
    <img src={srcImport258} height={srcImport258.height * 180 / srcImport258.width} {...{"alt":"Different label types","width":"180","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Default labels:`}
        </strong>
        {` Use by default when needing a label.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Compact labels:`}
        </strong>
        {` Use when confronted by space limitations and a smaller label is required (for example, in a table).`}
      </li>
    </ol>
    <p {...{"className":"ws-p"}}>
      {`Both default and compact labels come in the following default colors: gray, blue, green, orange, red, purple, and cyan. We offer a wide array of colors to allow for color coding labels within UIs. Label colors can be used to indicate status if desired, but do not have to. Regardless, we recommend you avoid using the red label unless it indicates danger or an error state.`}
    </p>
    <img src={srcImport259} height={srcImport259.height * 646 / srcImport259.width} {...{"alt":"Label colors","width":"646","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`While you may use other colors for your labels, we recommend using the ones provided as they have been carefully selected to be accessible with the PatternFly library. If you choose to use other colors, be mindful of picking `}
      <PatternflyThemeLink {...{"to":"https://www.patternfly.org/v4/accessibility/testing-your-accessibility"}}>
        {`accessible text color and icon color`}
      </PatternflyThemeLink>
      {` to go with the label background.`}
    </p>
    <AutoLinkHeader {...{"id":"label-features","size":"h2","className":"ws-title ws-h2"}}>
      {`Label features`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`You can further customize labels by making them filled or unfilled, dismissable, adding icons, or making them clickable links. You can use any combination of these features in a single label.`}
    </p>
    <img src={srcImport260} height={srcImport260.height * 180 / srcImport260.width} {...{"alt":"Examples of different label features","width":"180","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Fill/Unfilled labels:`}
        </strong>
        {` Offer customization for emphasis.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dismissible label:`}
        </strong>
        {` Can be dismissed by clicking on the “x”.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Label with icon:`}
        </strong>
        {` Can be used to further clarify the label.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Clickable labels:`}
        </strong>
        {` Has a hover state to show interactiveness.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Editable labels:`}
        </strong>
        {` Has a dashed underline to communicate editability.`}
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"when-to-use-filled-or-unfilled-labels","size":"h3","className":"ws-title ws-h3"}}>
      {`When to use filled or unfilled labels`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use the filled option to add more visual prominence to a label. If your use case requires a mix of clickable and non-clickable labels, consider using one type for clickable and another for non-clickable. Whatever convention you choose, be sure to maintain consistency through your UI.`}
    </p>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        {`Unfilled`}
      </li>
    </ol>
    <img src={srcImport261} height={srcImport261.height * 646 / srcImport261.width} {...{"alt":"Unfilled labels","width":"646","className":"ws-img"}}>
    </img>
    <ol {...{"start":2,"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        {`Filled`}
      </li>
    </ol>
    <img src={srcImport262} height={srcImport262.height * 646 / srcImport262.width} {...{"alt":"Filled labels","width":"646","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Use the filled option to add more visual prominence to a label.`}
    </p>
    <AutoLinkHeader {...{"id":"when-to-use-dismissable-labels","size":"h3","className":"ws-title ws-h3"}}>
      {`When to use dismissable labels`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use a dismissable label for labels that are easily removed. A common use case for dismissable labels is when users can edit labels.`}
    </p>
    <img src={srcImport263} height={srcImport263.height * 646 / srcImport263.width} {...{"alt":"Example of dismissable labels","width":"646","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"when-to-use-labels-with-icons","size":"h3","className":"ws-title ws-h3"}}>
      {`When to use labels with icons`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Add an icon to your label in cases where additional visual information is helpful. You can also use them to distinguish labels of the same color if needed.`}
    </p>
    <img src={srcImport264} height={srcImport264.height * 318 / srcImport264.width} {...{"alt":"Example of different colored labels with icons","width":"318","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"when-to-use-clickable-labels","size":"h3","className":"ws-title ws-h3"}}>
      {`When to use clickable labels`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use a clickable label for actionable labels. A common use case for clickable labels is when a user may want to filter by a specific label. You can also use label links to redirect users to a new page.`}
    </p>
    <img src={srcImport265} height={srcImport265.height * 220 / srcImport265.width} {...{"alt":"Example of a clickable label","width":"220","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"when-to-use-editable-labels","size":"h3","className":"ws-title ws-h3"}}>
      {`When to use editable labels`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use editable labels when you want to allow users to organize and select resources manually. Adding editable labels enables the user to query for objects that have similar, dissimilar, or overlapping labels.`}
    </p>
    <img src={srcImport266} height={srcImport266.height * 165 / srcImport266.width} {...{"alt":"Example of a editable label","width":"165","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"labels-in-context","size":"h2","className":"ws-title ws-h2"}}>
      {`Labels in context`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Labels can be used almost anywhere in a UI, but are commonly used in table views and catalogs.`}
    </p>
    <img src={srcImport267} height={srcImport267.height * 1209 / srcImport267.width} {...{"alt":"Example labels in a table","width":"1209","className":"ws-img"}}>
    </img>
    <img src={srcImport268} height={srcImport268.height * 1204 / srcImport268.width} {...{"alt":"Example labels in a catalog","width":"1204","className":"ws-img"}}>
    </img>
  </React.Fragment>
);
Component.displayName = 'ComponentsLabelDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
