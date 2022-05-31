import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport461 from '../../../content/design-guidelines/content/./img/patternfly-sentence-case.png';
import srcImport462 from '../../../content/design-guidelines/content/./img/user-menu-example.png';
const pageData = {
  "id": "Capitalization",
  "section": "UX writing",
  "source": "design-guidelines",
  "slug": "/ux-writing/capitalization/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/content/capitalization.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`Consistent capitalization adds clarity and creates unity across your products' UIs.`}
    </p>
    <AutoLinkHeader {...{"id":"capitalization-types","size":"h2","className":"ws-title ws-h2"}}>
      {`Capitalization types`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Title case`}
      </strong>
      {` capitalizes only the first letter of each word in a sentence except for smaller words like articles and conjunctions that have fewer than four letters.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Example: "PatternFly Design Resources With Tips and Best Practices"`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Hyperlinked articles in a UI are not displayed as titles. Instead, the copy typically reads something like, "Learn more about `}
      {`[tool name]`}
      {`."`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Sentence case`}
      </strong>
      {` only capitalizes the first letter of the first word in a title, heading, subtitle, or subheading except for proper nouns, product names, acronyms, and initialisms.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Example: “PatternFly’s design resources with tips and best practices”`}
    </p>
    <AutoLinkHeader {...{"id":"capitalization-across-patternfly","size":"h2","className":"ws-title ws-h2"}}>
      {`Capitalization across PatternFly`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Follow these guidelines for `}
      <strong>
        {`PatternFly content`}
      </strong>
      {`, including documentation, UX copy, blog articles, and more.`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`Use `}
          <strong>
            {`sentence case`}
          </strong>
          {` for page titles, menu items, navigation items, headings, subtitles, and subheadings across PatternFly.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`Capitalize proper nouns, product names, acronyms, and initialisms.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`Write all components in `}
          <strong>
            {`lowercase`}
          </strong>
          {` unless they start a sentence.`}
        </p>
        <p {...{"className":"ws-p"}}>
          {`Example: "Card, button, and banner components are my favorites."`}
        </p>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Note`}
      </strong>
      {`: “React” is always capitalized, even when referring to a component (“React component”). It’s the official name of a JavaScript library, and it’s written as a proper noun across the `}
            <a href="https://reactjs.org/">{`react.js org site`}</a>
      {`.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`On PatternFly's website, all navigation items, button text, and headings are written in sentence case:`}
    </p>
    <img src={srcImport461} height={srcImport461.height * 3330 / srcImport461.width} {...{"alt":"PatternFly website screenshot showing sentence case copy","width":"3330px","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"capitalization-across-red-hat-uis","size":"h2","className":"ws-title ws-h2"}}>
      {`Capitalization across Red Hat UIs`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Similar to PatternFly, sentence case is the standard across Red Hat products. However, capitalization varies depending on each product area's context. In general, follow these guidelines:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Write navigation items and their corresponding page titles in `}
        <strong>
          {`title case`}
        </strong>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Write all other areas (such as menu items, button text, form field labels, and empty state headings) in `}
        <strong>
          {`sentence case`}
        </strong>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Capitalize proper nouns, acronyms, initialisms, product names, services, and features.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Keep capitalization for custom resources the same as the capitalization used during creation. For example, if a custom resource was created in all lowercase letters, don't change any of the letters to uppercase.`}
      </li>
    </ul>
    <img src={srcImport462} height={srcImport462.height * 750 / srcImport462.width} {...{"alt":"title case navigation items and sentence case menu items","width":"750px","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Navigation`}
        </strong>
        {`: Navigation items are in title case.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Menu`}
        </strong>
        {`: Menu items are in sentence case.`}
      </li>
    </ol>
    <p {...{"className":"ws-p"}}>
      {`Keep in mind that the main goal is consistency. If you need to use different capitalization standards depending on what you're designing, that's OK. Just be sure to keep the capitalization within your product area consistent.`}
      <br>
      </br>
      {`
`}
            <br/>
      {`
Capitalize `}
      <strong>
        {`Red Hat feature names`}
      </strong>
      {` when they’re used as proper nouns or when they refer to a capitalized UI term (like a navigation item). Write them in lowercase when they’re used to describe generic concepts.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Examples:`}
    </p>
    <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
      <thead>
        <tr {...{"role":"row"}}>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              <strong>
                {`Feature name`}
              </strong>
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              <strong>
                {`UI text`}
              </strong>
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              <strong>
                {`Reasoning`}
              </strong>
            </div>
          </th>
        </tr>
      </thead>
      <tbody {...{"role":"rowgroup"}}>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Feature name"}}>
            <div>
              {`Compliance`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"UI text"}}>
            <div>
              {`“Check your system compliance using Red Hat Insights Compliance.”`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Reasoning"}}>
            <div>
              {`The first “compliance” is lowercase since it refers to compliance as a concept. The second “compliance” refers to a specific feature offered on cloud.redhat.com.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Feature name"}}>
            <div>
              {`User Access`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"UI text"}}>
            <div>
              {`“Manage user access for your organization using the User Access feature.”`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Reasoning"}}>
            <div>
              {`The first “user access” is lowercase because it refers to user access as a concept. The second “user access” is capitalized because it refers to the User Access feature offered on cloud.redhat.com.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Feature name"}}>
            <div>
              {`Sources`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"UI text"}}>
            <div>
              {`“Add a source by going to `}
              <strong>
                {`Settings > Sources.`}
              </strong>
              {`” "Check the `}
              <strong>
                {`Sources`}
              </strong>
              {` table for status." Button text: "Add source"`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Reasoning"}}>
            <div>
              {`“Sources” is only capitalized when it directly refers to a subsection, feature, or location in the UI. Always write buttons in sentence case.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"id":"capitalization-for-tools-outside-your-product-portfolio","size":"h2","className":"ws-title ws-h2"}}>
      {`Capitalization for tools outside your product portfolio`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`If you’re referencing tools outside your company’s product portfolio, write the product names as they appear in the respective company’s documentation.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`For example, if you’re referencing a product in AWS and Amazon capitalizes it, capitalize it in your writing.`}
    </p>
    <AutoLinkHeader {...{"id":"capitalization-for-breadcrumb-trails","size":"h2","className":"ws-title ws-h2"}}>
      {`Capitalization for breadcrumb trails`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Usually, page titles appear in a breadcrumb trail. If all page titles are in title case, they should appear in title case in the breadcrumb trail. If all page titles are in sentence case, they should also appear in sentence case in the breadcrumb trail.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`However, breadcrumb trails aren’t limited to page titles alone. If a name entered by a user (such as “vagrant-host”) is included in the breadcrumb trail, then use the same case that the name appears in.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Example: Rules > Systems > System Tool > vagrant-host`}
    </p>
  </React.Fragment>
);
Component.displayName = 'UxWritingCapitalizationDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
