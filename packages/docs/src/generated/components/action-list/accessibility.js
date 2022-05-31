import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Action list",
  "section": "components",
  "source": "accessibility",
  "slug": "/components/action-list/accessibility",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/accessibility/action-list/action-list.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`An `}
      <strong>
        {`action list`}
      </strong>
      {` is a group of actions with set spacing.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Keyboard users`}
      </strong>
      {` should be able to navigate an action list using `}
      <strong>
        {`Tab`}
      </strong>
      {` to move forward and `}
      <strong>
        {`Tab + Shift`}
      </strong>
      {` to move backwards through interactive elements. They should be able to select a focused action using `}
      <strong>
        {`Space`}
      </strong>
      {` or `}
      <strong>
        {`Enter`}
      </strong>
      {`.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Screen reader users`}
      </strong>
      {` should be able to navigate to the actions on the action list, and they should have text that can be read by a screen reader, or alternative text if they only contain an icon. For alternative text, `}
      <code {...{"className":"ws-code"}}>
        {`aria-label`}
      </code>
      {` is the most common choice.`}
    </p>
    <AutoLinkHeader {...{"id":"to-make-action-list-accessible","size":"h2","className":"ws-title ws-h2"}}>
      {`To make action list accessible:`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Ensure the list is navigable using a keyboard`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Use alternative text if actions do not have their own text that a screen reader can read`}
      </li>
    </ul>
  </React.Fragment>
);
Component.displayName = 'ComponentsActionListAccessibilityDocs';
Component.pageData = pageData;

export default Component;
