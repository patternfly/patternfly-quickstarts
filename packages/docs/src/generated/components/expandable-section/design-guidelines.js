import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport199 from '../../../content/design-guidelines/components/expandable-section/./img/elements.png';
import srcImport200 from '../../../content/design-guidelines/components/expandable-section/./img/form.png';
import srcImport201 from '../../../content/design-guidelines/components/expandable-section/./img/inline-alert.png';
import srcImport202 from '../../../content/design-guidelines/components/expandable-section/./img/side-panel.png';
import srcImport203 from '../../../content/design-guidelines/components/expandable-section/./img/documentation.png';
const pageData = {
  "id": "Expandable section",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/expandable-section/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/expandable-section/expandable-section.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`An `}
      <strong>
        {`expandable section`}
      </strong>
      {` component is used to support progressive disclosure in a form or page by hiding additional content when you don’t want it to be shown by default. An expandable section can contain any type of content such as plain text, form inputs, and charts.`}
    </p>
    <AutoLinkHeader {...{"id":"elements","size":"h2","className":"ws-title ws-h2"}}>
      {`Elements`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`An expandable section has two main elements.`}
    </p>
    <img src={srcImport199} height={srcImport199.height * 284 / srcImport199.width} {...{"alt":"Elements of expandable section","width":"284","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Caret:`}
        </strong>
        {` Indicates whether the section is expanded or collapsed.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Toggle text:`}
        </strong>
        {` Informs the user what will be shown when the component is expanded.`}
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use an expandable section when you want to hide optional or advanced content by default. They are commonly used in forms to reveal plain text or additional form fields. They can also be used to reveal `}
      <PatternflyThemeLink {...{"to":"https://www.patternfly.org/v4/charts/about"}}>
        {`charts`}
      </PatternflyThemeLink>
      {`, `}
      <PatternflyThemeLink {...{"to":"https://www.patternfly.org/v4/components/card"}}>
        {`cards`}
      </PatternflyThemeLink>
      {`, `}
      <PatternflyThemeLink {...{"to":"https://www.patternfly.org/v4/components/data-list"}}>
        {`data lists`}
      </PatternflyThemeLink>
      {`, or `}
      <PatternflyThemeLink {...{"to":"https://www.patternfly.org/v4/components/table"}}>
        {`table views`}
      </PatternflyThemeLink>
      {`. Expandable sections may be used in `}
      <PatternflyThemeLink {...{"to":"https://www.patternfly.org/v4/components/alert"}}>
        {`alerts`}
      </PatternflyThemeLink>
      {` to show additional information.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`We recommend using the dynamic toggle text when designing with the expandable section. Dynamic toggle text will update based on the state of the expandable section. For example, it may read `}
      <strong>
        {`Show more`}
      </strong>
      {` when the toggle is collapsed, and `}
      <strong>
        {`Show less`}
      </strong>
      {` when the toggle is open.`}
    </p>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Expandable section in a form`}
      </strong>
    </p>
    <img src={srcImport200} height={srcImport200.height * 1514 / srcImport200.width} {...{"alt":"Expandable section in a form","width":"1514","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Expandable section in an inline alert`}
      </strong>
    </p>
    <img src={srcImport201} height={srcImport201.height * 502 / srcImport201.width} {...{"alt":"Expandable section in an inline alert","width":"502","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Expandable section in a side panel`}
      </strong>
    </p>
    <img src={srcImport202} height={srcImport202.height * 1047 / srcImport202.width} {...{"alt":"Expandable section in a side panel","width":"1047","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Expandable section in a documentation page`}
      </strong>
    </p>
    <img src={srcImport203} height={srcImport203.height * 644 / srcImport203.width} {...{"alt":"Expandable section in a documentation page","width":"644","className":"ws-img"}}>
    </img>
  </React.Fragment>
);
Component.displayName = 'ComponentsExpandableSectionDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
