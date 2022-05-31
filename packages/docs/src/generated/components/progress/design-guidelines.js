import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport337 from '../../../content/design-guidelines/components/progress/./img/progress-bar-callouts.png';
import srcImport338 from '../../../content/design-guidelines/components/progress/./img/progress_bar_blue_animated.gif';
import srcImport339 from '../../../content/design-guidelines/components/progress/./img/progress-bar-in-progress.png';
import srcImport340 from '../../../content/design-guidelines/components/progress/./img/progress-bar-error-state.png';
import srcImport341 from '../../../content/design-guidelines/components/progress/./img/progress-bar-complete.png';
import srcImport342 from '../../../content/design-guidelines/components/progress/./img/progress-bar-right-aligned-progress-value.png';
import srcImport343 from '../../../content/design-guidelines/components/progress/./img/progress-bar-left-aligned-progress-value.png';
import srcImport344 from '../../../content/design-guidelines/components/progress/./img/progress-bar-do-dont.png';
import srcImport345 from '../../../content/design-guidelines/components/progress/./img/progress-bar-in-table.png';
import srcImport346 from '../../../content/design-guidelines/components/progress/./img/progress-bar-in-dashboard.png';
import srcImport347 from '../../../content/design-guidelines/components/progress/./img/progress-bar-during-file-download.png';
import srcImport348 from '../../../content/design-guidelines/components/progress/./img/progress-bar-in-wizard.png';
const pageData = {
  "id": "Progress",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/progress/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/progress/progress.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`progress bar`}
      </strong>
      {` informs users about the completion status of an ongoing process or task.`}
    </p>
    <AutoLinkHeader {...{"id":"elements","size":"h2","className":"ws-title ws-h2"}}>
      {`Elements`}
    </AutoLinkHeader>
    <img src={srcImport337} height={srcImport337.height * 608 / srcImport337.width} {...{"alt":"A progress bar with arrows pointing to each of its four elements: Its title, track, progress value, and indicator.","width":"608","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Title:`}
        </strong>
        {` Describes the task or process underway.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Track:`}
        </strong>
        {` Illustrates the path from task start (empty) to task completion (full).`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Progress value:`}
        </strong>
        {` Quantifies progress by sharing a completion percentage or time remaining. For long task sequences, progress value may be used to communicate where a user is in that sequence: “Step 1 of 6.”`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Indicator:`}
        </strong>
        {` Animates the user’s progress toward completion.`}
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use a progress bar to keep users informed about how much effort or time they can expect to allocate for long or ongoing processes like loading or updating an app, submitting a form, or completing a multi-step tutorial.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Use a progress bar when:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`A user must complete a series of tasks and will want indication that they are making progress.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`A user needs indication that the system is progressing through loading, saving, or downloading.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`A user needs to monitor a background process, especially if that process may take a long time.`}
        </p>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Depending on your use case, you might choose between 2 types of loading indicators: Progress bars and `}
      <PatternflyThemeLink {...{"to":"/components/spinner"}}>
        {`spinners`}
      </PatternflyThemeLink>
      {`. Never use a progress bar and spinner together.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Default to progress bars for processes that take longer than 4 seconds or require more specific information about process completion. If a process takes less than four seconds, use a `}
      <PatternflyThemeLink {...{"to":"/components/spinner"}}>
        {`spinner`}
      </PatternflyThemeLink>
      {` instead.`}
    </p>
    <AutoLinkHeader {...{"id":"variations","size":"h2","className":"ws-title ws-h2"}}>
      {`Variations`}
    </AutoLinkHeader>
    <img src={srcImport338} {...{"alt":"An animated progress bar demonstrates how a progress track fills and progress value increases as a process moves toward completion.","width":"500","height":"300","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"determinate-progress-bar","size":"h3","className":"ws-title ws-h3"}}>
      {`Determinate progress bar`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Whenever possible, use a determinate progress bar to communicate progress with measurable values like time or percentage.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Use a percentage as a progress value if the process will take less than a minute to complete or a percentage will be more accurate than estimating a task’s duration.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Use a time interval value such as “4 minutes remaining” to communicate progress if the process takes more than one minute to complete.`}
    </p>
    <AutoLinkHeader {...{"id":"indeterminate-progress-bar","size":"h3","className":"ws-title ws-h3"}}>
      {`Indeterminate progress bar`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Avoid using indeterminate progress bars to communicate progress that can’t be measured. To track progress that can’t be quantified with a percentage, time, or step, use a `}
      <PatternflyThemeLink {...{"to":"/components/spinner"}}>
        {`spinner`}
      </PatternflyThemeLink>
      {` instead.`}
    </p>
    <AutoLinkHeader {...{"id":"styling-for-statuses","size":"h2","className":"ws-title ws-h2"}}>
      {`Styling for statuses`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Styling for progress bar statuses should follow accessibility guidelines by communicating each state through several messaging types: Color, microcopy, and icons.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Follow these general style guidelines when designing your progress bars. For information about writing progress bar titles for each status type, see the `}
      <PatternflyThemeLink {...{"to":"#content"}}>
        {`Content`}
      </PatternflyThemeLink>
      {` section.`}
    </p>
    <AutoLinkHeader {...{"id":"in-progress","size":"h3","className":"ws-title ws-h3"}}>
      {`In progress`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A blue progress bar represents a process that is currently underway.`}
    </p>
    <img src={srcImport339} height={srcImport339.height * 560 / srcImport339.width} {...{"alt":"An example of a progress bar in an 'in progress' state, with a blue track and a title that indicates its status: 'Validating account credentials.'","width":"560","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"error-state-or-failure","size":"h3","className":"ws-title ws-h3"}}>
      {`Error state or failure`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A red progress bar represents a process that has failed. Accompany a failed progress bar with a `}
      <PatternflyThemeLink {...{"to":"/guidelines/icons/#all-icons"}}>
        {`red danger icon`}
      </PatternflyThemeLink>
      {` to demonstrate that an error occurred in the process.`}
    </p>
    <img src={srcImport340} height={srcImport340.height * 560 / srcImport340.width} {...{"alt":"An example of a progress bar in an error or failed state, with a red track, optional danger icon, and a title that indicates its status: 'Could not validate account credentials.'","width":"560","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"complete-or-success","size":"h3","className":"ws-title ws-h3"}}>
      {`Complete or success`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A green progress bar represents the successful completion of a process. Accompany a complete progress bar with a `}
      <PatternflyThemeLink {...{"to":"/guidelines/icons/#all-icons"}}>
        {`green check-circle icon`}
      </PatternflyThemeLink>
      {` to demonstrate that the process has finished with no errors.`}
    </p>
    <img src={srcImport341} height={srcImport341.height * 560 / srcImport341.width} {...{"alt":"An example of a progress bar in a complete or successful state, with a green track, optional check-circle icon, and a title that indicates its status: 'Validated account credentials.'","width":"560","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"spacing-and-alignment","size":"h2","className":"ws-title ws-h2"}}>
      {`Spacing and alignment`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Right-align progress value text when it’s placed above the progress track, in line with the title.`}
    </p>
    <img src={srcImport342} height={srcImport342.height * 560 / srcImport342.width} {...{"alt":"A visual example of a progress bar with right-aligned progress value text above the progress track.","width":"560","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Left-align progress value text when it’s placed to the right of the track.`}
    </p>
    <img src={srcImport343} height={srcImport343.height * 616 / srcImport343.width} {...{"alt":"A visual example of a progress bar with left-aligned progress value text in line with the progress track.","width":"616","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Always set an “outside fixed width measure” for determinate progress bars. This fixed spacing should solve alignment use cases in which stacked progress bar values vary in length.`}
    </p>
    <AutoLinkHeader {...{"id":"placement","size":"h2","className":"ws-title ws-h2"}}>
      {`Placement`}
    </AutoLinkHeader>
    <img src={srcImport344} height={srcImport344.height * 1135 / srcImport344.width} {...{"alt":"A visual example of how to successfully place a progress bar in your designs, side by side with an example of unsuccessful placement. Never isolate a progress bar above, below, or outside of its corresponding content view — always align it with its relevant content.","width":"1135","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Always place progress bars in alignment with their relevant context, such as the feature, function, or task they reflect. Keep progress bars within the user’s line of sight: Never isolate a progress bar at the top or bottom of a page, or outside of its relevant content view.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Use progress bars to communicate progress in a variety of contexts including:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"#in-a-table"}}>
          {`In a table`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"#in-a-dashboard-view"}}>
          {`In a dashboard view`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"#during-a-file-download"}}>
          {`During a file download`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"#in-a-wizard"}}>
          {`In a wizard`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"in-a-table","size":"h3","className":"ws-title ws-h3"}}>
      {`In a table`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use a progress bar in a table to communicate the status of processes or tasks within it.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Place a progress bar into a table just as you would other table content. If a progress bar records the progress of multiple line items, group these items in adjoining cells and keep the progress bar in-line with the first item it pertains to. For multi-item progress bars that apply to non-consecutive items, consider adding a progress bar in-line with each individual item.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`If your table includes multiple progress bars, designate a “Status” or “Progress” column for each one.`}
    </p>
    <img src={srcImport345} height={srcImport345.height * 543 / srcImport345.width} {...{"alt":"A visual example of how to successfully place progress bars in a table.","width":"543","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"in-a-dashboard-view","size":"h3","className":"ws-title ws-h3"}}>
      {`In a dashboard view`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use a progress bar in a dashboard view to track the progress trends within each card component on a page.`}
    </p>
    <img src={srcImport346} height={srcImport346.height * 543 / srcImport346.width} {...{"alt":"A visual example of how to successfully place progress bars in dashboard views.","width":"543","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"during-a-file-download","size":"h3","className":"ws-title ws-h3"}}>
      {`During a file download`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use a `}
      <PatternflyThemeLink {...{"to":"/components/alert/design-guidelines/#using-toast-alerts"}}>
        {`toast notification`}
      </PatternflyThemeLink>
      {` and a progress bar to demonstrate progress during a file download.`}
    </p>
    <img src={srcImport347} height={srcImport347.height * 543 / srcImport347.width} {...{"alt":"A visual example of how to successfully place progress bars in toast alerts to communicate progress during a file download.","width":"543","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"in-a-wizard","size":"h3","className":"ws-title ws-h3"}}>
      {`In a wizard`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Never`}
      </strong>
      {` use a progress bar in a wizard to indicate progress through wizard steps, since a wizard’s steps sidebar already communicates this information.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Only use a progress bar in a wizard if its final validation process will take more than a few seconds. As users wait for their changes to be processed, display a progress screen that includes a progress title, progress bar, and an optional 1-2 sentence description to provide more details about the validation step or give users a better idea of how long this process might take.`}
    </p>
    <img src={srcImport348} height={srcImport348.height * 543 / srcImport348.width} {...{"alt":"A visual example of how to successfully place a progress bar in a wizard to express a final validation process.","width":"543","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`To learn more about using progress bars in wizard validation progress screens, see our `}
      <PatternflyThemeLink {...{"to":"/components/wizard/design-guidelines"}}>
        {`wizard guidelines`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <AutoLinkHeader {...{"id":"content","size":"h2","className":"ws-title ws-h2"}}>
      {`Content`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Progress bars should be self-explanatory and therefore include minimal written content: A title and an optional progress value.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`In some use cases, longer progress bars might feature multiple lines of copy that change as a process moves through several phases. Default to one title per progress bar, unless your progress bar measures a multi-step process or procedure that isn’t detailed elsewhere.`}
    </p>
    <AutoLinkHeader {...{"id":"titles","size":"h3","className":"ws-title ws-h3"}}>
      {`Titles`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Keep progress bar titles short and specific, between 1-3 words. Use verbs that clearly communicate each process and avoid using generalizations like “This may take a few minutes.”`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Never punctuate progress bar titles, since they consist of fragments, not full sentences. Avoid using ellipses to communicate a loading state — progress bars indicate a process is “in progress” on their own.`}
    </p>
    <div className="ws-content-table">
      <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
        <thead>
          <tr {...{"role":"row"}}>
            <th {...{"align":"center","className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
              <div>
                <strong>
                  {`Do`}
                </strong>
              </div>
            </th>
            <th {...{"align":"center","className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
              <div>
                <strong>
                  {`Don't`}
                </strong>
              </div>
            </th>
          </tr>
        </thead>
        <tbody {...{"role":"rowgroup"}}>
          <tr {...{"role":"row"}}>
            <td {...{"align":"center","role":"cell","data-label":"Do"}}>
              <div>
                {`Downloading `}
                {`[application name]`}
              </div>
            </td>
            <td {...{"align":"center","role":"cell","data-label":"Don't"}}>
              <div>
                {`Your application is downloading...`}
              </div>
            </td>
          </tr>
          <tr {...{"role":"row"}}>
            <td {...{"align":"center","role":"cell","data-label":"Do"}}>
              <div>
                {`Creating cache`}
              </div>
            </td>
            <td {...{"align":"center","role":"cell","data-label":"Don't"}}>
              <div>
                {`This may take a few minutes...`}
              </div>
            </td>
          </tr>
          <tr {...{"role":"row"}}>
            <td {...{"align":"center","role":"cell","data-label":"Do"}}>
              <div>
                {`Validating account credentials`}
              </div>
            </td>
            <td {...{"align":"center","role":"cell","data-label":"Don't"}}>
              <div>
                {`We're validating your account credentials`}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
</div>
    <p {...{"className":"ws-p"}}>
      {`In addition to status styling, use verb tense to communicate the state of a process: In progress, failed, or complete.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`For `}
      <strong>
        {`in progress`}
      </strong>
      {` statuses, write your progress bar title with present participles (—ing) to share that a process is underway. Avoid passive voice by starting each title with the present participle ("-ing") form of your task’s verb.`}
    </p>
    <div className="ws-content-table">
      <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
        <thead>
          <tr {...{"role":"row"}}>
            <th {...{"align":"center","className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
              <div>
                <strong>
                  {`Do`}
                </strong>
              </div>
            </th>
            <th {...{"align":"center","className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
              <div>
                <strong>
                  {`Don't`}
                </strong>
              </div>
            </th>
          </tr>
        </thead>
        <tbody {...{"role":"rowgroup"}}>
          <tr {...{"role":"row"}}>
            <td {...{"align":"center","role":"cell","data-label":"Do"}}>
              <div>
                {`Installing cluster`}
              </div>
            </td>
            <td {...{"align":"center","role":"cell","data-label":"Don't"}}>
              <div>
                {`Cluster is installing`}
              </div>
            </td>
          </tr>
          <tr {...{"role":"row"}}>
            <td {...{"align":"center","role":"cell","data-label":"Do"}}>
              <div>
                {`Creating cache`}
              </div>
            </td>
            <td {...{"align":"center","role":"cell","data-label":"Don't"}}>
              <div>
                {`Cluster creation in progress`}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
</div>
    <p {...{"className":"ws-p"}}>
      {`For `}
      <strong>
        {`failed`}
      </strong>
      {` statuses, write your progress bar title in past tense. Avoid telling users a process “failed” in favor of providing a more specific description.`}
    </p>
    <div className="ws-content-table">
      <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
        <thead>
          <tr {...{"role":"row"}}>
            <th {...{"align":"center","className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
              <div>
                <strong>
                  {`Do`}
                </strong>
              </div>
            </th>
            <th {...{"align":"center","className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
              <div>
                <strong>
                  {`Don't`}
                </strong>
              </div>
            </th>
          </tr>
        </thead>
        <tbody {...{"role":"rowgroup"}}>
          <tr {...{"role":"row"}}>
            <td {...{"align":"center","role":"cell","data-label":"Do"}}>
              <div>
                {`Could not install cluster`}
              </div>
            </td>
            <td {...{"align":"center","role":"cell","data-label":"Don't"}}>
              <div>
                {`Cluster installation failed`}
              </div>
            </td>
          </tr>
          <tr {...{"role":"row"}}>
            <td {...{"align":"center","role":"cell","data-label":"Do"}}>
              <div>
                {`Could not validate account credentials`}
              </div>
            </td>
            <td {...{"align":"center","role":"cell","data-label":"Don't"}}>
              <div>
                {`Account validation unsuccessful`}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
</div>
    <p {...{"className":"ws-p"}}>
      {`For `}
      <strong>
        {`complete`}
      </strong>
      {` statuses, write your progress bar title in past tense. Use this brief line to confirm that a process or task succeeded. Avoid using adverbs like “successfully” by simply stating the action happened.`}
    </p>
    <div className="ws-content-table">
      <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
        <thead>
          <tr {...{"role":"row"}}>
            <th {...{"align":"center","className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
              <div>
                <strong>
                  {`Do`}
                </strong>
              </div>
            </th>
            <th {...{"align":"center","className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
              <div>
                <strong>
                  {`Don't`}
                </strong>
              </div>
            </th>
          </tr>
        </thead>
        <tbody {...{"role":"rowgroup"}}>
          <tr {...{"role":"row"}}>
            <td {...{"align":"center","role":"cell","data-label":"Do"}}>
              <div>
                {`Cluster installed`}
              </div>
            </td>
            <td {...{"align":"center","role":"cell","data-label":"Don't"}}>
              <div>
                {`Installation is complete`}
              </div>
            </td>
          </tr>
          <tr {...{"role":"row"}}>
            <td {...{"align":"center","role":"cell","data-label":"Do"}}>
              <div>
                {`Validated account credentials`}
              </div>
            </td>
            <td {...{"align":"center","role":"cell","data-label":"Don't"}}>
              <div>
                {`Successfully validated account credentials`}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
</div>
    <p {...{"className":"ws-p"}}>
      {`Progress bars should only use content in their title and progress value. Never write additional content inside the progress track.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'ComponentsProgressDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
