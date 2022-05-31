import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport59 from '../../../content/design-guidelines/components/banner/./img/banner-types.png';
import srcImport60 from '../../../content/design-guidelines/components/banner/./img/placement-1.png';
import srcImport61 from '../../../content/design-guidelines/components/banner/./img/placement-2.png';
import srcImport62 from '../../../content/design-guidelines/components/banner/./img/placement-1.png';
import srcImport63 from '../../../content/design-guidelines/components/banner/./img/placement-2.png';
import srcImport64 from '../../../content/design-guidelines/components/banner/./img/example-1.png';
import srcImport65 from '../../../content/design-guidelines/components/banner/./img/example-2.png';
import srcImport66 from '../../../content/design-guidelines/components/banner/./img/example-3.png';
const pageData = {
  "id": "Banner",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/banner/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/banner/banner.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`banner`}
      </strong>
      {` is a 1-line, full color, full width container that can be used to communicate short snippets of information to users. Banners are un-intrusive, non-dismissible, and only support link buttons.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`For use cases requiring more than a single line of content or requiring important actions for the user to take, the flow should make use of the `}
      <PatternflyThemeLink {...{"to":"/components/alert/design-guidelines#inline-alerts"}}>
        {`inline alert`}
      </PatternflyThemeLink>
      {` or `}
      <PatternflyThemeLink {...{"to":"/components/hint/design-guidelines"}}>
        {`hint pattern`}
      </PatternflyThemeLink>
      {` instead, as they allow for more flexibility around these use cases.`}
    </p>
    <AutoLinkHeader {...{"id":"usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`PatternFly offers 5 different banner types detailed below.`}
    </p>
    <img src={srcImport59} height={srcImport59.height * 744 / srcImport59.width} {...{"alt":"5 different types of banners","width":"744","className":"ws-img"}}>
    </img>
    <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
      <thead>
        <tr {...{"role":"row"}}>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Type`}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Background color`}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Text color`}
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
          <td {...{"role":"cell","data-label":"Type"}}>
            <div>
              {`Default`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Background color"}}>
            <div>
              {`Grey `}
                            <br/>
              {`(--pf-global--BackgroundColor--dark-400)`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Text color"}}>
            <div>
              {`Black`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Usage"}}>
            <div>
              {`Use for generic messages with no associated severity`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Type"}}>
            <div>
              {`Info`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Background color"}}>
            <div>
              {`Blue `}
                            <br/>
              {`(--pf-global--info-color--100)`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Text color"}}>
            <div>
              {`Black`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Usage"}}>
            <div>
              {`Use for general information messages`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Type"}}>
            <div>
              {`Danger`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Background color"}}>
            <div>
              {`Red `}
                            <br/>
              {`(--pf-global--danger-color--100)`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Text color"}}>
            <div>
              {`White`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Usage"}}>
            <div>
              {`Use for high severity messages`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Type"}}>
            <div>
              {`Success`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Background color"}}>
            <div>
              {`Green `}
                            <br/>
              {`(--pf-global--success-color--100)`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Text color"}}>
            <div>
              {`White`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Usage"}}>
            <div>
              {`Use for positive, success messages`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Type"}}>
            <div>
              {`Warning`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Background color"}}>
            <div>
              {`Orange `}
                            <br/>
              {`(--pf-global--warning-color--100)`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Text color"}}>
            <div>
              {`Black`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Usage"}}>
            <div>
              {`Use for warning or medium severity messages`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <br/>
    <p {...{"className":"ws-p"}}>
      {`PatternFly suggests that users adopt one of these 5 colors, as they’ve been tested against their text colors for accessibility. However, if colors outside of these suggestions are used, we encourage using discretion when selecting the inner text color.`}
    </p>
    <AutoLinkHeader {...{"id":"placement","size":"h3","className":"ws-title ws-h3"}}>
      {`Placement`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`All banners should be a solid bar that spans the top and/or bottom of either:`}
    </p>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`The full page, above the masthead.`}
        </p>
        <img src={srcImport60} height={srcImport60.height * 990 / srcImport60.width} {...{"alt":"Example of banner placement above the masthead","width":"990","className":"ws-img"}}>
        </img>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`The content area of the page, below the masthead.`}
        </p>
        <img src={srcImport61} height={srcImport61.height * 990 / srcImport61.width} {...{"alt":"Example of banner placement below the masthead, inside page content area","width":"990","className":"ws-img"}}>
        </img>
      </li>
    </ol>
    <p {...{"className":"ws-p"}}>
      {`In all cases, the banner should be sticky to the top (and to the bottom as well, if using a bottom banner in addition to the top banner).`}
    </p>
    <AutoLinkHeader {...{"id":"padding","size":"h3","className":"ws-title ws-h3"}}>
      {`Padding`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The padding above and below a banner will depend on where you place it.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`If you place your banner above the masthead,`}
      </strong>
      {` the padding above and below should be 0px, as the banner should touch the masthead.`}
    </p>
    <img src={srcImport62} height={srcImport62.height * 990 / srcImport62.width} {...{"alt":"Padding when banner is placed above the masthead","width":"990","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`If you place your banner below the masthead and inside the page body,`}
      </strong>
      {` there should be no padding on top of it, and in most cases, you should have 24px padding between the banner and whatever comes under it. The only exception is when you have breadcrumbs directly underneath the banner –– in that case, the padding should be 16px.`}
    </p>
    <img src={srcImport63} height={srcImport63.height * 990 / srcImport63.width} {...{"alt":"Padding when banner is placed below the masthead","width":"990","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"examples","size":"h3","className":"ws-title ws-h3"}}>
      {`Examples`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Banners are flexible and can be used for any content, so they span several use cases.`}
    </p>
    <AutoLinkHeader {...{"id":"to-indicate-that-an-applicationsite-is-offline","size":"h4","className":"ws-title ws-h4"}}>
      {`To indicate that an application/site is offline`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`In this example, a banner is used to indicate to the user that the site is undergoing maintenance and that they will have limited functionality as a result. The banner is shown at the top and bottom to ensure that the user does not miss this disclaimer.`}
    </p>
    <img src={srcImport64} height={srcImport64.height * 990 / srcImport64.width} {...{"alt":"Example of default banner in use","width":"990","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"to-indicate-that-an-application-upgrade-is-available","size":"h4","className":"ws-title ws-h4"}}>
      {`To indicate that an application upgrade is available`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`In this example, the user is notified of an available upgrade through a banner at the top of the page. Since the use case here is to convey information, an informational banner was used.`}
    </p>
    <img src={srcImport65} height={srcImport65.height * 990 / srcImport65.width} {...{"alt":"Example of info banner in use","width":"990","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"government-system-classification-banner","size":"h4","className":"ws-title ws-h4"}}>
      {`Government system classification banner`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`In this example, a banner is used to display classification level on a webpage. When an information system is deployed into the U.S. Government, it must be approved of what type of data to process, such as data classification. This classification banner communicates what types of data users are working with.`}
    </p>
    <img src={srcImport66} height={srcImport66.height * 990 / srcImport66.width} {...{"alt":"Example of danger banner in use","width":"990","className":"ws-img"}}>
    </img>
  </React.Fragment>
);
Component.displayName = 'ComponentsBannerDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
