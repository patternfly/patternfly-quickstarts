import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport351 from '../../../content/design-guidelines/components/search-input/./img/search-input-active-table.png';
import srcImport352 from '../../../content/design-guidelines/components/search-input/./img/search-input-navigation-2-table.png';
import srcImport353 from '../../../content/design-guidelines/components/search-input/./img/search-input-advanced-open.png';
const pageData = {
  "id": "Search input",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/search-input/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/search-input/search-input.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`search input`}
      </strong>
      {` is a type of input field that can be user to search, find, or filter. See `}
      <PatternflyThemeLink {...{"to":"/guidelines/filters"}}>
        {`filter guidelines`}
      </PatternflyThemeLink>
      {` for more information on using search input as a filter.`}
    </p>
    <AutoLinkHeader {...{"id":"usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use a search input when you want to either filter down or locate values from a dataset that match an inputted value.`}
    </p>
    <AutoLinkHeader {...{"id":"search-input-as-a-type-ahead-filter","size":"h3","className":"ws-title ws-h3"}}>
      {`Search input as a type-ahead filter`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A search input can act as a basic filter for narrowing a list of values as the user types. If you want a search field with an explicit submit button (not type-ahead), we recommend that you use an `}
      <PatternflyThemeLink {...{"to":"/components/input-group"}}>
        {`input group`}
      </PatternflyThemeLink>
      {` with a search button to act as a basic text filter.`}
    </p>
    <img src={srcImport351} height={srcImport351.height * 1500 / srcImport351.width} {...{"alt":"Search input active in a basic table","width":"1500","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Input field:`}
          </strong>
          {` The user’s input immediately starts filtering down the list as the user types. There is no need for them to press enter.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Optional badge:`}
          </strong>
          {` As matches are found, an optional badge may be added to the input field containing the count.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Clear:`}
          </strong>
          {` A clear button is easily accessible once the user begins typing to clear the field if necessary.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Filtered list:`}
          </strong>
          {` The list is filtered to match the value entered in the input field, in this case, “A”.`}
        </p>
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"search-input-as-a-find-function","size":"h3","className":"ws-title ws-h3"}}>
      {`Search input as a find function`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Another way to use search input is as a find function. This would mean that the value entered within the field would then be compared to each result, and only matches would be highlighted.`}
    </p>
    <img src={srcImport352} height={srcImport352.height * 1500 / srcImport352.width} {...{"alt":"Search input with active navigation in a basic table","width":"1500","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Input field:`}
          </strong>
          {` The user’s input immediately starts matching to values as they begin typing.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Optional badge:`}
          </strong>
          {` A badge, by itself, can be used to capture the total count of matches. In this case, since navigation is also being used, it displays the match number that the user is highlighting compared to the total number of matches.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Optional navigation:`}
          </strong>
          {` The navigation feature allows the user to navigate 1-by-1 through the matched results. It will correspond to the count that is within the badge.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Match highlight:`}
          </strong>
          {` All matches will be highlighted using `}
          <code {...{"className":"ws-code"}}>
            {`gold-50`}
          </code>
          {`from the `}
          <PatternflyThemeLink {...{"to":"/guidelines/colors#color-palette"}}>
            {`PatternFly color palette`}
          </PatternflyThemeLink>
          {`.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Current highlight:`}
          </strong>
          {` The active match will be highlighted with `}
          <code {...{"className":"ws-code"}}>
            {`gold-100`}
          </code>
          {` from the `}
          <PatternflyThemeLink {...{"to":"/guidelines/colors#color-palette"}}>
            {`PatternFly color palette`}
          </PatternflyThemeLink>
          {`. In this case, since the user is on match 2 of 5, “Node” in “Node 2” is highlighted.`}
        </p>
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"advanced-search","size":"h3","className":"ws-title ws-h3"}}>
      {`Advanced search`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The `}
      <PatternflyThemeLink {...{"to":"/components/search-input#advanced"}}>
        {`advanced search variant`}
      </PatternflyThemeLink>
      {` is intended for more advanced search use cases across multiple attribute-value pairs. It allows users to enter complex search queries from the keyboard or to fill out a search form. Use this component for search or filter queries that involve many attributes and when you want to give the user the option to use a form to complete the search criteria.`}
    </p>
    <img src={srcImport353} height={srcImport353.height * 1500 / srcImport353.width} {...{"alt":"Search input with active navigation in a basic table","width":"1500","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Input field:`}
          </strong>
          {` Accepts one or more search queries in the form of an attribute-value pair. The delimiter character used to separate attribute and value strings can be passed to the component. Typical delimiter characters are “:” or “=”. If the user enters a string that is not in the form of an attribute-value pair, it will be treated as a standard text search where the software will search for the occurrence of that string anywhere in the data set.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Form toggle:`}
          </strong>
          {` Opens or closes the search form when clicked.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Search button:`}
          </strong>
          {` Triggers the query and returns filtered results.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Search form:`}
          </strong>
          {` Gives the user the option to visually specify their search by filling out a form inserted into the dropdown panel. The component will synchronize the information entered into the form with the field. If a search button is included on the form, it should have the same effect as clicking the search button adjacent to the field.`}
        </p>
      </li>
    </ol>
    <p {...{"className":"ws-p"}}>
      {`When building a search that contains multiple terms, an AND relationship between the search terms is assumed.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'ComponentsSearchInputDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
