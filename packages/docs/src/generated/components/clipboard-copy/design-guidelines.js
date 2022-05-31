import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport116 from '../../../content/design-guidelines/components/clipboard-copy/./img/clipboard-copy-elements.png';
import srcImport117 from '../../../content/design-guidelines/components/clipboard-copy/./img/editable.png';
import srcImport118 from '../../../content/design-guidelines/components/clipboard-copy/./img/read-only.png';
import srcImport119 from '../../../content/design-guidelines/components/clipboard-copy/./img/expandable.png';
import srcImport120 from '../../../content/design-guidelines/components/clipboard-copy/./img/inline-one-action.png';
import srcImport121 from '../../../content/design-guidelines/components/clipboard-copy/./img/inline-two-actions.png';
import srcImport122 from '../../../content/design-guidelines/components/clipboard-copy/./img/form.png';
import srcImport123 from '../../../content/design-guidelines/components/clipboard-copy/./img/description-list.png';
import srcImport124 from '../../../content/design-guidelines/components/clipboard-copy/./img/clipboard-copy-url.png';
import srcImport125 from '../../../content/design-guidelines/components/clipboard-copy/./img/inline-in-context.png';
const pageData = {
  "id": "Clipboard copy",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/clipboard-copy/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/clipboard-copy/clipboard-copy.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`The `}
      <strong>
        {`clipboard copy`}
      </strong>
      {` component allows users to quickly and easily copy content to their clipboard.`}
    </p>
    <AutoLinkHeader {...{"id":"elements","size":"h2","className":"ws-title ws-h2"}}>
      {`Elements`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Clipboard copy has 3 main components.`}
    </p>
    <img src={srcImport116} height={srcImport116.height * 468 / srcImport116.width} {...{"alt":"Elements of the clipboard copy component","width":"468","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Copy content:`}
        </strong>
        {` the content that will be copied to the user’s clipboard.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Clipboard button:`}
        </strong>
        {` completes the copy action when clicked.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tooltip:`}
        </strong>
        {` informs users that clicking the button will copy the content to their clipboard, or that the content has successfully been copied.`}
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use clipboard copy to allow users to quickly and easily copy content to their clipboard to paste it in another location. Copy content can vary but is usually a line or block of text or code. This is useful for copying system generated key values, to both reduce user effort and the occurrence of entry errors, for example. The clipboard copy has a few features that can be used to customize the component to fit different use cases.`}
    </p>
    <AutoLinkHeader {...{"id":"features","size":"h3","className":"ws-title ws-h3"}}>
      {`Features`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The clipboard copy component can be editable or read-only and both types can optionally be expandable.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Editable`}
      </strong>
    </p>
    <p {...{"className":"ws-p"}}>
      {`An editable clipboard copy allows users to copy an editable text input box.`}
    </p>
    <img src={srcImport117} height={srcImport117.height * 434 / srcImport117.width} {...{"alt":"Example of an editable clipboard copy component","width":"434","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Read-only`}
      </strong>
    </p>
    <p {...{"className":"ws-p"}}>
      {`A read-only clipboard copy only allows the user to copy a predefined line of text that is not editable by the user.`}
    </p>
    <img src={srcImport118} height={srcImport118.height * 434 / srcImport118.width} {...{"alt":"Example of a read-only clipboard copy component","width":"434","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Expandable`}
      </strong>
    </p>
    <p {...{"className":"ws-p"}}>
      {`An expandable clipboard copy allows for long lines of text to be stored in an expansion panel. Expanding the clipboard copy allows the user to view the full string that they can copy.`}
    </p>
    <img src={srcImport119} height={srcImport119.height * 455 / srcImport119.width} {...{"alt":"Example of an expandable clipboard copy component","width":"455","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Inline compact`}
      </strong>
    </p>
    <p {...{"className":"ws-p"}}>
      {`An inline compact clipboard copy is placed directly inline with other text or used on its own when you want a lighter weight clipboard copy treatment.`}
    </p>
    <img src={srcImport120} height={srcImport120.height * 355 / srcImport120.width} {...{"alt":"Example of an inline compact clipboard copy component with one action","width":"355","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`An inline compact clipboard copy can include one or two action buttons next to it. The second action is customizable and optional.`}
    </p>
    <img src={srcImport121} height={srcImport121.height * 355 / srcImport121.width} {...{"alt":"Example of an inline compact clipboard copy component with two actions","width":"355","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"id":"clipboard-copy-in-context","size":"h3","className":"ws-title ws-h3"}}>
      {`Clipboard copy in context`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Clipboard copy can be used almost anywhere in a UI. It is commonly used in forms and definition lists.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Clipboard copy in a form`}
      </strong>
    </p>
    <img src={srcImport122} height={srcImport122.height * 1067 / srcImport122.width} {...{"alt":"Example of clipboard copy in a form","width":"1067","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Clipboard copy in a description list`}
      </strong>
    </p>
    <img src={srcImport123} height={srcImport123.height * 629 / srcImport123.width} {...{"alt":"Example of clipboard copy in a description list","width":"629","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Inline compact clipboard copy for URLs`}
      </strong>
    </p>
    <img src={srcImport124} height={srcImport124.height * 657 / srcImport124.width} {...{"alt":"Example of an inline compact clipboard copy next to a URL","width":"657","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Inline compact clipboard copy in context`}
      </strong>
    </p>
    <img src={srcImport125} height={srcImport125.height * 448 / srcImport125.width} {...{"alt":"Example of an inline compact clipboard copy in context","width":"448","className":"ws-img"}}>
    </img>
  </React.Fragment>
);
Component.displayName = 'ComponentsClipboardCopyDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
