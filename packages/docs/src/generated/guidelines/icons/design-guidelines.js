import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport531 from '../../../content/design-guidelines/styles/icons/./sm-icons-1.png';
import srcImport532 from '../../../content/design-guidelines/styles/icons/./sm-icons-2.png';
import srcImport533 from '../../../content/design-guidelines/styles/icons/./md-icons.png';
import srcImport534 from '../../../content/design-guidelines/styles/icons/./lg-icons.png';
import srcImport535 from '../../../content/design-guidelines/styles/icons/./xl-icons.png';
import srcImport536 from '../../../content/design-guidelines/styles/icons/./icon_alignment.png';
import { Card, CardBody, Divider, Flex, FlexItem, Grid, GridItem } from '@patternfly/react-core';
import CaretDownIcon from '@patternfly/react-icons/dist/esm/icons/caret-down-icon';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';
import GithubIcon from '@patternfly/react-icons/dist/esm/icons/github-icon';
import OutlinedCalendarAltIcon from '@patternfly/react-icons/dist/esm/icons/outlined-calendar-alt-icon';
import StarIcon from '@patternfly/react-icons/dist/esm/icons/star-icon';
import TagIcon from '@patternfly/react-icons/dist/esm/icons/tag-icon';
import TimesCircleIcon from '@patternfly/react-icons/dist/esm/icons/times-circle-icon';
import { IconRecommendations } from '../../../content/design-guidelines/styles/icons/./IconRecommendations';
import { IconsTable } from '../../../content/design-guidelines/styles/icons/./IconsTable';
import '../../../content/design-guidelines/styles/icons/./icons.css';
const pageData = {
  "id": "Icons",
  "section": "guidelines",
  "source": "design-guidelines",
  "slug": "/guidelines/icons/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/styles/icons/icons.md"
};
pageData.liveContext = {
  Card,
  CardBody,
  Divider,
  Flex,
  FlexItem,
  Grid,
  GridItem,
  CaretDownIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  GithubIcon,
  OutlinedCalendarAltIcon,
  StarIcon,
  TagIcon,
  TimesCircleIcon,
  IconRecommendations,
  IconsTable
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`If you're a developer, check out our `}
      <PatternflyThemeLink {...{"to":"/get-started/develop#using-styles"}}>
        {`getting started`}
      </PatternflyThemeLink>
      {` page to learn more about how to get and use our icon set.`}
    </p>
    <AutoLinkHeader {...{"id":"icon-sizes","size":"h2","className":"ws-title ws-h2"}}>
      {`Icon sizes`}
    </AutoLinkHeader>
    <Grid gutter="md">
      <GridItem
  xl={6}
  lg={12}
  className="ws-icons-gridtext"
>
        <p>
{`Medium icons are used as our base size across our system as a whole and we recommend using this base size within your applications. Small, large and x-large icons are used sparingly across PatternFly components. Here is a complete list of icon sizes:`}
</p>
                <Flex
  className="ws-icon-sizes ws-icon-sizes-sm"
  alignItems={{ default: 'alignItemsFlexStart' }}
>
          <FlexItem className="ws-icon-size">
            <CheckCircleIcon size="sm"/>
</FlexItem>
                    <FlexItem>
            <p>
{`Small (10px)`}
</p>
                        <code className="ws-code ws-icon-code">
{`--pf-global--icon--FontSize--sm`}
</code>
</FlexItem>
</Flex>
                <Flex
  className="ws-icon-sizes ws-icon-sizes-md"
  alignItems={{ default: 'alignItemsFlexStart' }}
>
          <FlexItem className="ws-icon-size">
            <CheckCircleIcon size="md"/>
</FlexItem>
                    <FlexItem>
            <p>
{`Medium (18px)`}
</p>
                        <code className="ws-code ws-icon-code">
{`--pf-global--icon--FontSize--md`}
</code>
</FlexItem>
</Flex>
                <Flex
  className="ws-icon-sizes ws-icon-sizes-lg"
  alignItems={{ default: 'alignItemsFlexStart' }}
