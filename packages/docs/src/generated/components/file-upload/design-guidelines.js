import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport204 from '../../../content/design-guidelines/components/file-upload/./img/Fileupload.png';
import srcImport205 from '../../../content/design-guidelines/components/file-upload/./img/Noneditable.png';
import srcImport206 from '../../../content/design-guidelines/components/file-upload/./img/editable.png';
import srcImport207 from '../../../content/design-guidelines/components/file-upload/./img/Loading.png';
import srcImport208 from '../../../content/design-guidelines/components/file-upload/./img/FileError.png';
const pageData = {
  "id": "File upload",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/file-upload/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/file-upload/file-upload.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`file upload`}
      </strong>
      {` component allows the users to upload a single file into the browser.`}
    </p>
    <AutoLinkHeader {...{"id":"usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use a single file upload component when only one file can be uploaded. If multiple files need to be uploaded, use the `}
      <PatternflyThemeLink {...{"to":"https://www.patternfly.org/v4/components/file-upload---multiple/"}}>
        {`multiple file upload component`}
      </PatternflyThemeLink>
      {`. This component is recommended for the use of text files where content can easily be displayed in the text area, but all file types are supported.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Once the file is uploaded, the user can edit the content.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`To upload, a user can either:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Drag and drop the file into the box. When the user hovers over the file upload component, a message should appear telling the user they can drop files there.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Browse their device for a file to upload.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"elements","size":"h2","className":"ws-title ws-h2"}}>
      {`Elements`}
    </AutoLinkHeader>
    <img src={srcImport204} height={srcImport204.height * 442 / srcImport204.width} {...{"alt":"File Upload","width":"442","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Label`}
          </strong>
          {`: Text to inform users about how they can interact with the component. The text should describe that you can either drag and drop a file into the drop zone, or click the button to upload a file.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Button`}
          </strong>
          {`: A button to upload files if preferred.`}
        </p>
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"best-practices","size":"h2","className":"ws-title ws-h2"}}>
      {`Best practices`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Show the process of uploading. If large file sizes will be supported in your context, showing progress is important. However, if the file size supported will always upload in a matter of a few seconds this may not be necessary.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"behavior","size":"h2","className":"ws-title ws-h2"}}>
      {`Behavior`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"upload-complete-non-editable","size":"h3","className":"ws-title ws-h3"}}>
      {`Upload complete non-editable`}
    </AutoLinkHeader>
    <img src={srcImport205} height={srcImport205.height * 442 / srcImport205.width} {...{"alt":"File upload with greyed out text box","width":"442","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Once the file is uploaded, users cannot edit the text displayed. The text box should be greyed out to indicate it cannot be changed.`}
    </p>
    <AutoLinkHeader {...{"id":"upload-complete-editable","size":"h3","className":"ws-title ws-h3"}}>
      {`Upload complete editable`}
    </AutoLinkHeader>
    <img src={srcImport206} height={srcImport206.height * 442 / srcImport206.width} {...{"alt":"File Upload with text editable","width":"442","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Once the file is uploaded, the user can edit the text displayed by clicking within the text box.`}
    </p>
    <AutoLinkHeader {...{"id":"loading-states","size":"h3","className":"ws-title ws-h3"}}>
      {`Loading states`}
    </AutoLinkHeader>
    <img src={srcImport207} height={srcImport207.height * 442 / srcImport207.width} {...{"alt":"File upload with loading symbol","width":"442","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`While a file is being uploaded, the waiting icon is displayed.`}
    </p>
    <AutoLinkHeader {...{"id":"error","size":"h3","className":"ws-title ws-h3"}}>
      {`Error`}
    </AutoLinkHeader>
    <img src={srcImport208} height={srcImport208.height * 448 / srcImport208.width} {...{"alt":"File upload with a an error alert","width":"448","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`When a specific file cannot be uploaded successfully, the corresponding file will show an error state. Error messages should provide clear guidance to help the user resolve the error.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'ComponentsFileUploadDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;
