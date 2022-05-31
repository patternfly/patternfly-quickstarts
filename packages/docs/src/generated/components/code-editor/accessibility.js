import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Code editor",
  "section": "components",
  "source": "accessibility",
  "slug": "/components/code-editor/accessibility",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/accessibility/code-editor/code-editor.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`code editor`}
      </strong>
      {` is the open sourced monaco code editor wrapped in PatternFly controls and styles. PatternFly does not
manage the interactions or the code for the monaco editor itself.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Keyboard users`}
      </strong>
      {` should be able to focus on the code editor controls using `}
      <strong>
        {`Tab`}
      </strong>
      {` to move forward and
`}
      <strong>
        {`Tab + Shift`}
      </strong>
      {` to move backward through interactive elements. They should be able to select a focused control
using `}
      <strong>
        {`Space`}
      </strong>
      {` or `}
      <strong>
        {`Enter`}
      </strong>
      {`. Keyboard users should also be able to move focus onto the monaco
code editor using `}
      <strong>
        {`Tab`}
      </strong>
      {`, and then into the monaco code editor using the `}
      <strong>
        {`Down arrow`}
      </strong>
      {`. If focus is in the monaco
code editor, the user should be able to use `}
      <strong>
        {`Tab + Shift`}
      </strong>
      {` to move focus out of the monaco code editor.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Screen reader users`}
      </strong>
      {` should be able to navigate through the code editor controls, as well as into and out of the
monaco code editor. Each control should have an aria-label since they are designed to display only an icon with a
Tooltip. The Tooltips are not announced by the screen reader, so the aria-label must be descriptive and clear.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`The following props/attributes have been added for you or are customizable in PatternFly:`}
    </p>
    <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
      <thead>
        <tr {...{"role":"row"}}>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`React prop`}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`React component it should be applied to`}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Which HTML element it appears on in markup`}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Reason used`}
            </div>
          </th>
        </tr>
      </thead>
      <tbody {...{"role":"rowgroup"}}>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"React prop"}}>
            <div>
              {`copyButtonAriaLabel`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"React component it should be applied to"}}>
            <div>
              {`CodeEditor`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Which HTML element it appears on in markup"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-code-editor__controls button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Reason used"}}>
            <div>
              {`Aria-label for the copy button`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"React prop"}}>
            <div>
              {`downloadButtonAriaLabel`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"React component it should be applied to"}}>
            <div>
              {`CodeEditor`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Which HTML element it appears on in markup"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-code-editor__controls button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Reason used"}}>
            <div>
              {`Aria-label for the download button`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"React prop"}}>
            <div>
              {`uploadButtonAriaLabel`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"React component it should be applied to"}}>
            <div>
              {`CodeEditor`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Which HTML element it appears on in markup"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-code-editor__controls button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Reason used"}}>
            <div>
              {`Aria-label for the upload button`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"React prop"}}>
            <div>
              {`'aria-label'`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"React component it should be applied to"}}>
            <div>
              {`CodeEditorControl`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Which HTML element it appears on in markup"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-code-editor__controls button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Reason used"}}>
            <div>
              {`Aria-label for a custom control button`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"React prop"}}>
            <div>
              {`shortcutsPopoverButtonText`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"React component it should be applied to"}}>
            <div>
              {`CodeEditor`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Which HTML element it appears on in markup"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-code-editor__keyboard-shortcuts`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Reason used"}}>
            <div>
              {`Text to show in the button to open the shortcut popover`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"React prop"}}>
            <div>
              {`shortcutsPopoverProps`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"React component it should be applied to"}}>
            <div>
              {`CodeEditor`}
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Which HTML element it appears on in markup"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-code-editor__controls button`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Reason used"}}>
            <div>
              {`Properties for the shortcut popover. Should contain 'bodyContent' to provide keybaord shortcuts built into the code editor`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <p {...{"className":"ws-p"}}>
      {`The monaco code editor comes with some keyboard shortcuts built in, so it is recommended that consumers communicate
information about the following built in key commands:`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`| Opt + F1 | Accessibility helps |
| F1 | View all editor shortcuts |
| Ctrl + Space | Activate auto complete |
| Cmd + S | Save |`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Additionally, when implementing a `}
      <strong>
        {`code editor`}
      </strong>
      {`, a developer can add additional keyboard controls by adding a command
to the `}
      <code {...{"className":"ws-code"}}>
        {`editor`}
      </code>
      {` parameter passed via the `}
      <code {...{"className":"ws-code"}}>
        {`onEditorDidMount`}
      </code>
      {` prop. For example:`}
    </p>
    <Example {...{"code":"onEditorDidMount = (editor, monaco) => {\n    editor.addCommand(monaco.KeyMod.Shift | monaco.KeyCode.Space, () => {console.log(\"hello\")});\n};"}}>
    </Example>
  </React.Fragment>
);
Component.displayName = 'ComponentsCodeEditorAccessibilityDocs';
Component.pageData = pageData;

export default Component;