>
          <FlexItem className="ws-icon-size">
            <CheckCircleIcon size="lg"/>
</FlexItem>
                    <FlexItem>
            <p>
{`Large (24px)`}
</p>
                        <code className="ws-code ws-icon-code">
{`--pf-global--icon--FontSize--lg`}
</code>
</FlexItem>
</Flex>
                <Flex
  className="ws-icon-sizes ws-icon-sizes-xl"
  alignItems={{ default: 'alignItemsFlexStart' }}
>
          <FlexItem className="ws-icon-size">
            <CheckCircleIcon size="xl"/>
</FlexItem>
                    <FlexItem>
            <p>
{`X-large (54px)`}
</p>
                        <code className="ws-code ws-icon-code">
{`--pf-global--icon--FontSize--xl`}
</code>
</FlexItem>
</Flex>
</GridItem>
            <GridItem
  xl={5}
  xlOffset={7}
  lg={12}
  xlRowSpan={2}
>
        <Card className="ws-icon-size-examples">
          <CardBody>
            <p>
              <b>
{`Small icons`}
</b>
</p>
                        <Flex alignItems={{ default: 'alignItemsFlexStart' }}>
              <FlexItem>
                <img src={srcImport531} width={srcImport531.width} height={srcImport531.height} {...{"alt":"Small icons","className":"ws-sm-icons ws-sm-icons-1 ws-img"}}>
                </img>
</FlexItem>
                            <FlexItem grow={{ default: 'grow' }}>
                <img src={srcImport532} width={srcImport532.width} height={srcImport532.height} {...{"alt":"Small icons","className":"ws-sm-icons ws-sm-icons-2 ws-img"}}>
                </img>
</FlexItem>
</Flex>
                        <p>
              <b>
{`Medium icons`}
</b>
</p>
            <img src={srcImport533} width={srcImport533.width} height={srcImport533.height} {...{"alt":"Medium icons","className":"ws-md-icons ws-img"}}>
            </img>
                        <p>
              <b>
{`Large icons`}
</b>
</p>
            <img src={srcImport534} width={srcImport534.width} height={srcImport534.height} {...{"alt":"Large icons","className":"ws-lg-icons ws-img"}}>
            </img>
                        <p>
              <b>
{`X-large icons`}
</b>
</p>
            <img src={srcImport535} width={srcImport535.width} height={srcImport535.height} {...{"alt":"Extra large icons","className":"ws-xl-icons ws-img"}}>
            </img>
</CardBody>
</Card>
</GridItem>
            <GridItem
  xl={6}
  lg={12}
  className="ws-icons-gridtext ws-icons-alignment-section"
>
{`No matter the size of the icon, when icons are next to text, they should be center-aligned horizontally. An example of this alignment in a component is a `}
        <PatternflyThemeLink {...{"to":"/components/button/design-guidelines#button-types"}}>
          {`link button.`}
        </PatternflyThemeLink>
        {` If icons are stacked, they should also be center-aligned vertically.
`}
                <div>
          <img src={srcImport536} width={srcImport536.width} height={srcImport536.height} {...{"alt":"Icon alignment","className":"ws-icon-alignment ws-img"}}>
          </img></div>
