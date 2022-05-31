import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport2 from '../../content/get-started/./img/symbol-library.png';
import srcImport3 from '../../content/get-started/./img/layer-styles.png';
import '../../content/get-started/./get-started.css';
const pageData = {
  "id": "Design",
  "section": "get-started",
  "source": "pages-get-started",
  "slug": "/get-started/design",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/get-started/design.md",
  "title": "Design with PatternFly"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`Whether you are converting from a PatternFly 3 application or starting fresh with the latest and greatest PatternFly design system, this document is intended to help provide designers with information regarding resources and support available.`}
    </p>
    <AutoLinkHeader {...{"id":"getting-the-design-kit","size":"h2","className":"ws-title ws-h2"}}>
      {`Getting the design kit`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The PatternFly design kit was originally developed for `}
      <PatternflyThemeLink {...{"to":"#sketch-users"}}>
        {`Sketch users`}
      </PatternflyThemeLink>
      {`, but is now available for use through `}
      <PatternflyThemeLink {...{"to":"#using-other-design-tools"}}>
        {`any design tool`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <AutoLinkHeader {...{"id":"sketch-users","size":"h3","className":"ws-title ws-h3"}}>
      {`Sketch users`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"before-you-begin","size":"h4","className":"ws-title ws-h4"}}>
      {`Before you begin`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The design kit is a collection of Sketch assets that make it easy for designers to create hi-fi mockups that accurately represent PatternFly components and layouts. It works with Sketch libraries. To use it, you need to install `}
      <PatternflyThemeLink {...{"to":"https://www.sketch.com/"}}>
        {`Sketch version 68`}
      </PatternflyThemeLink>
      {` or above.`}
    </p>
    <AutoLinkHeader {...{"id":"download-the-font","size":"h4","className":"ws-title ws-h4"}}>
      {`Download the font`}
    </AutoLinkHeader>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        {`PatternFly currently uses Red Hat Text and Red Hat Display. To download these fonts, go to `}
        <PatternflyThemeLink {...{"to":"https://github.com/RedHatOfficial/RedHatFont"}}>
          {`https://github.com/RedHatOfficial/RedHatFont`}
        </PatternflyThemeLink>
        {` and download the whole repository. Then select all files in the "TTF" folder and double-click. This will install them onto your computer locally.`}
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"download-the-template-file","size":"h4","className":"ws-title ws-h4"}}>
      {`Download the template file`}
    </AutoLinkHeader>
    <ol {...{"start":2,"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        {`Access the `}
        <PatternflyThemeLink {...{"to":"https://www.sketch.com/s/729c2eee-e8b6-4fcd-8a79-f6faa8c30f89"}}>
          {`PatternFly template file`}
        </PatternflyThemeLink>
        {` on Sketch cloud.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Click `}
        <strong>
          {`Download Document`}
        </strong>
        {` to open the file. Then, click File → Save as template.`}
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"add-the-symbol-library","size":"h4","className":"ws-title ws-h4"}}>
      {`Add the symbol library`}
    </AutoLinkHeader>
    <ol {...{"start":4,"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        {`Access the `}
        <PatternflyThemeLink {...{"to":"https://www.sketch.com/s/2cf1063b-5283-4e0b-b8a6-cbb1ac07e29e"}}>
          {`PatternFly design library`}
        </PatternflyThemeLink>
        {` on Sketch cloud.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Click `}
        <strong>
          {`Add library to Sketch`}
        </strong>
        {` on the bottom right to add the library. You'll be prompted with a modal. Click `}
        <strong>
          {`Add library to Sketch`}
        </strong>
        {` again. Sketch will show you the library in your preferences window.`}
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"using-other-design-tools","size":"h3","className":"ws-title ws-h3"}}>
      {`Using other design tools`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"before-you-begin-0","size":"h4","className":"ws-title ws-h4"}}>
      {`Before you begin`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`For non-Sketch users, we have created a compatible version of the symbol library to fit with any design tool of choice. We recommend importing the SVG versions into your design tool. Download the SVG set in the patternfly-design-kit repo `}
      <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-design-kit/tree/master/Symbols-SVGs"}}>
        {`here`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <AutoLinkHeader {...{"id":"download-the-font-0","size":"h4","className":"ws-title ws-h4"}}>
      {`Download the font`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`PatternFly currently uses Red Hat Text and Red Hat Display. To download these fonts, go to `}
      <PatternflyThemeLink {...{"to":"https://github.com/RedHatOfficial/RedHatFont"}}>
        {`https://github.com/RedHatOfficial/RedHatFont`}
      </PatternflyThemeLink>
      {` and download the whole repository. Then select all files in the "TTF" folder and double-click. This will install them onto your computer locally.`}
    </p>
    <AutoLinkHeader {...{"id":"looking-for-the-overpass-design-kit","size":"h3","className":"ws-title ws-h3"}}>
      {`Looking for the Overpass design kit?`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`We still host the Patternfly 4 Overpass library and template files on Sketch Cloud, although support for updating these files ceased in October. This means that any updates that come along with PatternFly releases will not be mirrored in this kit.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`You are able to access them here:`}
    </p>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.sketch.com/s/65cbc171-3b00-4bc7-b7ff-18e9a5b35ba8"}}>
          {`Add the symbol library`}
        </PatternflyThemeLink>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Make sure you download the Overpass font at `}
            <PatternflyThemeLink {...{"to":"https://overpassfont.org/"}}>
              {`https://overpassfont.org/`}
            </PatternflyThemeLink>
            {` and select `}
            <strong>
              {`Desktop OTF files`}
            </strong>
            {`.`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"https://www.sketch.com/s/2987fea0-aaee-4e44-9974-5612c949aef0"}}>
          {`Download the template file`}
        </PatternflyThemeLink>
      </li>
    </ol>
    <p {...{"className":"ws-p"}}>
      {`If you’d like to avoid out-of-date designs, we recommend moving to our Red Hat font and using the design kit supplied there!`}
    </p>
    <AutoLinkHeader {...{"id":"whats-in-the-design-kit","size":"h2","className":"ws-title ws-h2"}}>
      {`What's in the design kit?`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"the-template-file","size":"h3","className":"ws-title ws-h3"}}>
      {`The template file`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The template file contains complex components and demos like charts and forms that make it faster and easier for you to add common design patterns to your wireframes. To view template examples click `}
      <PatternflyThemeLink {...{"to":"/components/about-modal/html-demos"}}>
        {`here`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`The contents of the template file are organized alphabetically by component or demo name. If you want to use any of the artboards in the template file to create custom designs, you should follow these rules:`}
    </p>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        {`Unhide “padding” group (this group contains all of the spacers we use to create the design)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Edit the design as desired using the spacers as your guide`}
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"the-symbol-library","size":"h3","className":"ws-title ws-h3"}}>
      {`The symbol library`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The PatternFly symbol library contains individual components like buttons, alerts, and badges, that can be combined in any number of ways to solve common design problems. If you’re unfamiliar with Sketch symbols, it might be helpful to skim `}
      <PatternflyThemeLink {...{"to":"https://www.sketch.com/docs/libraries/library-symbols"}}>
        {`this guide`}
      </PatternflyThemeLink>
      {` before you get started.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`You can use any symbol offered in the Sketch symbol library to create your design. If you have any questions or need any clarification, you can post to the `}
      <PatternflyThemeLink {...{"to":"https://forum.patternfly.org/"}}>
        {`PatternFly forum`}
      </PatternflyThemeLink>
      {`. If you have any feedback about certain features or encounter a bug, you can file an issue against `}
      <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-design-kit/issues"}}>
        {`patternfly-design-kit`}
      </PatternflyThemeLink>
      {` on GitHub.`}
    </p>
    <AutoLinkHeader {...{"id":"navigating-the-symbol-library","size":"h4","className":"ws-title ws-h4"}}>
      {`Navigating the symbol library`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`There are two kinds of symbols - library symbols and document symbols. Library symbols are available in any Sketch document, while document symbols are specific to the document in which they are found.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`From the top toolbar in Sketch, select Insert → Symbols → Patternfly 4 to add symbols onto your page.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`PatternFly symbols are designed to be as flexible and adaptable as possible. As such, designers should avoid detaching symbols from the library. However, there are rare instances where this may be necessary. Just know that once a symbol is detached, that symbol will no longer automatically update with new releases.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport2} width={srcImport2.width} height={srcImport2.height} {...{"alt":"Symbol-library","className":"ws-img"}}>
      </img>
    </p>
    <AutoLinkHeader {...{"id":"using-the-design-kit","size":"h2","className":"ws-title ws-h2"}}>
      {`Using the design kit`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`It’s important to understand some specific aspects about the design kit and the assets contained inside to make the most of the design system.`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"#spacers"}}>
          {`Spacers`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"#layer-styles"}}>
          {`Layers styles`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"#text-styles"}}>
          {`Text styles`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"sketch-design-training","size":"h3","className":"ws-title ws-h3"}}>
      {`Sketch design training`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`There’s a lot to learn when it comes to making smart use of the Sketch template and library. Whether you are new to PatternFly, new to Sketch, or even an experienced Sketch user, just looking to see how other designers use the application, the Sketch design training is a great place to start when using the design kit.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <PatternflyThemeLink {...{"to":"https://patternflyt-training.thinkific.com/courses/pf-sketch-e-training"}}>
        <strong>
          {`Start Sketch design training`}
        </strong>
      </PatternflyThemeLink>
      {` `}
            <i className="ws-content-blueArrow fas fa-arrow-right pf-u-mx-sm"/>
    </p>
    <AutoLinkHeader {...{"id":"spacers","size":"h3","className":"ws-title ws-h3"}}>
      {`Spacers`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The layout for all visual elements in Patternfly is determined by spacers. The spacers are used as padding between elements to ensure consistent layout and placement of components into a design that adhere to PatternFly guidelines. All symbols in the symbol library and templates have been made using spacers which are built-in to ensure correct use of elements.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`The `}
      <PatternflyThemeLink {...{"to":"https://www.sketch.com/s/729c2eee-e8b6-4fcd-8a79-f6faa8c30f89"}}>
        {`template library`}
      </PatternflyThemeLink>
      {` also contains examples of spacer use to clarify where elements should be placed within a given page or design.  These templates have been created in a way that reduces a user’s need to think about spacers. An example of a Login form template can be seen here with different sized spacers - demonstrated by their different colors - used to separate each symbol/component within the layout.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`To see more information about spacers and their use please click `}
      <PatternflyThemeLink {...{"to":"/guidelines/spacers"}}>
        {`here`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <AutoLinkHeader {...{"id":"layer-styles","size":"h3","className":"ws-title ws-h3"}}>
      {`Layer styles`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Symbols in the symbol are organized by component; after selecting a component, you’ll see the variations and states of that component.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`For some components, you will have the option to customize them to your need by overriding certain layer styles and text labels from the sidebar on the right.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Layer styles are color selections for symbols in Sketch.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport3} width={srcImport3.width} height={srcImport3.height} {...{"alt":"layer-styles","className":"ws-img"}}>
      </img>
    </p>
    <p {...{"className":"ws-p"}}>
      {`Colors in PatternFly are carefully considered, and custom layer styles are discouraged. There are specific color options to choose from for backgrounds, borders, icons and states, as well as an expansive color library for other elements that do not necessarily fit into a certain category.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Note that there is a difference between regular color options and chart color fill options. When changing a color in a chart, you should only use the colors in the chart fill “dropdown”, which includes fills for donut charts, line charts and regular bar charts. When changing the color of other elements, you should use the general color palette if the component does not fit into the other offered category options.`}
    </p>
    <AutoLinkHeader {...{"id":"text-styles","size":"h3","className":"ws-title ws-h3"}}>
      {`Text styles`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Currently, all PatternFly text styles use Red Hat Text and Red Hat Display fonts. If you have not done so already, make sure to download according to the instructions `}
      <PatternflyThemeLink {...{"to":"#download-the-font"}}>
        {`above`}
      </PatternflyThemeLink>
      {` before starting your designs.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`When inserting text into your design, always assign it a text style by selecting the text item, followed by selecting a text style from the appearance menu on the right toolbar.`}
    </p>
    <AutoLinkHeader {...{"id":"designing-with-patternfly","size":"h2","className":"ws-title ws-h2"}}>
      {`Designing with PatternFly`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`PatternFly offers a variety of resources to help you make the most of the design system, including design guidelines for style, content, and component usage and behavior. You can use these assets in combination with the design kit to create consistent and usable product experiences.`}
    </p>
    <AutoLinkHeader {...{"id":"style-guidelines","size":"h3","className":"ws-title ws-h3"}}>
      {`Style guidelines`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`What typography should you be using? What about colors? Spacing? Check out styles to learn everything you need to know about our foundational design elements.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <PatternflyThemeLink {...{"to":"/guidelines/colors"}}>
        <strong>
          {`View styles`}
        </strong>
      </PatternflyThemeLink>
      {` `}
            <i className="ws-content-blueArrow fas fa-arrow-right pf-u-mx-sm"/>
    </p>
    <AutoLinkHeader {...{"id":"get-familiar-with-usage-and-behavior-guidelines.","size":"h3","className":"ws-title ws-h3"}}>
      {`Get familiar with usage and behavior guidelines.`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Should you use a wizard or a form to solve this problem? How do you write a good button label? Which navigation makes the most sense? Check out our design guidelines to choose and use the right components for your use case.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <PatternflyThemeLink {...{"to":"/components/about-modal/design-guidelines"}}>
        <strong>
          {`Usage and behavior guidelines`}
        </strong>
      </PatternflyThemeLink>
      {` `}
            <i className="ws-content-blueArrow fas fa-arrow-right pf-u-mx-sm"/>
    </p>
    <AutoLinkHeader {...{"id":"content-guidelines","size":"h3","className":"ws-title ws-h3"}}>
      {`Content guidelines`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`How do you write great microcopy and text for your user interface? Read our content guidelines for general principles, guidance on voice, and a style guide to help you with everything from capitalization to date and time formats.
View content guidelines`}
    </p>
    <p {...{"className":"ws-p"}}>
      <PatternflyThemeLink {...{"to":"/ux-writing/about"}}>
        <strong>
          {`View content guidelines`}
        </strong>
      </PatternflyThemeLink>
      {` `}
            <i className="ws-content-blueArrow fas fa-arrow-right pf-u-mx-sm"/>
    </p>
    <AutoLinkHeader {...{"id":"start-building-with-components.","size":"h3","className":"ws-title ws-h3"}}>
      {`Start building with components.`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`What does a toolbar look like? What about a filter chip? Components are the building blocks of the design system. Check out individual component pages to view examples, understand states and behaviors, and check out the code samples (if you’re into that kind of thing).`}
    </p>
    <p {...{"className":"ws-p"}}>
      <PatternflyThemeLink {...{"to":"/components/about-modal"}}>
        <strong>
          {`View components`}
        </strong>
      </PatternflyThemeLink>
      {` `}
            <i className="ws-content-blueArrow fas fa-arrow-right pf-u-mx-sm"/>
    </p>
    <AutoLinkHeader {...{"id":"still-feeling-unsure","size":"h3","className":"ws-title ws-h3"}}>
      {`Still feeling unsure?`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`See all the pieces working together with demos.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <PatternflyThemeLink {...{"to":"/demos/primary-detail"}}>
        <strong>
          {`View demos`}
        </strong>
      </PatternflyThemeLink>
      {` `}
            <i className="ws-content-blueArrow fas fa-arrow-right pf-u-mx-sm"/>
    </p>
    <AutoLinkHeader {...{"id":"staying-up-to-date","size":"h2","className":"ws-title ws-h2"}}>
      {`Staying up to date`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Adjustments and bug fixes are made to the kit on a regular basis. When we make a change to any of the libraries, you will be notified via a purple pop-up in the top right corner of the Sketch window that says “Shared Library Update Available”. To update, simply click on the pop-up and followed by “download” to update your library.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`We recommend that you keep your kit as up to date as possible. Once a change is accepted, you will not be able to revert to the previous version.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Please note that the Patternfly template will NOT be automatically updated as the symbol library is. Every time this template file is updated, you will need to re-download and re-save this as a template. We have added `}
      <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-design-kit/blob/master/PatternFly%20release%20notes.md"}}>
        {`release notes`}
      </PatternflyThemeLink>
      {` to the `}
      <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-design-kit/"}}>
        {`design-kit-repo`}
      </PatternflyThemeLink>
      {` that document additions and edits to the design kit. This is a good place to start to review what has been added to the template file.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Did you use the old versions of the symbols that were updated in files already? No problem -  you will receive another notification in the top right of that specific Sketch file that will allow you to update them.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'GetStartedDesignDocs';
Component.pageData = pageData;

export default Component;
