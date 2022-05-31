import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport537 from '../../../content/design-guidelines/styles/spacers/./padding-example.png';
import '../../../content/design-guidelines/styles/spacers/./spacers.css';
const pageData = {
  "id": "Spacers",
  "section": "guidelines",
  "source": "design-guidelines",
  "slug": "/guidelines/spacers/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/styles/spacers/spacers.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`We use spacers to define fixed amounts of space between elements. Spacers make it easy for designers to maintain consistency across screens. Since the same spacer sizes and values are built into the PatternFly codebase, spacers also majorly simplify the design handoff between designers and developers.`}
    </p>
    <div className="pf-u-display-flex pf-u-flex-direction-row pf-u-mb-lg">
      <div className="ws-content-spacer4"/>
            <div className="pf-u-display-flex pf-u-flex-direction-column">
        <div className="ws-content-spacerTitle">
{`4px spacer`}
</div>
                <div className="pf-u-display-flex pf-u-flex-direction-row">
          <p className="pf-u-my-0 pf-u-mr-sm ws-content-p">
{`Global CSS variable`}
</p>
                    <code className="ws-code">
{`--pf-global--spacer--xs`}
</code>
</div>
</div>
</div>
    <div className="pf-u-display-flex pf-u-flex-direction-row pf-u-mb-lg">
      <div className="ws-content-spacer8"/>
            <div className="pf-u-display-flex pf-u-flex-direction-column">
        <div className="ws-content-spacerTitle">
{`8px spacer`}
</div>
                <div className="pf-u-display-flex pf-u-flex-direction-row">
          <p className="pf-u-my-0 pf-u-mr-sm ws-content-p">
{`Global CSS variable`}
</p>
                    <code className="ws-code">
{`--pf-global--spacer--sm`}
</code>
</div>
</div>
</div>
    <div className="pf-u-display-flex pf-u-flex-direction-row pf-u-mb-lg">
      <div className="ws-content-spacer16"/>
            <div className="pf-u-display-flex pf-u-flex-direction-column">
        <div className="ws-content-spacerTitle">
{`16px spacer`}
</div>
                <div className="pf-u-display-flex pf-u-flex-direction-row">
          <p className="pf-u-my-0 pf-u-mr-sm ws-content-p">
{`Global CSS variable`}
</p>
                    <code className="ws-code">
{`--pf-global--spacer--md`}
</code>
</div>
</div>
</div>
    <div className="pf-u-display-flex pf-u-flex-direction-row pf-u-mb-lg">
      <div className="ws-content-spacer24"/>
            <div className="pf-u-display-flex pf-u-flex-direction-column">
        <div className="ws-content-spacerTitle">
{`24px spacer`}
</div>
                <div className="pf-u-display-flex pf-u-flex-direction-row">
          <p className="pf-u-my-0 pf-u-mr-sm ws-content-p">
{`Global CSS variable`}
</p>
                    <code className="ws-code">
{`--pf-global--spacer--lg`}
</code>
</div>
</div>
</div>
    <div className="pf-u-display-flex pf-u-flex-direction-row pf-u-mb-lg">
      <div className="ws-content-spacer32"/>
            <div className="pf-u-display-flex pf-u-flex-direction-column">
        <div className="ws-content-spacerTitle">
{`32px spacer`}
</div>
                <div className="pf-u-display-flex pf-u-flex-direction-row">
          <p className="pf-u-my-0 pf-u-mr-sm ws-content-p">
{`Global CSS variable`}
</p>
                    <code className="ws-code">
{`--pf-global--spacer--xl`}
</code>
</div>
</div>
</div>
    <div className="pf-u-display-flex pf-u-flex-direction-row pf-u-mb-lg">
      <div className="ws-content-spacer48"/>
            <div className="pf-u-display-flex pf-u-flex-direction-column">
        <div className="ws-content-spacerTitle">
{`48px spacer`}
</div>
                <div className="pf-u-display-flex pf-u-flex-direction-row">
          <p className="pf-u-my-0 pf-u-mr-sm ws-content-p">
{`Global CSS variable`}
</p>
                    <code className="ws-code">
{`--pf-global--spacer--2xl`}
</code>
</div>
</div>
</div>
    <div className="pf-u-display-flex pf-u-flex-direction-row pf-u-mb-lg">
      <div className="ws-content-spacer64"/>
            <div className="pf-u-display-flex pf-u-flex-direction-column">
        <div className="ws-content-spacerTitle">
{`64px spacer`}
</div>
                <div className="pf-u-display-flex pf-u-flex-direction-row">
          <p className="pf-u-my-0 pf-u-mr-sm ws-content-p">
{`Global CSS variable`}
</p>
                    <code className="ws-code">
{`--pf-global--spacer--3xl`}
</code>
</div>
</div>
</div>
    <p {...{"className":"ws-p"}}>
      <PatternflyThemeLink {...{"to":"/developer-resources/global-css-variables"}}>
        {`Click here for all variables`}
      </PatternflyThemeLink>
      {`
`}
            <div className="pf-u-display-flex ws-content-demo pf-u-my-3xl pf-u-p-xl">        <div className="pf-u-display-flex pf-u-flex-direction-column pf-u-mb-xl">          <div className="h4 ws-content-correct">            <i className="fas fa-check-circle"/>
            {`
Correct
`}</div>
                    <p>{`Include spacers in your designs to make it easy for developers to quickly see what size spacer you are using between elements.
`}</p>
</div>
                <div className="pf-u-display-flex pf-u-flex-direction-column">          <div className="h4 ws-content-incorrect">            <i className="fas fa-exclamation-triangle"/>
            {`
Incorrect
`}</div>
                    <p>{`Don’t use spacers to design flexible layouts that utilize responsive measurement variables.
`}</p>
                    <p>{`Don’t use spacers to define both horizontal and vertical space at the same time - spacers should be used to define a single spacing variable.
`}</p>
</div></div>
    </p>
    <h1 className="pf-c-title pf-m-2xl">
{`Considering line height and padding`}
</h1>
    <p>
{`Certain components or elements like icons, buttons, and input fields, have a fixed amount of padding built-in. Remember to take that extra space around each element into account when laying the content out on your page. You may not have as much horizontal or vertical room as you think.`}
</p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport537} width={srcImport537.width} height={srcImport537.height} {...{"alt":"Spacers Example","className":"ws-img"}}>
      </img>
    </p>
    <p className="pf-u-mt-3xl ws-content-p">
{`When laying out text-based content, remember to take line height into account so you’re leaving the right amount of vertical space between each line of text.`}
</p>
    <div
  className="ws-content-border"
  style={{"fontSize":"36px"}}
