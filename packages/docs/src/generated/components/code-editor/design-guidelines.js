import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport129 from '../../../content/design-guidelines/components/code-editor/./img/basic-code-editor.png';
import srcImport130 from '../../../content/design-guidelines/components/code-editor/./img/code-editor-dark.png';
import srcImport131 from '../../../content/design-guidelines/components/code-editor/./img/code-editor-actions.png';
import srcImport132 from '../../../content/design-guidelines/components/code-editor/./img/code-editor-empty.png';
import srcImport133 from '../../../content/design-guidelines/components/code-editor/./img/code-editor-read-only.png';
const pageData = {
  "id": "Code editor",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/code-editor/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/code-editor/code-editor.md"
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
      {` is a versatile text editor that allows for editing various languages. The code editor is built on top of the `}
      <PatternflyThemeLink {...{"to":"https://microsoft.github.io/monaco-editor/"}}>
        {`Monaco Editor`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <AutoLinkHeader {...{"id":"elements","size":"h2","className":"ws-title ws-h2"}}>
      {`Elements`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`By default, the bulk of the code editor is the text editor itself. The component is extremely flexible, so many of the features are optional. Much of the functionality of the Monaco Editor has been carried over to the code editor, so it’s possible to further customize the component based on their options.`}
    </p>
    <AutoLinkHeader {...{"id":"light-theme-editor","size":"h3","className":"ws-title ws-h3"}}>
      {`Light theme editor`}
    </AutoLinkHeader>
    <img src={srcImport129} height={srcImport129.height * 800 / srcImport129.width} {...{"alt":"Example of a basic code editor and its elements","width":"800","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Text editor:`}
        </strong>
        {` The text of the editor sits in this container. Syntax highlighting is automatically built into the editor, but can be customized if necessary.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Language indicator (optional):`}
        </strong>
        {` This tab indicates the language that the code is written in.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Minimap (optional):`}
        </strong>
        {` This displays an overview of the contents of the editor. It can be used to scroll through the editor, rather than using the standard scrollbar that appears on the right of the editor.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Line numbers (optional):`}
        </strong>
        {` These will populate to accompany the lines of text that appear in the editor.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Indentation indicators:`}
        </strong>
        {` These vertical lines help make indentation clearer. They appear per indentation level.`}
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"dark-theme-editor","size":"h3","className":"ws-title ws-h3"}}>
      {`Dark theme editor`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`We recommend using the light theme editor by default, but there is also a dark theme code editor available. All editor functionality remains the same whether a light or dark theme is used.`}
    </p>
    <img src={srcImport130} height={srcImport130.height * 800 / srcImport130.width} {...{"alt":"Example of a dark themed code editor","width":"800","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Syntax highlighting will update automatically to adapt to the dark background. The editor still remains within the code editor container so only the inner area adapts the dark theme.`}
    </p>
    <AutoLinkHeader {...{"id":"usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use a code editor when you:`}
    </p>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        {`Want the user to create or edit large blocks of code.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Want to display large blocks of code (see `}
        <PatternflyThemeLink {...{"to":"#displaying-code-in-a-code-editor"}}>
          {`Displaying code in a code editor`}
        </PatternflyThemeLink>
        {` for guidance on when to use a code editor over a `}
        <PatternflyThemeLink {...{"to":"/components/code-block"}}>
          {`code block`}
        </PatternflyThemeLink>
        {`).`}
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"creating-or-editing-with-a-code-editor","size":"h2","className":"ws-title ws-h2"}}>
      {`Creating or editing with a code editor`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"using-actions","size":"h3","className":"ws-title ws-h3"}}>
      {`Using actions`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Code editors can optionally include actions that are attached to the editor itself. Use a code editor with actions when you want the user to be able to perform some sort of action using the code.`}
    </p>
    <img src={srcImport131} height={srcImport131.height * 800 / srcImport131.width} {...{"alt":"Example of a code editor with actions","width":"800","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Actions are represented by an icon and should include a tooltip on hover explaining what action they perform. Some typical actions that are used are `}
      <strong>
        {`Copy to clipboard`}
      </strong>
      {`, `}
      <strong>
        {`Download`}
      </strong>
      {`, and `}
      <strong>
        {`Upload`}
      </strong>
      {`.`}
    </p>
    <AutoLinkHeader {...{"id":"empty-state","size":"h2","className":"ws-title ws-h2"}}>
      {`Empty state`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`You can use an empty state in a code editor to indicate that a user can drag a file or browse to upload.`}
    </p>
    <img src={srcImport132} height={srcImport132.height * 800 / srcImport132.width} {...{"alt":"Example of a code editor with an empty state","width":"800","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Empty state:`}
        </strong>
        {` We recommend always using the code icon for code editor empty states. The text can be changed to fit the use case.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Browse:`}
        </strong>
        {` Selecting `}
        <strong>
          {`Browse`}
        </strong>
        {` will bring up the file browser, which may look different depending on the operating system.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Start from scratch:`}
        </strong>
        {` Selecting this will turn the code editor into editing mode and allow the user to start typing their code or allow them to paste it in.`}
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"displaying-code-in-a-code-editor","size":"h3","className":"ws-title ws-h3"}}>
      {`Displaying code in a code editor`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use the read-only state of the code editor when you only want to display large blocks of code. In this case, the user will not be able to edit the code. If you are dealing with minimal lines of code that are read-only, and don’t require the use of line numbers and advanced formatting, use `}
      <PatternflyThemeLink {...{"to":"/components/code-block"}}>
        {`code blocks`}
      </PatternflyThemeLink>
      {` instead.`}
    </p>
    <img src={srcImport133} height={srcImport133.height * 800 / srcImport133.width} {...{"alt":"Example of a read only code-editor","width":"800","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`The border of the code editor will turn gray to indicate that it is read-only. The user can still highlight text in the editor, but won’t be able to edit. Adding actions is optional and should be determined by use case.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'ComponentsCodeEditorDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
