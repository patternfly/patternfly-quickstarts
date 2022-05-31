import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Application launcher",
  "section": "components",
  "source": "accessibility",
  "slug": "/components/application-launcher/accessibility",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/accessibility/application-launcher/application-launcher.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`An `}
      <strong>
        {`application launcher`}
      </strong>
      {` is an optional utility menu item that allows a user to launch a separate web application in a new browser window.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Keyboard interaction of the application launcher uses `}
      <strong>
        {`Tab`}
      </strong>
      {` to navigate to the application launcher toggle, `}
      <strong>
        {`Enter`}
      </strong>
      {` or `}
      <strong>
        {`Space`}
      </strong>
      {` to activate the application launcher, and arrow keys to navigate inside the application launcher menu. The `}
      <strong>
        {`Esc`}
      </strong>
      {` key should automatically close the menu.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`In general, the application launcher component already has accessibility built in. However, if you would like to customize it, you can do the following:`}
    </p>
    <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
      <thead>
        <tr {...{"role":"row"}}>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`React component`}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Prop or attribute`}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Which HTML element it appears on in markup`}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Explanation`}
            </div>
          </th>
        </tr>
      </thead>
      <tbody {...{"role":"rowgroup"}}>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"React component"}}>
            <div>
              {`ApplicationLauncher`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Prop or attribute"}}>
            <div>
              {`aria-label`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Which HTML element it appears on in markup"}}>
            <div>
              {`.pf-c-app-launcher`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Explanation"}}>
            <div>
              {`Adds accessible text to the button. `}
              <strong>
                {`Required for plain buttons or when there is no supporting text`}
              </strong>
              {` in the application launcher toggle`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"React component"}}>
            <div>
              {`ApplicationLauncher`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Prop or attribute"}}>
            <div>
              {`favoritesLabel`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Which HTML element it appears on in markup"}}>
            <div>
              {`.pf-c-app-launcher`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Explanation"}}>
            <div>
              {`Label for the favorites group, defaults to "Favorites". Available for customization`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"React component"}}>
            <div>
              {`ApplicationLauncherItem`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Prop or attribute"}}>
            <div>
              {`ariaIsFavoriteLabel`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Which HTML element it appears on in markup"}}>
            <div>
              {`.pf-c-app-launcher__menu-item pf-m-action`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Explanation"}}>
            <div>
              {`Aria label text for favoritable button when favorited, defaults to "starred". Available for customization`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"React component"}}>
            <div>
              {`ApplicationLauncherItem`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Prop or attribute"}}>
            <div>
              {`ariaIsNotFavoriteLabel`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Which HTML element it appears on in markup"}}>
            <div>
              {`.pf-c-app-launcher__menu-item pf-m-action`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Explanation"}}>
            <div>
              {`Aria label text for favoritable button when not favorited, defaults to "not starred". Available for customization`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsApplicationLauncherAccessibilityDocs';
Component.pageData = pageData;

export default Component;