>
{`Design is a journey of discovery`}
</div>
    <div
  className="ws-content-spacer16"
  style={{"height":"16px"}}
/>
    <p className="ws-content-border ws-content-p">
{`Body text should be Overpass Regular at 16px. It should have leading of 24px because of its relative line height of 1.5.`}
</p>
    <p className="pf-u-mt-3xl ws-content-p">
{`You also need to use different spacer sizes depending on the type of text you’re using. For example, you’ll need to provide a 16px spacer between a title and body copy, but only an 8px spacer between items in a bulleted or numbered list.`}
</p>
    <div
  className="ws-content-border"
  style={{"fontSize":"28px"}}
>
{`Design is a journey of discovery`}
</div>
    <div
  className="ws-content-spacer16"
  style={{"height":"16px"}}
/>
    <p
  className="ws-content-border ws-content-p"
  style={{"marginBottom":"0"}}
>
{`Body text should be Overpass Regular at 16px. It should have leading of 24px because of its relative line height of 1.5.`}
</p>
    <div
  className="ws-content-spacer24"
  style={{"height":"24px"}}
/>
    <div className="h2 ws-content-border">
{`Design is a journey of discovery`}
</div>
    <div
  className="ws-content-spacer16"
  style={{"height":"16px"}}
/>
    <p
  className="ws-content-border ws-content-p"
  style={{"marginBottom":"0"}}
>
{`Body text should be Overpass Regular at 16px. It should have leading of 24px because of its relative line height of 1.5.`}
</p>
    <div
  className="ws-content-spacer16"
  style={{"height":"16px"}}
/>
    <p
  className="ws-content-border ws-content-p"
  style={{"marginBottom":"0"}}
>
      <ol {...{"className":"ws-ol"}}>
        <li {...{"className":"ws-li"}}>
          {`Lists should use body text style with 8px between items.`}
        </li>
      </ol>
</p>
    <div
  className="ws-content-spacer8"
  style={{"height":"8px"}}
/>
    <p
  className="ws-content-border ws-content-p"
  style={{"marginBottom":"0"}}
>
      <ol {...{"start":2,"className":"ws-ol"}}>
        <li {...{"className":"ws-li"}}>
          {`This is the second item in the list.`}
        </li>
      </ol>
</p>
    <div
  className="ws-content-spacer8"
  style={{"height":"8px"}}
/>
    <p
  className="ws-content-border ws-content-p"
  style={{"marginBottom":"0"}}
>
{`a. Secondary items in the list should use 8px spacing.`}
</p>
    <div
  className="ws-content-spacer8"
  style={{"height":"8px"}}
/>
    <p
  className="ws-content-border ws-content-p"
  style={{"marginBottom":"0"}}
>
{`b. They still use the same text styling, however.`}
</p>
    <p className="pf-u-my-3xl ws-content-p">
{`For more information about line height and typography, go to the `}
      <PatternflyThemeLink {...{"to":"/guidelines/typography"}}>
        {`typography page.`}
      </PatternflyThemeLink>
</p>
  </React.Fragment>
);
Component.displayName = 'GuidelinesSpacersDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
