import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Design",
  "section": "contribute",
  "source": "pages-contribute",
  "slug": "/contribute/design",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/contribute/design/design.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"ways-to-contribute","size":"h2","className":"ws-title ws-h2"}}>
      {`Ways to contribute`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`As a designer, here are some of the contributions you can make:`}
    </p>
    <AutoLinkHeader {...{"id":"new-feature-or-enhancement","size":"h3","className":"ws-title ws-h3"}}>
      {`New feature or enhancement`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Work with the PatternFly design team to design a new feature to be implemented in the PatternFly library.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Example`}
      </strong>
      {`
`}
      <em>
        {`I want to design and contribute a new design pattern that allows a user to favorite or like an item in a data list.`}
      </em>
    </p>
    <p {...{"className":"ws-p"}}>
      {`The PatternFly design team is comprised of a small number of visual and interaction designers who define the visual look and feel of the PatternFly library and provide direction to developers when implementing new features and enhancements. The team works following an agile process. The design backlog is tracked and managed via a `}
      <PatternflyThemeLink {...{"to":"https://github.com/orgs/patternfly/projects/7/views/30"}}>
        {`GitHub project board`}
      </PatternflyThemeLink>
      {`. You can look here to identify issues that are currently unassigned and waiting in the queue or `}
      <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-design/issues"}}>
        {`open a new issue`}
      </PatternflyThemeLink>
      {` to propose a design.`}
    </p>
    <AutoLinkHeader {...{"id":"design-guideline","size":"h3","className":"ws-title ws-h3"}}>
      {`Design guideline`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Design guidelines appear on the website and help designers to apply PatternFly components in their designs.  They are use case and solutions driven.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Example`}
      </strong>
      {`
`}
      <em>
        {`I want to add guidelines for how to apply labels and tags to organize objects.`}
      </em>
    </p>
    <p {...{"className":"ws-p"}}>
      {`You may open an issue in our `}
      <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-org"}}>
        {`patternfly-org repo`}
      </PatternflyThemeLink>
      {` to propose a new design guideline page or update an existing guideline, and work with the PatternFly team and stakeholders to author and publish your new content. Visit `}
      <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-org/wiki/Contributing-to-patternfly-org-for-designers"}}>
        {`Contributing to patternfly org for designers`}
      </PatternflyThemeLink>
      {` for detailed instructions about how to author and contribute design guideline content.`}
    </p>
    <AutoLinkHeader {...{"id":"patternfly-design-kit","size":"h3","className":"ws-title ws-h3"}}>
      {`PatternFly design kit`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The `}
      <PatternflyThemeLink {...{"to":"https://www.patternfly.org/v4/get-started/design"}}>
        {`PatternFly design kit`}
      </PatternflyThemeLink>
      {` is a `}
      <PatternflyThemeLink {...{"to":"https://www.sketch.com"}}>
        {`Sketch`}
      </PatternflyThemeLink>
      {` library that makes it easy for designers to create high-fidelity mockups using PatternFly components.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Example`}
      </strong>
      {`
`}
      <em>
        {`I want to implement a new component in the PatternFly Sketch symbol library.`}
      </em>
    </p>
    <p {...{"className":"ws-p"}}>
      {`To open an issue or browse existing issues, visit the `}
      <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-design-kit/"}}>
        {`patternfly-design-kit repo`}
      </PatternflyThemeLink>
      {` on GitHub.`}
    </p>
    <AutoLinkHeader {...{"id":"contributing-new-icons","size":"h3","className":"ws-title ws-h3"}}>
      {`Contributing new icons`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`We encourage designers to work with the existing PatternFly icon set when choosing icons to use in their project. These include both custom and existing Font Awesome icons that cover most common use cases. To see what's available, vist our `}
      <PatternflyThemeLink {...{"to":"https://www.patternfly.org/v4/guidelines/icons"}}>
        {`Icons page`}
      </PatternflyThemeLink>
      {`. However, there may be occasions where you want to propose a new icon to be added to PatternFly.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Example`}
      </strong>
      {`
`}
      <em>
        {`I want to add a new custom icon to PatternFly to meet my project specific need.`}
      </em>
    </p>
    <p {...{"className":"ws-p"}}>
      {`To contribute a new icon, start by opening an issue in the `}
      <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-design/issues"}}>
        {`patternfly-design`}
      </PatternflyThemeLink>
      {` repo proposing a new icon and why it's needed. Then, follow the procedure outlined here for `}
      <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-design/wiki/Creating-custom-icons"}}>
        {`creating custom icons`}
      </PatternflyThemeLink>
      {` and adding them to the PatternFly icon set.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`If you are interested in contributing to any of the projects above, feel free to reach out to us on the patternfly-design channel on `}
        <PatternflyThemeLink {...{"to":"https://slack.patternfly.org/"}}>
          {`Slack`}
        </PatternflyThemeLink>
        {`.`}
      </strong>
    </p>
  </React.Fragment>
);
Component.displayName = 'ContributeDesignDocs';
Component.pageData = pageData;

export default Component;
