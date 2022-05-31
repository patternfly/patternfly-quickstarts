import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport373 from '../../../content/design-guidelines/components/spinner/./img/spinner-sizes.png';
import srcImport374 from '../../../content/design-guidelines/components/spinner/./img/spinner-in-select.png';
import srcImport375 from '../../../content/design-guidelines/components/spinner/./img/spinner-in-cards.png';
import srcImport376 from '../../../content/design-guidelines/components/spinner/./img/spinner-in-table.png';
import srcImport377 from '../../../content/design-guidelines/components/spinner/./img/spinner-full-page.png';
const pageData = {
  "id": "Spinner",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/spinner/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/spinner/spinner.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`spinner`}
      </strong>
      {` is used to indicate to users that an action is in progress. For actions that may take a long time, use a `}
      <PatternflyThemeLink {...{"to":"/components/progress"}}>
        {`progress bar`}
      </PatternflyThemeLink>
      {` instead.`}
    </p>
    <AutoLinkHeader {...{"id":"usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Spinners are used to demonstrate data loading. Spinners are offered in different sizes that follow the sizing of our icons. These sizes include extra small, small, medium and large. Depending on the size of information you are loading and the space you are dealing with, we recommend using the spinner size that generally matches.`}
    </p>
    <img src={srcImport373} height={srcImport373.height * 436 / srcImport373.width} {...{"alt":"Visual of different spinner sizes","width":"436","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Use a spinner when the data you are dealing with is unknown in both quantity and shape. Spinners are also good to use when in progress of loading a screen that may not have any data, for example an `}
      <PatternflyThemeLink {...{"to":"/components/empty-state"}}>
        {`empty state screen or failed outcome`}
      </PatternflyThemeLink>
      {`. A common use case for spinners is within a table view, where the spinner can take up the area of the table before it loads.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Do not use a spinner to replace a `}
      <PatternflyThemeLink {...{"to":"/components/progress"}}>
        {`progress bar`}
      </PatternflyThemeLink>
      {`. Spinners are vague in their promises of results to the user and are best to use when the expected wait time is between 1-5 seconds. Do not use a spinner if the loading process is less than 1 second. For experiences longer than 5 seconds, use a progress bar.`}
    </p>
    <AutoLinkHeader {...{"id":"spinner-in-context","size":"h2","className":"ws-title ws-h2"}}>
      {`Spinner in context`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Spinners are centered within the container AND the viewport by default in all use cases. Although this is the standard position of it, the spinner may be repositioned if necessary for particular screens and screen sizes.`}
    </p>
    <AutoLinkHeader {...{"id":"spinner-in-select-list-small","size":"h3","className":"ws-title ws-h3"}}>
      {`Spinner in select list (small)`}
    </AutoLinkHeader>
    <img src={srcImport374} height={srcImport374.height * 990 / srcImport374.width} {...{"alt":"Example of spinner in select menu","width":"990","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"spinner-in-cards-within-a-dashboard-medium","size":"h3","className":"ws-title ws-h3"}}>
      {`Spinner in cards within a dashboard (medium)`}
    </AutoLinkHeader>
    <img src={srcImport375} height={srcImport375.height * 990 / srcImport375.width} {...{"alt":"Example of spinner in cards","width":"990","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"spinner-in-a-data-list-or-table-large","size":"h3","className":"ws-title ws-h3"}}>
      {`Spinner in a data list or table (large)`}
    </AutoLinkHeader>
    <img src={srcImport376} height={srcImport376.height * 990 / srcImport376.width} {...{"alt":"Example of spinner in table","width":"990","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"spinner-in-a-full-page-large","size":"h3","className":"ws-title ws-h3"}}>
      {`Spinner in a full page (large)`}
    </AutoLinkHeader>
    <img src={srcImport377} height={srcImport377.height * 990 / srcImport377.width} {...{"alt":"Example of spinner in full page","width":"990","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"when-to-use-a-loading-spinner-vs.-a-skeleton","size":"h3","className":"ws-title ws-h3"}}>
      {`When to use a loading spinner vs. a skeleton`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Show a spinner when:`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`You do not know what the populated data may look like. For example, if you are loading a form (as they are not all structured the same).`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Loading will likely fail or show an empty state while waiting for actions to complete.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Show a `}
        <PatternflyThemeLink {...{"to":"/components/skeleton/react"}}>
          {`skeleton`}
        </PatternflyThemeLink>
        {` when:`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`You know what the populated data is going to look like (even if it results in an empty state).`}
      </li>
    </ul>
  </React.Fragment>
);
Component.displayName = 'ComponentsSpinnerDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
