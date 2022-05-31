import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Product tours",
  "section": "UX writing",
  "source": "design-guidelines",
  "slug": "/ux-writing/product-tours/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/content/product-tours.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A product tour, also referred to as an "onboarding flow," is a series of dialog boxes or pop-ups that introduce a new tool or a tool redesign to users.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`In product tours, your UX copy is never strictly to tell a user `}
      <em>
        {`how`}
      </em>
      {` something works. You need to convince them that the product—and learning about the product—is worth their time.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Focus on the user’s goals`}
      </strong>
      {`: Emphasize what the user can do with the product.`}
    </p>
    <div className="ws-content-table">
      <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
        <thead>
          <tr {...{"role":"row"}}>
            <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
              <div>
                <strong>
                  {`Before`}
                </strong>
              </div>
            </th>
            <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
              <div>
                <strong>
                  {`After`}
                </strong>
              </div>
            </th>
          </tr>
        </thead>
        <tbody {...{"role":"rowgroup"}}>
          <tr {...{"role":"row"}}>
            <td {...{"role":"cell","data-label":"Before"}}>
              <div>
                {`We introduced a new feature for designing called Flyer Fact. Discover how it works by taking a tour to learn more.`}
                                <br/>
                <strong>
                  {`OK `}
                  {`|`}
                  {` Cancel`}
                </strong>
              </div>
            </td>
            <td {...{"role":"cell","data-label":"After"}}>
              <div>
                {`Create consistency and design faster with Flyer Fact.`}
                                <br/>
                <strong>
                  {`Start tour `}
                  {`|`}
                  {` Not now`}
                </strong>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
</div>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Be conversational`}
      </strong>
      {`: Imagine that you’re sitting beside the user and walking them through the product. Avoid jargon and be casual.`}
    </p>
    <div className="ws-content-table">
      <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
        <thead>
          <tr {...{"role":"row"}}>
            <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
              <div>
                <strong>
                  {`Before`}
                </strong>
              </div>
            </th>
            <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
              <div>
                <strong>
                  {`After`}
                </strong>
              </div>
            </th>
          </tr>
        </thead>
        <tbody {...{"role":"rowgroup"}}>
          <tr {...{"role":"row"}}>
            <td {...{"role":"cell","data-label":"Before"}}>
              <div>
                {`There are three major areas of Flyer Fact: components, layouts, and documentation. These are for designers to utilize in order to build user experiences that serve the needs of their users.`}
              </div>
            </td>
            <td {...{"role":"cell","data-label":"After"}}>
              <div>
                {`Create accessible and intuitive interfaces with Flyer Fact’s components, layouts, and documentation.`}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
</div>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Empathize with the user`}
      </strong>
      {`: Learning new things can be scary, so don’t stuff your onboarding flow with exclamation marks, and avoid telling the user how hard you worked on the new tool or how excited you are. Instead, understand that the user might be a little intimidated. Focus on giving them information and guidance in a straightforward way.`}
    </p>
    <div className="ws-content-table">
      <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
        <thead>
          <tr {...{"role":"row"}}>
            <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
              <div>
                <strong>
                  {`Before`}
                </strong>
              </div>
            </th>
            <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
              <div>
                <strong>
                  {`After`}
                </strong>
              </div>
            </th>
          </tr>
        </thead>
        <tbody {...{"role":"rowgroup"}}>
          <tr {...{"role":"row"}}>
            <td {...{"role":"cell","data-label":"Before"}}>
              <div>
                {`We are so excited to announce the Flyer Fact redesign! We can’t wait to show you around.`}
              </div>
            </td>
            <td {...{"role":"cell","data-label":"After"}}>
              <div>
                {`Flyer Fact has a new look. Let’s explore what you can do.`}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
</div>
  </React.Fragment>
);
Component.displayName = 'UxWritingProductToursDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
