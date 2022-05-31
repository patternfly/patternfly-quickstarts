import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport273 from '../../../content/design-guidelines/components/login-page/./img/elements.png';
import srcImport274 from '../../../content/design-guidelines/components/login-page/./img/multi-factor.png';
import srcImport275 from '../../../content/design-guidelines/components/login-page/./img/verifications-methods.png';
import srcImport276 from '../../../content/design-guidelines/components/login-page/./img/sso.png';
import srcImport277 from '../../../content/design-guidelines/components/login-page/./img/client_side_error.png';
import srcImport278 from '../../../content/design-guidelines/components/login-page/./img/empty-fields.png';
import srcImport279 from '../../../content/design-guidelines/components/login-page/./img/invalid-characters.png';
import srcImport280 from '../../../content/design-guidelines/components/login-page/./img/caps-lock.png';
import srcImport281 from '../../../content/design-guidelines/components/login-page/./img/server-side-error.png';
import srcImport282 from '../../../content/design-guidelines/components/login-page/./img/wrong-password.png';
import srcImport283 from '../../../content/design-guidelines/components/login-page/./img/warning-message.png';
const pageData = {
  "id": "Login page",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/login-page/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/login-page/login-page.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`login page`}
      </strong>
      {` allows a user to gain access to an application by entering their username and password or by authenticating using a social media login.`}
    </p>
    <AutoLinkHeader {...{"id":"elements","size":"h2","className":"ws-title ws-h2"}}>
      {`Elements`}
    </AutoLinkHeader>
    <img src={srcImport273} height={srcImport273.height * 1500 / srcImport273.width} {...{"alt":"Elements of a login page","width":"1500","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Title:`}
          </strong>
          {` Located at the top of the login card. The title can be the product name or any other term that makes sense for your application. If the text is longer than the space allowed, it should wrap to the next line.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Language selector (optional)`}
          </strong>
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Required fields:`}
          </strong>
          {` Username and password are both required fields. Some applications may require additional fields like a specific server or geo-location. When additional fields are required, they should be placed directly below the password field. The login card will expand to accommodate additional fields. Try to limit the total number of additional fields to three or less. Also, you may use `}
          <PatternflyThemeLink {...{"to":"/components/form/design-guidelines#use-progressive-disclosure"}}>
            {`progressive disclosure`}
          </PatternflyThemeLink>
          {` if the field value has dependency on the previous relevant field.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Show/Hide password (optional):`}
          </strong>
          {` Allows users to view and hide passwords on password fields.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Checkbox (optional):`}
          </strong>
          {` Located under the required (and any additional) fields, and labeled based on the needs of the application.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Login button:`}
          </strong>
          {` The button label should be “Log in.”`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Social media buttons:`}
          </strong>
          {` Displays available social login methods in the order from most frequently used to least frequently used. Logos that take up more than one line can wrap to a second line. Each logo should have a tooltip label on hover that states the application name.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Sign up (optional):`}
          </strong>
          {` Takes user to the sign up flow.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Forgot password/username link (optional):`}
          </strong>
          {` Takes users to a page where they can recover their password and/or username.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            <PatternflyThemeLink {...{"to":"/components/background-image"}}>
              {`Background image`}
            </PatternflyThemeLink>
            {`:`}
          </strong>
          {` Any background image can be used for your application; it will automatically have a gradient applied to it to aid readability.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Logotype:`}
          </strong>
          {` Provides an area for product logo.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Description (optional):`}
          </strong>
          {` Provides a description of the website or application.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Links (optional):`}
          </strong>
          {` Provides an area for additional links to pages where the user can get more information or access help.`}
        </p>
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`There are 3 main usage scenarios related to the login page:`}
    </p>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`A user wants to gain access to an application.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`A user is automatically logged out due to inactivity and is redirected to the login page.`}
        </p>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`If this happens, signing in should redirect the user back to the page they were on prior to being logged out.`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`A user has forgotten their username and/or password. A link is available to reset the username and/or password.`}
        </p>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`The login page should be replaced by the fields used to recover their username and/or password.`}
          </li>
        </ul>
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"authentication-methods","size":"h3","className":"ws-title ws-h3"}}>
      {`Authentication methods`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"standard-login","size":"h4","className":"ws-title ws-h4"}}>
      {`Standard login`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The standard login is shown in the example above and provides a commonly used pattern where both the username and password input fields are displayed at the same time. This is commonly used by applications that don’t require additional types of authentication.`}
    </p>
    <AutoLinkHeader {...{"id":"multi-factor-login","size":"h4","className":"ws-title ws-h4"}}>
      {`Multi-factor login`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The multi-factor login allows a user to gain access to an application by entering their authentication information progressively. For example, a user enters only their username and then clicks next. The system validates the username before providing a field for the user to enter their password. Using this progressive process allows the application to validate information at each step and allows for an automatic redirect to an external identity provider (IdP) when the user is linked to an external IdP.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`When you need more security, you can incorporate additional authentication methods into the login process. This example shows both password and verification code methods:`}
    </p>
    <img src={srcImport274} height={srcImport274.height * 990 / srcImport274.width} {...{"alt":"Example of multi factor login process","width":"990","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Enabling users to select their verification method (optional):`}
      </strong>
      {`
Once a user has provided a valid password, the system hides the gray bar at the bottom of the modal and displays the link text “More verification options." Clicking the link allows users to select an alternate verification type if they can’t use the default method.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Examples of additional multi-factor authentication that could be used include authentication codes, SMS codes or backup codes.`}
    </p>
    <img src={srcImport275} height={srcImport275.height * 990 / srcImport275.width} {...{"alt":"Example of additional multi-factor authentication","width":"990","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"single-sign-on-sso","size":"h4","className":"ws-title ws-h4"}}>
      {`Single sign-on (SSO)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Single sign-on (SSO) allows a user to log in once and access multiple applications within the same organization. This type of login supports displaying both single and multi-factor login.`}
    </p>
    <img src={srcImport276} height={srcImport276.height * 990 / srcImport276.width} {...{"alt":"Example of single sign on methods","width":"990","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Additional SSO elements`}
      </strong>
    </p>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Title`}
          </strong>
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Supported services:`}
          </strong>
          {` Provides a logo for all supported services logos.`}
        </p>
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"social-login","size":"h4","className":"ws-title ws-h4"}}>
      {`Social Login`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Some users may prefer to log in with their social networks or IdPs accounts. A social login can utilize  standard, multi-factor, or SSO logins, depending on security requirements. When users click a social logo, they will be redirected to the social account’s login page. Once they successfully log in, they will be directed back to your application.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Please refer to branding guidelines when using logos for social login page. Examples of branding guidelines include:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://en.facebookbrand.com/guidelines/brand"}}>
          {`Facebook brand guidelines`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://about.twitter.com/en_us/company/brand-resources.html"}}>
          {`Twitter brand guidelines`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://github.com/logos"}}>
          {`GitHub brand guidelines`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://stackexchange.com/legal/trademark-guidance"}}>
          {`Stack Exchange brand guidelines`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://developers.google.com/identity/branding-guidelines"}}>
          {`Google brand guidelines`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://brand.linkedin.com/"}}>
          {`LinkedIn brand guidelines`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"http://openid.net/add-openid/logos/"}}>
          {`OpenID brand guidelines`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://en.instagram-brand.com/"}}>
          {`Instagram brand guidelines`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"error-states","size":"h3","className":"ws-title ws-h3"}}>
      {`Error states`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Always present error states on the login screen if a login field submission results in an error, and use inline errors whenever possible. The error state you use will depend on whether the validation happens on loss of focus (the client's end) or submission (the server's end).`}
    </p>
    <AutoLinkHeader {...{"id":"client-side-errors","size":"h4","className":"ws-title ws-h4"}}>
      {`Client-side errors`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport277} width={srcImport277.width} height={srcImport277.height} {...{"alt":"Client-side-errors","title":"Client-side-errors","className":"ws-img"}}>
      </img>
    </p>
    <p {...{"className":"ws-p"}}>
      {`Client-side validation can be performed when a field is clicked away from or loses focus. It allows you to use inline validation to present errors or issues before the login is submitted. In most cases, client-side validations are performed as inline validations for each field. Some common examples are shown below.`}
    </p>
    <AutoLinkHeader {...{"id":"empty-fields","size":"h5","className":"ws-title ws-h5"}}>
      {`Empty field(s)`}
    </AutoLinkHeader>
    <img src={srcImport278} height={srcImport278.height * 543 / srcImport278.width} {...{"alt":"Example of empty login fields","width":"543","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`An error message should be displayed below any required field that is empty once the field loses focus or an action button (Log in/Next) is clicked. Once the field is filled, the error message should disappear. The following error messages are suggested for use:`}
    </p>
    <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
      <thead>
        <tr {...{"role":"row"}}>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Situation`}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Error message`}
            </div>
          </th>
        </tr>
      </thead>
      <tbody {...{"role":"rowgroup"}}>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Situation"}}>
            <div>
              {`Username field is empty`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Error message"}}>
            <div>
              {`Enter your email, phone number, or username`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Situation"}}>
            <div>
              {`Password field is empty`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Error message"}}>
            <div>
              {`Enter your password`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"id":"invalid-characters","size":"h5","className":"ws-title ws-h5"}}>
      {`Invalid characters`}
    </AutoLinkHeader>
    <img src={srcImport279} height={srcImport279.height * 543 / srcImport279.width} {...{"alt":"Example of invalid characters in login fields","width":"543","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`An error message should be displayed when there is an invalid character in the username. Once the field has been modified, the error message should disappear. The following error messages are suggested for use:`}
    </p>
    <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
      <thead>
        <tr {...{"role":"row"}}>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Situation`}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Error message`}
            </div>
          </th>
        </tr>
      </thead>
      <tbody {...{"role":"rowgroup"}}>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Situation"}}>
            <div>
              {`Invalid email address or phone number`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Error message"}}>
            <div>
              {`Enter a valid email address`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Situation"}}>
            <div>
              {`Invalid custom username`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Error message"}}>
            <div>
              {`Invalid characters`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Situation"}}>
            <div>
              {`Invalid character in an email address/phone number`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Error message"}}>
            <div>
              {`Enter a valid email address or phone number`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"id":"caps-lock-is-on","size":"h5","className":"ws-title ws-h5"}}>
      {`Caps lock is on`}
    </AutoLinkHeader>
    <img src={srcImport280} height={srcImport280.height * 678 / srcImport280.width} {...{"alt":"Example of empty login fields","width":"678","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`A warning message should be displayed when caps lock is on so users avoid making a mistake when typing a case-sensitive password. The warning message should be displayed in a popover when a user clicks into the input field. Once caps lock has been turned off, the warning message should disappear. The following warning message is suggested for use:`}
    </p>
    <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
      <thead>
        <tr {...{"role":"row"}}>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Situation`}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Error message`}
            </div>
          </th>
        </tr>
      </thead>
      <tbody {...{"role":"rowgroup"}}>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Situation"}}>
            <div>
              {`Caps lock is on`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Error message"}}>
            <div>
              {`Caps lock is on`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"id":"server-side-errors","size":"h4","className":"ws-title ws-h4"}}>
      {`Server-side errors`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport281} width={srcImport281.width} height={srcImport281.height} {...{"alt":"Server-side-error","title":"server-side-error","className":"ws-img"}}>
      </img>
    </p>
    <p {...{"className":"ws-p"}}>
      {`If there are validation errors when users submit a form, the entire page is reloaded. At the same time, the password field should be cleared to provide additional security. Error messages display as inline errors below each field and/or as inline alerts below the header/description. If there are multiple messages, each message appears on its own line; spacing between fields should be enough so that the form doesn’t jump to fit the messages.`}
    </p>
    <AutoLinkHeader {...{"id":"account-doesnt-existpassword-is-wrong","size":"h5","className":"ws-title ws-h5"}}>
      {`Account doesn’t exist/password is wrong`}
    </AutoLinkHeader>
    <img src={srcImport282} height={srcImport282.height * 543 / srcImport282.width} {...{"alt":"Example of wrong password","width":"543","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`An error message should be displayed when the user types an incorrect username or password. The most secure approach is to provide a generic message that the username or password is incorrect without specifying which is incorrect. This way, the identity of a valid user is protected. If your application doesn’t require this level of security, additional messages  can be used. Once the field has been modified, the error message should disappear. The following error messages are suggested for use.`}
    </p>
    <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
      <thead>
        <tr {...{"role":"row"}}>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Situation`}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Error message`}
            </div>
          </th>
        </tr>
      </thead>
      <tbody {...{"role":"rowgroup"}}>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Situation"}}>
            <div>
              {`Incorrect username or password (most secure error message)`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Error message"}}>
            <div>
              {`Incorrect login credentials`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Situation"}}>
            <div>
              {`Username does not exist`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Error message"}}>
            <div>
              {`This account does not exist. Try again or `}
              <a {...{"href":""}}>
                {`sign up`}
              </a>
              {`.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Situation"}}>
            <div>
              {`Password is wrong`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Error message"}}>
            <div>
              {`Incorrect password, try again`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Situation"}}>
            <div>
              {`User inputs an old password`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Error message"}}>
            <div>
              {`Incorrect password. Your password was modified in the last 2 days.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"id":"general-warning-messages","size":"h5","className":"ws-title ws-h5"}}>
      {`General warning messages`}
    </AutoLinkHeader>
    <img src={srcImport283} height={srcImport283.height * 990 / srcImport283.width} {...{"alt":"Example of warning messages","width":"990","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Another form of error state message is a warning message. These messages are triggered by system level events or if a user is timed out of the application. Notifications should be displayed until the user attempts a new login. These messages should be displayed above the username field. The following are examples of general error messages.`}
    </p>
    <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
      <thead>
        <tr {...{"role":"row"}}>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Situation`}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Error message`}
            </div>
          </th>
        </tr>
      </thead>
      <tbody {...{"role":"rowgroup"}}>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Situation"}}>
            <div>
              {`New account created and needs to verify email address`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Error message"}}>
            <div>
              {`Confirm your email address. `}
              <a {...{"href":""}}>
                {`Resend confirmation link`}
              </a>
              {`.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Situation"}}>
            <div>
              {`Too many unsuccessful attempts to log in`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Error message"}}>
            <div>
              {`Your account is now locked. Contact your administrator for access.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Situation"}}>
            <div>
              {`Session timed out`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Error message"}}>
            <div>
              {`Your session has expired. Please log back in.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"id":"content-guidelines","size":"h2","className":"ws-title ws-h2"}}>
      {`Content guidelines`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Use “log in” to describe the verb of signing or logging in an account. Note, it is “log in” and not “log into”.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Use “login” as an adjective to describe something related to the act of logging in to an application, like a page. The noun Login can also be used as an alternative for Username, but Username is recommended.`}
      </li>
    </ul>
  </React.Fragment>
);
Component.displayName = 'ComponentsLoginPageDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
