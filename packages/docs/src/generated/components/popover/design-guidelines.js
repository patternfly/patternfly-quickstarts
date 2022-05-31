import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport331 from '../../../content/design-guidelines/components/popover/./img/popover-example.png';
import srcImport332 from '../../../content/design-guidelines/components/popover/./img/alert_popover_examples.png';
import srcImport333 from '../../../content/design-guidelines/components/popover/./img/popover-email.png';
import srcImport334 from '../../../content/design-guidelines/components/popover/./img/popovers-colors.png';
import srcImport335 from '../../../content/design-guidelines/components/popover/./img/popovers-2.png';
import srcImport336 from '../../../content/design-guidelines/components/popover/./img/alert_popover_usage.png';
const pageData = {
  "id": "Popover",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/popover/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/popover/popover.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`popover`}
      </strong>
      {` is in-app messaging that provides more information on specific product areas. Popovers display content in a new window that overlays the current page. Unlike modals, popovers don’t block the current page.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Popovers are triggered by a click and dismissed in one of the following ways:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`The user clicks the exit icon.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`The user clicks anywhere on the screen outside the popover.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`The user clicks an action button inside the popover. (Note: This won't always close the popover; it depends on the action button.)`}
      </li>
    </ul>
    <img src={srcImport331} height={srcImport331.height * 300 / srcImport331.width} {...{"alt":"popover example with placeholder text for the title and informational text","width":"300","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`For information on other forms of on-screen help, see `}
      <PatternflyThemeLink {...{"to":"/components/tooltip/design-guidelines"}}>
        {`Tooltip`}
      </PatternflyThemeLink>
      {` and `}
      <PatternflyThemeLink {...{"to":"/components/hint/design-guidelines"}}>
        {`Hint`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <AutoLinkHeader {...{"id":"popover-types","size":"h2","className":"ws-title ws-h2"}}>
      {`Popover types`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Default popovers`}
      </strong>
      {` are plain-text and do not include icons. They are used to convey additional, non-imperative information to the user.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Alert popovers`}
      </strong>
      {` are similar to default popovers, the key difference being the inclusion of status-like headers for the following alert types: default, info, success, warning, and danger.`}
    </p>
    <img src={srcImport332} height={srcImport332.height * 300 / srcImport332.width} {...{"alt":"alert popover examples with placeholder text for the title and informational text","width":"300","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Popovers are commonly used on form field labels, page titles or headings, or table column headings. Use popovers to:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Anticipate and answer questions for the user.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Help explain unfamiliar terms.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Provide context around a task.`}
      </li>
    </ul>
    <img src={srcImport333} height={srcImport333.height * 1500 / srcImport333.width} {...{"alt":"popover for an email address form field explaining what the email address is used for","width":"1500","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`When using a default popover to define a term or explain a concept, use a gray question-circle icon. Upon hover or click, the icon turns black.`}
    </p>
    <img src={srcImport334} height={srcImport334.height * 481 / srcImport334.width} {...{"alt":"Popover icon colors depending on state","width":"481","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`To provide more information to a user without an accompanying UI element, you can add a popover to a linked question.`}
    </p>
    <img src={srcImport335} height={srcImport335.height * 1500 / srcImport335.width} {...{"alt":"popover for a linked question","width":"1500","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Use link button styling for the linked question, and add a blue question-circle icon before it. Clicking the link text triggers a popover, which answers the linked question.`}
    </p>
    <img src={srcImport336} height={srcImport336.height * 1500 / srcImport336.width} {...{"alt":"alert popover opens when user clicks or hovers over an alert label","width":"1500","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`To provide additional information about an alert, use an alert popover. The alert popover will open upon hover or click.`}
    </p>
    <AutoLinkHeader {...{"id":"tooltips-versus-popovers","size":"h2","className":"ws-title ws-h2"}}>
      {`Tooltips versus popovers`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Both `}
      <PatternflyThemeLink {...{"to":"/components/tooltip/design-guidelines"}}>
        {`tooltips`}
      </PatternflyThemeLink>
      {` and popovers provide more information in context for users. However, they’re different in a few ways:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Tooltips are used for identification purposes, while popovers are used for added description or information in context.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Tooltips contain short descriptions or labels, while popovers contain longer descriptions, formatted text, and optional images or links.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Tooltips appear on hover, while popovers appear on click.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"content","size":"h2","className":"ws-title ws-h2"}}>
      {`Content`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Popover copy is longer than tooltip copy, but it should still be concise. Aim for 1–3 sentences.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Write in full sentences with punctuation.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Include relevant links to documentation when necessary.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Use popovers for additional information. Don’t use popovers for information critical to a user completing a task, such as password character requirements.`}
      </li>
    </ul>
  </React.Fragment>
);
Component.displayName = 'ComponentsPopoverDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
