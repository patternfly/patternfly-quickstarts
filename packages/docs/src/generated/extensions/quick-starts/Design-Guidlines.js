import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport0 from '../../../content/extensions/quickstarts/./img/card-elements.png';
import srcImport1 from '../../../content/extensions/quickstarts/./img/prerequisites.png';
import srcImport2 from '../../../content/extensions/quickstarts/./img/catalog-elements.png';
import srcImport3 from '../../../content/extensions/quickstarts/./img/mixed-catalog.png';
import srcImport4 from '../../../content/extensions/quickstarts/./img/side-panel-elements.png';
import srcImport5 from '../../../content/extensions/quickstarts/./img/side-panel.png';
import srcImport6 from '../../../content/extensions/quickstarts/./img/side-panel-resized.png';
import srcImport7 from '../../../content/extensions/quickstarts/./img/introduction-screen.png';
import srcImport8 from '../../../content/extensions/quickstarts/./img/task.png';
import srcImport9 from '../../../content/extensions/quickstarts/./img/check-your-work.png';
import srcImport10 from '../../../content/extensions/quickstarts/./img/task-yes.png';
import srcImport11 from '../../../content/extensions/quickstarts/./img/task-no.png';
import srcImport12 from '../../../content/extensions/quickstarts/./img/qs-context.png';
const pageData = {
  "id": "Quick Starts",
  "section": "Extensions",
  "source": "Design-Guidlines",
  "slug": "/extensions/quick-starts/Design-Guidlines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/extensions/quickstarts/design-guidlines.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`quick start`}
      </strong>
      {` is a set of step-by-step instructions and tasks presented in a side panel embedded in a product’s UI. Quick starts can help users get started with a product, and they often provide guidance around installation and setup.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Each task in a quick start has multiple steps, and each quick start has multiple tasks. The outcome of the quick start includes the artifacts or state needed to successfully use the product, specific features, or add-ons.`}
    </p>
    <AutoLinkHeader {...{"id":"elements","size":"h2","className":"ws-title ws-h2"}}>
      {`Elements`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"card","size":"h3","className":"ws-title ws-h3"}}>
      {`Card`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Quick starts are usually surfaced within a `}
      <PatternflyThemeLink {...{"to":"https://www.patternfly.org/v4/components/card/design-guidelines/#cards-in-catalog-views"}}>
        {`catalog`}
      </PatternflyThemeLink>
      {` as clickable cards.`}
    </p>
    <img src={srcImport0} height={srcImport0.height * 370 / srcImport0.width} {...{"alt":"Elements of a card","width":"370","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Icon:`}
        </strong>
        {` An icon associated with the quick start topic can be included on the card. If no specific icon exists, use the rocket icon.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Title:`}
        </strong>
        {` The title briefly communicates what the quick start covers.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Labels:`}
        </strong>
        {` `}
        <PatternflyThemeLink {...{"to":"https://www.patternfly.org/v4/components/label"}}>
          {`Filled labels`}
        </PatternflyThemeLink>
        {` communicate the estimated completion time and status. If the quick start is presented in a mixed catalog of resources, a label can indicate the type of resource.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Description:`}
        </strong>
        {` The description summarizes the quick start outcome in four lines or fewer.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Prerequisites (optional):`}
        </strong>
        {` Prerequisites communicate user requirements prior to starting the quick start. They’re displayed in a popover, and they’re organized into a bulleted list. The total number of prerequisites is listed in parentheses on the quick start card.`}
      </li>
    </ol>
    <img src={srcImport1} height={srcImport1.height * 395 / srcImport1.width} {...{"alt":"Example of prerequisites","width":"395","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"catalog","size":"h3","className":"ws-title ws-h3"}}>
      {`Catalog`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Multiple quick starts are often presented to users in a catalog.`}
    </p>
    <img src={srcImport2} height={srcImport2.height * 1680 / srcImport2.width} {...{"alt":"Quick start catalog","width":"1680","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Catalogs with 14 or fewer quick starts should  include a simple toolbar with the following elements:`}
    </p>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        {`Keyword filter`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Status filter`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Item count`}
      </li>
    </ol>
    <p {...{"className":"ws-p"}}>
      {`Catalogs with 15 or more quick starts should include filtering functionality presented as vertical filters on the left side of the page instead of a simple toolbar.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`For quick starts in a mixed catalog of resources, we recommend including an action link on the card so that users can easily recognize how to interact with it:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Start:`}
        </strong>
        {` Use if the quick start hasn't been started yet`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Continue:`}
        </strong>
        {` Use if the quick start is in progress`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Restart:`}
        </strong>
        {` Use if the quick start has already been completed`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`There should only be one action displayed on a card at a time.`}
    </p>
    <img src={srcImport3} height={srcImport3.height * 1062 / srcImport3.width} {...{"alt":"Mixed resource catalog","width":"1062","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"side-panel","size":"h3","className":"ws-title ws-h3"}}>
      {`Side panel`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Quick starts use the `}
      <PatternflyThemeLink {...{"to":"https://www.patternfly.org/v4/components/drawer"}}>
        {`drawer component`}
      </PatternflyThemeLink>
      {`, which contains all the step-by-step instructions and tasks.`}
    </p>
    <img src={srcImport4} height={srcImport4.height * 449 / srcImport4.width} {...{"alt":"Side panel elements","width":"449","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Quick start title:`}
        </strong>
        {` The quick start title that is shown on the card.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Duration:`}
        </strong>
        {` The estimated amount of time the quick start will take to complete.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Close:`}
        </strong>
        {` The close button allows the user to close the quick start at any time.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Button bar:`}
        </strong>
        {` The button bar allows the user to advance between quick start tasks. For task screens, the buttons are `}
        <strong>
          {`Next`}
        </strong>
        {`, `}
        <strong>
          {`Back`}
        </strong>
        {`, and `}
        <strong>
          {`Restart`}
        </strong>
        {`. For the intro screen, the only button is the `}
        <strong>
          {`Start`}
        </strong>
        {` button. On the completion screen, the buttons are `}
        <strong>
          {`Close`}
        </strong>
        {`, `}
        <strong>
          {`Back`}
        </strong>
        {`, and `}
        <strong>
          {`Restart`}
        </strong>
        {`.`}
      </li>
    </ol>
    <p {...{"className":"ws-p"}}>
      {`Everything is contained in the drawer and remains anchored to the right, allowing the user to follow the steps without blocking any parts of the UI. The drawer does not overlay the UI and instead pushes it to the left, including the masthead. This prevents any modals or side panels within the UI from covering the quick start instructions. The side panel is also resizable.`}
    </p>
    <img src={srcImport5} height={srcImport5.height * 1680 / srcImport5.width} {...{"alt":"Side panel","width":"1680","className":"ws-img"}}>
    </img>
    <img src={srcImport6} height={srcImport6.height * 1680 / srcImport6.width} {...{"alt":"Resized side panel","width":"1680","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"introduction-screen","size":"h4","className":"ws-title ws-h4"}}>
      {`Introduction screen`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The first screen of any quick start is the introductory screen, which includes most of the information from the quick start card.`}
    </p>
    <img src={srcImport7} height={srcImport7.height * 449 / srcImport7.width} {...{"alt":"Introduction screen","width":"449","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"tasks","size":"h4","className":"ws-title ws-h4"}}>
      {`Tasks`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Tasks consist of 2-10 steps, which walk the user through the UI to complete the goal of the task.`}
    </p>
    <img src={srcImport8} height={srcImport8.height * 449 / srcImport8.width} {...{"alt":"Example task","width":"449","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"check-your-work","size":"h4","className":"ws-title ws-h4"}}>
      {`Check your work`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The check your work module is shown at the bottom of the side panel for each task and helps the user validate that they have successfully completed the task. You can choose to make the check your work module required or optional. Validation questions should be yes/no questions, allowing the user to select the radio button with the appropriate response.`}
    </p>
    <img src={srcImport9} height={srcImport9.height * 431 / srcImport9.width} {...{"alt":"Check your work module","width":"431","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`If a user selects `}
      <strong>
        {`Yes`}
      </strong>
      {`, the check your work module and associated task header turn green. The task header icon becomes a checkmark.`}
    </p>
    <img src={srcImport10} height={srcImport10.height * 449 / srcImport10.width} {...{"alt":"Check your work module with Yes selected","width":"449","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`If a user selects `}
      <strong>
        {`No`}
      </strong>
      {`, the check your work module and associated task header turn red. The task header icon becomes an `}
      <strong>
        {`X`}
      </strong>
      {`. When possible, explain what a user must do to complete the task, or link to relevant documentation.`}
    </p>
    <img src={srcImport11} height={srcImport11.height * 449 / srcImport11.width} {...{"alt":"Check your work module with No selected","width":"449","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"content-guidelines","size":"h2","className":"ws-title ws-h2"}}>
      {`Content guidelines`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Here are some general guidelines to follow when authoring quick start content:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Clearly state the outcome at the beginning of the quick start and provide brief context to explain why the user is completing the tasks.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Avoid screen captures. They require regular maintenance and can potentially lead to issues around accessibility and page loading.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Keep content minimal to avoid a wall of text that can overwhelm users and prevent easy skimming.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`(Optional) As needed, provide a carefully curated set of links at specific points in the quick start:`}
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Provide links within a quick start task if the user is likely to need or want more conceptual or reference information.`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Provide links at the end of quick starts if the user is likely to need or want additional technical  information upon completion.`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Provide links in the check your work module when a user answers `}
            <strong>
              {`No`}
            </strong>
            {` if more robust information can help the user understand what actions they must take to complete the task.`}
          </li>
        </ul>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`For more specific quick start content guidelines, refer to the `}
      <PatternflyThemeLink {...{"to":"https://docs.openshift.com/container-platform/4.7/web_console/creating-quick-start-tutorials.html"}}>
        {`Red Hat OpenShift documentation`}
      </PatternflyThemeLink>
      {`. While these guidelines are geared towards Red Hat OpenShift, they can apply to quick starts in any products.`}
    </p>
    <AutoLinkHeader {...{"id":"quick-starts-in-context","size":"h2","className":"ws-title ws-h2"}}>
      {`Quick starts in context`}
    </AutoLinkHeader>
    <img src={srcImport12} height={srcImport12.height * 1680 / srcImport12.width} {...{"alt":"A quick start in context of a UI","width":"1680","className":"ws-img"}}>
    </img>
  </React.Fragment>
);
Component.displayName = 'ExtensionsQuickStartsDesignGuidlinesDocs';
Component.pageData = pageData;

export default Component;
