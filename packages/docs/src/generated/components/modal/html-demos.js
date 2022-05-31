import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImportbasic from './html-demos/basic.png';
import srcImportlarge from './html-demos/large.png';
import srcImportmedium from './html-demos/medium.png';
import srcImportmodalwithform from './html-demos/modal-with-form.png';
import srcImportscrollablecontent from './html-demos/scrollable-content.png';
import srcImporttopaligned from './html-demos/top-aligned.png';
const pageData = {
  "id": "Modal",
  "section": "components",
  "source": "html-demos",
  "slug": "/components/modal/html-demos",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/packages/docs/src/patternfly/demos/Modal/examples/Modal.md",
  "fullscreenExamples": [
    "Basic",
    "Scrollable content",
    "Medium",
    "Large",
    "Top aligned"
  ]
};
pageData.examples = {
  'Basic': props => 
    <Example {...pageData} {...props} thumbnail={srcImportbasic} {...{"code":"<div aria-hidden=\"true\">Page content</div>\n<div class=\"pf-c-backdrop\">\n  <div class=\"pf-l-bullseye\">\n    <div\n      class=\"pf-c-modal-box pf-m-sm\"\n      role=\"dialog\"\n      aria-modal=\"true\"\n      aria-labelledby=\"modal-title\"\n      aria-describedby=\"modal-description\"\n    >\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        aria-label=\"Close dialog\"\n      >\n        <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n      </button>\n      <header class=\"pf-c-modal-box__header\">\n        <h1\n          class=\"pf-c-modal-box__title\"\n          id=\"modal-title\"\n        >Overwrite existing file?</h1>\n      </header>\n      <div class=\"pf-c-modal-box__body\" id=\"modal-description\">\n        <p>general_modal_final_finalfinal_v9_actualfinal.sketch</p>\n        <p>A file with this name already exists, would you like to overwrite the existing file or save a new copy?</p>\n      </div>\n      <footer class=\"pf-c-modal-box__footer\">\n        <button class=\"pf-c-button pf-m-primary\" type=\"button\">Overwrite</button>\n        <button class=\"pf-c-button pf-m-link\" type=\"button\">Save a copy</button>\n      </footer>\n    </div>\n  </div>\n</div>","title":"Basic","lang":"html","isFullscreen":true}}>
      
    </Example>,
  'Scrollable content': props => 
    <Example {...pageData} {...props} thumbnail={srcImportscrollablecontent} {...{"code":"<div aria-hidden=\"true\">Page content</div>\n<div class=\"pf-c-backdrop\">\n  <div class=\"pf-l-bullseye\">\n    <div\n      class=\"pf-c-modal-box pf-m-sm\"\n      role=\"dialog\"\n      aria-modal=\"true\"\n      aria-labelledby=\"modal-scroll-title\"\n      aria-describedby=\"modal-scroll-description\"\n    >\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        aria-label=\"Close dialog\"\n      >\n        <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n      </button>\n      <header class=\"pf-c-modal-box__header\">\n        <h1\n          class=\"pf-c-modal-box__title\"\n          id=\"modal-scroll-title\"\n        >This is a long header title that will truncate because modal titles should be very short. Use the modal body to provide more info.</h1>\n        <div\n          class=\"pf-c-modal-box__description\"\n          id=\"modal-scroll-description\"\n        >This is a modal description. The description will not scroll with the body contents.</div>\n      </header>\n      <div class=\"pf-c-modal-box__body\">\n        <p>general_modal_final_finalfinal_v9_actualfinal.sketch</p>\n        <p>A file with this name already exists, would you like to overwrite the existing file or save a new copy?</p>\n        <p>Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Integer tincidunt. Integer tincidunt. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>\n        <p>\n          Duis leo. Praesent blandit laoreet nibh. Ut a nisl id ante tempus hendrerit. Maecenas nec odio et ante tincidunt tempus.\n          Ut a nisl id ante tempus hendrerit. Nulla sit amet est. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam. Praesent turpis. Phasellus accumsan cursus velit. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Cras ultricies mi eu turpis hendrerit fringilla. Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi sem ut ipsum.\n        </p>\n        <p>Etiam sit amet orci eget eros faucibus tincidunt. Aliquam eu nunc. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Nunc nec neque.</p>\n        <p>Ut a nisl id ante tempus hendrerit. Nulla sit amet est. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam. Praesent turpis. Phasellus accumsan cursus velit. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Cras ultricies mi eu turpis hendrerit fringilla. Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi sem ut ipsum.</p>\n        <p>Etiam sit amet orci eget eros faucibus tincidunt. Aliquam eu nunc. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Nunc nec neque.</p>\n      </div>\n      <footer class=\"pf-c-modal-box__footer\">\n        <button class=\"pf-c-button pf-m-primary\" type=\"button\">Overwrite</button>\n        <button class=\"pf-c-button pf-m-link\" type=\"button\">Save a copy</button>\n      </footer>\n    </div>\n  </div>\n</div>","title":"Scrollable content","lang":"html","isFullscreen":true}}>
      
    </Example>,
  'Medium': props => 
    <Example {...pageData} {...props} thumbnail={srcImportmedium} {...{"code":"<div aria-hidden=\"true\">Page content</div>\n<div class=\"pf-c-backdrop\">\n  <div class=\"pf-l-bullseye\">\n    <div\n      class=\"pf-c-modal-box pf-m-md\"\n      role=\"dialog\"\n      aria-modal=\"true\"\n      aria-labelledby=\"modal-md-title\"\n      aria-describedby=\"modal-md-description\"\n    >\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        aria-label=\"Close dialog\"\n      >\n        <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n      </button>\n      <header class=\"pf-c-modal-box__header\">\n        <h1\n          class=\"pf-c-modal-box__title\"\n          id=\"modal-md-title\"\n        >This is a long header title that will truncate because modal titles should be very short. Use the modal body to provide more info.</h1>\n      </header>\n      <div class=\"pf-c-modal-box__body\">\n        <p\n          id=\"modal-md-description\"\n        >The \"aria-describedby\" attribute can be applied to any text that adequately describes the modal's purpose. It does not have to be assigned to \".pf-c-modal-box__body\"</p>\n        <p>Form here</p>\n      </div>\n      <footer class=\"pf-c-modal-box__footer\">\n        <button class=\"pf-c-button pf-m-primary\" type=\"button\">Save</button>\n        <button class=\"pf-c-button pf-m-link\" type=\"button\">Cancel</button>\n      </footer>\n    </div>\n  </div>\n</div>","title":"Medium","lang":"html","isFullscreen":true}}>
      
    </Example>,
  'Large': props => 
    <Example {...pageData} {...props} thumbnail={srcImportlarge} {...{"code":"<div aria-hidden=\"true\">Page content</div>\n<div class=\"pf-c-backdrop\">\n  <div class=\"pf-l-bullseye\">\n    <div\n      class=\"pf-c-modal-box pf-m-lg\"\n      role=\"dialog\"\n      aria-modal=\"true\"\n      aria-labelledby=\"modal-lg-title\"\n      aria-describedby=\"modal-lg-description\"\n    >\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        aria-label=\"Close dialog\"\n      >\n        <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n      </button>\n      <header class=\"pf-c-modal-box__header\">\n        <h1\n          class=\"pf-c-modal-box__title\"\n          id=\"modal-lg-title\"\n        >This is a long header title that will truncate because modal titles should be very short. Use the modal body to provide more info.</h1>\n      </header>\n      <div class=\"pf-c-modal-box__body\">\n        <p\n          id=\"modal-lg-description\"\n        >The \"aria-describedby\" attribute can be applied to any text that adequately describes the modal's purpose. It does not have to be assigned to \".pf-c-modal-box__body\"</p>\n        <p>Form here</p>\n      </div>\n      <footer class=\"pf-c-modal-box__footer\">\n        <button class=\"pf-c-button pf-m-primary\" type=\"button\">Save</button>\n        <button class=\"pf-c-button pf-m-link\" type=\"button\">Cancel</button>\n      </footer>\n    </div>\n  </div>\n</div>","title":"Large","lang":"html","isFullscreen":true}}>
      
    </Example>,
  'Top aligned': props => 
    <Example {...pageData} {...props} thumbnail={srcImporttopaligned} {...{"code":"<div aria-hidden=\"true\">Page content</div>\n<div class=\"pf-c-backdrop\">\n  <div class=\"pf-l-bullseye\">\n    <div\n      class=\"pf-c-modal-box pf-m-sm pf-m-align-top\"\n      role=\"dialog\"\n      aria-modal=\"true\"\n      aria-labelledby=\"modal-top-aligned-title\"\n      aria-describedby=\"modal-top-aligned-description\"\n    >\n      <button\n        class=\"pf-c-button pf-m-plain\"\n        type=\"button\"\n        aria-label=\"Close dialog\"\n      >\n        <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n      </button>\n      <header class=\"pf-c-modal-box__header\">\n        <h1\n          class=\"pf-c-modal-box__title\"\n          id=\"modal-top-aligned-title\"\n        >Modal header</h1>\n      </header>\n      <div class=\"pf-c-modal-box__body\">\n        <p\n          id=\"modal-top-aligned-description\"\n        >The \"aria-describedby\" attribute can be applied to any text that adequately describes the modal's purpose. It does not have to be assigned to \".pf-c-modal-box__body\"</p>\n        <p>Form here</p>\n      </div>\n      <footer class=\"pf-c-modal-box__footer\">\n        <button class=\"pf-c-button pf-m-primary\" type=\"button\">Save</button>\n        <button class=\"pf-c-button pf-m-link\" type=\"button\">Cancel</button>\n      </footer>\n    </div>\n  </div>\n</div>","title":"Top aligned","lang":"html","isFullscreen":true}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"demos","size":"h2","className":"ws-title ws-h2"}}>
      {`Demos`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Basic"])}
    {React.createElement(pageData.examples["Scrollable content"])}
    {React.createElement(pageData.examples["Medium"])}
    {React.createElement(pageData.examples["Large"])}
    {React.createElement(pageData.examples["Top aligned"])}
  </React.Fragment>
);
Component.displayName = 'ComponentsModalHtmlDemosDocs';
Component.pageData = pageData;

export default Component;
