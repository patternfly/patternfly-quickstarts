import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport38 from '../../../content/design-guidelines/components/action-list/./img/action-modal.png';
import srcImport39 from '../../../content/design-guidelines/components/action-list/./img/action-wizard.png';
import srcImport40 from '../../../content/design-guidelines/components/action-list/./img/action-toolbar.png';
const pageData = {
  "id": "Action list",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/action-list/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/action-list/action-list.md"
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
    <AutoLinkHeader {...{"id":"usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use an action list to determine which spacing guidelines to use for a group of actions in `}
      <PatternflyThemeLink {...{"to":"/components/toolbar"}}>
        {`toolbars`}
      </PatternflyThemeLink>
      {`, `}
      <PatternflyThemeLink {...{"to":"/components/modal"}}>
        {`modals`}
      </PatternflyThemeLink>
      {`, `}
      <PatternflyThemeLink {...{"to":"/components/form"}}>
        {`forms`}
      </PatternflyThemeLink>
      {`, `}
      <PatternflyThemeLink {...{"to":"/components/data-list"}}>
        {`data lists`}
      </PatternflyThemeLink>
      {`, `}
      <PatternflyThemeLink {...{"to":"/components/wizard"}}>
        {`wizards`}
      </PatternflyThemeLink>
      {`, and more. Using an action list allows you to know what spacing to use for a group of actions, depending on your use case.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Action lists are especially useful for situations that call for more than standard spacing between elements. For example, buttons are normally separated by 16px, but cases like cancel buttons in wizards call for 48px of spacing from other actions instead. Using an action list upholds spacing guidelines across different use cases.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Action lists are also designed to stack buttons correctly within the space they are in.`}
    </p>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"action-list-for-actions-in-a-modal","size":"h3","className":"ws-title ws-h3"}}>
      {`Action list for actions in a modal`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`In this example, an action list is used for action buttons inside a modal. The action list allows for 16px spacing to be maintained between the action buttons.`}
    </p>
    <img src={srcImport38} height={srcImport38.height * 446 / srcImport38.width} {...{"alt":"Action list used inside of a modal","width":"446","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"action-list-for-actions-in-a-wizard","size":"h3","className":"ws-title ws-h3"}}>
      {`Action list for actions in a wizard`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`In this example, an action list is used for the actions within a wizard. The action list allows for 16px spacing to be maintained between the main action buttons, and 48px of spacing to be maintained between them and the cancel button.`}
    </p>
    <img src={srcImport39} width={srcImport39.width} height={srcImport39.height} {...{"alt":"Action list used inside of a wizard","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"action-list-for-actions-in-a-toolbar","size":"h3","className":"ws-title ws-h3"}}>
      {`Action list for actions in a toolbar`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`In this example, an action list is used for the actions within a toolbar. The action list allows for 16px spacing to be maintained between action buttons.`}
    </p>
    <img src={srcImport40} width={srcImport40.width} height={srcImport40.height} {...{"alt":"Action list used inside of a toolbar","className":"ws-img"}}>
    </img>
  </React.Fragment>
);
Component.displayName = 'ComponentsActionListDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
