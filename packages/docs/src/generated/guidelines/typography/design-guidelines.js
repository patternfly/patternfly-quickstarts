import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import { Button, Grid, GridItem } from '@patternfly/react-core';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';
import TimesCircleIcon from '@patternfly/react-icons/dist/esm/icons/times-circle-icon';
import { TypographyGrid, LineHeightTitle, SpacingContentItem, Spacer, TitleLevel, styleProps } from '../../../content/design-guidelines/styles/typography/./typography';
import correct from '../../../content/design-guidelines/styles/typography/./typography_correct_spacing.png';
import incorrect from '../../../content/design-guidelines/styles/typography/./typography_incorrect_spacing.png';
import '../../../content/design-guidelines/styles/typography/./typography.css';
const pageData = {
  "id": "Typography",
  "section": "guidelines",
  "source": "design-guidelines",
  "slug": "/guidelines/typography/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/styles/typography/typography.md"
};
pageData.liveContext = {
  Button,
  Grid,
  GridItem,
  CheckCircleIcon,
  TimesCircleIcon,
  TypographyGrid,
  LineHeightTitle,
  SpacingContentItem,
  Spacer,
  TitleLevel,
  styleProps,
  correct,
  incorrect
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"our-font-family","size":"h2","className":"ws-title ws-h2"}}>
      {`Our font family`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`We use Red Hat Display and Red Hat Text. Red Hat Display should be used for `}
      <strong>
        {`larger`}
      </strong>
      {` text headlines, while Red Hat text should be used for `}
      <strong>
        {`smaller`}
      </strong>
      {` subheaders and body text, for better long-form readability.`}
    </p>
    <Button
  style={{borderRadius: '0px', fontWeight: '600', paddingTop: '12px', paddingBottom: '12px', paddingLeft: '24px', paddingRight: '24px'}}
  variant="primary"
  component="a"
  href="https://github.com/RedHatOfficial/RedHatFont"
  target="_blank"
