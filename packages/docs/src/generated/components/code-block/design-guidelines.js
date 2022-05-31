import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport126 from '../../../content/design-guidelines/components/code-block/./img/code-block-structure.png';
import srcImport127 from '../../../content/design-guidelines/components/code-block/./img/code-block-multiple-actions.png';
import srcImport128 from '../../../content/design-guidelines/components/code-block/./img/code-block-collapsed-expanded.png';
const pageData = {
  "id": "Code block",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/code-block/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/code-block/code-block.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`code block`}
      </strong>
      {` is a component that contains 2 or more lines of ready-only code. The code in a code block can be copied to the clipboard.`}
    </p>
    <AutoLinkHeader {...{"id":"elements","size":"h2","className":"ws-title ws-h2"}}>
      {`Elements`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Code block has 4 main components.`}
    </p>
    <img src={srcImport126} height={srcImport126.height * 441 / srcImport126.width} {...{"alt":"Elements of the code block component","width":"441","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Code snippet:`}
        </strong>
        {`  the content that will be copied to the user’s clipboard.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          <PatternflyThemeLink {...{"to":"#multiple-action-buttons"}}>
            {`Action buttons`}
          </PatternflyThemeLink>
          {`:`}
        </strong>
        {` completes an action when clicked. The copy button is always present but additional action buttons can be added on an as needed basis.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tooltip:`}
        </strong>
        {` informs users that clicking the button will copy the content to their clipboard, or that the content has successfully been copied.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          <PatternflyThemeLink {...{"to":"#show-moreless"}}>
            {`Show more/less (optional)`}
          </PatternflyThemeLink>
          {`:`}
        </strong>
        {` expands and collapses the code snippet.`}
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"multiple-action-buttons","size":"h3","className":"ws-title ws-h3"}}>
      {`Multiple action buttons`}
    </AutoLinkHeader>
    <img src={srcImport127} height={srcImport127.height * 355 / srcImport127.width} {...{"alt":"Code block with multiple actions","width":"355","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Code blocks can include multiple actions. By default, the copy action is always present and any other actions are optional and customizable.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`The additional actions can include the option to show a checkmark after the user has clicked the action button. The checkmark can be used to indicate to the user that the action was successfully triggered.`}
    </p>
    <AutoLinkHeader {...{"id":"show-moreless","size":"h3","className":"ws-title ws-h3"}}>
      {`Show more/less`}
    </AutoLinkHeader>
    <img src={srcImport128} height={srcImport128.height * 758 / srcImport128.width} {...{"alt":"Expanded and collapsed code block","width":"758","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`There is the option to include a show more/less section in the code block. The show more/less section can be used to collapse larger code snippets. An expandable code block allows for long lines of code to be stored in an expansion panel. Expanding the code block allows the user to view the full string that they can copy.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'ComponentsCodeBlockDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
