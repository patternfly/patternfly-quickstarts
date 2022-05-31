import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport448 from '../../../content/design-guidelines/components/wizard/./img/modal-wizard.png';
import srcImport449 from '../../../content/design-guidelines/components/wizard/./img/wizard-in-page.png';
import srcImport450 from '../../../content/design-guidelines/components/wizard/./img/standard-wizard.png';
import srcImport451 from '../../../content/design-guidelines/components/wizard/./img/wizard-with-substeps.png';
import srcImport452 from '../../../content/design-guidelines/components/wizard/./img/wizard-with-optional-steps.png';
import srcImport453 from '../../../content/design-guidelines/components/wizard/./img/review-screen.png';
import srcImport454 from '../../../content/design-guidelines/components/wizard/./img/progress-screen.png';
import srcImport455 from '../../../content/design-guidelines/components/wizard/./img/completion-screen.png';
import srcImport456 from '../../../content/design-guidelines/components/wizard/./img/mobile-wizard.png';
import srcImport457 from '../../../content/design-guidelines/components/wizard/./img/wizard-in-page.png';
import srcImport458 from '../../../content/design-guidelines/components/wizard/./img/wizard-progressive-step1.png';
import srcImport459 from '../../../content/design-guidelines/components/wizard/./img/wizard-progressive-step2-new.png';
import srcImport460 from '../../../content/design-guidelines/components/wizard/./img/wizard-progressive-step3-new.png';
const pageData = {
  "id": "Wizard",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/wizard/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/wizard/wizard.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`wizard`}
      </strong>
      {` provides a guided workflow that offers a path to complete a task, create an object or objects, or finish a series of steps for some other outcome. Wizards should incite trust in the user and guide them through an otherwise overwhelming experience.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Use a wizard when`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`The task is long/complex and benefits from being broken into smaller more manageable steps. This allows the user to focus on smaller tasks and not feel overwhelmed.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`There is a known step by step order of tasks, and these steps can be broken up into clearly defined categories/sections which can be indicated via labels on the steps.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`This process is prescriptive. The actions a user takes in one step influence downstream steps.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`A simple form is not sufficient to aid a user in completing a task`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Avoid using a wizard for simple data entry tasks in which a basic form would suffice.`}
    </p>
    <AutoLinkHeader {...{"id":"types-of-wizards","size":"h2","className":"ws-title ws-h2"}}>
      {`Types of wizards`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Wizards can be modal or placed within the content area of a page.`}
    </p>
    <AutoLinkHeader {...{"id":"modal-wizards","size":"h3","className":"ws-title ws-h3"}}>
      {`Modal wizards`}
    </AutoLinkHeader>
    <img src={srcImport448} width={srcImport448.width} height={srcImport448.height} {...{"alt":"Modal wizard","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`The modal wizard lives in a modal dialog. If necessary, the default width and height of the modal can be overridden to increase that available content area. In most cases, the modal wizard is recommended as it will keep users focused on the task at hand. Users must either complete all of the steps of the wizard or cancel before navigating elsewhere within an application.`}
    </p>
    <AutoLinkHeader {...{"id":"in-page-wizards","size":"h3","className":"ws-title ws-h3"}}>
      {`In-page wizards`}
    </AutoLinkHeader>
    <img src={srcImport449} width={srcImport449.width} height={srcImport449.height} {...{"alt":"In-page wizard","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Wizards can also be added to the content area of a page. This will allow greater flexibility in navigating to other locations in your application while within a wizard flow, but it also places greater responsibility on the system to manage state.`}
    </p>
    <AutoLinkHeader {...{"id":"elements-of-a-wizard","size":"h2","className":"ws-title ws-h2"}}>
      {`Elements of a wizard`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Except where noted, modal and in-page wizards have the same elements and behaviors. For the sake of simplicity, all screens here show the modal wizard.`}
    </p>
    <AutoLinkHeader {...{"id":"simple-wizard","size":"h3","className":"ws-title ws-h3"}}>
      {`Simple wizard`}
    </AutoLinkHeader>
    <img src={srcImport450} width={srcImport450.width} height={srcImport450.height} {...{"alt":"Simple wizard","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Header (modal wizard only):`}
        </strong>
        {` Modal wizards always have a header area that minimally contains the wizard title and a close button. The title should be action oriented and reflect the intended outcome of the wizard, such as "Create resource." You may optionally also include a description below the wizard title.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Steps sidebar:`}
        </strong>
        {` Enumerated steps are displayed in the sidebar. Steps can be fixed or updated as the user proceeds through the process (see progressive wizard).`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Visited step:`}
        </strong>
        {` A step that has been already visited. In most cases users can click this step to return to a prior point in the flow.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Current step:`}
        </strong>
        {` The current step is always highlighted.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Disabled step:`}
        </strong>
        {` Steps that follow the current step are usually disabled to enforce the sequential flow.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Step title:`}
        </strong>
        {` The Step title is unique to each step, and should reinforce the outcome of the individual step. It may match the Current step indicated in the steps sidebar, or as in the example image, it may be more verbose.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Body:`}
        </strong>
        {` The contents of a step itself. Any valid form elements can be incorporated within the body. The size of the modal that contains the wizard can be adjusted based on the contents of the body section. If the height of the body section causes the bottom of the modal to push beyond the height of the viewport, a vertical scrollbar will appear. However it is recommended to break your workflow into small enough steps so that scrolling is not necessary on typical monitor sizes.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Button footer:`}
        </strong>
        {` Buttons control the wizard flow. Default buttons are "Next," "Back," and "Cancel." You may optionally add other actions, such as "Skip to finish" or "Start over." There should only be one primary action in the footer and it should be the farthest left action.`}
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"behavior","size":"h4","className":"ws-title ws-h4"}}>
      {`Behavior`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`In a standard wizard the user moves through the wizard sequentially, a step at a time. The Next button is always used to advance the wizard. In addition:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`The "Back" button is disabled on the first page of the wizard.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`To abandon the wizard, the user selects "Cancel" in the button footer or the "Close" button in the header. Closing the wizard will discard current changes, so it may be appropriate to insert a confirmation message before executing this operation.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Wizard steps are skippable if the user configures them to be.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`The user can jump to steps directly if the user clicks on a step in the nav (if the step is not disabled).`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"wizard-with-sub-steps","size":"h3","className":"ws-title ws-h3"}}>
      {`Wizard with sub-steps`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Sub-steps can be added to the sidebar. Use sub-steps when there is a hierarchical relationship between a group of steps, if a primary step contains too much content to be displayed on one page, or when there is a set of optional settings that make sense to group together where the user need not visit each page.`}
    </p>
    <img src={srcImport451} width={srcImport451.width} height={srcImport451.height} {...{"alt":"Wizard with substeps","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Sub-steps:`}
        </strong>
        {` Sub-steps are always nested inside of a major step.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Expansion (optional):`}
        </strong>
        {` Sub-steps may be shown or hidden using the caret next to the parent step.`}
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"behavior-0","size":"h4","className":"ws-title ws-h4"}}>
      {`Behavior`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`You may force the user to execute sub-steps in order by disabling future steps. Or enable all steps if the user should be able to click freely between sub-steps.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`Clicking "Next" or "Back" should navigate through the sub-steps as it would for the major steps.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`If an expansion is used, sub-steps are hidden unless the user expands the parent step or has naturally arrived at the first of the sub-steps.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`Parent steps are automatically closed once they are complete. However, the user can manually expand the parent back open at any time to see the sub-steps again while staying in context of their current step.`}
        </p>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"wizard-with-optional-steps","size":"h3","className":"ws-title ws-h3"}}>
      {`Wizard with optional steps`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Optional steps can be added to the wizard. Make steps optional when they do not need to be filled out to complete the wizard.`}
    </p>
    <img src={srcImport452} width={srcImport452.width} height={srcImport452.height} {...{"alt":"Wizard with optional steps","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Optional steps:`}
        </strong>
        {` It's recommended to group all optional steps under one parent step.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tooltip (optional):`}
        </strong>
        {` This tooltip is optional, but recommended. It would help explain that the following steps in the wizard are not required and would give more context to the new "Review and finish" button.`}
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"behavior-1","size":"h4","className":"ws-title ws-h4"}}>
      {`Behavior`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`The review step is enabled once all required steps have been filled out.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`Once required steps have been filled, a tertiary button would appear to the right of the next/back buttons. Once clicked, this button would jump users ahead to the final review step.`}
        </p>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"review-and-completion","size":"h3","className":"ws-title ws-h3"}}>
      {`Review and completion`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The last step in a wizard should always be a review step. This step should include a summary of what the user has input so the user may confirm them before committing their changes.`}
    </p>
    <img src={srcImport453} width={srcImport453.width} height={srcImport453.height} {...{"alt":"Review screen","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Review step`}
        </strong>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Finish button:`}
        </strong>
        {` On the last step of the wizard, the Next button is labeled Finish by default. This is a configurable choice and should be replaced by a more specific verb or verb-object word pair like “Create” or “Configure networks,” when possible.`}
      </li>
    </ol>
    <p {...{"className":"ws-p"}}>
      {`If it will take a long time (more than a few seconds) for changes to be applied, a progress screen is recommended. This can be constructed from a variation of the `}
      <PatternflyThemeLink {...{"to":"/components/empty-state/design-guidelines"}}>
        {`empty state`}
      </PatternflyThemeLink>
      {` pattern by embedding a progress bar and appropriate messaging within the body of the wizard.`}
    </p>
    <img src={srcImport454} width={srcImport454.width} height={srcImport454.height} {...{"alt":"Progress screen","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Progress message:`}
        </strong>
        {` Include a progress bar with appropriate messaging using an empty state pattern.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Cancel button (optional):`}
        </strong>
        {` Include a cancel button only if the operation can be terminated once it is started. Cancel should back out all changes and leave the system in the state that existed before the user launched the wizard.`}
      </li>
    </ol>
    <p {...{"className":"ws-p"}}>
      {`Note that once changes have been committed, the steps sidebar is hidden and the user can no longer make changes.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Once the changes initiated by the wizard are completed, a final confirmation screen should be displayed. Again, this can leverage an empty state pattern to present a success (or failure) message to users.`}
    </p>
    <img src={srcImport455} width={srcImport455.width} height={srcImport455.height} {...{"alt":"Completion screen","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Completion message:`}
          </strong>
          {` Provide appropriate messaging to inform the user about the outcome of the wizard.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Primary action:`}
          </strong>
          {` In most cases this will be a navigational button to close the wizard and take the user to a page where they can see the results of their changes, e.g. a new project that was created. If there is no appropriate destination or if results will be seen on the current page, make the primary action Close.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Secondary action(s) (optional):`}
          </strong>
          {` If the primary action is other than Close, include a Close button here to close the wizard and return to the prior page. Other secondary actions can also be included. See `}
          <PatternflyThemeLink {...{"to":"/components/empty-state"}}>
            {`empty state guidelines`}
          </PatternflyThemeLink>
          {` for button placement.`}
        </p>
      </li>
    </ol>
    <p {...{"className":"ws-p"}}>
      {`In some cases the result of a wizard is to dispatch a task to the background to execute changes in the back end. In these circumstances, we recommend that you provide a navigation link to monitor task progress and/or simply a Close button.`}
    </p>
    <AutoLinkHeader {...{"id":"mobile-considerations","size":"h3","className":"ws-title ws-h3"}}>
      {`Mobile considerations`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`When viewing a wizard on a mobile device, the steps sidebar will be hidden and collapse into a drop down menu panel as shown below.`}
    </p>
    <img src={srcImport456} width={srcImport456.width} height={srcImport456.height} {...{"alt":"Mobile wizard","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"in-page-wizard","size":"h3","className":"ws-title ws-h3"}}>
      {`In-page wizard`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A wizard may be embedded in a page as shown below.`}
    </p>
    <img src={srcImport457} width={srcImport457.width} height={srcImport457.height} {...{"alt":"In-page wizard","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Note that when a wizard is embedded into a page, the wizard title and description are placed within the page header. The same standards that were defined for usage of the title and description for modal wizards should be applied here.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`When a wizard is placed in the context of a page, it allows some freedom that is not available using the standard modal approach.`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Modals may be opened from the wizard to examine required information or perform subtask that are related to, but not part of, the wizard workflow.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`User can navigate away from the wizard to look up information or perform some prerequisite task.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Be aware that anytime the user navigates aways from the wizard, there is a risk that any information entered up until that point will be lost. At a minimum, we recommend opening a modal alert when the user tries to do this warning of potential data loss and confirming that they want to leave the wizard. Optionally you should consider including a "Save as draft" feature that will allow work in progress to be saved and recalled upon returning to the wizard.`}
    </p>
    <AutoLinkHeader {...{"id":"progressive-wizard","size":"h3","className":"ws-title ws-h3"}}>
      {`Progressive wizard`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A progressive wizard takes the same form as the standard wizard or wizard with sub-steps above but accommodates a situation where the exact number of steps is not known when the wizard is first loaded. Steps in the sidebar can be changed or added as the user progresses through the wizard.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`A walk-through of a progressive wizard might look like this:`}
    </p>
    <img src={srcImport458} width={srcImport458.width} height={srcImport458.height} {...{"alt":"Wizard progressive step 1","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Step 1: The user is presented with a Get started screen where they can specify what they want to do.`}
    </p>
    <img src={srcImport459} width={srcImport459.width} height={srcImport459.height} {...{"alt":"Wizard progressive step 2","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Step 2: Based on their choice to create a new object, a user is presented with a second set of options. But the remaining steps are still unknown.`}
    </p>
    <img src={srcImport460} width={srcImport460.width} height={srcImport460.height} {...{"alt":"Wizard progressive step 3","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Step 3: After the user chooses “Quick create” and clicks "Next," they can now be presented with a full set of steps. It should be possible to revisit either of the first two steps making different choices and steps shown should update accordingly.`}
    </p>
    <AutoLinkHeader {...{"id":"content","size":"h2","className":"ws-title ws-h2"}}>
      {`Content`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`You should keep the following in mind while designing your wizard screens:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Keep step labels short. The title at the top of each screen may be used to elaborate on the step label, but in all cases there should be a direct relationship between the step label and the screen title.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`The last step should always be labeled review.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Default button labels for wizard navigation are: "Next," "Back," and "Finish." If you are replacing the default button labels, keep them short and action oriented, such as “Create network.”`}
      </li>
    </ul>
  </React.Fragment>
);
Component.displayName = 'ComponentsWizardDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