>
{`DOWNLOAD`}
</Button>
    <AutoLinkHeader {...{"id":"usage-guidelines","size":"h2","className":"ws-title ws-h2"}}>
      {`Usage guidelines`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use typography to create visual hierarchy. A consistent and logical hierarchy makes it easier for users to quickly scan and understand information on a page.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`There are two components that can be used to place text content on a page. The `}
      <PatternflyThemeLink {...{"to":"/components/text"}}>
        {`text component`}
      </PatternflyThemeLink>
      {` should be used for creating formatted blocks of text content and accepts all general HTML text formatting tags, including heading, paragraph, and list styles. The `}
      <PatternflyThemeLink {...{"to":"/components/title"}}>
        {`title component`}
      </PatternflyThemeLink>
      {` is intended to be used specifically for headings or title text in cards or in similar elements. Title provides the flexibility to set the size of the text and heading level independently.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`The table below lists all common text styles that are used in PatternFly applications, how they should be used, style settings, and default heading levels, where applicable. Here are further details about the information contained in the table:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Font family, font weight, line height, and font size:`}
          </strong>
          {` These are the styles applied to that text category in the PatternFly CSS.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Text style:`}
          </strong>
          {` This is the name used to refer to that text style in the PatternFly design kit.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Font size CSS variable:`}
          </strong>
          {` This is the CSS variable that controls the size of this text. You can customize type sizes in your application by modifying the values associated with these variables. In general, this is not advised, and should only be done with caution, as changes to text style can have far reaching side effects on spacing within certain components.`}
        </p>
      </li>
    </ul>
    <TitleLevel
  title="Super hero heading (4xl)"
  className="pf-c-title pf-m-lg"
  asGrid
  note="Use only for extra large titles in cards or similar locations. Do not use for page titles"
  styleProps={styleProps.superHero}
/>
    <TitleLevel
  title="Hero heading (3xl)"
  className="pf-c-title pf-m-lg"
  asGrid
  note="Use only for extra large titles in cards or similar locations. Do not use for page titles"
  styleProps={styleProps.hero}
/>
    <TitleLevel
  title="First level heading (2xl, h1)"
  className="pf-c-title pf-m-lg"
  asGrid
  note="Only one first level/h1 heading should ever exist on a page"
  styleProps={styleProps.first}
/>
    <TitleLevel
  title="Second level heading (xl, h2)"
  className="pf-c-title pf-m-lg"
  asGrid
  styleProps={styleProps.second}
/>
    <TitleLevel
  title="Third level heading (lg, h3)"
  className="pf-c-title pf-m-lg"
  asGrid
  styleProps={styleProps.third}
/>
    <TitleLevel
  title="Fourth level heading (md, h4)"
  className="pf-c-title pf-m-lg"
  asGrid
  styleProps={styleProps.fourth}
/>
    <TitleLevel
  title="Default body text"
  className="pf-c-title pf-m-lg"
  asGrid
  note="This is the default text style for paragraphs, lists, tables, etc. Some components use RedHatText at 700 font weight, which is RedHatText Medium (such as alerts and navigation)"
  styleProps={styleProps.body}
/>
    <TitleLevel
  title="Small text"
  className="pf-c-title pf-m-lg"
  asGrid
  styleProps={styleProps.small}
/>
    <TitleLevel
  title="Tiny text"
  className="pf-c-title pf-m-lg"
  asGrid
  styleProps={styleProps.tiny}
/>
    <TitleLevel
  title="Code"
  className="pf-c-title pf-m-lg"
  asGrid
  note="Used for code blocks "
  styleProps={styleProps.code}
/>
    <AutoLinkHeader {...{"id":"customizing-heading-levels","size":"h3","className":"ws-title ws-h3"}}>
      {`Customizing heading levels`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`If you use the `}
      <PatternflyThemeLink {...{"to":"/components/title"}}>
        {`title component`}
      </PatternflyThemeLink>
      {` to create headings on your page, you can modify the default relationship between heading levels and text sizes. In using title, you must specify a heading level that will apply to the target text. The table below shows the default mapping of heading level to text size:`}
    </p>
    <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
      <thead>
        <tr {...{"role":"row"}}>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Heading level`}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Default size`}
            </div>
          </th>
        </tr>
      </thead>
      <tbody {...{"role":"rowgroup"}}>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Heading level"}}>
            <div>
              {`h1`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Default size"}}>
            <div>
              {`2xl (24px)`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Heading level"}}>
            <div>
              {`h2`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Default size"}}>
            <div>
              {`xl (20px)`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Heading level"}}>
            <div>
              {`h3`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Default size"}}>
            <div>
              {`lg (18px)`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Heading level"}}>
            <div>
              {`h4`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Default size"}}>
            <div>
              {`md (16px)`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Heading level"}}>
            <div>
              {`h5`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Default size"}}>
            <div>
              {`md (16px)`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Heading level"}}>
            <div>
              {`h6`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Default size"}}>
            <div>
              {`md (16px)`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <p {...{"className":"ws-p"}}>
      {`Using this component, you can customize the visual hierarchy of text on your page while keeping the semantic hierarchy consistent with expectations for accessibility. For example, you may decide that 20px secondary headings are too large and you want to drop the size of these headings from 20px (xl) to 18px (lg). Rather than make your secondary headings h3’s, you should use the title component to keep them as h2 headings but change the associated text size from `}
      <code {...{"className":"ws-code"}}>
        {`xl`}
      </code>
      {` to `}
      <code {...{"className":"ws-code"}}>
        {`lg`}
      </code>
      {`.  You can also choose to use larger primary headers by changing the default text size as the title component will support text sizes up to 4xl (36px).`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`No matter what visual customizations you choose to make, you should always maintain good visual hierarchy and mapping between heading levels and text sizes. In most cases, h1 should always be your largest heading and subheadings should get progressively smaller as you move down the hierarchy. Exceptions to this rule do occur. For example, there might be cases where card titles will use a text size that is larger than the h1 page title. We advise this approach to be used sparingly and only when it may be important to highlight critical data as in a dashboard.`}
    </p>
    <AutoLinkHeader {...{"id":"line-height-and-spacing","size":"h2","className":"ws-title ws-h2"}}>
      {`Line height and spacing`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Spacing represents margins above and below text. When measuring spacing in text-based content, plan for line height. To get the correct line height in pixels, multiply line height by text size. Use spacers to provide appropriate spacing between lines of text.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`For example, if a body of text uses a line height of 1.5 and the body text size is 16px, the final line height would be 24 px (16 * 1.5 = 24). In this case, include the 24px line height as part of the text when creating designs in the design software. Visit the `}
      <PatternflyThemeLink {...{"to":"/guidelines/spacers"}}>
        {`Spacers`}
      </PatternflyThemeLink>
      {` page for more information about spacer usage.`}
    </p>
    <Grid>
      <GridItem span={12}>
        <LineHeightTitle>
          <CheckCircleIcon color="#52A549"/>
                    <span style={{color: '#151515', marginLeft: '8px'}}>
{`Correct`}
</span>
</LineHeightTitle>
                <div>
{`Include line height space when laying out text with spacers.`}
</div>
                <img
  alt="correct line height space example"
  style={{maxHeight: '158px', padding: '16px'}}
  src={correct}
/>
</GridItem>
            <GridItem span={12}>
        <LineHeightTitle>
          <TimesCircleIcon color="#CC0000"/>
                    <span style={{color: '#151515', marginLeft: '8px'}}>
{`Incorrect`}
</span>
</LineHeightTitle>
                <div>
{`Don't only use text to align with spacing elements when designing. Always include the line height space.`}
</div>
                <img
  alt="incorrect line height space example"
  style={{maxHeight: '124px', padding: '16px'}}
  src={incorrect}
/>
</GridItem>
</Grid>
    <p {...{"className":"ws-p"}}>
      {`Note that use of the `}
      <PatternflyThemeLink {...{"to":"/components/text"}}>
        {`text`}
      </PatternflyThemeLink>
      {` and `}
      <PatternflyThemeLink {...{"to":"/components/title"}}>
        {`title`}
      </PatternflyThemeLink>
      {` components will automatically apply the proper line height and spacing according to the specified text style.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'GuidelinesTypographyDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
