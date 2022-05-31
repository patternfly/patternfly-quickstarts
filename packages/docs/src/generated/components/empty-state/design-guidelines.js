import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport179 from '../../../content/design-guidelines/components/empty-state/./img/empty-state.png';
import srcImport180 from '../../../content/design-guidelines/components/empty-state/./img/xl-getstarted.png';
import srcImport181 from '../../../content/design-guidelines/components/empty-state/./img/no-data.png';
import srcImport182 from '../../../content/design-guidelines/components/empty-state/./img/configuration.png';
import srcImport183 from '../../../content/design-guidelines/components/empty-state/./img/access-denied.png';
import srcImport184 from '../../../content/design-guidelines/components/empty-state/./img/back-end-failure.png';
import srcImport185 from '../../../content/design-guidelines/components/empty-state/./img/success-wizard.png';
import srcImport186 from '../../../content/design-guidelines/components/empty-state/./img/xl-success.png';
import srcImport187 from '../../../content/design-guidelines/components/empty-state/./img/add-or-create.png';
import srcImport188 from '../../../content/design-guidelines/components/empty-state/./img/add-card-empty-state.png';
import srcImport189 from '../../../content/design-guidelines/components/empty-state/./img/level-of-detail.png';
import srcImport190 from '../../../content/design-guidelines/components/empty-state/./img/sentence-case.png';
import srcImport191 from '../../../content/design-guidelines/components/empty-state/./img/one-cta-primary.png';
import srcImport192 from '../../../content/design-guidelines/components/empty-state/./img/one-cta-body.png';
import srcImport193 from '../../../content/design-guidelines/components/empty-state/./img/two-ctas-primary.png';
import srcImport194 from '../../../content/design-guidelines/components/empty-state/./img/two-ctas-body.png';
import srcImport195 from '../../../content/design-guidelines/components/empty-state/./img/solo-link.png';
import srcImport196 from '../../../content/design-guidelines/components/empty-state/./img/desktop-page-es.png';
import srcImport197 from '../../../content/design-guidelines/components/empty-state/./img/mobile-page-es.png';
import srcImport198 from '../../../content/design-guidelines/components/empty-state/./img/table-es.png';
const pageData = {
  "id": "Empty state",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/empty-state/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/empty-state/empty-state.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`An `}
      <strong>
        {`empty state`}
      </strong>
      {` is a screen that is not yet populated with data or information. Empty states typically contain a short message and next steps for the user.`}
    </p>
    <AutoLinkHeader {...{"id":"elements","size":"h2","className":"ws-title ws-h2"}}>
      {`Elements`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`This is an example of a large, full-page empty state with all empty state elements. Other empty state variations contain the same elements and differ only in spacing and text sizes.`}
    </p>
    <img src={srcImport179} height={srcImport179.height * 1500 / srcImport179.width} {...{"alt":"large empty state example with all elements","width":"1500px","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Icon`}
        </strong>
        {`: The icon presents a visual component for easier recognition of the empty state’s message.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Heading`}
        </strong>
        {`: The title provides a concise description of the empty state’s purpose.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Body`}
        </strong>
        {`: The body provides additional information to help the user understand why the space is empty, what they can do to move forward, and how they can benefit from taking the next step.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Primary button`}
        </strong>
        {`: The primary button enables the user to take either the next step or a more general action, such as returning to the home page.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Secondary buttons`}
        </strong>
        {`: Secondary buttons enable the user to take alternative actions, such as accessing additional resources.`}
      </li>
    </ol>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Note`}
      </strong>
      {`: Don't include toolbars or filters in a full-page empty state because the user doesn't have any items to search or filter.`}
    </p>
    <AutoLinkHeader {...{"id":"usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`PatternFly offers four empty state variations:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Extra small empty state`}
        </strong>
        {`: Use an extra small empty state inside cards or when there are space constraints.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Small empty state`}
        </strong>
        {`: Use a small empty state inside tables, wizards, or modals.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Large empty state`}
        </strong>
        {`: Use a large empty state as a full page.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Extra large empty state`}
        </strong>
        {`: Use an extra large empty state for special instances only, such as full-page success empty states or getting started empty states.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`There are several common uses for empty states:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"#getting-started"}}>
          {`Getting started`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"#no-results"}}>
          {`No results`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"#required-configuration"}}>
          {`Required configuration`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"#no-access"}}>
          {`No access`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"#back-end-failure"}}>
          {`Back-end failure`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"#success"}}>
          {`Success`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"#creation"}}>
          {`Creation`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"getting-started","size":"h3","className":"ws-title ws-h3"}}>
      {`Getting started`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Getting started empty states appear when features haven’t been used yet. In your empty state message, explain why the feature is beneficial to the user and provide a next step so that they can get started.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Use the extra large empty state variation for getting started empty states.`}
    </p>
    <img src={srcImport180} height={srcImport180.height * 1500 / srcImport180.width} {...{"alt":"extra large empty state with welcome message","width":"1500px","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Heading`}
      </strong>
      {`: Welcome the user to the product. Keep in mind that the user might be a bit nervous, so avoid exclamation points or other writing mechanics that make your tone sound excited.`}
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
                {`Welcome to PatternFly`}
              </div>
            </td>
            <td {...{"align":"center","role":"cell","data-label":"Don't"}}>
              <div>
                {`Welcome to PatternFly!`}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
</div>
    <br/>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Body`}
      </strong>
      {`: Explain how the product or feature delivers value to the user. State what the user can do with the product instead of what the product enables them to do. This way, you give power to the user.`}
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
                {`Access all the resources you need to build scalable experiences in the open.`}
              </div>
            </td>
            <td {...{"align":"center","role":"cell","data-label":"Don't"}}>
              <div>
                {`PatternFly enables you to build scalable experiences in the open.`}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
</div>
    <br/>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Button`}
      </strong>
      {`: Give the user the ability to easily get started with the product.`}
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
                {`Get started`}
              </div>
            </td>
            <td {...{"align":"center","role":"cell","data-label":"Don't"}}>
              <div>
                {`Exit`}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
</div>
    <br/>
    <AutoLinkHeader {...{"id":"no-results","size":"h3","className":"ws-title ws-h3"}}>
      {`No results`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`No results empty states appear when the system doesn’t find any data to show, such as when a user’s search criteria doesn’t yield any results.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`In your empty state, explain that nothing was found and give the user a next step so that they can continue their search.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Use the small empty state variation for no results empty states.`}
    </p>
    <img src={srcImport181} height={srcImport181.height * 1500 / srcImport181.width} {...{"alt":"empty state showing no search results","width":"1500px","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Heading`}
      </strong>
      {`: Briefly state that no results were found.`}
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
                {`No results found`}
              </div>
            </td>
            <td {...{"align":"center","role":"cell","data-label":"Don't"}}>
              <div>
                {`Your search did not yield any results`}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
</div>
    <br/>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Body`}
      </strong>
      {`: Explain what the user should do next so that they can continue searching for what they need.`}
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
                {`Adjust your filters and try again.`}
              </div>
            </td>
            <td {...{"align":"center","role":"cell","data-label":"Don't"}}>
              <div>
                {`We did not find any results that matched your filters.`}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
</div>
    <AutoLinkHeader {...{"id":"required-configuration","size":"h3","className":"ws-title ws-h3"}}>
      {`Required configuration`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Required configuration empty states appear when the user needs to configure, connect, or enable something before using a feature.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Use the large empty state variation for required configuration empty states.`}
    </p>
    <img src={srcImport182} height={srcImport182.height * 1500 / srcImport182.width} {...{"alt":"empty state with system configuration information","width":"1500px","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Heading`}
      </strong>
      {`: State what needs to be done instead of what hasn’t been done yet.`}
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
                {`Configure your system`}
              </div>
            </td>
            <td {...{"align":"center","role":"cell","data-label":"Don't"}}>
              <div>
                {`You haven’t configured your system`}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
</div>
    <br/>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Body text`}
      </strong>
      {`: Explain what the user needs to do to complete the task.`}
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
                {`Start the configuration process and follow the on-screen instructions.`}
              </div>
            </td>
            <td {...{"align":"center","role":"cell","data-label":"Don't"}}>
              <div>
                {`You cannot continue until you complete the configuration.`}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
</div>
    <br/>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Button`}
      </strong>
      {`: Give the user the ability to quickly take action on the task.`}
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
                {`Start configuration process`}
              </div>
            </td>
            <td {...{"align":"center","role":"cell","data-label":"Don't"}}>
              <div>
                {`Exit`}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
</div>
    <br/>
    <AutoLinkHeader {...{"id":"no-access","size":"h3","className":"ws-title ws-h3"}}>
      {`No access`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`No access empty states appear when the user doesn’t have the entitlements or access permissions to view a certain feature or product area.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Use the large empty state variation for no access empty states.`}
    </p>
    <img src={srcImport183} height={srcImport183.height * 1500 / srcImport183.width} {...{"alt":"empty state with information about access permissions","width":"1500px","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Heading`}
      </strong>
      {`: State what the user needs to access the page instead of what they don’t have or can’t do.`}
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
                {`Access permissions needed`}
              </div>
            </td>
            <td {...{"align":"center","role":"cell","data-label":"Don't"}}>
              <div>
                {`Access denied`}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
</div>
    <br/>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Body`}
      </strong>
      {`: Explain what action the user must take to reach their goal of accessing the page.`}
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
                {`To access PatternFly, ask your administrator to adjust your permissions.`}
              </div>
            </td>
            <td {...{"align":"center","role":"cell","data-label":"Don't"}}>
              <div>
                {`You don’t have access to PatternFly.`}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
</div>
    <br/>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Button`}
      </strong>
      {`: Give the user the ability to easily leave the page and return to the dashboard, home page, or another main area of the product.`}
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
                {`Return to dashboard`}
              </div>
            </td>
            <td {...{"align":"center","role":"cell","data-label":"Don't"}}>
              <div>
                {`OK`}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
</div>
    <br/>
    <AutoLinkHeader {...{"id":"back-end-failure","size":"h3","className":"ws-title ws-h3"}}>
      {`Back-end failure`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Back-end failure empty states appear when an error occurs that prevents the system from displaying the page content.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Use the large empty state variation for back-end failure empty states.`}
    </p>
    <img src={srcImport184} height={srcImport184.height * 1500 / srcImport184.width} {...{"alt":"empty state with information about a connection error","width":"1500px","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Heading`}
      </strong>
      {`: State what the error is in plain language so that the user can easily understand what the error means.`}
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
                {`Unable to connect`}
              </div>
            </td>
            <td {...{"align":"center","role":"cell","data-label":"Don't"}}>
              <div>
                {`Failure #121212: Connection error`}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
</div>
    <br/>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Body`}
      </strong>
      {`: Explain how the user can resolve the error.`}
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
                {`Check your connection and reload the page.`}
              </div>
            </td>
            <td {...{"align":"center","role":"cell","data-label":"Don't"}}>
              <div>
                {`We’re sorry. Something is wrong.`}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
</div>
    <br/>
    <AutoLinkHeader {...{"id":"success","size":"h3","className":"ws-title ws-h3"}}>
      {`Success`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Success empty states appear when the user successfully completes a process, such as a tutorial or a setup wizard.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Use the standard empty state variation for success empty states in a table or wizard.`}
    </p>
    <img src={srcImport185} height={srcImport185.height * 1500 / srcImport185.width} {...{"alt":"empty state confirming that a project was created","width":"1500px","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Use the extra large empty state variation for success empty states in a full page.`}
    </p>
    <img src={srcImport186} height={srcImport186.height * 1500 / srcImport186.width} {...{"alt":"empty state confirming registration","width":"1500px","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Heading`}
      </strong>
      {`: Confirm the action is completed. Because this is a success message, it’s OK to congratulate the user and show some excitement. Avoid extraneous terms like “success” and “successfully.”`}
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
                {`You're all set`}
              </div>
            </td>
            <td {...{"align":"center","role":"cell","data-label":"Don't"}}>
              <div>
                {`You have successfully registered`}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
</div>
    <br/>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Body`}
      </strong>
      {`: Give the user a next step so that they can continue using the product. If an additional confirmation is needed (such as a confirmation email), include that in the body, too.`}
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
                {`We emailed you a confirmation. Ready to explore other activities?`}
              </div>
            </td>
            <td {...{"align":"center","role":"cell","data-label":"Don't"}}>
              <div>
                {`You can now exit.`}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
</div>
    <br/>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Button`}
      </strong>
      {`: Give the user the ability to easily take the next step.`}
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
                {`Start exploring`}
              </div>
            </td>
            <td {...{"align":"center","role":"cell","data-label":"Don't"}}>
              <div>
                {`Exit`}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
</div>
    <br/>
    <AutoLinkHeader {...{"id":"creation","size":"h3","className":"ws-title ws-h3"}}>
      {`Creation`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Creation empty states appear when the user needs to add or create something to view associated information.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Use the large empty state variation for creation empty states.`}
    </p>
    <img src={srcImport187} height={srcImport187.height * 1500 / srcImport187.width} {...{"alt":"empty state with no accounts yet","width":"1500px","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Heading`}
      </strong>
      {`: State what hasn’t been created or added yet. Avoid saying that something hasn’t been found because the user might interpret that as a system error.`}
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
                {`No service accounts yet`}
              </div>
            </td>
            <td {...{"align":"center","role":"cell","data-label":"Don't"}}>
              <div>
                {`No service accounts have been found`}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
</div>
    <br/>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Body`}
      </strong>
      {`: Explain what the user needs to do next.`}
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
                {`To get started, create a service account.`}
              </div>
            </td>
            <td {...{"align":"center","role":"cell","data-label":"Don't"}}>
              <div>
                {`You have not created any service accounts.`}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
</div>
    <br/>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Button`}
      </strong>
      {`: Give the user the ability to easily take the next step.`}
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
                {`Create service account`}
              </div>
            </td>
            <td {...{"align":"center","role":"cell","data-label":"Don't"}}>
              <div>
                {`Return to home page`}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
</div>
    <br/>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Secondary button`}
      </strong>
      {`: Give the user the ability to access additional resources that can help them through the creation process, such as a tour.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`You can also use the extra small empty state variation inside of a card to present the user with another way to add a new card to their view. Place the empty state card where a new card would be added, such as the first (or last) card in the view. Be sure to also include a primary button in the toolbar so that the user can still perform the action even if the empty state is out of view.`}
    </p>
    <img src={srcImport188} height={srcImport188.height * 1500 / srcImport188.width} {...{"alt":"empty state inside of a card","width":"1500px","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"visual-design","size":"h2","className":"ws-title ws-h2"}}>
      {`Visual design`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Icons and colors can help enhance users’ visual understanding of empty state messaging.`}
    </p>
    <AutoLinkHeader {...{"id":"icons","size":"h3","className":"ws-title ws-h3"}}>
      {`Icons`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`To maintain consistency, specific icons are mapped to specific empty state scenarios.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Here is when you should use each icon:`}
    </p>
    <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
      <thead>
        <tr {...{"role":"row"}}>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Type`}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Color`}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Icon`}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Usage`}
            </div>
          </th>
        </tr>
      </thead>
      <tbody {...{"role":"rowgroup"}}>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell"}}>
            <div>
                            <i className="fas fa-rocket" aria-hidden="true"/>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Type"}}>
            <div>
              {`First use or get started`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Color"}}>
            <div>
              {`Gray (#8A8D90)`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Icon"}}>
            <div>
              {`fa-rocket`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Usage"}}>
            <div>
              {`Use in getting started empty states. You can replace this icon if you already have an application-specific graphic that you want to use instead.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell"}}>
            <div>
                            <i className="fas fa-search" aria-hidden="true"/>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Type"}}>
            <div>
              {`Search`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Color"}}>
            <div>
              {`Gray (#8A8D90)`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Icon"}}>
            <div>
              {`fa-search`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Usage"}}>
            <div>
              {`Use when there is no data to show.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell"}}>
            <div>
                            <i className="fas fa-wrench" aria-hidden="true"/>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Type"}}>
            <div>
              {`Configuration`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Color"}}>
            <div>
              {`Gray (#8A8D90)`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Icon"}}>
            <div>
              {`fa-wrench`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Usage"}}>
            <div>
              {`Use when configuration is required or there is a configuration issue.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell"}}>
            <div>
                            <i className="fas fa-lock" aria-hidden="true"/>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Type"}}>
            <div>
              {`No access`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Color"}}>
            <div>
              {`Gray (#8A8D90)`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Icon"}}>
            <div>
              {`fa-lock`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Usage"}}>
            <div>
              {`Use when the user is not entitled or the user role does not have access.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell"}}>
            <div>
                            <i className="fas fa-exclamation-circle" aria-hidden="true"/>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Type"}}>
            <div>
              {`Error`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Color"}}>
            <div>
              {`Red (#C9190B)`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Icon"}}>
            <div>
              {`fa-exclamation-circle`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Usage"}}>
            <div>
              {`Use when there is an inability to get data, there is backend failure, or an error has occurred.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell"}}>
            <div>
                            <i className="fas fa-check-circle" aria-hidden="true"/>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Type"}}>
            <div>
              {`Success`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Color"}}>
            <div>
              {`Green (#486b00)`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Icon"}}>
            <div>
              {`fa-check-circle`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Usage"}}>
            <div>
              {`Use to indicate that a task or process has been completed successfully.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell"}}>
            <div>
                            <i className="fas fa-plus-circle" aria-hidden="true"/>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Type"}}>
            <div>
              {`Addition or creation`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Color"}}>
            <div>
              {`Gray (#8A8D90)`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Icon"}}>
            <div>
              {`fa-plus-circle`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Usage"}}>
            <div>
              {`Use when something needs to be added or created.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"id":"colors","size":"h3","className":"ws-title ws-h3"}}>
      {`Colors`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use color intentionally. If you’re not using a custom icon for a specific use case, an icon should be gray by default (except when it’s used as a status icon).`}
    </p>
    <AutoLinkHeader {...{"id":"content","size":"h2","className":"ws-title ws-h2"}}>
      {`Content`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Content varies depending on the type of empty state. For specific information on what content to use  for each empty state type, see the earlier `}
      <PatternflyThemeLink {...{"to":"#usage"}}>
        {`Usage`}
      </PatternflyThemeLink>
      {` section.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Regardless of empty state variation and type, all empty states should have a specific level of detail, consistent capitalization and punctuation, and an intentional voice and tone.`}
    </p>
    <AutoLinkHeader {...{"id":"level-of-detail","size":"h3","className":"ws-title ws-h3"}}>
      {`Level of detail`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`State what isn't there, and then give the user a next step. Empty states should not describe in detail how to use the page—the design should be intuitive enough without extensive written explanation.`}
    </p>
    <img src={srcImport189} height={srcImport189.height * 771 / srcImport189.width} {...{"alt":"do and don’t examples for level of detail","width":"771px","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"capitalization-and-punctuation","size":"h3","className":"ws-title ws-h3"}}>
      {`Capitalization and punctuation`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use `}
      <PatternflyThemeLink {...{"to":"/ux-writing/capitalization"}}>
        {`sentence case`}
      </PatternflyThemeLink>
      {` in your empty states: Capitalize only the first letter of the first word in the heading, body, buttons, or links. However, be sure to capitalize the first letter in all proper nouns, product names, acronyms, and initialisms, regardless of where they appear in the heading, body, buttons, or links.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Add a period at the end of full sentences in the body, but do not add a period at the end of headings or buttons.`}
    </p>
    <img src={srcImport190} height={srcImport190.height * 771 / srcImport190.width} {...{"alt":"do and don’t examples for capitalization","width":"771px","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"voice-and-tone","size":"h3","className":"ws-title ws-h3"}}>
      {`Voice and tone`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Pay close attention to the `}
      <PatternflyThemeLink {...{"to":"/ux-writing/brand-voice-and-tone"}}>
        {`voice and tone`}
      </PatternflyThemeLink>
      {` in your empty state. Your voice should align with your company’s unique brand voice. Your tone, on the other hand, should adjust depending on the context—consider the user’s emotions and adjust your approach accordingly.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`It’s OK to use “you” and “your,” but never assign blame to the user. Also, avoid using “please” in an empty state. It’s extraneous and can make your message sound too formal.`}
    </p>
    <AutoLinkHeader {...{"id":"buttons-and-links","size":"h2","className":"ws-title ws-h2"}}>
      {`Buttons and links`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use buttons and links in empty states to highlight calls to action for the user. There are multiple ways to do this.`}
    </p>
    <AutoLinkHeader {...{"id":"one-primary-call-to-action","size":"h3","className":"ws-title ws-h3"}}>
      {`One primary call to action`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`If you have one primary call to action, you can present it as a primary button or as a link in the body text.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Example: Call to action as a primary button`}
      </strong>
    </p>
    <img src={srcImport191} height={srcImport191.height * 600 / srcImport191.width} {...{"alt":"empty state with one primary button","width":"600px","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Example: Call to action as a link in the body text`}
      </strong>
    </p>
    <img src={srcImport192} height={srcImport192.height * 600 / srcImport192.width} {...{"alt":"empty state with one hyperlink","width":"600px","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"multiple-calls-to-action","size":"h3","className":"ws-title ws-h3"}}>
      {`Multiple calls to action`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`If your primary call to action is presented as a primary button, your secondary call to action can be presented as a secondary button beneath the primary button.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Example: Secondary call to action as a secondary button beneath the primary button`}
      </strong>
      {`
`}
      <img src={srcImport193} height={srcImport193.height * 600 / srcImport193.width} {...{"alt":"empty state with two buttons","width":"600px","className":"ws-img"}}>
      </img>
    </p>
    <p {...{"className":"ws-p"}}>
      {`If your primary call to action is presented as a link in the body text, your secondary call to action can be presented as a secondary button beneath the body text.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Example: Secondary call to action as a secondary button beneath the body text`}
      </strong>
      <br>
      </br>
      {`
`}
      <img src={srcImport194} height={srcImport194.height * 600 / srcImport194.width} {...{"alt":"empty state with two hyperlinks","width":"600px","className":"ws-img"}}>
      </img>
    </p>
    <AutoLinkHeader {...{"id":"one-secondary-call-to-action","size":"h3","className":"ws-title ws-h3"}}>
      {`One secondary call to action`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`For a filtering or search situation, you can use a stand-alone secondary button (with nothing linked in the body).`}
    </p>
    <img src={srcImport195} height={srcImport195.height * 393 / srcImport195.width} {...{"alt":"empty state with one hyperlink","width":"393px","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"alignment","size":"h2","className":"ws-title ws-h2"}}>
      {`Alignment`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Empty states can be a full page, or they can be included inside of other components on the page.`}
    </p>
    <AutoLinkHeader {...{"id":"full-page-empty-states","size":"h3","className":"ws-title ws-h3"}}>
      {`Full-page empty states`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`On a desktop, a full-page empty state should be 64px away from the top and horizontally centered with a minimum padding of 24px on all remaining sides.`}
    </p>
    <img src={srcImport196} height={srcImport196.height * 1500 / srcImport196.width} {...{"alt":"full-page empty state with padding on desktop","width":"1500px","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`On a mobile device, a full-page empty state should be 48px away from the top with a minimum of 16px padding on all remaining sides.`}
    </p>
    <img src={srcImport197} height={srcImport197.height * 375 / srcImport197.width} {...{"alt":"full-page empty state with padding on mobile","width":"375px","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"empty-states-inside-tables-cards-or-wizards","size":"h3","className":"ws-title ws-h3"}}>
      {`Empty states inside tables, cards, or wizards`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Empty states inside a table, card, or wizard should always be horizontally and vertically centered on their background. Outside padding on all remaining sides should be 24px.`}
    </p>
    <img src={srcImport198} height={srcImport198.height * 1500 / srcImport198.width} {...{"alt":"empty state inside card with padding","width":"1500px","className":"ws-img"}}>
    </img>
  </React.Fragment>
);
Component.displayName = 'ComponentsEmptyStateDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
