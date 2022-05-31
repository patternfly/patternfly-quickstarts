import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Terminology",
  "section": "UX writing",
  "source": "design-guidelines",
  "slug": "/ux-writing/terminology/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/content/terminology.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`Here's a list of common UI terms and their usage.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <em>
        {`For Red Hat product terminology and documentation standards, see `}
        <PatternflyThemeLink {...{"to":"https://redhat-documentation.github.io/supplementary-style-guide/#introduction"}}>
          {`Red Hat's supplementary style guide for Red Hat product documentation`}
        </PatternflyThemeLink>
        {`.`}
      </em>
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Add`}
      </strong>
      {`: (v.) Use to describe adding an existing item to an existing list, group, view, or other container element.`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Opposite: Remove`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Notes: If the object being added is not readily apparent from the context, consider adding a noun (like “Add user”). If you’re creating a new object, do not use `}
        <em>
          {`Add`}
        </em>
        {`. See `}
        <em>
          {`Create`}
        </em>
        {`.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Cancel`}
      </strong>
      {`: (v.) Use to describe ending an action in progress or ending an action where changes could be lost (like in a form).`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Notes: Use `}
        <em>
          {`canceling`}
        </em>
        {` instead of `}
        <em>
          {`cancelling`}
        </em>
        {`. Use `}
        <em>
          {`canceled`}
        </em>
        {` instead of `}
        <em>
          {`cancelled`}
        </em>
        {`.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Change`}
      </strong>
      {`: Do not use. See `}
      <em>
        {`Edit`}
      </em>
      {`.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Click`}
      </strong>
      {`: (v.) Use to prompt the user to click a button, radio button, link, or any other item that isn't part of a list, group, view, or other container element.`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Notes: Do not use interchangeably with `}
        <em>
          {`Select`}
        </em>
        {`.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Close`}
      </strong>
      {`: (v.) Use to describe shutting an open window (like a message dialog).`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Opposite: Open`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Notes: Do not use interchangeably with `}
        <em>
          {`Cancel`}
        </em>
        {` or `}
        <em>
          {`Quit`}
        </em>
        {`.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Collapse`}
      </strong>
      {`: (v.) Use to describe minimizing a container element (like a list or message) so that it’s partially visible.`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Opposite: Expand`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Continue`}
      </strong>
      {`: (v.) Use to describe proceeding with an action or process that is in progress.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Create`}
      </strong>
      {`: (v.) Use to describe creating something new.`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Opposite: Delete`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Notes: If the object being created is not readily apparent from the context, consider adding a noun (like “Create user”). `}
        <em>
          {`New`}
        </em>
        {` or `}
        <em>
          {`Add`}
        </em>
        {` are not recommended for this use case. See `}
        <em>
          {`Add`}
        </em>
        {` for usage guidelines.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Delete`}
      </strong>
      {`: (v.) Use to describe completely removing an object. Delete is a destructive action.`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Opposite: Create`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Notes: `}
        <em>
          {`Erase`}
        </em>
        {` and `}
        <em>
          {`Remove`}
        </em>
        {` are not recommended for this use case. See `}
        <em>
          {`Remove`}
        </em>
        {` for usage guidelines.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Deselect`}
      </strong>
      {`: (v.) Use to prompt the user to deselect an item from a list, group, view, or other container element.`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Opposite: Select`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Edit`}
      </strong>
      {`: (v.) Use to describe making changes to an object (like a file, configuration, or policy).`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Notes: `}
        <em>
          {`Modify`}
        </em>
        {` and `}
        <em>
          {`Change`}
        </em>
        {` are not recommended for this use case.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Expand`}
      </strong>
      {`: (v.) Use to describe expanding a container element (like a list or message) to show all its contents.`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Opposite: Collapse`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Hide`}
      </strong>
      {`: (v.) Use to describe hiding something that is displayed in the interface.`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Opposite: Show`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Home page`}
      </strong>
      {`: (n.) Use to describe the main page of a website.`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Notes: Write `}
        <em>
          {`home page`}
        </em>
        {` as two words, not one.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Log in`}
      </strong>
      {`: (v.) Use to describe logging in.`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Opposite: Log out`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Notes: Use `}
        <em>
          {`log in to,`}
        </em>
        {` not `}
        <em>
          {`log into.`}
        </em>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Login`}
      </strong>
      {`: (adj.) Use to describe something related to the act of logging in to an application, like a login page.`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Notes: The noun `}
        <em>
          {`Login`}
        </em>
        {` can also be used as an alternative for `}
        <em>
          {`Username`}
        </em>
        {`, but `}
        <em>
          {`Username`}
        </em>
        {` is recommended.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Log out`}
      </strong>
      {`: (v.) Use to describe logging out.`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Opposite: Log in`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Modify`}
      </strong>
      {`: Do not use. See `}
      <em>
        {`Edit`}
      </em>
      {`.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`New`}
      </strong>
      {`: Do not use. See `}
      <em>
        {`Add`}
      </em>
      {` or `}
      <em>
        {`Create`}
      </em>
      {`.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`OK`}
      </strong>
      {`: (adj.) Use to collect confirmation or understanding from the user.`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Notes: Do not use `}
        <em>
          {`Okay,`}
        </em>
        {` `}
        <em>
          {`O.K.,`}
        </em>
        {` `}
        <em>
          {`Ok,`}
        </em>
        {` or `}
        <em>
          {`ok`}
        </em>
        {` in the UI.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Open`}
      </strong>
      {`: (v.) Use to describe launching something (like system preferences).`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Opposite: Close`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Quit`}
      </strong>
      {`: (v.) Use to describe exiting an application.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Remove`}
      </strong>
      {`: (v.) Use to describe removing an item from a list, group, view, or other container element without completely deleting it. Also see `}
      <em>
        {`Add`}
      </em>
      {` and `}
      <em>
        {`Delete`}
      </em>
      {`.`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Opposite: Add`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Notes: If what you’re removing is not readily apparent from the context, consider adding a noun (like “Remove file”).`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Save`}
      </strong>
      {`: (v.) Use to describe preserving changes made by the user.`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Opposite: Cancel`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Select`}
      </strong>
      {`: (v.) Use to prompt the user to select an item from a list, group, view, or other container element.`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Opposite: Deselect`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Notes: Do not use `}
        <em>
          {`Choose`}
        </em>
        {` for this use case.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Set up`}
      </strong>
      {`: (v.) Use to describe setting up an arrangement (like a system, process, or environment).`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Notes: `}
        <em>
          {`Set up`}
        </em>
        {` is two words as a verb and one word as a noun. See `}
        <em>
          {`Setup`}
        </em>
        {`.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Setup`}
      </strong>
      {`: (n.) Use to describe the setup of something (like a system, process, or environment).`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Notes: `}
        <em>
          {`Setup`}
        </em>
        {` is one word as a noun and two words as a verb. See `}
        <em>
          {`Set up`}
        </em>
        {`.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Show`}
      </strong>
      {`: (v.) Use to describe displaying something that is hidden in the interface.`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Opposite: Hide`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Notes: Do not use interchangeably with `}
        <em>
          {`View`}
        </em>
        {` or `}
        <em>
          {`Expand`}
        </em>
        {`.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Sign up`}
      </strong>
      {`: (v.) Use to describe signing up for a web account, application, service, or event.`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Notes: `}
        <em>
          {`Sign up`}
        </em>
        {` is two words as a verb and one word as an adjective or noun. See `}
        <em>
          {`Signup`}
        </em>
        {`.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Signup`}
      </strong>
      {`: (adj.) Use to describe something related to the act of signing up for a web account, application, service, or event, like a signup page.`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Notes: The noun `}
        <em>
          {`Signup`}
        </em>
        {` can also be used to refer to a user signup submission (for example, "We need more signups for this event.").`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`View`}
      </strong>
      {`: (v.) Use to describe accessing another page to see details. (n.) Use to represent an arrangement of data in the interface (like a list view).`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Notes: Do not use interchangeably with `}
        <em>
          {`Show`}
        </em>
        {` or `}
        <em>
          {`Expand`}
        </em>
        {`.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Username`}
      </strong>
      {`: (n.) Usually a unique ID (like ssmith123).`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Utilize`}
      </strong>
      {`: Do not use. Opt for the less formal version, `}
      <em>
        {`Use`}
      </em>
      {`.`}
    </p>
    <AutoLinkHeader {...{"id":"abbreviations-and-acronyms","size":"h2","className":"ws-title ws-h2"}}>
      {`Abbreviations and acronyms`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use abbreviations that users are familiar with, and write out uncommon abbreviations. Abbreviate units of measurement, and use abbreviations consistently.`}
    </p>
    <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
      <thead>
        <tr {...{"role":"row"}}>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              <strong>
                {`Abbreviation`}
              </strong>
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              <strong>
                {`Usage`}
              </strong>
            </div>
          </th>
        </tr>
      </thead>
      <tbody {...{"role":"rowgroup"}}>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Abbreviation"}}>
            <div>
              {`CSS`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Usage"}}>
            <div>
              {`Stands for `}
                            <i>{`Cascading Style Sheets`}</i>
              {`. Write `}
                            <i>{`CSS`}</i>
              {` in all caps.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Abbreviation"}}>
            <div>
              {`e.g., i.e., and etc.`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Usage"}}>
            <div>
              {`Use sparingly. These terms aren’t easily understood by everyone, especially users whose native language is not rooted in Latin. Write out their meaning instead:`}
                            <ul>                <li>{`e.g. – for example`}</li>
                                <li>{`i.e. – in other words`}</li>
                                <li>{`etc. – and more/so on`}</li></ul>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Abbreviation"}}>
            <div>
              {`HTML`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Usage"}}>
            <div>
              {`Stands for `}
                            <i>{`Hypertext Markup Language`}</i>
              {`. Write `}
                            <i>{`HTML`}</i>
              {` in all caps.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Abbreviation"}}>
            <div>
              {`JS`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Usage"}}>
            <div>
              {`Stands for `}
                            <i>{`JavaScript`}</i>
              {`. Write `}
                            <i>{`JS`}</i>
              {` in all caps.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Abbreviation"}}>
            <div>
              {`K8`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Usage"}}>
            <div>
              {`Stands for `}
                            <i>{`Kubernetes`}</i>
              {`.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Abbreviation"}}>
            <div>
              {`KVM`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Usage"}}>
            <div>
              {`Refers to a kernel-based virtual machine. Write `}
                            <i>{`KVM`}</i>
              {` in all caps.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Abbreviation"}}>
            <div>
              {`sysadmin`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Usage"}}>
            <div>
              {`Avoid using abbreviations like `}
                            <i>{`sysadmin`}</i>
              {` and `}
                            <i>{`SysAdmin`}</i>
              {` because they’re too informal and not always easily understood. `}
                            <i>{`System`}</i>
              {` should be singular (not `}
                            <i>{`Systems administrator`}</i>
              {`) because it can include both a single system and multiple systems, similar to `}
                            <i>{`brain surgeon`}</i>
              {`, who works on more than one brain.`}
                            <br/>
              {`Takenfrom Red Hat Corporate Style Guide.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Abbreviation"}}>
            <div>
              {`U.S.`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Usage"}}>
            <div>
              {`As a noun, use `}
                            <i>{`United States`}</i>
              {` unless there are space constraints. As an adjective, use `}
                            <i>{`U.S.`}</i>
              {` (for example, `}
                            <i>{`U.S. soldier`}</i>
              {`). As part of an organization, use `}
                            <i>{`U.S.`}</i>
                            <br/>
              {`Takenfrom Red Hat Corporate Style Guide.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Abbreviation"}}>
            <div>
              {`URL`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Usage"}}>
            <div>
              {`Stands for `}
                            <i>{`Uniform Resource Locator`}</i>
              {`. Write `}
                            <i>{`URL`}</i>
              {` in all caps.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Abbreviation"}}>
            <div>
              {`VM`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Usage"}}>
            <div>
              {`Refers to a virtual machine. OK to abbreviate as long as you've spelled it out once in the first occurrence and as long as `}
                            <i>{`VM`}</i>
              {` won't be confused with other terms that share that acronym.`}
                            <br/>
              {`Takenfrom Red Hat Corporate Style Guide.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Abbreviation"}}>
            <div>
              {`N/A`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Usage"}}>
            <div>
              {`Refers to `}
                            <i>{`data not available`}</i>
              {`. Applies to tables, list views, card views, and more.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Abbreviation"}}>
            <div>
              {`--`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Usage"}}>
            <div>
              {`Refers to `}
                            <i>{`data not applicable`}</i>
              {`, meaning data will never be available for the object (unlike `}
                            <i>{`N/A`}</i>
              {`).`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'UxWritingTerminologyDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
