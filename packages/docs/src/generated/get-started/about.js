import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../content/get-started/./get-started.css';
const pageData = {
  "id": "About",
  "section": "get-started",
  "source": "pages-get-started",
  "slug": "/get-started/about",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/get-started/about.md",
  "title": "About PatternFly"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`PatternFly is an open source design system created to enable consistency and usability across a wide range of applications and use cases. PatternFly provides clear standards, guidance, and tools that help designers and developers work together more efficiently and build better user experiences.`}
    </p>
    <AutoLinkHeader {...{"id":"basic-structure","size":"h2","className":"ws-title ws-h2"}}>
      {`Basic structure`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"components","size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Components are like building blocks. Designed to be flexible and modular, you can mix and match components to create a solution for almost any UI problem.`}
    </p>
    <AutoLinkHeader {...{"id":"layouts","size":"h3","className":"ws-title ws-h3"}}>
      {`Layouts`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A layout provides a fully responsive page structure that keeps your components organized and aligned regardless of screen size.`}
    </p>
    <AutoLinkHeader {...{"id":"demos","size":"h3","className":"ws-title ws-h3"}}>
      {`Demos`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Components are better together. Demos show how multiple components can be used in a single design. They also provide some useful starter code, so the days of creating complex layouts from scratch are over.`}
    </p>
    <AutoLinkHeader {...{"id":"design-guidelines","size":"h2","className":"ws-title ws-h2"}}>
      {`Design guidelines`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"styles","size":"h3","className":"ws-title ws-h3"}}>
      {`Styles`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Style guidelines define foundational elements of the design system, like color, typography, and spacing.`}
    </p>
    <AutoLinkHeader {...{"id":"usage-and-behavior","size":"h3","className":"ws-title ws-h3"}}>
      {`Usage and behavior`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Usage and behavior guidelines communicate standards and best practices for common design patterns like navigation, dashboards, or forms.`}
    </p>
    <AutoLinkHeader {...{"id":"ux-writing","size":"h3","className":"ws-title ws-h3"}}>
      {`UX writing`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Content guidelines provide principles and best practices around writing for user experience along with general voice and style guidance.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <PatternflyThemeLink {...{"to":"/guidelines/colors"}}>
        <strong>
          {`View design guidelines`}
        </strong>
      </PatternflyThemeLink>
      {` `}
            <i className="ws-content-blueArrow fas fa-arrow-right pf-u-mx-sm"/>
    </p>
    <AutoLinkHeader {...{"id":"additional-tools","size":"h2","className":"ws-title ws-h2"}}>
      {`Additional tools`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"css-variables","size":"h3","className":"ws-title ws-h3"}}>
      {`CSS variables`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`You can customize PatternFly for your project using the CSS variable system, which enables you to change style elements like color across your project. The CSS variable system is a two-layer theming system where global variables inform component variables.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Global variables`}
      </strong>
      {`
Global variables define and enforce style elements (like global values for color, spacing, and font size) across the entire system.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Component variables`}
      </strong>
      {`
Component variables are used to define custom properties at the component level. Component variables are always defined by global variables.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <PatternflyThemeLink {...{"to":"/developer-resources/global-css-variables"}}>
        <strong>
          {`Learn more and view CSS variables`}
        </strong>
      </PatternflyThemeLink>
      {` `}
            <i className="ws-content-blueArrow fas fa-arrow-right pf-u-mx-sm"/>
    </p>
    <AutoLinkHeader {...{"id":"utilities","size":"h3","className":"ws-title ws-h3"}}>
      {`Utilities`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Utilities are a set of classes that enable you to further customize and modify elements in your project without having to write any custom CSS.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`For example, you might use a utility class to add additional spacing between elements, align content in a layout, or even add a box shadow to an element.`}
    </p>
    <AutoLinkHeader {...{"id":"supported-browsers","size":"h2","className":"ws-title ws-h2"}}>
      {`Supported browsers`}
    </AutoLinkHeader>
    <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
      <thead>
        <tr {...{"role":"row"}}>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Browser`}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Version`}
            </div>
          </th>
        </tr>
      </thead>
      <tbody {...{"role":"rowgroup"}}>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Browser"}}>
            <div>
              {`Chrome`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Version"}}>
            <div>
              {`latest`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Browser"}}>
            <div>
              {`Firefox`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Version"}}>
            <div>
              {`latest`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Browser"}}>
            <div>
              {`Safari`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Version"}}>
            <div>
              {`latest`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Browser"}}>
            <div>
              {`Edge`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Version"}}>
            <div>
              {`latest`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <p {...{"className":"ws-p"}}>
      {`If you encounter an issue with an earlier browser version and have a question about whether or not that behavior should be supported, please feel free to contact us.`}
    </p>
    <AutoLinkHeader {...{"id":"beta-components","size":"h2","className":"ws-title ws-h2"}}>
      {`Beta components`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Newly introduced components to the PatternFly component library are
initially released in `}
      <code {...{"className":"ws-code"}}>
        {`beta`}
      </code>
      {`. Such components are labelled with a blue informational alert at the top of their documentation pages.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Beta components are open to evolution and possible breaking changes
pending testing and feedback. Each beta component is evaluated on a quarterly basis to evaluate its stability
and the degree to which it meets product requirements. Every quarter, stable
components are proposed as promotion candidates. To view a list of current promotion candidates, visit
`}
      <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-org/tree/main/beta-component-promotion"}}>
        {`this page`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`There are two recommended steps to take when considering using a beta component in product:`}
    </p>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        {`Play with the component examples in the docs and determine whether or not the current implementation meets your needs. Open issues for any missing features, enhancement requests, or bugs.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Check the `}
        <PatternflyThemeLink {...{"to":"https://github.com/orgs/patternfly/projects/7/views/5"}}>
          {`PatternFly Issues GitHub Project board`}
        </PatternflyThemeLink>
        {` where we have created a view to categorize most issues by component. Browse any open issues for the beta component to determine how much more the beta component could evolve in the near future.`}
      </li>
    </ol>
    <p {...{"className":"ws-p"}}>
      {`Once promoted, breaking changes are not made to components outside of a well-advertised
breaking change release. Breaking changes introduce visual changes, changes to applied CSS
class names, or changes to existing React props (new React props might be added).`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Occasionally, a component is promoted out of beta and subsequent enhancement requests require new CSS class names
and React props to be introduced. Whenever these enhancements are substantial enough to open the possibility
for further updates pending testing and feedback, then the newly introduced CSS class names or React props
as well as relevant examples in the documentation are all labeled as beta.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`For more information about beta components, visit `}
      <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-org/tree/main/beta-component-promotion"}}>
        {`this page`}
      </PatternflyThemeLink>
      {`.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'GetStartedAboutDocs';
Component.pageData = pageData;

export default Component;