</GridItem>
</Grid>
    <Divider className="ws-icons-divider"/>
    <AutoLinkHeader {...{"id":"icon-colors","size":"h2","className":"ws-title ws-h2"}}>
      {`Icon colors`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Visit our `}
      <PatternflyThemeLink {...{"to":"/guidelines/colors"}}>
        {`colors page`}
      </PatternflyThemeLink>
      {` to learn more about icon colors.`}
    </p>
    <Divider className="ws-icons-divider"/>
    <AutoLinkHeader {...{"id":"all-icons","size":"h2","className":"ws-title ws-h2"}}>
      {`All icons`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`PatternFly uses custom icons and selections from `}
            <a href="https://fontawesome.com/icons?d=gallery&m=free">{`Font Awesome Free`}</a>
      {`. PatternFly icons are mostly two dimensional and flat. Navigate to Font Awesome’s website to download SVGs of any additional ‘fa’ icons within their free set. Proper attribution should be given as outlined on the Font Awesome site.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Click on any single icon in the table to download it as an SVG. Download all icon SVGs `}
            <a href="https://github.com/patternfly/patternfly-design/raw/master/resources/patternfly-icon-svgs/patternfly-icons.zip">{`here`}</a>
      {`.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`If you’re a designer, these icons are the same set as the ones in the `}
      <PatternflyThemeLink {...{"to":"/get-started/design"}}>
        {`PatternFly Sketch Design Kit.`}
      </PatternflyThemeLink>
      {` It is possible to use any FontAwesome icon as long it follows the guidelines above.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`If you’re looking to copy HTML for an icon:`}
            <br/>
      {`
Use this for 'pficon' icons: `}
      <code {...{"className":"ws-code"}}>
        {`<i class="pf-icon [insert-icon-name]"></i>`}
      </code>
            <br/>
      {`
Use this for 'fa' solid icons: `}
      <code {...{"className":"ws-code"}}>
        {`<i class="fas [insert-icon-name]"></i>`}
      </code>
            <br/>
      {`
Use this for 'fa' regular icons: `}
      <code {...{"className":"ws-code"}}>
        {`<i class="far [insert-icon-name]"></i>`}
      </code>
            <br/>
      {`
`}
            <small>{`Note: Be sure to read `}
        <PatternflyThemeLink {...{"to":"/get-started/develop#using-styles"}}>
          {`how to get started with icons`}
        </PatternflyThemeLink>
        {` when using 'fa' regular icons`}</small>
    </p>
    <p {...{"className":"ws-p"}}>
      {`If you're looking to copy React for an icon:`}
            <br/>
      {`
Use this for 'pficon' icons: `}
      <code {...{"className":"ws-code"}}>
        {`import { [insert-icon-name] } from '@patternfly/react-icons'`}
      </code>
    </p>
    <AutoLinkHeader {...{"id":"font-awesome-solid-fas-vs-font-awesome-regular-far","size":"h3","className":"ws-title ws-h3"}}>
      {`Font Awesome solid (FAS) vs Font Awesome regular (FAR)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The Font Awesome icons included with PatternFly core are FAS (Font Awesome solid) webfont icons. If you're using icons via `}
      <code {...{"className":"ws-code"}}>
        {`<i class="[fa, far, fas] [insert-icon-name]"></i>`}
      </code>
      {`, designers and developers may use any FAS icon in their designs. If a FAR icon is needed, developers must include the FAR icon(s) themselves. There are a few ways of doing so:`}
    </p>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://fontawesome.com/how-to-use/on-the-web/setup/hosting-font-awesome-yourself"}}>
          {`Hosting it yourself`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://fontawesome.com/how-to-use/on-the-web/setup/using-package-managers"}}>
          {`Including via a package manager`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://cdnjs.com/libraries/font-awesome"}}>
          {`Linking to a CDN`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Use the SVG code directly from `}
        <PatternflyThemeLink {...{"to":"https://fontawesome.com"}}>
          {`fontawesome.com`}
        </PatternflyThemeLink>
        {` (though this requires attribution)`}
      </li>
    </ol>
    <IconsTable/>
    <Divider className="ws-icons-divider"/>
    <AutoLinkHeader {...{"id":"updated-icon-recommendations","size":"h2","className":"ws-title ws-h2"}}>
      {`Updated icon recommendations`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`We’ve recently updated some of our PatternFly icons as well as icon usage guidelines. If you are using an outdated icon, we suggest you migrate over to the newest recommendations.`}
    </p>
    <IconRecommendations/>
  </React.Fragment>
);
Component.displayName = 'GuidelinesIconsDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
